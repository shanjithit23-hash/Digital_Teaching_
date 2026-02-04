import { AdminSummaryCards } from "@/components/admin/admin-summary-cards"
import { AdminMetricsTable } from "@/components/admin/admin-metrics-table"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground lg:hidden">Administrator Dashboard</h2>
        <p className="text-sm text-muted-foreground lg:hidden">System overview and configuration</p>
      </div>
      <AdminSummaryCards />
      <AdminMetricsTable />
    </div>
  )
}
