import { EvaluatorHeader } from "@/components/evaluator/evaluator-header"
import { EvaluationForm } from "@/components/evaluator/evaluation-form"
import { RecentEvaluations } from "@/components/evaluator/recent-evaluations"

export default function EvaluatorDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <EvaluatorHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Evaluator Dashboard</h2>
          <p className="text-sm text-muted-foreground">Submit and track teaching evaluations</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <EvaluationForm />
          </div>
          <div className="lg:col-span-2">
            <RecentEvaluations />
          </div>
        </div>
      </main>
    </div>
  )
}
