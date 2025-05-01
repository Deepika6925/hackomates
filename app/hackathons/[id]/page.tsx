import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, MapPin, Users, Clock, Award, Globe, Building, ChevronLeft } from "lucide-react"

export default function HackathonDetailPage({ params }: { params: { id: string } }) {
  // This would normally be fetched from an API
  const hackathon = {
    id: params.id,
    title: "TechCrunch Disrupt Hackathon",
    description:
      "Build innovative solutions for real-world problems in 48 hours. Join hundreds of developers, designers, and entrepreneurs to create groundbreaking projects and compete for amazing prizes.",
    longDescription:
      "The TechCrunch Disrupt Hackathon is one of the most anticipated tech events of the year. Participants will have 48 hours to build a new and innovative product from scratch. Teams will present their projects to a panel of judges from leading tech companies and venture capital firms. This is your chance to showcase your skills, network with industry professionals, and potentially win funding for your idea.",
    date: "Oct 15-17, 2023",
    location: "Moscone Center, San Francisco, CA",
    teamSize: "2-5 members",
    registrationDeadline: "Oct 1, 2023",
    prizes: [
      "1st Place: $20,000 + TechCrunch feature",
      "2nd Place: $10,000",
      "3rd Place: $5,000",
      "Best AI Implementation: $3,000",
      "Best UI/UX: $3,000",
    ],
    sponsors: [
      { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=40", initials: "TC" },
      { name: "Google", logo: "/placeholder.svg?height=40&width=40", initials: "G" },
      { name: "Microsoft", logo: "/placeholder.svg?height=40&width=40", initials: "MS" },
      { name: "AWS", logo: "/placeholder.svg?height=40&width=40", initials: "AWS" },
    ],
    tags: ["AI", "Web3", "Climate", "Mobile", "IoT"],
    image: "/placeholder.svg?height=400&width=800",
    registrationOpen: true,
    website: "https://techcrunch.com/events/disrupt-hackathon",
    organizer: "TechCrunch",
    teams: [
      {
        id: 1,
        name: "CodeCrafters",
        members: 3,
        lookingFor: ["UI/UX Designer", "Backend Developer"],
        description: "Building an AI-powered climate monitoring platform.",
      },
      {
        id: 2,
        name: "BlockBuilders",
        members: 2,
        lookingFor: ["Blockchain Developer", "Frontend Developer"],
        description: "Creating a decentralized marketplace for carbon credits.",
      },
      {
        id: 3,
        name: "DataDreamers",
        members: 4,
        lookingFor: ["Data Scientist"],
        description: "Developing a predictive analytics tool for renewable energy optimization.",
      },
    ],
  }

  return (
    <div className="container py-12">
      <Link href="/hackathons" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Hackathons
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <img
              src={hackathon.image || "/placeholder.svg"}
              alt={hackathon.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {hackathon.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
              {hackathon.registrationOpen && (
                <Badge variant="default" className="ml-auto">
                  Registration Open
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{hackathon.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-muted-foreground" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>{hackathon.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>Team Size: {hackathon.teamSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>Registration Deadline: {hackathon.registrationDeadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <span>Organizer: {hackathon.organizer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <a
                  href={hackathon.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="prizes">Prizes</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-4 mt-6">
              <p>{hackathon.longDescription}</p>
              <h3 className="text-xl font-bold mt-6">Sponsors</h3>
              <div className="flex flex-wrap gap-4">
                {hackathon.sponsors.map((sponsor) => (
                  <div key={sponsor.name} className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={sponsor.logo} alt={sponsor.name} />
                      <AvatarFallback>{sponsor.initials}</AvatarFallback>
                    </Avatar>
                    <span>{sponsor.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="prizes" className="space-y-4 mt-6">
              <h3 className="text-xl font-bold">Prizes & Awards</h3>
              <ul className="space-y-2">
                {hackathon.prizes.map((prize, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <span>{prize}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="teams" className="space-y-4 mt-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Participating Teams</h3>
                <Button asChild>
                  <Link href={`/hackathons/${hackathon.id}/create-team`}>Create Team</Link>
                </Button>
              </div>
              <div className="grid gap-4">
                {hackathon.teams.map((team) => (
                  <Card key={team.id}>
                    <CardHeader>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>{team.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Current Members: {team.members}</p>
                          <div className="mt-2">
                            <p className="text-sm font-medium">Looking for:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {team.lookingFor.map((role) => (
                                <Badge key={role} variant="outline">
                                  {role}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={`/teams/${team.id}`}>View Team</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Join This Hackathon</CardTitle>
              <CardDescription>Register now to participate in this exciting event!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">You have two options:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span>Create your own team and recruit members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span>Join an existing team looking for your skills</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href={`/hackathons/${hackathon.id}/register`}>Register for Hackathon</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/hackathons/${hackathon.id}/teams`}>Browse Teams</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Teammates?</CardTitle>
              <CardDescription>Find the perfect teammates for your hackathon project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our matching algorithm helps you find teammates with complementary skills and interests.
              </p>
              <Button asChild className="w-full">
                <Link href="/find-teammates">Find Teammates</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hackathon Resources</CardTitle>
              <CardDescription>Helpful resources to prepare for the hackathon.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Hackathon Preparation Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Team Collaboration Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Project Idea Generator
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:underline">
                    Presentation Templates
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
