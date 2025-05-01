import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedHackathons } from "@/components/featured-hackathons"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturedHackathons />
      <HowItWorks />
      <Testimonials />
      <section className="py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to find your dream team?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Join HackoMates today and connect with talented individuals to build amazing projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/hackathons">Browse Hackathons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
