import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { PrivyProvider } from "@privy-io/react-auth"
import { AuthProvider } from "@/providers/auth-provider"
import Providers from "@/providers/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lovable - Build something lovable",
  description: "Idea to app in seconds, with your personal full stack engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <PrivyProvider
          appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || "cmalfz9g7003tl70mlavurlvn"}


            clientId="client-WY6LHzKKnVbqCKMwbL79wS4ddrqAgSjacEux6xSnKtNxA"
          config={{
            loginMethods: ["email", "google", "twitter", "wallet"],
            appearance: {
              theme: "dark",
              accentColor: "#3b82f6",
              logo: "/logo.svg",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
          }}
        > */}
          {/* <AuthProvider> */}
          <Providers>
            <div className="min-h-screen bg-gradient-radial from-slate-900 via-neutral-900 to-stone-950 bg-fixed">
              {children}
            </div>
          </Providers>
          {/* </AuthProvider> */}
        {/* </PrivyProvider> */}
      </body>
    </html>
  )
}
