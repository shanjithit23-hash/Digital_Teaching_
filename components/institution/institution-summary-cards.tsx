import { TrendingUp, Award, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const summaryData = [
  {
    title: "Avg. Teaching Effectiveness",
    value: "3.72",
    subtext: "out of 5.0",
    icon: TrendingUp,
    iconColor: "text-primary",
  },
  {
    title: "Top Performing Department",
    value: "Computer Science",
    subtext: "Avg. score: 4.1",
    icon: Award,
    iconColor: "text-chart-3",
  },
  {
    title: "Lowest Scoring Metric",
    value: "Technology Usage",
    subtext: "Avg. score: 3.2",
    icon: AlertTriangle,
    iconColor: "text-chart-5",
  },
]

export function InstitutionSummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {summaryData.map((item) => (
        <Card key={item.title} className="border border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className={`h-5 w-5 ${item.iconColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{item.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">{item.subtext}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
