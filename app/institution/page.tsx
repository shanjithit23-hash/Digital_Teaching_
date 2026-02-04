import { InstitutionHeader } from "@/components/institution/institution-header"
import { InstitutionSummaryCards } from "@/components/institution/institution-summary-cards"
import { InstitutionCharts } from "@/components/institution/institution-charts"
import { InstitutionDepartmentTable } from "@/components/institution/institution-department-table"

export default function InstitutionHeadDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <InstitutionHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Institution Head Dashboard</h2>
          <p className="text-sm text-muted-foreground">Strategic oversight and department analytics</p>
        </div>
        <div className="space-y-6">
          <InstitutionSummaryCards />
          <InstitutionCharts />
          <InstitutionDepartmentTable />
        </div>
      </main>
    </div>
  )
}
