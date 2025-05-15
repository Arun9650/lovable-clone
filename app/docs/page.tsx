import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"

export default function Docs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="hidden md:block w-64 p-4 glass">
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-medium text-white/70 mb-2">Getting Started</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block p-2 rounded-md bg-white/10 text-white">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Quick Start
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Installation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-white/70 mb-2">Core Concepts</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    AI Prompts
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Deployment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-white/70 mb-2">Advanced</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Custom Domains
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white">
                    Web3 Integration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Introduction</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                Welcome to Lovable, the AI-powered platform that helps you build web applications without writing code.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">What is Lovable?</h2>
              <p className="mb-4">
                Lovable is a platform that allows you to build web applications using natural language. Simply describe
                what you want to build, and Lovable will generate the code for you.
              </p>

              <GlassCard className="my-8 p-4 border-l-4 border-blue-500">
                <p className="text-white/90">
                  <strong>Note:</strong> Lovable is currently in beta. We're constantly adding new features and
                  improving the platform.
                </p>
              </GlassCard>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Build full-stack applications with natural language</li>
                <li>Generate images and assets with AI</li>
                <li>Deploy your applications with one click</li>
                <li>Integrate with Web3 technologies</li>
                <li>Collaborate with team members in real-time</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
              <p className="mb-6">
                To get started with Lovable, you'll need to create an account. Once you've created an account, you can
                create your first project.
              </p>

              <div className="flex space-x-4 mt-8">
                <GlassButton>Next: Quick Start</GlassButton>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
