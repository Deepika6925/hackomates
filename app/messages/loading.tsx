import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function MessagesLoading() {
  return (
    <div className="container py-12">
      <div className="flex flex-col space-y-8">
        <div>
          <Skeleton className="h-10 w-[200px]" />
          <Skeleton className="h-4 w-[350px] mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[600px]">
          <Card className="md:col-span-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="p-4 border-b">
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex-1 p-4 space-y-4">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
            </div>
            <div className="p-4 border-t">
              <Skeleton className="h-9 w-full" />
            </div>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3 overflow-hidden flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <div className="text-center space-y-2">
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-[200px] mx-auto" />
                <Skeleton className="h-4 w-[300px] mx-auto" />
                <Skeleton className="h-10 w-[150px] mx-auto mt-4" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
