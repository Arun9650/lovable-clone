import { cn } from "@/lib/utils"
import type { InputHTMLAttributes } from "react"

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function GlassInput({ className, ...props }: GlassInputProps) {
  return <input className={cn("glass-input w-full", className)} {...props} />
}
