"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Clock, AlertCircle } from "lucide-react"

export default function TestDetailPage({ params }: { params: { id: string } }) {
  const [timeRemaining, setTimeRemaining] = useState("58:24")
  const [currentSection, setCurrentSection] = useState("instructions")

  // This would normally be fetched from an API
  const test = {
    id: params.id,
    title: "Frontend Developer Assessment",
    team: "CodeCrafters",
    hackathon: "TechCrunch Disrupt Hackathon",
    description: "A technical assessment for frontend developers focusing on React, CSS, and responsive design.",
    instructions:
      "This assessment consists of multiple-choice questions, coding challenges, and a short project. You have 60 minutes to complete all sections. You can navigate between sections using the tabs below. Your progress is automatically saved. Please ensure you have a stable internet connection before starting the test.",
    duration: "60 minutes",
    skills: ["React", "CSS", "JavaScript", "Responsive Design"],
    deadline: "Oct 10, 2023",
    sections: [
      {
        id: "multiple-choice",
        title: "Multiple Choice",
        description: "Answer the following questions by selecting the correct option.",
        questions: [
          {
            id: "q1",
            question: "Which of the following is NOT a React hook?",
            options: ["useState", "useEffect", "useContext", "useReactState"],
            type: "radio",
          },
          {
            id: "q2",
            question: "Which CSS property is used to create a flexible box layout?",
            options: ["display: flex", "display: grid", "position: relative", "float: left"],
            type: "radio",
          },
          {
            id: "q3",
            question: "Select all valid ways to create a component in React:",
            options: ["Function components", "Class components", "Arrow function components", "HTML components"],
            type: "checkbox",
          },
        ],
      },
      {
        id: "coding-challenge",
        title: "Coding Challenge",
        description: "Complete the following coding challenges by writing your solution in the provided editor.",
        questions: [
          {
            id: "c1",
            question:
              "Write a function that takes an array of numbers and returns the sum of all even numbers in the array.",
            starterCode: "function sumEvenNumbers(numbers) {\n  // Your code here\n}",
            type: "code",
          },
          {
            id: "c2",
            question: "Create a simple React component that displays a counter with increment and decrement buttons.",
            starterCode: "function Counter() {\n  // Your code here\n}",
            type: "code",
          },
        ],
      },
      {
        id: "project",
        title: "Mini Project",
        description: "Complete a small project to demonstrate your skills.",
        questions: [
          {
            id: "p1",
            question:
              "Create a responsive card component that displays a product with an image, title, description, and price. The card should have a 'Add to Cart' button that changes to 'Added to Cart' when clicked.",
            type: "project",
          },
        ],
      },
    ],
  }

  return (
    <div className="container py-12">
      <Link href="/tests" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Tests
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">{test.title}</h1>
          <p className="text-muted-foreground mt-1">
            By{" "}
            <Link href={`/teams/${test.team}`} className="text-primary hover:underline">
              {test.team}
            </Link>{" "}
            for{" "}
            <Link href={`/hackathons/${test.hackathon}`} className="text-primary hover:underline">
              {test.hackathon}
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="font-mono font-medium">{timeRemaining}</span>
        </div>
      </div>

      <Tabs value={currentSection} onValueChange={setCurrentSection}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="multiple-choice">Multiple Choice</TabsTrigger>
          <TabsTrigger value="coding-challenge">Coding Challenge</TabsTrigger>
          <TabsTrigger value="project">Mini Project</TabsTrigger>
        </TabsList>

        <TabsContent value="instructions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Instructions</CardTitle>
              <CardDescription>Please read carefully before starting the test</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{test.description}</p>
              <p>{test.instructions}</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Important Notes</h4>
                  <ul className="text-sm text-yellow-700 mt-1 list-disc list-inside space-y-1">
                    <li>Do not refresh the page during the test.</li>
                    <li>Your progress is automatically saved.</li>
                    <li>You can navigate between sections using the tabs above.</li>
                    <li>Once you submit the test, you cannot make changes.</li>
                    <li>The timer will continue to run even if you close the browser.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Skills Tested</h4>
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
              <Button onClick={() => setCurrentSection("multiple-choice")} className="w-full">
                Start Test
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="multiple-choice" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Choice Questions</CardTitle>
              <CardDescription>{test.sections[0].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {test.sections[0].questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="font-medium">{question.question}</h3>

                  {question.type === "radio" ? (
                    <RadioGroup>
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={`${index}`} id={`${question.id}-${index}`} />
                          <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  ) : (
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`${question.id}-${index}`} />
                          <label
                            htmlFor={`${question.id}-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentSection("instructions")}>
                Previous
              </Button>
              <Button onClick={() => setCurrentSection("coding-challenge")}>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="coding-challenge" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Coding Challenges</CardTitle>
              <CardDescription>{test.sections[1].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {test.sections[1].questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="font-medium">{question.question}</h3>
                  <div className="bg-muted rounded-md p-4">
                    <pre className="text-sm font-mono whitespace-pre-wrap">{question.starterCode}</pre>
                  </div>
                  <Textarea
                    placeholder="Write your solution here..."
                    className="font-mono min-h-[200px]"
                    defaultValue={question.starterCode}
                  />
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentSection("multiple-choice")}>
                Previous
              </Button>
              <Button onClick={() => setCurrentSection("project")}>Next</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="project" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mini Project</CardTitle>
              <CardDescription>{test.sections[2].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {test.sections[2].questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="font-medium">{question.question}</h3>
                  <Textarea
                    placeholder="Write your HTML, CSS, and JavaScript code here..."
                    className="font-mono min-h-[300px]"
                  />
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      You can also upload your solution as a ZIP file or provide a link to a CodeSandbox, CodePen, or
                      GitHub repository.
                    </p>
                    <div className="flex gap-4 mt-4">
                      <Button variant="outline" size="sm">
                        Upload ZIP
                      </Button>
                      <Button variant="outline" size="sm">
                        Add Link
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentSection("coding-challenge")}>
                Previous
              </Button>
              <Button>Submit Test</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
