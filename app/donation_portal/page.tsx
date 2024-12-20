"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Clock8, Menu, Home, Users, BookOpen } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DonationFormWithNavbar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold text-xl mr-6">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <span className="text-purple-600">AlmaConnect</span>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 flex-1">
            <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Networking Hub
            </Button>
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Portals
            </Button>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden w-64 flex-col gap-2 border-r p-6 lg:flex">
          <nav className="flex flex-col gap-2">
            <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
              <Home className="h-4 w-4" />
              Home
            </a>
            <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
              Create
            </a>
            <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
              Trending
            </a>
            <a className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900" href="#">
              Donate
            </a>
          </nav>
          <div className="mt-4">
            <h2 className="mb-2 px-3 text-sm font-semibold">Topics</h2>
            <nav className="flex flex-col gap-2">
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Internships
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Workshops
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Events
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Coursework
              </a>
            </nav>
          </div>
          <div className="mt-4">
            <h2 className="mb-2 px-3 text-sm font-semibold">Networking</h2>
            <nav className="flex flex-col gap-2">
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Inbox
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                Success Stories
              </a>
              <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900" href="#">
                <Users className="h-4 w-4" />
                Alumni Directory
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="donate" className="flex-1">Donate</TabsTrigger>
              <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
              <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex-1">Leaderboard</TabsTrigger>
            </TabsList>
            <TabsContent value="donate" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">Make a Donation</h3>
                        <p className="text-sm text-gray-500">Support an event with your contribution</p>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-name">Event Name</Label>
                          <Input id="event-name" placeholder="Enter event name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event-date">Event Date</Label>
                          <Input id="event-date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amount">Donation Amount</Label>
                          <Input id="amount" placeholder="Enter amount" type="number" />
                        </div>
                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <RadioGroup defaultValue="card">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card">Credit/Debit Card</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="upi" id="upi" />
                              <Label htmlFor="upi">UPI</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Make Donation</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Status</h3>
                      <div className="flex items-center gap-2 text-yellow-600">
                        <Clock8 className="h-4 w-4" />
                        <span>Pending</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="history">
              <Card>
                <CardContent className="p-6">
                  <p>Donation history will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="events">
              <Card>
                <CardContent className="p-6">
                  <p>Events will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="leaderboard">
              <Card>
                <CardContent className="p-6">
                  <p>Leaderboard will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

