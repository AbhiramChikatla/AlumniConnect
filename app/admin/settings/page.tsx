import { BellRing, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
// import Sidebar from "./sidebar"
import SidebarAdmin from '@/components/admin_sidebar'
// import { Sidebar } from '@/components/sidebar'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="text-xl font-semibold bg-purple-600 text-white px-4 py-2 rounded">Alumni Admin</div>
          <div className="flex-1 flex items-center gap-4 justify-end">
            <div className="relative w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <div className="flex items-center gap-2">
              <BellRing className="h-5 w-5" />
              <span className="font-medium">John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <SidebarAdmin />
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="p-6 space-y-6">
                <h1 className="text-xl font-semibold">Settings</h1>

                <section>
                  <h2 className="text-lg font-medium mb-4">General Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <div className="text-sm text-muted-foreground">John Doe</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <div className="text-sm text-muted-foreground">john.doe@example.com</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Profile Picture</label>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <Button variant="outline" size="sm">
                          Change
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Language</label>
                      <div className="text-sm text-muted-foreground">English</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Account Settings</h2>
                  <div className="space-y-4">
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Change Password
                    </Button>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
                      </div>
                      <Switch />
                    </div>
                    <Button variant="link" className="text-purple-600 p-0 h-auto">
                      View Login Activity
                    </Button>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Notification Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive notifications via email</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">SMS Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive notifications via SMS</div>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">In-App Notifications</div>
                        <div className="text-sm text-muted-foreground">Receive notifications within the app</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Privacy Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">Profile Visibility</div>
                      <div className="text-sm text-muted-foreground">Public</div>
                    </div>
                    <div>
                      <div className="font-medium">Email Visibility</div>
                      <div className="text-sm text-muted-foreground">Contacts Only</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Security Settings</h2>
                  <div className="flex gap-2">
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Manage Login Alerts
                    </Button>
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      View Security Incidents
                    </Button>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Backup and Data Export</h2>
                  <div className="flex gap-2">
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Export User Data
                    </Button>
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Export Event Data
                    </Button>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-medium mb-4">Support and Feedback</h2>
                  <div className="flex gap-2">
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Contact Support
                    </Button>
                    <Button variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
                      Visit Help Center
                    </Button>
                  </div>
                </section>
              </div>
            </div>

            <footer className="mt-6 text-center text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-4">
                <span>© 2024 Alumni Association. All rights reserved.</span>
                <Button variant="link" className="text-sm h-auto p-0">Privacy Policy</Button>
                <Button variant="link" className="text-sm h-auto p-0">Terms of Service</Button>
                <Button variant="link" className="text-sm h-auto p-0">Contact Us</Button>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}

