import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const strengths = [
  "Excellent integration of digital tools and multimedia resources",
  "Content quality consistently rated above department average",
  "Strong course organization and clear learning objectives",
]

const improvements = [
  "Assessment design could incorporate more formative evaluation methods",
  "Increase student engagement through interactive discussion forums",
  "Consider peer assessment strategies for collaborative learning",
]

export function InstructorInsights() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
            <ArrowUpRight className="h-5 w-5 text-chart-3" />
            Strengths
          </CardTitle>
          <CardDescription>Areas where you excel compared to benchmarks</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {strengths.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chart-3" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
            <ArrowDownRight className="h-5 w-5 text-chart-4" />
            Improvement Areas
          </CardTitle>
          <CardDescription>Recommendations based on evaluation data</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {improvements.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-chart-4" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
