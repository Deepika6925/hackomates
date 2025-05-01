"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("personal")

  const handleNextStep = () => {
    if (activeTab === "personal") {
      setActiveTab("skills")
    } else if (activeTab === "skills") {
      setActiveTab("preferences")
    }
  }

  const handlePrevStep = () => {
    if (activeTab === "preferences") {
      setActiveTab("skills")
    } else if (activeTab === "skills") {
      setActiveTab("personal")
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Join HackoMates to find your perfect hackathon team.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </div>
            </TabsContent>
            <TabsContent value="skills" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Primary Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="designer">UI/UX Designer</SelectItem>
                    <SelectItem value="data">Data Scientist</SelectItem>
                    <SelectItem value="pm">Project Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Technical Skills</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="react" />
                    <label htmlFor="react" className="text-sm">
                      React
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="node" />
                    <label htmlFor="node" className="text-sm">
                      Node.js
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="python" />
                    <label htmlFor="python" className="text-sm">
                      Python
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="java" />
                    <label htmlFor="java" className="text-sm">
                      Java
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="figma" />
                    <label htmlFor="figma" className="text-sm">
                      Figma
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ai" />
                    <label htmlFor="ai" className="text-sm">
                      AI/ML
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile" />
                    <label htmlFor="mobile" className="text-sm">
                      Mobile Dev
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cloud" />
                    <label htmlFor="cloud" className="text-sm">
                      Cloud
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                    <SelectItem value="expert">Expert (5+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            <TabsContent value="preferences" className="space-y-4">
              <div className="space-y-2">
                <Label>Hackathon Interests</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="web" />
                    <label htmlFor="web" className="text-sm">
                      Web Development
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mobile-apps" />
                    <label htmlFor="mobile-apps" className="text-sm">
                      Mobile Apps
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ai-ml" />
                    <label htmlFor="ai-ml" className="text-sm">
                      AI/ML
                    </label>
                    />
                    <label htmlFor="ai-ml" className="text-sm">
                      AI/ML
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="blockchain" />
                    <label htmlFor="blockchain" className="text-sm">
                      Blockchain
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="iot" />
                    <label htmlFor="iot" className="text-sm">
                      IoT
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gaming" />
                    <label htmlFor="gaming" className="text-sm">
                      Gaming
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="health" />
                    <label htmlFor="health" className="text-sm">
                      Healthcare
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fintech" />
                    <label htmlFor="fintech" className="text-sm">
                      Fintech
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="team-size">Preferred Team Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-3">Small (2-3 people)</SelectItem>
                    <SelectItem value="4-5">Medium (4-5 people)</SelectItem>
                    <SelectItem value="6+">Large (6+ people)</SelectItem>
                    <SelectItem value="any">Any size</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekends">Weekends only</SelectItem>
                    <SelectItem value="evenings">Weekday evenings</SelectItem>
                    <SelectItem value="full-time">Full-time during hackathons</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          {activeTab !== "personal" && (
            <Button variant="outline" onClick={handlePrevStep}>
              Previous
            </Button>
          )}
          {activeTab !== "preferences" ? (
            <Button onClick={handleNextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button className="ml-auto">Create Account</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
