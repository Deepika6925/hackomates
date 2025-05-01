"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  User,
  Award,
  FileText,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Edit,
  ExternalLink,
  Star,
  Code,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const user = {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    avatar: "/placeholder.svg?height=200&width=200",
    initials: "AJ",
    bio: "Passionate full stack developer with expertise in React, Node.js, and cloud technologies. I love building innovative solutions and participating in hackathons to solve real-world problems.",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    website: "https://alexjohnson.dev",
    github: "github.com/alexjohnson",
    linkedin: "linkedin.com/in/alexjohnson",
    twitter: "twitter.com/alexjohnson",
    education: "B.S. Computer Science, Stanford University",
    experience: "5+ years of software development experience",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "GraphQL", level: 60 },
    ],
    interests: ["Web Development", "AI/ML", "Cloud Computing", "Open Source", "UI/UX Design"],
    achievements: [
      {
        id: 1,
        title: "Hackathon Winner",
        description: "First place at TechCrunch Disrupt Hackathon 2022",
        date: "Oct 2022",
        badge: "🏆 1st Place",
      },
      {
        id: 2,
        title: "Hackathon Finalist",
        description: "Top 5 finalist at Global AI Hackathon 2023",
        date: "Mar 2023",
        badge: "🥇 Finalist",
      },
      {
        id: 3,
        title: "Open Source Contributor",
        description: "Major contributor to React ecosystem with 500+ GitHub stars",
        date: "2021 - Present",
        badge: "⭐ 500+ Stars",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Climate Monitor",
        description: "AI-powered climate monitoring platform built during TechCrunch Disrupt Hackathon",
        technologies: ["React", "Node.js", "TensorFlow", "AWS"],
        image: "/placeholder.svg?height=150&width=300",
        link: "https://github.com/alexjohnson/climate-monitor",
      },
      {
        id: 2,
        title: "MedAssist",
        description: "Healthcare assistant app that helps patients manage medications and appointments",
        technologies: ["React Native", "Firebase", "Express", "MongoDB"],
        image: "/placeholder.svg?height=150&width=300",
        link: "https://github.com/alexjohnson/med-assist",
      },
      {
        id: 3,
        title: "DevCollab",
        description: "Platform for developers to find collaborators for open source projects",
        technologies: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
        image: "/placeholder.svg?height=150&width=300",
        link: "https://github.com/alexjohnson/dev-collab",
      },
    ],
    hackathons: [
      {
        id: 1,
        name: "TechCrunch Disrupt Hackathon",
        date: "Oct 2022",
        project: "Climate Monitor",
        result: "1st Place",
        team: "CodeCrafters",
      },
      {
        id: 2,
        name: "Global AI Hackathon",
        date: "Mar 2023",
        project: "AI Tutor",
        result: "Finalist",
        team: "DataDreamers",
      },
      {
        id: 3,
        name: "Health Innovation Hackathon",
        date: "Jun 2023",
        project: "MedAssist",
        result: "3rd Place",
        team: "HealthTech Heroes",
      },
    ],
    testResults: [
      {
        id: 1,
        title: "Frontend Developer Assessment",
        score: "92/100",
        date: "Sep 15, 2023",
        skills: ["React", "CSS", "JavaScript", "Responsive Design"],
        team: "CodeCrafters",
      },
      {
        id: 2,
        title: "Full Stack Developer Challenge",
        score: "88/100",
        date: "Aug 20, 2023",
        skills: ["React", "Node.js", "MongoDB", "Express"],
        team: "BlockBuilders",
      },
    ],
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-4xl">{user.initials}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="icon" className="absolute bottom-0 right-0 rounded-full">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit profile picture</span>
                  </Button>
                </div>
                <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
                <p className="text-muted-foreground">{user.title}</p>

                <div className="flex items-center gap-2 mt-4">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button size="sm" className="gap-1">
                    <User className="h-4 w-4" />
                    View Public Profile
                  </Button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground mt-1" />
                  <span>{user.experience}</span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground mt-1" />
                  <span>{user.education}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t flex justify-between">
                <a
                  href={`https://${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={`https://${user.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href={`https://${user.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{user.bio}</p>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="overview">
                <User className="h-4 w-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="projects">
                <Code className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="achievements">
                <Award className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="tests">
                <FileText className="h-4 w-4 mr-2" />
                Test Results
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hackathon History</CardTitle>
                  <CardDescription>Past hackathons you've participated in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.hackathons.map((hackathon) => (
                      <div key={hackathon.id} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{hackathon.name}</h3>
                            <Badge variant="outline">{hackathon.result}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {hackathon.date} • Project: {hackathon.project} • Team: {hackathon.team}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Hackathons
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Your latest accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.achievements.slice(0, 2).map((achievement) => (
                      <div key={achievement.id} className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{achievement.title}</h3>
                            <Badge variant="outline">{achievement.badge}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description} • {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("achievements")}>
                    View All Achievements
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="mt-6">
              <div className="grid gap-6">
                {user.projects.map((project) => (
                  <Card key={project.id}>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover md:h-full"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              View Project
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid gap-6">
                {user.achievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">{achievement.title}</h3>
                            <Badge>{achievement.badge}</Badge>
                          </div>
                          <p className="text-muted-foreground">{achievement.description}</p>
                          <p className="text-sm text-muted-foreground">{achievement.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tests" className="mt-6">
              <div className="grid gap-6">
                {user.testResults.map((test) => (
                  <Card key={test.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{test.title}</CardTitle>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {test.score}
                        </Badge>
                      </div>
                      <CardDescription>
                        Taken on {test.date} • Team: {test.team}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills Tested</h4>
                        <div className="flex flex-wrap gap-2">
                          {test.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Detailed Results
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
