import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Find Your Perfect Hackathon Team
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect with talented developers, designers, and innovators to build amazing projects and win hackathons
                together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/register">Join Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Team Collaboration"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/placeholder.svg?height=620&width=620"
              width="540"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
