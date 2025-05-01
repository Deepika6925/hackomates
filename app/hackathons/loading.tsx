import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function HackathonsLoading() {
  return (
    <div className="container py-12">
      <div className="space-y-4">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-64 space-y-4">
          <Skeleton className="h-10 w-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <div className="flex-1">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
