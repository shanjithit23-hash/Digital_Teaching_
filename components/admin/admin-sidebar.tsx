"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Building2,
  BarChart3,
  Target,
  Users,
  FileText,
  GraduationCap,
  ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Institutions", href: "/admin#institutions", icon: Building2 },
  { label: "Metrics", href: "/admin#metrics", icon: BarChart3 },
  { label: "Benchmarks", href: "/admin#benchmarks", icon: Target },
  { label: "Users", href: "/admin#users", icon: Users },
  { label: "Audit Logs", href: "/admin#audit", icon: FileText },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
        <GraduationCap className="h-6 w-6 text-sidebar-primary" />
        <span className="font-heading text-sm font-semibold text-sidebar-foreground">DTEB Tool</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === "/admin" && pathname === "/admin")
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-sidebar-border px-3 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </aside>
  )
}
