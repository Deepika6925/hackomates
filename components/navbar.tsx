"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">HackoMates</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/hackathons" className="text-sm font-medium hover:text-primary">
            Hackathons
          </Link>
          <Link href="/teams" className="text-sm font-medium hover:text-primary">
            Find Teams
          </Link>
          <Link href="/tests" className="text-sm font-medium hover:text-primary">
            Tests
          </Link>
          <Link href="/messages" className="text-sm font-medium hover:text-primary">
            Messages
          </Link>
          <Link href="/notifications" className="text-sm font-medium hover:text-primary">
            Notifications
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/hackathons" className="text-sm font-medium hover:text-primary">
              Hackathons
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary">
              Find Teams
            </Link>
            <Link href="/tests" className="text-sm font-medium hover:text-primary">
              Tests
            </Link>
            <Link href="/messages" className="text-sm font-medium hover:text-primary">
              Messages
            </Link>
            <Link href="/notifications" className="text-sm font-medium hover:text-primary">
              Notifications
            </Link>
            <Link href="/profile" className="text-sm font-medium hover:text-primary">
              Profile
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
