"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BarChart3, Users, Calendar, Briefcase, MessageSquare, Settings, LogOut, Search, UserPlus, PlusCircle, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const BlurredBackground = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "absolute inset-0 -z-10 bg-white/80 backdrop-blur-[2px]",
      className
    )}
    {...props}
  />
)

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white">
        <div className="flex h-16 items-center border-b bg-purple-600 px-6">
          <h2 className="text-lg font-semibold text-white">Alumni Admin</h2>
        </div>
        <nav className="space-y-1 p-4">
          <Button variant="ghost" className="w-full justify-start gap-2 bg-purple-50 text-purple-600">
            <BarChart3 className="h-5 w-5" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Users className="h-5 w-5" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Calendar className="h-5 w-5" />
            Events
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Briefcase className="h-5 w-5" />
            Jobs
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <MessageSquare className="h-5 w-5" />
            Feedback
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <LogOut className="h-5 w-5" />
            Exit
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex flex-1 flex-col">
        {/* Top Navigation */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="ring-2 ring-purple-500 ring-offset-2">
              <AvatarImage src="/placeholder.svg" alt="John Doe" className="object-cover" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">John Doe</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <BlurredBackground />
          {/* Metrics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Users</p>
                  <h3 className="text-2xl font-bold">5,234</h3>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Active Events</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Job Postings</p>
                  <h3 className="text-2xl font-bold">48</h3>
                </div>
                <Briefcase className="h-8 w-8 text-purple-600" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Donations</p>
                  <h3 className="text-2xl font-bold">$52,389</h3>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </CardContent>
            </Card>
          </div>

          {/* Lists */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Recent Users */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Recent Users</h4>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((user) => (
                    <div key={user} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 ring-2 ring-purple-300 ring-offset-2">
                          <AvatarFallback>U{user}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">User {user}</p>
                          <p className="text-xs text-gray-500">user{user}@example.com</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">View All Users</Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Upcoming Events</h4>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((event) => (
                    <div key={event} className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 ring-2 ring-purple-300 ring-offset-2">
                        <Calendar className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Event {event}</p>
                        <p className="text-xs text-gray-500">Date: 2023-05-15</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">View All Events</Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                  <UserPlus className="h-4 w-4" />
                  Add New User
                </Button>
                <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-4 w-4" />
                  Create Event
                </Button>
                <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="h-4 w-4" />
                  Post New Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

