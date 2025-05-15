import { cn } from "@/lib/utils"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function GlassButton({ children, variant = "primary", size = "md", className, ...props }: GlassButtonProps) {
  return (
    <button
      className={cn(
        "glass-button font-medium",
        variant === "primary" && "bg-blue-600/80 hover:bg-blue-500/80 text-white",
        variant === "secondary" && "bg-white/10 hover:bg-white/20 text-white",
        variant === "outline" && "bg-transparent border border-white/30 hover:bg-white/10 text-white",
        size === "sm" && "text-sm px-3 py-1",
        size === "md" && "px-4 py-2",
        size === "lg" && "text-lg px-6 py-3",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
