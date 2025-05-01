import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Full Stack Developer",
      content:
        "HackoMates helped me find the perfect team for my first hackathon. We ended up winning first place and are now working on turning our project into a startup!",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      content:
        "As a designer, I was struggling to find technical teammates. HackoMates made it easy to connect with developers who valued my design skills. We've participated in 3 hackathons together!",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SC",
    },
    {
      name: "Miguel Rodriguez",
      role: "Data Scientist",
      content:
        "The skill matching on HackoMates is incredible. I found teammates who complemented my technical abilities perfectly, which made our hackathon experience so much more productive.",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MR",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hear from users who found their dream teams and achieved success together.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
