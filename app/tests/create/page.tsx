"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Plus, Trash2, MoveUp, MoveDown } from "lucide-react"

export default function CreateTestPage() {
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")

  const [questions, setQuestions] = useState([
    { id: 1, type: "multiple-choice", question: "", options: ["", "", "", ""], answer: "" },
    { id: 2, type: "coding", question: "", starterCode: "", answer: "" },
  ])

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const addQuestion = (type: string) => {
    const newQuestion = {
      id: questions.length + 1,
      type,
      question: "",
      options: type === "multiple-choice" ? ["", "", "", ""] : undefined,
      starterCode: type === "coding" ? "// Write your code here" : undefined,
      answer: "",
    }
    setQuestions([...questions, newQuestion])
  }

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const moveQuestion = (id: number, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === questions.length - 1)) {
      return
    }

    const newQuestions = [...questions]
    const temp = newQuestions[index]

    if (direction === "up") {
      newQuestions[index] = newQuestions[index - 1]
      newQuestions[index - 1] = temp
    } else {
      newQuestions[index] = newQuestions[index + 1]
      newQuestions[index + 1] = temp
    }

    setQuestions(newQuestions)
  }

  return (
    <div className="container py-12">
      <Link href="/tests" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Tests
      </Link>

      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter">Create Technical Assessment</h1>
        <p className="text-muted-foreground">Design a technical assessment to evaluate potential team members.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Provide details about your technical assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Assessment Title</Label>
                <Input id="title" placeholder="e.g., Frontend Developer Assessment" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what this assessment is for and what skills you're evaluating"
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="60" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="positions">Number of Positions</Label>
                  <Input id="positions" type="number" placeholder="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team">Team</Label>
                  <Select>
                    <SelectTrigger id="team">
                      <SelectValue placeholder="Select your team" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="codecrafters">CodeCrafters</SelectItem>
                      <SelectItem value="datadreamers">DataDreamers</SelectItem>
                      <SelectItem value="blockbuilders">BlockBuilders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Skills Required</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Remove {skill}</span>
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button type="button" onClick={addSkill} size="sm">
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Content</CardTitle>
              <CardDescription>Create questions and challenges for your assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="questions">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="questions">Questions</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="questions" className="space-y-6 mt-6">
                  {questions.map((question, index) => (
                    <Card key={question.id}>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => moveQuestion(question.id, "up")}
                              disabled={index === 0}
                            >
                              <MoveUp className="h-4 w-4" />
                              <span className="sr-only">Move up</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => moveQuestion(question.id, "down")}
                              disabled={index === questions.length - 1}
                            >
                              <MoveDown className="h-4 w-4" />
                              <span className="sr-only">Move down</span>
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => removeQuestion(question.id)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Select defaultValue={question.type}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Question type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                              <SelectItem value="coding">Coding Challenge</SelectItem>
                              <SelectItem value="project">Mini Project</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label>Question</Label>
                          <Textarea placeholder="Enter your question here" />
                        </div>

                        {question.type === "multiple-choice" && (
                          <div className="space-y-4">
                            <Label>Options</Label>
                            {question.options?.map((_, optionIndex) => (
                              <div key={optionIndex} className="flex gap-2">
                                <Input placeholder={`Option ${optionIndex + 1}`} />
                                <Select defaultValue={optionIndex === 0 ? "correct" : ""}>
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Correct?" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="incorrect">Incorrect</SelectItem>
                                    <SelectItem value="correct">Correct</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            ))}
                          </div>
                        )}

                        {question.type === "coding" && (
                          <div className="space-y-2">
                            <Label>Starter Code</Label>
                            <Textarea
                              placeholder="Provide starter code for the candidate"
                              className="font-mono min-h-[150px]"
                              defaultValue={question.starterCode}
                            />
                          </div>
                        )}

                        {question.type === "project" && (
                          <div className="space-y-2">
                            <Label>Project Requirements</Label>
                            <Textarea
                              placeholder="Describe the project requirements in detail"
                              className="min-h-[150px]"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        variant="outline"
                        onClick={() => addQuestion("multiple-choice")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add Multiple Choice
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => addQuestion("coding")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add Coding Challenge
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => addQuestion("project")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add Mini Project
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assessment Preview</CardTitle>
                      <CardDescription>This is how your assessment will appear to candidates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-md text-center">
                        <p>Preview will be generated based on your questions</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Assessment Settings</CardTitle>
                      <CardDescription>Configure how your assessment works</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="passing-score">Passing Score (%)</Label>
                        <Input id="passing-score" type="number" placeholder="70" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                        <Input id="time-limit" type="number" placeholder="60" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="attempts">Maximum Attempts</Label>
                        <Input id="attempts" type="number" placeholder="1" />
                      </div>

                      <div className="space-y-2">
                        <Label>Assessment Visibility</Label>
                        <Select defaultValue="public">
                          <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public (Anyone can take)</SelectItem>
                            <SelectItem value="invite">Invite Only</SelectItem>
                            <SelectItem value="team">Team Members Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publish Assessment</CardTitle>
              <CardDescription>Make your assessment available to candidates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Assessment Status</Label>
                <Select defaultValue="draft">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input id="publish-date" type="date" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Publish Assessment</Button>
              <Button variant="outline" className="w-full">
                Save as Draft
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Questions</p>
                <p className="text-sm text-muted-foreground">{questions.length} questions</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Estimated Duration</p>
                <p className="text-sm text-muted-foreground">60 minutes</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Skills Tested</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
