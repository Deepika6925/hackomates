import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Users } from "lucide-react"

export function FeaturedHackathons() {
  const hackathons = [
    {
      id: 1,
      title: "TechCrunch Disrupt Hackathon",
      description: "Build innovative solutions for real-world problems in 48 hours.",
      date: "Oct 15-17, 2023",
      location: "San Francisco, CA",
      teamSize: "2-5",
      tags: ["AI", "Web3", "Climate"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "HackMIT",
      description: "MIT's annual hackathon bringing together the best hackers worldwide.",
      date: "Sep 18-20, 2023",
      location: "Cambridge, MA",
      teamSize: "1-4",
      tags: ["Education", "Health", "Fintech"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Global AI Hackathon",
      description: "Create AI-powered solutions to address global challenges.",
      date: "Nov 5-7, 2023",
      location: "Virtual",
      teamSize: "3-6",
      tags: ["AI", "ML", "Data Science"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Hackathons</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover upcoming hackathons and start building your dream team today.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.id} className="overflow-hidden">
              <img
                src={hackathon.image || "/placeholder.svg"}
                alt={hackathon.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{hackathon.title}</CardTitle>
                <CardDescription>{hackathon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{hackathon.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{hackathon.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Team Size: {hackathon.teamSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {hackathon.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/hackathons/${hackathon.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/hackathons">View All Hackathons</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
