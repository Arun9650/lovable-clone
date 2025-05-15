"use client"

import { useState, FormEvent } from "react" // Added FormEvent
import { GlassInput } from "./ui/glass-input"
import { GlassCard } from "./ui/glass-card"
import { Paperclip } from "lucide-react"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [prompt, setPrompt] = useState("")
  const { authenticated } = usePrivy();
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("🚀 ~ handleSubmit ~ prompt:", prompt);
    if (!authenticated) {
      alert("Please login to use Lovable");
      return;
    }

    router.push(`/code`); 
  };

  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build something{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
            Lovable
          </span>
        </h1>
        <p className="text-xl mb-12 text-white/80">Idea to app in seconds, with your personal full stack engineer</p>

        {/* Changed action to onSubmit */}
        <form onSubmit={handleSubmit}>
          <GlassCard className="mb-8">
            <div className="relative">
              <GlassInput
                placeholder="Ask Lovable to create"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="pr-12"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/20"
              >
                <Paperclip size={20} />
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
            
              <button 
                type="button"                className="flex items-center space-x-2 text-sm text-white/70 hover:text-white/90"
              >
                <Paperclip size={16} />
                <span>Attach</span>
              </button>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <span>Public</span>
                <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center">?</span>
              </div>
            </div>
          </GlassCard>
        </form>
      </div>
    </section>
  );
}