import { GlassButton } from "./ui/glass-button"
import { ImageIcon, Code, BarChart3, Users } from "lucide-react"

export function FeatureCards() {
  const features = [
    {
      icon: <Users size={20} />,
      label: "Social media feed",
    },
    {
      icon: <ImageIcon size={20} />,
      label: "AI image generator",
    },
    {
      icon: <Code size={20} />,
      label: "Developer portfolio",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Bill splitter",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-20">
      {features.map((feature, index) => (
        <GlassButton key={index} variant="secondary" className="flex items-center gap-2 py-3 px-4">
          {feature.icon}
          <span>{feature.label}</span>
        </GlassButton>
      ))}
    </div>
  )
}
