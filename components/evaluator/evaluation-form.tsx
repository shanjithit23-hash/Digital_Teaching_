"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send } from "lucide-react"

const metrics = [
  { key: "contentQuality", label: "Content Quality", description: "Relevance, accuracy, and depth of teaching materials" },
  { key: "studentEngagement", label: "Student Engagement", description: "Interaction techniques and participation strategies" },
  { key: "assessmentDesign", label: "Assessment Design", description: "Quality and fairness of evaluation methods" },
  { key: "technologyUsage", label: "Technology Usage", description: "Effective use of digital tools and platforms" },
]

const courses = [
  "CS 101 - Intro to Computer Science",
  "CS 201 - Data Structures",
  "CS 301 - Machine Learning",
  "ENG 101 - English Composition",
  "MATH 201 - Linear Algebra",
]

const instructors = [
  "Dr. James Wilson",
  "Prof. Maria Garcia",
  "Dr. Robert Chen",
  "Prof. Amara Okafor",
  "Dr. Liam O'Brien",
]

export function EvaluationForm() {
  const [scores, setScores] = useState<Record<string, number[]>>({
    contentQuality: [3],
    studentEngagement: [3],
    assessmentDesign: [3],
    technologyUsage: [3],
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">Digital Teaching Evaluation Form</CardTitle>
        <CardDescription>Rate each dimension on a scale of 1 (Poor) to 5 (Excellent)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Course</Label>
            <Select>
              <SelectTrigger className="bg-card text-foreground">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Instructor</Label>
            <Select>
              <SelectTrigger className="bg-card text-foreground">
                <SelectValue placeholder="Select an instructor" />
              </SelectTrigger>
              <SelectContent>
                {instructors.map((i) => (
                  <SelectItem key={i} value={i}>{i}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-5">
          {metrics.map((metric) => (
            <div key={metric.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium text-foreground">{metric.label}</Label>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                  {scores[metric.key]?.[0] ?? 3}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-4">1</span>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={scores[metric.key]}
                  onValueChange={(value) =>
                    setScores((prev) => ({ ...prev, [metric.key]: value }))
                  }
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-4">5</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Comments</Label>
          <Textarea
            placeholder="Provide additional observations or recommendations..."
            className="min-h-[100px] bg-card text-foreground resize-none"
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
        >
          <Send className="mr-2 h-4 w-4" />
          {submitted ? "Evaluation Submitted!" : "Submit Evaluation"}
        </Button>
      </CardContent>
    </Card>
  )
}
