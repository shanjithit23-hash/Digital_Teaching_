import { TrendingUp, Users, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kpiData = [
  {
    title: "Overall Effectiveness Score",
    value: "4.2",
    subtext: "out of 5.0",
    icon: TrendingUp,
    iconColor: "text-primary",
    highlight: true,
  },
  {
    title: "Department Average",
    value: "3.8",
    subtext: "Computer Science Dept.",
    icon: Users,
    iconColor: "text-accent",
    highlight: false,
  },
  {
    title: "Institution Average",
    value: "3.6",
    subtext: "Across all departments",
    icon: Building2,
    iconColor: "text-chart-4",
    highlight: false,
  },
]

export function InstructorKpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {kpiData.map((item) => (
        <Card
          key={item.title}
          className={`border ${item.highlight ? "border-primary/30 bg-primary/5" : "border-border"}`}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className={`h-5 w-5 ${item.iconColor}`} />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-foreground">{item.value}</span>
              <span className="text-sm text-muted-foreground">{item.subtext}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
