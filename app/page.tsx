import Link from "next/link"
import {
  ShieldCheck,
  ClipboardCheck,
  GraduationCap,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roles = [
  {
    title: "Administrator",
    description: "System configuration, metrics management, and institutional oversight.",
    href: "/admin",
    icon: ShieldCheck,
    color: "bg-primary text-primary-foreground",
  },
  {
    title: "Evaluator",
    description: "Submit and track teaching evaluations for instructors.",
    href: "/evaluator",
    icon: ClipboardCheck,
    color: "bg-accent text-accent-foreground",
  },
  {
    title: "Instructor",
    description: "View personal effectiveness scores, benchmarks, and insights.",
    href: "/instructor",
    icon: GraduationCap,
    color: "bg-chart-3 text-primary-foreground",
  },
  {
    title: "Institution Head",
    description: "Strategic oversight, department analytics, and reporting.",
    href: "/institution",
    icon: Building2,
    color: "bg-chart-4 text-foreground",
  },
]

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="mb-2 flex items-center justify-center gap-3">
          <GraduationCap className="h-10 w-10 text-primary" />
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Digital Teaching Effectiveness Benchmarking Tool
          </h1>
        </div>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground text-balance leading-relaxed">
          A comprehensive platform for evaluating and benchmarking digital teaching
          effectiveness across institutions. Select your role to get started.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {roles.map((role) => (
            <Link key={role.title} href={role.href} className="group">
              <Card className="h-full border border-border transition-all hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${role.color}`}
                  >
                    <role.icon className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground text-left">
                    {role.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
