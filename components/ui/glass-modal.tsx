"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { X } from "lucide-react"

interface GlassModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export function GlassModal({ isOpen, onClose, title, children, className }: GlassModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={cn("glass-card max-w-md w-full max-h-[90vh] overflow-auto", className)}>
        <div className="flex justify-between items-center mb-4">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
