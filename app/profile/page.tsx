"use client"

import { useEffect, useState } from "react"
import { usePrivy } from "@privy-io/react-auth"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { GlassInput } from "@/components/ui/glass-input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/glass-tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/glass-dropdown"
import { ChevronDown, Copy, Check, Wallet } from "lucide-react"

export default function Profile() {
  const {  user,authenticated, } = usePrivy()
  console.log("🚀 ~ Profile ~ user:", user)

  const { logout } = usePrivy() 
  const [copied, setCopied] = useState(false)
  const [displayName, setDisplayName] = useState("")



  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!authenticated || !user) {
    return null
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Display Name</label>
                    <GlassInput
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="max-w-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="text-white/90">{user.email?.address || "Not connected"}</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Login Method</label>
                    <div className="text-white/90 capitalize">
                      {user.email ? "Email" : user.google ? "Google" : user.twitter ? "Twitter" : "Wallet"}
                    </div>
                  </div>

                  <div className="pt-4">
                    <GlassButton>Save Changes</GlassButton>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>

            <TabsContent value="wallets">
              <GlassCard>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Your Wallets</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <GlassButton variant="secondary" className="flex items-center gap-2">
                        <Wallet size={16} />
                        <span>Connect Wallet</span>
                        <ChevronDown size={16} />
                      </GlassButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>MetaMask</DropdownMenuItem>
                      <DropdownMenuItem>WalletConnect</DropdownMenuItem>
                      <DropdownMenuItem>Coinbase Wallet</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {user.length > 0 ? (
                  <div className="space-y-4">
                    {wallets.map((wallet) => (
                      <div key={wallet.address} className="p-4 glass-card">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white/70 text-sm">Wallet Address</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="font-mono text-sm truncate max-w-[240px] md:max-w-md">{wallet.address}</p>
                              <button
                                onClick={() => copyToClipboard(wallet.address)}
                                className="p-1 rounded-full hover:bg-white/20"
                              >
                                {copied ? <Check size={16} /> : <Copy size={16} />}
                              </button>
                            </div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-blue-600/30 text-blue-200">
                            {wallet.walletClientType}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-white/70 mb-4">No wallets connected yet</p>
                    <GlassButton variant="secondary">Connect Your First Wallet</GlassButton>
                  </div>
                )}
              </GlassCard>
            </TabsContent>

            <TabsContent value="settings">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Notifications</h3>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="email-notifications" className="rounded" />
                      <label htmlFor="email-notifications">Receive email notifications</label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Privacy</h3>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="public-profile" className="rounded" />
                      <label htmlFor="public-profile">Make my profile public</label>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg font-medium text-red-400 mb-2">Danger Zone</h3>
                    <div className="space-y-4">
                      <GlassButton variant="outline" onClick={() => logout()}>
                        Sign Out
                      </GlassButton>
                      <GlassButton variant="outline" className="text-red-400 hover:text-red-300">
                        Delete Account
                      </GlassButton>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
