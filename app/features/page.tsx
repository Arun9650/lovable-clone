import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Code, ImageIcon, Users, BarChart3, Zap, Shield, Globe, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Code size={24} />,
      title: "AI-Powered Development",
      description: "Build full-stack applications with natural language prompts. No coding required.",
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Image Generation",
      description: "Create stunning visuals for your projects with our AI image generator.",
    },
    {
      icon: <Users size={24} />,
      title: "Social Infrastructure",
      description: "Build social features into your app with just a few prompts.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics Dashboard",
      description: "Track your app's performance with built-in analytics.",
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast Deployment",
      description: "Deploy your app to production in seconds with one click.",
    },
    {
      icon: <Shield size={24} />,
      title: "Web3 Integration",
      description: "Seamlessly integrate blockchain technology into your applications.",
    },
    {
      icon: <Globe size={24} />,
      title: "Global CDN",
      description: "Your app is automatically deployed to our global CDN for fast access worldwide.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Custom Domains",
      description: "Connect your own domain to your Lovable app with ease.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Features</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/80 mb-12">
              Everything you need to build amazing applications without writing a single line of code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <GlassCard key={index} className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </GlassCard>
              ))}
            </div>

            <GlassButton size="lg">Get Started</GlassButton>
          </div>
        </section>

        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-white/80">Building with Lovable is as simple as describing what you want to create.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard>
                <div className="text-3xl font-bold text-blue-400 mb-4">01</div>
                <h3 className="text-xl font-semibold mb-2">Describe Your Idea</h3>
                <p className="text-white/70">Tell Lovable what you want to build using natural language.</p>
              </GlassCard>

              <GlassCard>
                <div className="text-3xl font-bold text-blue-400 mb-4">02</div>
                <h3 className="text-xl font-semibold mb-2">Review & Refine</h3>
                <p className="text-white/70">Lovable generates your app and lets you make adjustments.</p>
              </GlassCard>

              <GlassCard>
                <div className="text-3xl font-bold text-blue-400 mb-4">03</div>
                <h3 className="text-xl font-semibold mb-2">Deploy & Share</h3>
                <p className="text-white/70">
                  Deploy your app to production with one click and share it with the world.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
