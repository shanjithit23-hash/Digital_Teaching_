"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts"

const departmentData = [
  { department: "Computer Sci.", score: 4.1 },
  { department: "Mathematics", score: 3.9 },
  { department: "Engineering", score: 3.8 },
  { department: "Business", score: 3.7 },
  { department: "Education", score: 3.6 },
  { department: "Humanities", score: 3.5 },
  { department: "Sciences", score: 3.4 },
]

const trendData = [
  { period: "Q1 2025", average: 3.4, benchmark: 3.5 },
  { period: "Q2 2025", average: 3.5, benchmark: 3.5 },
  { period: "Q3 2025", average: 3.55, benchmark: 3.6 },
  { period: "Q4 2025", average: 3.6, benchmark: 3.6 },
  { period: "Q1 2026", average: 3.72, benchmark: 3.7 },
]

export function InstitutionCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-foreground">Department-wise Effectiveness</CardTitle>
          <CardDescription>Average teaching effectiveness score by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={departmentData} layout="vertical" barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 15%, 88%)" horizontal={true} vertical={false} />
              <XAxis
                type="number"
                domain={[0, 5]}
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
                axisLine={{ stroke: "hsl(214, 15%, 88%)" }}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="department"
                width={100}
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214, 15%, 88%)",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="score" name="Avg. Score" fill="hsl(215, 70%, 45%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-foreground">Effectiveness Trend</CardTitle>
          <CardDescription>Institution average over time vs national benchmark</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 15%, 88%)" />
              <XAxis
                dataKey="period"
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
                axisLine={{ stroke: "hsl(214, 15%, 88%)" }}
                tickLine={false}
              />
              <YAxis
                domain={[3, 4]}
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
                axisLine={{ stroke: "hsl(214, 15%, 88%)" }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  border: "1px solid hsl(214, 15%, 88%)",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="average"
                name="Institution Average"
                stroke="hsl(215, 70%, 45%)"
                strokeWidth={2}
                dot={{ fill: "hsl(215, 70%, 45%)", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                name="National Benchmark"
                stroke="hsl(38, 80%, 55%)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(38, 80%, 55%)", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
