"use client"

import { useState } from "react"
import Link from "next/link"
import { usePrivy } from "@privy-io/react-auth"
import { Menu, X } from "lucide-react"
import { GlassButton } from "./ui/glass-button"
import { AuthModal } from "./auth-modal"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { login, authenticated, user } = usePrivy()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleAuth = () => {
    if (authenticated) {

      window.location.href = "/profile"
    } else {
      login()
    }
  }

  return (
    <nav className="glass-navbar py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-md"></div>
              <div className="absolute inset-[2px] bg-blue-900 rounded-[4px] flex items-center justify-center">
                <span className="text-white font-bold">❤️</span>
              </div>
            </div>
            <span className="text-xl font-bold">Lovable</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="hover:text-blue-300 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-blue-300 transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="hover:text-blue-300 transition-colors">
              Docs
            </Link>
            <div className="flex items-center space-x-2">
              {authenticated ? (
                <Link href="/profile">
                  <GlassButton variant="secondary">Profile</GlassButton>
                </Link>
              ) : (
                <>
                  <GlassButton variant="outline" onClick={handleAuth}>
                    Sign in
                  </GlassButton>
                  <GlassButton onClick={handleAuth}>Sign up</GlassButton>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {authenticated && (
              <Link href="/dashboard" className="mr-4">
                <GlassButton variant="secondary" size="sm">
                  Dashboard
                </GlassButton>
              </Link>
            )}
            <button onClick={toggleMenu} className="p-2 glass-button">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass mt-4 p-4 rounded-xl">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="hover:text-blue-300 transition-colors py-2">
                Features
              </Link>
              <Link href="/pricing" className="hover:text-blue-300 transition-colors py-2">
                Pricing
              </Link>
              <Link href="/docs" className="hover:text-blue-300 transition-colors py-2">
                Docs
              </Link>
              {!authenticated && (
                <div className="flex flex-col space-y-2 pt-2">
                  <GlassButton variant="outline" onClick={handleAuth}>
                    Sign in
                  </GlassButton>
                  <GlassButton onClick={handleAuth}>Sign up</GlassButton>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </nav>
  )
}
