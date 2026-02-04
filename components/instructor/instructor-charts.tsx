"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const radarData = [
  { metric: "Content Quality", score: 4.5 },
  { metric: "Student Engagement", score: 4.0 },
  { metric: "Assessment Design", score: 3.8 },
  { metric: "Technology Usage", score: 4.5 },
  { metric: "Course Organization", score: 4.2 },
]

const benchmarkData = [
  { metric: "Content Quality", self: 4.5, department: 3.9, institution: 3.6 },
  { metric: "Engagement", self: 4.0, department: 3.7, institution: 3.5 },
  { metric: "Assessment", self: 3.8, department: 3.8, institution: 3.4 },
  { metric: "Technology", self: 4.5, department: 3.6, institution: 3.3 },
  { metric: "Organization", self: 4.2, department: 4.0, institution: 3.7 },
]

export function InstructorCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-foreground">Metric-wise Performance</CardTitle>
          <CardDescription>Your scores across evaluation dimensions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="72%">
              <PolarGrid stroke="hsl(214, 15%, 88%)" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 5]}
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 10 }}
                tickCount={6}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="hsl(215, 70%, 45%)"
                fill="hsl(215, 70%, 45%)"
                fillOpacity={0.25}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border border-border">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-foreground">Benchmark Comparison</CardTitle>
          <CardDescription>Self vs Department vs Institution averages</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={benchmarkData} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 15%, 88%)" />
              <XAxis
                dataKey="metric"
                tick={{ fill: "hsl(215, 10%, 45%)", fontSize: 11 }}
                axisLine={{ stroke: "hsl(214, 15%, 88%)" }}
                tickLine={false}
              />
              <YAxis
                domain={[0, 5]}
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
              <Legend
                wrapperStyle={{ fontSize: "12px" }}
              />
              <Bar dataKey="self" name="Self" fill="hsl(215, 70%, 45%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="department" name="Department" fill="hsl(200, 65%, 48%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="institution" name="Institution" fill="hsl(38, 80%, 55%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
