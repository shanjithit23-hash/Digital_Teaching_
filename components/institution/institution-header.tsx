import Link from "next/link"
import { ChevronLeft, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function InstitutionHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="h-5 w-px bg-border" />
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-heading text-sm font-semibold text-foreground">DTEB Tool</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">Prof. Elizabeth Hart</p>
            <p className="text-xs text-muted-foreground">Institution Head</p>
          </div>
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">EH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
