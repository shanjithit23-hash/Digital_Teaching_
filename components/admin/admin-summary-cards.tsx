import { Building2, BarChart3, FileCheck, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const summaryData = [
  {
    title: "Total Institutions",
    value: "24",
    change: "+2 this quarter",
    icon: Building2,
    iconColor: "text-primary",
  },
  {
    title: "Active Metrics",
    value: "12",
    change: "4 categories",
    icon: BarChart3,
    iconColor: "text-accent",
  },
  {
    title: "Evaluations Submitted",
    value: "1,847",
    change: "+312 this month",
    icon: FileCheck,
    iconColor: "text-chart-3",
  },
  {
    title: "System Health",
    value: "99.8%",
    change: "All systems normal",
    icon: Activity,
    iconColor: "text-chart-3",
  },
]

export function AdminSummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item) => (
        <Card key={item.title} className="border border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className={`h-5 w-5 ${item.iconColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{item.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
