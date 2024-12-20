"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, Users, Calendar, Briefcase, MessageSquare, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { name: "Users", href: "/users", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Feedback", href: "/feedback", icon: MessageSquare },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function SidebarAdmin() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-white">
      <nav className="flex flex-col gap-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

