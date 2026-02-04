"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Target, Users } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const metricsData = [
  { name: "Content Quality", weightage: "25%", status: "Active", category: "Pedagogy" },
  { name: "Student Engagement", weightage: "25%", status: "Active", category: "Interaction" },
  { name: "Assessment Design", weightage: "20%", status: "Active", category: "Evaluation" },
  { name: "Technology Usage", weightage: "15%", status: "Active", category: "Digital Skills" },
  { name: "Course Organization", weightage: "10%", status: "Active", category: "Structure" },
  { name: "Feedback Responsiveness", weightage: "5%", status: "Draft", category: "Communication" },
]

export function AdminMetricsTable() {
  return (
    <div className="space-y-4">
      <Card className="border border-border">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-base font-semibold text-foreground">Configured Metrics</CardTitle>
              <CardDescription>Evaluation criteria and their weightage distribution</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="mr-1.5 h-4 w-4" />
                Add Metric
              </Button>
              <Button size="sm" variant="outline">
                <Target className="mr-1.5 h-4 w-4" />
                Define Benchmark
              </Button>
              <Button size="sm" variant="outline">
                <Users className="mr-1.5 h-4 w-4" />
                Manage Users
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Metric Name</TableHead>
                  <TableHead className="text-muted-foreground">Category</TableHead>
                  <TableHead className="text-muted-foreground">Weightage</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metricsData.map((metric) => (
                  <TableRow key={metric.name} className="border-border">
                    <TableCell className="font-medium text-foreground">{metric.name}</TableCell>
                    <TableCell className="text-muted-foreground">{metric.category}</TableCell>
                    <TableCell className="text-foreground">{metric.weightage}</TableCell>
                    <TableCell>
                      <Badge
                        variant={metric.status === "Active" ? "default" : "secondary"}
                        className={
                          metric.status === "Active"
                            ? "bg-chart-3/15 text-chart-3 hover:bg-chart-3/20 border-0"
                            : "bg-muted text-muted-foreground border-0"
                        }
                      >
                        {metric.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
