import { CheckCircle, Search, Users, Trophy } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Find Hackathons",
      description: "Browse through upcoming hackathons and find the ones that match your interests and schedule.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Build Your Team",
      description:
        "Connect with talented individuals based on skills, experience, and interests to form your dream team.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Collaborate",
      description: "Use our built-in tools to plan, communicate, and work together effectively during the hackathon.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Win Together",
      description: "Showcase your project, get feedback, and celebrate your achievements as a team.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our platform makes it easy to find the perfect team and participate in hackathons.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">{step.icon}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
