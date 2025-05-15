import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Lovable",
      features: ["5 projects", "Basic AI capabilities", "Community support", "1GB storage", "Shared subdomain"],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For individuals and small teams",
      features: [
        "Unlimited projects",
        "Advanced AI capabilities",
        "Priority support",
        "10GB storage",
        "Custom domain",
        "Remove Lovable branding",
        "API access",
      ],
      buttonText: "Subscribe",
      buttonVariant: "primary" as const,
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Unlimited storage",
        "SSO authentication",
        "Custom integrations",
        "SLA guarantees",
        "On-premise option",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary" as const,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/80 mb-12">
              Choose the plan that's right for you and start building something lovable today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <GlassCard
                  key={index}
                  className={`flex flex-col ${plan.highlighted ? "border-blue-500 border-2" : ""}`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-white/70">{plan.period}</span>}
                    </div>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton variant={plan.buttonVariant} className="mt-auto w-full">
                    {plan.buttonText}
                  </GlassButton>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-white/80">Have questions? We've got answers.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How does billing work?",
                    answer:
                      "We bill monthly or annually, with a discount for annual plans. You can upgrade, downgrade, or cancel at any time.",
                  },
                  {
                    question: "Can I try Lovable before committing?",
                    answer: "Yes! Our free plan lets you explore Lovable's core features without any time limit.",
                  },
                  {
                    question: "Do you offer refunds?",
                    answer: "We offer a 14-day money-back guarantee for all paid plans.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, and crypto payments.",
                  },
                  {
                    question: "Do you offer discounts for startups or non-profits?",
                    answer:
                      "Yes, we offer special pricing for eligible startups, non-profits, and educational institutions. Contact our sales team for details.",
                  },
                ].map((faq, index) => (
                  <GlassCard key={index}>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-white/70">{faq.answer}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
