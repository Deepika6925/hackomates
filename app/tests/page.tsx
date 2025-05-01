"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Clock } from "lucide-react"

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState("available")

  const availableTests = [
    {
      id: 1,
      title: "Frontend Developer Assessment",
      team: "CodeCrafters",
      hackathon: "TechCrunch Disrupt Hackathon",
      description: "A technical assessment for frontend developers focusing on React, CSS, and responsive design.",
      duration: "60 minutes",
      skills: ["React", "CSS", "JavaScript", "Responsive Design"],
      deadline: "Oct 10, 2023",
      applicants: 12,
      positions: 2,
    },
    {
      id: 2,
      title: "Machine Learning Engineer Test",
      team: "DataDreamers",
      hackathon: "AI for Good Hackathon",
      description: "Assessment for ML engineers with focus on TensorFlow, data preprocessing, and model evaluation.",
      duration: "90 minutes",
      skills: ["Python", "TensorFlow", "Data Science", "ML Algorithms"],
      deadline: "Oct 5, 2023",
      applicants: 8,
      positions: 1,
    },
    {
      id: 3,
      title: "UI/UX Designer Challenge",
      team: "HealthTech Heroes",
      hackathon: "Health Innovation Hackathon",
      description: "Design challenge for UI/UX designers to create intuitive healthcare interfaces.",
      duration: "120 minutes",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      deadline: "Oct 15, 2023",
      applicants: 5,
      positions: 2,
    },
  ]

  const myTests = [
    {
      id: 4,
      title: "Blockchain Developer Assessment",
      team: "BlockBuilders",
      hackathon: "Global Blockchain Hackathon",
      description: "Technical test for blockchain developers with focus on Solidity and smart contracts.",
      status: "Completed",
      score: "85/100",
      submittedOn: "Sep 28, 2023",
      result: "Selected for interview",
    },
    {
      id: 5,
      title: "Backend Developer Challenge",
      team: "EduTech Innovators",
      hackathon: "EdTech Summit Hackathon",
      description: "Assessment for backend developers focusing on Node.js, Express, and database design.",
      status: "In Review",
      submittedOn: "Oct 1, 2023",
    },
  ]

  const createdTests = [
    {
      id: 6,
      title: "Full Stack Developer Assessment",
      description: "Comprehensive test for full stack developers covering both frontend and backend technologies.",
      duration: "120 minutes",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      created: "Sep 25, 2023",
      applicants: 15,
      active: true,
    },
    {
      id: 7,
      title: "Mobile Developer Challenge",
      description: "Technical assessment for mobile developers with focus on React Native and mobile UI patterns.",
      duration: "90 minutes",
      skills: ["React Native", "JavaScript", "Mobile UI", "API Integration"],
      created: "Sep 30, 2023",
      applicants: 7,
      active: true,
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Assessments</h1>
        <p className="text-muted-foreground">
          Take technical assessments to join teams or create tests to find the right teammates.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="available">Available Tests</TabsTrigger>
          <TabsTrigger value="my-tests">My Tests</TabsTrigger>
          <TabsTrigger value="created">Tests I Created</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-64 space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search tests..." className="pl-8" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-medium">Filters</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Skills</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any skill" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any skill</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="ml">Machine Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Duration</p>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any duration</SelectItem>
                      <SelectItem value="short">Under 60 minutes</SelectItem>
                      <SelectItem value="medium">60-90 minutes</SelectItem>
                      <SelectItem value="long">Over 90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
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
                      <SelectItem value="ai">AI for Good</SelectItem>
                      <SelectItem value="health">Health Innovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid gap-6">
                {availableTests.map((test) => (
                  <Card key={test.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{test.title}</CardTitle>
                          <CardDescription>
                            By{" "}
                            <Link href={`/teams/${test.team}`} className="hover:underline">
                              {test.team}
                            </Link>{" "}
                            for{" "}
                            <Link href={`/hackathons/${test.hackathon}`} className="hover:underline">
                              {test.hackathon}
                            </Link>
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {test.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{test.description}</p>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {test.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {test.deadline}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground">{test.applicants} applicants</span>
                          <span className="text-muted-foreground">{test.positions} positions</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/tests/${test.id}`}>Take Assessment</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="my-tests" className="space-y-6">
          <div className="grid gap-6">
            {myTests.map((test) => (
              <Card key={test.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{test.title}</CardTitle>
                      <CardDescription>
                        By{" "}
                        <Link href={`/teams/${test.team}`} className="hover:underline">
                          {test.team}
                        </Link>{" "}
                        for{" "}
                        <Link href={`/hackathons/${test.hackathon}`} className="hover:underline">
                          {test.hackathon}
                        </Link>
                      </CardDescription>
                    </div>
                    {test.status === "Completed" ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                    ) : test.status === "In Review" ? (
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        In Review
                      </Badge>
                    ) : (
                      <Badge variant="outline">Pending</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{test.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Submitted On</h4>
                      <p className="text-sm text-muted-foreground">{test.submittedOn}</p>
                    </div>
                    {test.score && (
                      <div>
                        <h4 className="text-sm font-medium mb-1">Score</h4>
                        <p className="text-sm text-muted-foreground">{test.score}</p>
                      </div>
                    )}
                    {test.result && (
                      <div className="sm:col-span-2">
                        <h4 className="text-sm font-medium mb-1">Result</h4>
                        <p className="text-sm text-muted-foreground">{test.result}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="created" className="space-y-6">
          <div className="flex justify-end mb-4">
            <Button asChild>
              <Link href="/tests/create">Create New Test</Link>
            </Button>
          </div>
          <div className="grid gap-6">
            {createdTests.map((test) => (
              <Card key={test.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{test.title}</CardTitle>
                    {test.active ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                    ) : (
                      <Badge variant="outline">Inactive</Badge>
                    )}
                  </div>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Duration</h4>
                      <p className="text-sm text-muted-foreground">{test.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Created On</h4>
                      <p className="text-sm text-muted-foreground">{test.created}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Applicants</h4>
                      <p className="text-sm text-muted-foreground">{test.applicants} people have taken this test</p>
                    </div>
                  </div>

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
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Submissions
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Edit Test
                  </Button>
                  <Button className="w-full sm:w-auto">Manage Test</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
