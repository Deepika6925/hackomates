import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Users, Calendar, MessageSquare } from "lucide-react"

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  // This would normally be fetched from an API
  const team = {
    id: params.id,
    name: "CodeCrafters",
    hackathon: {
      id: "1",
      name: "TechCrunch Disrupt Hackathon",
      date: "Oct 15-17, 2023",
    },
    description:
      "Building an AI-powered climate monitoring platform that helps communities track and respond to environmental changes.",
    longDescription:
      "Our team is passionate about using technology to address climate change. We're building a platform that combines satellite imagery, IoT sensor data, and machine learning to provide real-time insights about environmental conditions. Our goal is to help communities, governments, and organizations make data-driven decisions to mitigate climate impacts and build resilience.",
    members: [
      {
        id: "1",
        name: "Alex Johnson",
        role: "Team Lead & Full Stack Developer",
        avatar: "/placeholder.svg?height=100&width=100",
        initials: "AJ",
        bio: "Full stack developer with 5 years of experience. Passionate about using technology to solve environmental challenges.",
        skills: ["React", "Node.js", "Python", "AWS"],
      },
      {
        id: "2",
        name: "Sarah Chen",
        role: "Data Scientist",
        avatar: "/placeholder.svg?height=100&width=100",
        initials: "SC",
        bio: "Data scientist with expertise in machine learning and climate data analysis. Previously worked at NASA's Earth Science Division.",
        skills: ["Python", "TensorFlow", "Data Analysis", "GIS"],
      },
      {
        id: "3",
        name: "Miguel Rodriguez",
        role: "Backend Developer",
        avatar: "/placeholder.svg?height=100&width=100",
        initials: "MR",
        bio: "Backend developer specializing in scalable systems and API design. Experienced with cloud infrastructure and IoT platforms.",
        skills: ["Node.js", "MongoDB", "AWS", "IoT"],
      },
    ],
    openRoles: [
      {
        title: "UI/UX Designer",
        description:
          "We're looking for a designer to create an intuitive and engaging user interface for our climate monitoring platform. Experience with data visualization is a plus.",
        skills: ["Figma", "UI/UX", "Data Visualization"],
      },
      {
        title: "Frontend Developer",
        description:
          "We need a frontend developer to implement our user interface and data visualizations. Experience with React and data visualization libraries is required.",
        skills: ["React", "D3.js", "Responsive Design"],
      },
    ],
    projectIdea:
      "An AI-powered climate monitoring platform that combines satellite imagery, IoT sensor data, and machine learning to provide real-time insights about environmental conditions. The platform will include interactive maps, data visualizations, and predictive analytics to help users understand climate patterns and make informed decisions.",
    skills: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS", "Data Visualization"],
    lookingFor: ["UI/UX Designer", "Frontend Developer"],
    updates: [
      {
        date: "Sep 15, 2023",
        content:
          "Team formed! We're excited to start working on our climate monitoring platform for the TechCrunch Disrupt Hackathon.",
      },
      {
        date: "Sep 20, 2023",
        content:
          "Project planning complete. We've defined our MVP features and started working on the backend architecture.",
      },
      {
        date: "Sep 25, 2023",
        content:
          "Backend API development in progress. Looking for UI/UX designers and frontend developers to join our team!",
      },
    ],
  }

  return (
    <div className="container py-12">
      <Link href="/teams" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Teams
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{team.name}</h1>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {team.openRoles.length} open roles
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Link href={`/hackathons/${team.hackathon.id}`} className="text-primary hover:underline">
                {team.hackathon.name} ({team.hackathon.date})
              </Link>
            </div>

            <p className="text-muted-foreground">{team.description}</p>

            <div className="flex flex-wrap gap-2">
              {team.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="members">Team Members</TabsTrigger>
              <TabsTrigger value="openings">Open Roles</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Project Description</h3>
                <p>{team.longDescription}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Project Idea</h3>
                <p>{team.projectIdea}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Team Updates</h3>
                <div className="space-y-4">
                  {team.updates.map((update, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-1">
                      <p className="text-sm font-medium">{update.date}</p>
                      <p className="text-muted-foreground">{update.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="members" className="space-y-6 mt-6">
              <div className="grid gap-6">
                {team.members.map((member) => (
                  <Card key={member.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                          </div>
                          <p>{member.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="openings" className="space-y-6 mt-6">
              <div className="grid gap-6">
                {team.openRoles.map((role, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{role.title}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Apply for this Role</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Join This Team</CardTitle>
              <CardDescription>
                Apply to join the {team.name} team for {team.hackathon.name}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This team is looking for members with the following skills:
              </p>
              <div className="flex flex-wrap gap-2">
                {team.lookingFor.map((role) => (
                  <Badge key={role} variant="outline">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply to Join</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Team</CardTitle>
              <CardDescription>Have questions about the team or project?</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Message Team Lead
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Similar Teams</CardTitle>
              <CardDescription>Other teams you might be interested in.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link href="/teams/2" className="text-primary hover:underline block">
                  BlockBuilders
                </Link>
                <p className="text-xs text-muted-foreground">
                  Creating a decentralized marketplace for carbon credits.
                </p>
              </div>
              <div className="space-y-2">
                <Link href="/teams/3" className="text-primary hover:underline block">
                  DataDreamers
                </Link>
                <p className="text-xs text-muted-foreground">
                  Developing a predictive analytics tool for renewable energy.
                </p>
              </div>
              <div className="space-y-2">
                <Link href="/teams/5" className="text-primary hover:underline block">
                  EduTech Innovators
                </Link>
                <p className="text-xs text-muted-foreground">Building an adaptive learning platform for students.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
