"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { Navbar } from "@/components/navbar"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { useAuth } from "@/providers/auth-provider"

export default function Dashboard() {
  const router = useRouter()
  const { isAuthenticated, isLoading, user, wallets } = useAuth()
  const { logout } = usePrivy()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard>
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-sm">Display Name</p>
                <p>{user.email?.address || "Not set"}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Email</p>
                <p>{user.email?.address || "Not connected"}</p>
              </div>
              <div>
                <p className="text-white/70 text-sm">Login Method</p>
                <p className="capitalize">
                  {user.email ? "Email" : user.google ? "Google" : user.twitter ? "Twitter" : "Wallet"}
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-xl font-semibold mb-4">Wallet Information</h2>
            {wallets.length > 0 ? (
              <div className="space-y-4">
                {wallets.map((wallet) => (
                  <div key={wallet.address} className="p-4 glass-card">
                    <p className="text-white/70 text-sm">Wallet Address</p>
                    <p className="font-mono text-sm truncate">{wallet.address}</p>
                    <p className="text-white/70 text-sm mt-2">Type</p>
                    <p className="capitalize">{wallet.walletClientType}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/70">No wallets connected</p>
            )}
          </GlassCard>
        </div>

        <div className="mt-8 flex justify-end">
          <GlassButton variant="outline" onClick={() => logout()}>
            Sign Out
          </GlassButton>
        </div>
      </main>
    </div>
  )
}
