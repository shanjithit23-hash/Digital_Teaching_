import { InstructorHeader } from "@/components/instructor/instructor-header"
import { InstructorKpiCards } from "@/components/instructor/instructor-kpi-cards"
import { InstructorCharts } from "@/components/instructor/instructor-charts"
import { InstructorInsights } from "@/components/instructor/instructor-insights"

export default function InstructorDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <InstructorHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Instructor Dashboard</h2>
          <p className="text-sm text-muted-foreground">Personal effectiveness scores and benchmarking insights</p>
        </div>
        <div className="space-y-6">
          <InstructorKpiCards />
          <InstructorCharts />
          <InstructorInsights />
        </div>
      </main>
    </div>
  )
}
