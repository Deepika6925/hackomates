import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, MapPin, Users, Search, Filter } from "lucide-react"

export default function HackathonsPage() {
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
      registrationOpen: true,
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
      registrationOpen: true,
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
      registrationOpen: true,
    },
    {
      id: 4,
      title: "Blockchain Innovation Challenge",
      description: "Develop decentralized applications that solve real-world problems.",
      date: "Dec 10-12, 2023",
      location: "New York, NY",
      teamSize: "2-4",
      tags: ["Blockchain", "Web3", "DeFi"],
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
    },
    {
      id: 5,
      title: "Health Tech Hackathon",
      description: "Create innovative solutions to improve healthcare delivery and patient outcomes.",
      date: "Jan 20-22, 2024",
      location: "Boston, MA",
      teamSize: "3-5",
      tags: ["Health", "IoT", "AI"],
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
    },
    {
      id: 6,
      title: "Climate Action Hackathon",
      description: "Build technology solutions to address climate change and sustainability challenges.",
      date: "Feb 15-17, 2024",
      location: "Virtual",
      teamSize: "2-6",
      tags: ["Climate", "Sustainability", "IoT"],
      image: "/placeholder.svg?height=200&width=300",
      registrationOpen: false,
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hackathons</h1>
        <p className="text-muted-foreground">Discover upcoming hackathons and start building your dream team.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search hackathons..." className="pl-8" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <h3 className="font-medium">Filters</h3>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Location</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any location</SelectItem>
                  <SelectItem value="in-person">In-person only</SelectItem>
                  <SelectItem value="virtual">Virtual only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Date</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any time</SelectItem>
                  <SelectItem value="this-month">This month</SelectItem>
                  <SelectItem value="next-month">Next month</SelectItem>
                  <SelectItem value="next-3-months">Next 3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Category</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  <SelectItem value="ai">AI/ML</SelectItem>
                  <SelectItem value="web3">Web3/Blockchain</SelectItem>
                  <SelectItem value="health">Healthcare</SelectItem>
                  <SelectItem value="climate">Climate</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Registration</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All hackathons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All hackathons</SelectItem>
                  <SelectItem value="open">Registration open</SelectItem>
                  <SelectItem value="closed">Registration closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {hackathons.map((hackathon) => (
              <Card key={hackathon.id} className="overflow-hidden">
                <img
                  src={hackathon.image || "/placeholder.svg"}
                  alt={hackathon.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                    {hackathon.registrationOpen ? (
                      <Badge variant="default">Registration Open</Badge>
                    ) : (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
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
        </div>
      </div>
    </div>
  )
}
