import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"

const recentEvaluations = [
  {
    instructor: "Dr. James Wilson",
    course: "CS 101 - Intro to Computer Science",
    date: "Feb 10, 2026",
    overallScore: 4.2,
    status: "Submitted",
  },
  {
    instructor: "Prof. Maria Garcia",
    course: "CS 201 - Data Structures",
    date: "Feb 8, 2026",
    overallScore: 3.8,
    status: "Submitted",
  },
  {
    instructor: "Dr. Robert Chen",
    course: "CS 301 - Machine Learning",
    date: "Feb 5, 2026",
    overallScore: 4.5,
    status: "Submitted",
  },
  {
    instructor: "Prof. Amara Okafor",
    course: "MATH 201 - Linear Algebra",
    date: "Jan 28, 2026",
    overallScore: 3.6,
    status: "Pending Review",
  },
  {
    instructor: "Dr. Liam O'Brien",
    course: "ENG 101 - English Composition",
    date: "Jan 22, 2026",
    overallScore: 4.0,
    status: "Submitted",
  },
]

export function RecentEvaluations() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">Recently Submitted</CardTitle>
        <CardDescription>Your evaluation history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentEvaluations.map((evaluation, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
              <div className="mt-0.5">
                {evaluation.status === "Submitted" ? (
                  <CheckCircle2 className="h-4 w-4 text-chart-3" />
                ) : (
                  <Clock className="h-4 w-4 text-chart-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{evaluation.instructor}</p>
                <p className="text-xs text-muted-foreground truncate">{evaluation.course}</p>
                <p className="mt-1 text-xs text-muted-foreground">{evaluation.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="text-sm font-bold text-foreground">{evaluation.overallScore.toFixed(1)}</span>
                <Badge
                  variant="secondary"
                  className={
                    evaluation.status === "Submitted"
                      ? "bg-chart-3/15 text-chart-3 border-0 text-xs"
                      : "bg-chart-4/15 text-chart-4 border-0 text-xs"
                  }
                >
                  {evaluation.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
