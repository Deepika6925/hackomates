"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Plus, Users, User, Paperclip, ImageIcon, FileText, Video, MessageSquare } from "lucide-react"

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("direct")
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [message, setMessage] = useState("")

  const directChats = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SC",
        status: "online",
      },
      lastMessage: "Hi there! I saw your profile and I'm impressed with your skills.",
      time: "2:30 PM",
      unread: 0,
    },
    {
      id: 2,
      user: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AJ",
        status: "offline",
      },
      lastMessage: "Are you interested in joining our team for the upcoming hackathon?",
      time: "Yesterday",
      unread: 2,
    },
    {
      id: 3,
      user: {
        name: "Miguel Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MR",
        status: "online",
      },
      lastMessage: "I've sent you the project requirements. Let me know what you think.",
      time: "Yesterday",
      unread: 0,
    },
  ]

  const teamChats = [
    {
      id: 4,
      team: {
        name: "CodeCrafters",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "CC",
      },
      lastMessage: "Let's finalize the project architecture by tomorrow.",
      time: "1:45 PM",
      unread: 5,
      members: 4,
    },
    {
      id: 5,
      team: {
        name: "BlockBuilders",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "BB",
      },
      lastMessage: "I've pushed the smart contract code to our repository.",
      time: "Yesterday",
      unread: 0,
      members: 3,
    },
  ]

  const mentorChats = [
    {
      id: 6,
      mentor: {
        name: "Dr. Lisa Wang",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LW",
        expertise: "AI/ML",
      },
      lastMessage: "Your approach to the problem is good, but consider optimizing the algorithm.",
      time: "3 days ago",
      unread: 0,
    },
    {
      id: 7,
      mentor: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JW",
        expertise: "Blockchain",
      },
      lastMessage: "Let's schedule a call to discuss your smart contract architecture.",
      time: "1 week ago",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi there! I saw your profile and I'm impressed with your skills.",
      time: "2:30 PM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "Thanks Sarah! I appreciate that. What kind of project are you working on?",
      time: "2:32 PM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content:
        "I'm part of the DataDreamers team for the AI for Good Hackathon. We're building a predictive analytics tool for renewable energy optimization.",
      time: "2:35 PM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Sarah Chen",
      content:
        "We're looking for a frontend developer who can help us build an intuitive dashboard to visualize our data. Would you be interested?",
      time: "2:36 PM",
      isMe: false,
    },
    {
      id: 5,
      sender: "Me",
      content:
        "That sounds really interesting! I've worked on data visualization projects before and I'm passionate about renewable energy.",
      time: "2:40 PM",
      isMe: true,
    },
    {
      id: 6,
      sender: "Me",
      content: "I'd love to hear more about the project and what you're looking for specifically.",
      time: "2:41 PM",
      isMe: true,
    },
  ]

  const sendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Messages</h1>
          <p className="text-muted-foreground">Connect with team members, mentors, and other participants.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[600px]">
          <Card className="md:col-span-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="direct">
                    <User className="h-4 w-4 mr-2" />
                    <span className="sr-only sm:not-sr-only">Direct</span>
                  </TabsTrigger>
                  <TabsTrigger value="teams">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="sr-only sm:not-sr-only">Teams</span>
                  </TabsTrigger>
                  <TabsTrigger value="mentors">
                    <User className="h-4 w-4 mr-2" />
                    <span className="sr-only sm:not-sr-only">Mentors</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search messages..." className="pl-8" />
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="direct" className="h-full">
                  <div className="divide-y">
                    {directChats.map((chat) => (
                      <button
                        key={chat.id}
                        className={`w-full flex items-start gap-3 p-3 text-left hover:bg-muted/50 transition-colors ${selectedChat === chat.id ? "bg-muted" : ""}`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <div className="relative flex-shrink-0">
                          <Avatar>
                            <AvatarImage src={chat.user.avatar || "/placeholder.svg"} alt={chat.user.name} />
                            <AvatarFallback>{chat.user.initials}</AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${chat.user.status === "online" ? "bg-green-500" : "bg-gray-300"}`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="font-medium truncate">{chat.user.name}</p>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && <Badge className="ml-auto flex-shrink-0">{chat.unread}</Badge>}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="teams" className="h-full">
                  <div className="divide-y">
                    {teamChats.map((chat) => (
                      <button
                        key={chat.id}
                        className={`w-full flex items-start gap-3 p-3 text-left hover:bg-muted/50 transition-colors ${selectedChat === chat.id ? "bg-muted" : ""}`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <Avatar>
                          <AvatarImage src={chat.team.avatar || "/placeholder.svg"} alt={chat.team.name} />
                          <AvatarFallback>{chat.team.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <div className="flex items-center gap-2">
                              <p className="font-medium truncate">{chat.team.name}</p>
                              <Badge variant="outline" className="text-xs">
                                <Users className="h-3 w-3 mr-1" />
                                {chat.members}
                              </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && <Badge className="ml-auto flex-shrink-0">{chat.unread}</Badge>}
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mentors" className="h-full">
                  <div className="divide-y">
                    {mentorChats.map((chat) => (
                      <button
                        key={chat.id}
                        className={`w-full flex items-start gap-3 p-3 text-left hover:bg-muted/50 transition-colors ${selectedChat === chat.id ? "bg-muted" : ""}`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <Avatar>
                          <AvatarImage src={chat.mentor.avatar || "/placeholder.svg"} alt={chat.mentor.name} />
                          <AvatarFallback>{chat.mentor.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <p className="font-medium truncate">{chat.mentor.name}</p>
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                          </div>
                          <p className="text-xs text-primary mb-1">{chat.mentor.expertise} Mentor</p>
                          <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && <Badge className="ml-auto flex-shrink-0">{chat.unread}</Badge>}
                      </button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="p-4 border-t">
              <Button className="w-full" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Message
              </Button>
            </div>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3 overflow-hidden flex flex-col">
            {selectedChat ? (
              <>
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Chen" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Sarah Chen</h3>
                      <p className="text-xs text-muted-foreground">Data Scientist • Online</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video call</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Users className="h-4 w-4" />
                      <span className="sr-only">View profile</span>
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[80%] ${msg.isMe ? "flex-row-reverse" : ""}`}>
                        {!msg.isMe && (
                          <Avatar className="h-8 w-8 flex-shrink-0">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={msg.sender} />
                            <AvatarFallback>
                              {msg.sender
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div
                            className={`rounded-lg p-3 ${msg.isMe ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                          >
                            <p className="text-sm">{msg.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{msg.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="min-h-[80px] py-2"
                      />
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="h-4 w-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ImageIcon className="h-4 w-4" />
                        <span className="sr-only">Attach image</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Attach document</span>
                      </Button>
                      <Button onClick={sendMessage} disabled={!message.trim()}>
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="text-center space-y-2">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium text-lg">No conversation selected</h3>
                  <p className="text-muted-foreground">Select a conversation from the sidebar or start a new one.</p>
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    New Message
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
