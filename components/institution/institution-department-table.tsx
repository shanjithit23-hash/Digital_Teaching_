"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const departmentTableData = [
  { name: "Computer Science", avgScore: 4.1, instructors: 18, evaluations: 342, benchmarkStatus: "Above" },
  { name: "Mathematics", avgScore: 3.9, instructors: 14, evaluations: 278, benchmarkStatus: "Above" },
  { name: "Engineering", avgScore: 3.8, instructors: 22, evaluations: 410, benchmarkStatus: "On Target" },
  { name: "Business Administration", avgScore: 3.7, instructors: 16, evaluations: 298, benchmarkStatus: "On Target" },
  { name: "Education", avgScore: 3.6, instructors: 12, evaluations: 215, benchmarkStatus: "Below" },
  { name: "Humanities", avgScore: 3.5, instructors: 10, evaluations: 178, benchmarkStatus: "Below" },
  { name: "Natural Sciences", avgScore: 3.4, instructors: 15, evaluations: 256, benchmarkStatus: "Below" },
]

function getBenchmarkBadgeStyles(status: string) {
  switch (status) {
    case "Above":
      return "bg-chart-3/15 text-chart-3 border-0"
    case "On Target":
      return "bg-primary/15 text-primary border-0"
    case "Below":
      return "bg-chart-5/15 text-chart-5 border-0"
    default:
      return "bg-muted text-muted-foreground border-0"
  }
}

export function InstitutionDepartmentTable() {
  return (
    <Card className="border border-border">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-foreground">Department Performance</CardTitle>
            <CardDescription>Average scores and benchmark status by department</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            <Download className="mr-1.5 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Department</TableHead>
                <TableHead className="text-muted-foreground text-center">Avg. Score</TableHead>
                <TableHead className="text-muted-foreground text-center">Instructors</TableHead>
                <TableHead className="text-muted-foreground text-center">Evaluations</TableHead>
                <TableHead className="text-muted-foreground text-center">Benchmark Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departmentTableData.map((dept) => (
                <TableRow key={dept.name} className="border-border">
                  <TableCell className="font-medium text-foreground">{dept.name}</TableCell>
                  <TableCell className="text-center text-foreground font-medium">{dept.avgScore.toFixed(1)}</TableCell>
                  <TableCell className="text-center text-muted-foreground">{dept.instructors}</TableCell>
                  <TableCell className="text-center text-muted-foreground">{dept.evaluations}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className={getBenchmarkBadgeStyles(dept.benchmarkStatus)}>
                      {dept.benchmarkStatus}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
