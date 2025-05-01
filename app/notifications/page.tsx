"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Calendar, MessageSquare, Users, Award, AlertCircle, FileText } from "lucide-react"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "test",
      title: "Test Result: Frontend Developer Assessment",
      message:
        "You scored 85/100 on the Frontend Developer Assessment. CodeCrafters team has invited you for an interview.",
      team: "CodeCrafters",
      date: "2 hours ago",
      read: false,
      action: {
        text: "View Results",
        link: "/tests/1/results",
      },
    },
    {
      id: 2,
      type: "team",
      title: "Team Application Accepted",
      message: "Your application to join BlockBuilders team has been accepted. You are now a member of the team.",
      team: "BlockBuilders",
      date: "1 day ago",
      read: false,
      action: {
        text: "View Team",
        link: "/teams/2",
      },
    },
    {
      id: 3,
      type: "hackathon",
      title: "New Hackathon: AI for Climate Action",
      message: "A new hackathon matching your interests has been announced. Registration is now open.",
      date: "2 days ago",
      read: true,
      action: {
        text: "View Hackathon",
        link: "/hackathons/7",
      },
    },
    {
      id: 4,
      type: "message",
      title: "New Message from Sarah Chen",
      message:
        "Hi there! I saw your profile and I'm impressed with your skills. Would you be interested in joining our team for the upcoming hackathon?",
      sender: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SC",
      },
      date: "3 days ago",
      read: true,
      action: {
        text: "Reply",
        link: "/messages/12",
      },
    },
    {
      id: 5,
      type: "test",
      title: "New Test Invitation: ML Engineer Assessment",
      message: "DataDreamers team has invited you to take their Machine Learning Engineer Assessment.",
      team: "DataDreamers",
      date: "4 days ago",
      read: true,
      action: {
        text: "Take Test",
        link: "/tests/2",
      },
    },
    {
      id: 6,
      type: "achievement",
      title: "Achievement Unlocked: Hackathon Finalist",
      message: "Congratulations! Your team was selected as a finalist in the Global AI Hackathon.",
      date: "1 week ago",
      read: true,
      action: {
        text: "View Certificate",
        link: "/profile/achievements",
      },
    },
  ]

  const filteredNotifications = activeTab === "all" ? notifications : notifications.filter((n) => n.type === activeTab)

  const unreadCount = notifications.filter((n) => !n.read).length

  const getIcon = (type: string) => {
    switch (type) {
      case "test":
        return <FileText className="h-5 w-5 text-blue-500" />
      case "team":
        return <Users className="h-5 w-5 text-green-500" />
      case "hackathon":
        return <Calendar className="h-5 w-5 text-purple-500" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-yellow-500" />
      case "achievement":
        return <Award className="h-5 w-5 text-orange-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your test results, team invitations, and hackathon announcements.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {unreadCount > 0 && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {unreadCount} unread
            </Badge>
          )}
          <Button variant="outline">Mark All as Read</Button>
        </div>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="test">Tests</TabsTrigger>
          <TabsTrigger value="team">Teams</TabsTrigger>
          <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
          <TabsTrigger value="message">Messages</TabsTrigger>
          <TabsTrigger value="achievement">Achievements</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          {filteredNotifications.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No notifications to display</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card key={notification.id} className={notification.read ? "" : "border-primary"}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{notification.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>

                        {notification.team && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm">Team:</span>
                            <Link href={`/teams/${notification.team}`} className="text-sm text-primary hover:underline">
                              {notification.team}
                            </Link>
                          </div>
                        )}

                        {notification.sender && (
                          <div className="flex items-center gap-2 mt-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={notification.sender.avatar} alt={notification.sender.name} />
                              <AvatarFallback>{notification.sender.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{notification.sender.name}</span>
                          </div>
                        )}

                        <div className="flex justify-end mt-4">
                          <Button asChild variant="outline" size="sm">
                            <Link href={notification.action.link}>{notification.action.text}</Link>
                          </Button>
                        </div>
                      </div>
                      {!notification.read && (
                        <div className="flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Tabs>
    </div>
  )
}
