import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Users } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: "CodeCrafters",
      hackathon: "TechCrunch Disrupt Hackathon",
      description:
        "Building an AI-powered climate monitoring platform that helps communities track and respond to environmental changes.",
      members: [
        {
          name: "Alex Johnson",
          role: "Full Stack Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "AJ",
        },
        { name: "Sarah Chen", role: "Data Scientist", avatar: "/placeholder.svg?height=40&width=40", initials: "SC" },
        {
          name: "Miguel Rodriguez",
          role: "Backend Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "MR",
        },
      ],
      lookingFor: ["UI/UX Designer", "Frontend Developer"],
      skills: ["React", "Node.js", "Python", "TensorFlow"],
      openPositions: 2,
    },
    {
      id: 2,
      name: "BlockBuilders",
      hackathon: "Global Blockchain Hackathon",
      description:
        "Creating a decentralized marketplace for carbon credits to incentivize sustainable practices and combat climate change.",
      members: [
        {
          name: "Emma Wilson",
          role: "Blockchain Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "EW",
        },
        {
          name: "David Kim",
          role: "Smart Contract Engineer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "DK",
        },
      ],
      lookingFor: ["Frontend Developer", "UI/UX Designer", "Product Manager"],
      skills: ["Solidity", "Ethereum", "Web3.js", "React"],
      openPositions: 3,
    },
    {
      id: 3,
      name: "DataDreamers",
      hackathon: "AI for Good Hackathon",
      description:
        "Developing a predictive analytics tool for renewable energy optimization to help utilities maximize clean energy usage.",
      members: [
        { name: "Olivia Martinez", role: "ML Engineer", avatar: "/placeholder.svg?height=40&width=40", initials: "OM" },
        { name: "James Wilson", role: "Data Engineer", avatar: "/placeholder.svg?height=40&width=40", initials: "JW" },
        {
          name: "Sophia Lee",
          role: "Frontend Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "SL",
        },
        {
          name: "Ethan Brown",
          role: "Backend Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "EB",
        },
      ],
      lookingFor: ["Data Scientist"],
      skills: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
      openPositions: 1,
    },
    {
      id: 4,
      name: "HealthTech Heroes",
      hackathon: "Health Innovation Hackathon",
      description:
        "Building a mobile app that connects patients with mental health resources and provides personalized support.",
      members: [
        {
          name: "Priya Patel",
          role: "Mobile Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "PP",
        },
        { name: "Thomas Wright", role: "UX Designer", avatar: "/placeholder.svg?height=40&width=40", initials: "TW" },
        {
          name: "Zoe Garcia",
          role: "Healthcare Specialist",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "ZG",
        },
      ],
      lookingFor: ["Backend Developer", "ML Engineer"],
      skills: ["React Native", "Figma", "Firebase", "Healthcare API"],
      openPositions: 2,
    },
    {
      id: 5,
      name: "EduTech Innovators",
      hackathon: "EdTech Summit Hackathon",
      description:
        "Creating an adaptive learning platform that personalizes educational content based on student learning patterns.",
      members: [
        {
          name: "Lucas Chen",
          role: "Full Stack Developer",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "LC",
        },
        {
          name: "Amara Johnson",
          role: "Education Specialist",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "AJ",
        },
      ],
      lookingFor: ["UI/UX Designer", "ML Engineer", "Frontend Developer"],
      skills: ["React", "Python", "Node.js", "Educational APIs"],
      openPositions: 3,
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Teams</h1>
        <p className="text-muted-foreground">
          Discover teams looking for members with your skills or create your own team.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search teams..." className="pl-8" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <h3 className="font-medium">Filters</h3>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Hackathon</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any hackathon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any hackathon</SelectItem>
                  <SelectItem value="techcrunch">TechCrunch Disrupt</SelectItem>
                  <SelectItem value="blockchain">Global Blockchain</SelectItem>
                  <SelectItem value="ai">AI for Good</SelectItem>
                  <SelectItem value="health">Health Innovation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Skills Needed</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any skill</SelectItem>
                  <SelectItem value="frontend">Frontend Development</SelectItem>
                  <SelectItem value="backend">Backend Development</SelectItem>
                  <SelectItem value="design">UI/UX Design</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Open Positions</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any number</SelectItem>
                  <SelectItem value="1">At least 1</SelectItem>
                  <SelectItem value="2">At least 2</SelectItem>
                  <SelectItem value="3">At least 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full">Create New Team</Button>
        </div>
        <div className="flex-1">
          <div className="grid gap-6">
            {teams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{team.name}</CardTitle>
                      <CardDescription>
                        <Link href={`/hackathons/${team.hackathon}`} className="hover:underline">
                          {team.hackathon}
                        </Link>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {team.openPositions} open
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{team.description}</p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Team Members</h4>
                    <div className="flex flex-wrap gap-3">
                      {team.members.map((member, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div className="text-xs">
                            <p className="font-medium">{member.name}</p>
                            <p className="text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Looking For</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.lookingFor.map((role) => (
                        <Badge key={role} variant="secondary">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/teams/${team.id}`}>View Team</Link>
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
