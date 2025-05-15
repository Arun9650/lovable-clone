import { GlassCard } from "./ui/glass-card"

export function CommunitySection() {
  const communityProjects = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: i,
      title: `Project ${i + 1}`,
      description: "A community project built with Lovable",
      image: `/placeholder.svg?height=200&width=300`,
    }))

  return (
    <section className="py-12 mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">From the Community</h2>
        <a href="#" className="text-blue-300 hover:text-blue-200">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityProjects.map((project) => (
          <GlassCard key={project.id} className="flex flex-col h-full">
            <div className="h-40 bg-white/5 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-white/70 text-sm">{project.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
