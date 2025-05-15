"use client"

import { usePrivy } from "@privy-io/react-auth"
import { GlassModal } from "./ui/glass-modal"
import { GlassButton } from "./ui/glass-button"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login } = usePrivy()

  const handleLogin = () => {
    login()
    onClose()
  }

  return (
    <GlassModal isOpen={isOpen} onClose={onClose} title="Sign In / Sign Up">
      <div className="space-y-4">
        <p className="text-white/80 mb-6">Connect with your preferred method to access your account.</p>

        <GlassButton onClick={handleLogin} className="w-full justify-center">
          Continue with Privy
        </GlassButton>
      </div>
    </GlassModal>
  )
}
