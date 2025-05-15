"use client"

import { createContext, useContext, type ReactNode } from "react"
import { usePrivy, type User } from "@privy-io/react-auth"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, authenticated,  ready } = usePrivy()

  const value = {
    user: authenticated ? user : null,
    isAuthenticated: authenticated,
    isLoading: !ready,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
