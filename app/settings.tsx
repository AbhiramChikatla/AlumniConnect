"use client"
import { useState } from 'react'
import { 
  Search, Bell, ChevronDown, Globe, Lock, Shield, Bell as BellIcon, 
  Sliders, Database, LifeBuoy, LogOut, BarChart2, Users, Calendar, Briefcase, 
  MessageSquare, Settings, Upload, Eye, EyeOff, AlertTriangle, Zap
} from 'lucide-react'

export default function SettingsAdminPage() {
  const [activeSection, setActiveSection] = useState('Settings')
  const [language, setLanguage] = useState('English')
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    sms: false,
    inApp: true
  })
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    emailVisibility: 'contacts'
  })

  const menuItems = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Users', icon: Users },
    { name: 'Events', icon: Calendar },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Feedback', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ]

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value)
    // In a real application, you would apply the language change here
  }

  const handle2FAToggle = () => {
    setTwoFAEnabled(!twoFAEnabled)
    // In a real application, you would set up or disable 2FA here
  }

  const handleNotificationPreferenceChange = (type: 'email' | 'sms' | 'inApp') => {
    setNotificationPreferences(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const handlePrivacySettingChange = (setting: 'profileVisibility' | 'emailVisibility', value: string) => {
    setPrivacySettings(prev => ({ ...prev, [setting]: value }))
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 bg-[#7F56D9]">
          <h1 className="text-xl font-bold text-white">Alumni Admin</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`flex items-center w-full px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-[#7F56D9] transition-colors ${
                activeSection === item.name ? 'bg-gray-100 text-[#7F56D9] border-r-4 border-[#7F56D9]' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold text-gray-800">{activeSection}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">3</span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Admin"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className=" text-gray-600">John Doe</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              
              {/* General Settings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7F56D9] text-gray-600 focus:border-[#7F56D9] sm:text-sm" defaultValue="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7F56D9] text-gray-600 focus:border-[#7F56D9] sm:text-sm" defaultValue="john.doe@example.com" />
                  </div>
                  <div>
                    <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="h-full w-full object-cover" />
                      </span>
                      <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]">
                        Change
                      </button>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                    <select
                      id="language"
                      name="language"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none text-gray-600 focus:ring-[#7F56D9] focus:border-[#7F56D9] sm:text-sm rounded-md"
                      value={language}
                      onChange={handleLanguageChange}
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Account Settings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div>
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors">
                      Change Password
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Two-Factor Authentication</span>
                      <span className="text-sm text-gray-500">Add an extra layer of security to your account</span>
                    </span>
                    <button
                      type="button"
                      className={`${
                        twoFAEnabled ? 'bg-[#7F56D9]' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]`}
                      onClick={handle2FAToggle}
                    >
                      <span className="sr-only">Enable 2FA</span>
                      <span
                        className={`${
                          twoFAEnabled ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      >
                        <span
                          className={`${
                            twoFAEnabled
                              ? 'opacity-0 ease-out duration-100'
                              : 'opacity-100 ease-in duration-200'
                          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                        >
                          <Lock className="h-3 w-3 text-gray-400" />
                        </span>
                        <span
                          className={`${
                            twoFAEnabled
                              ? 'opacity-100 ease-in duration-200'
                              : 'opacity-0 ease-out duration-100'
                          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
                        >
                          <Shield className="h-3 w-3 text-[#7F56D9]" />
                        </span>
                      </span>
                    </button>
                  </div>
                  <div>
                    <button className="text-[#7F56D9] hover:text-[#6A4AC5] transition-colors">
                      View Login Activity
                    </button>
                  </div>
                  <div>
                    <button className="text-red-600 hover:text-red-700 transition-colors">
                      Deactivate Account
                    </button>
                  </div>
                </div>
              </section>

              {/* Notification Settings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Email Notifications</span>
                      <span className="text-sm text-gray-500">Receive notifications via email</span>
                    </span>
                    <button
                      type="button"
                      className={`${
                        notificationPreferences.email ? 'bg-[#7F56D9]' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]`}
                      onClick={() => handleNotificationPreferenceChange('email')}
                    >
                      <span className="sr-only">Enable email notifications</span>
                      <span
                        className={`${
                          notificationPreferences.email ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <span className="text-sm font-medium text-gray-900">SMS Notifications</span>
                      <span className="text-sm text-gray-500">Receive notifications via SMS</span>
                    </span>
                    <button
                      type="button"
                      className={`${
                        notificationPreferences.sms ? 'bg-[#7F56D9]' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]`}
                      onClick={() => handleNotificationPreferenceChange('sms')}
                    >
                      <span className="sr-only">Enable SMS notifications</span>
                      <span
                        className={`${
                          notificationPreferences.sms ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex-grow flex flex-col">
                      <span className="text-sm font-medium text-gray-900">In-App Notifications</span>
                      <span className="text-sm text-gray-500">Receive notifications within the app</span>
                    </span>
                    <button
                      type="button"
                      className={`${
                        notificationPreferences.inApp ? 'bg-[#7F56D9]' : 'bg-gray-200'
                      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]`}
                      onClick={() => handleNotificationPreferenceChange('inApp')}
                    >
                      <span className="sr-only">Enable in-app notifications</span>
                      <span
                        className={`${
                          notificationPreferences.inApp ? 'translate-x-5' : 'translate-x-0'
                        } pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              {/* Privacy Settings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="profile-visibility" className="block text-sm font-medium text-gray-700">Profile Visibility</label>
                    <select
                      id="profile-visibility"
                      name="profile-visibility"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 text-gray-600 focus:outline-none focus:ring-[#7F56D9] focus:border-[#7F56D9] sm:text-sm rounded-md"
                      value={privacySettings.profileVisibility}
                      onChange={(e) => handlePrivacySettingChange('profileVisibility', e.target.value)}
                    >
                      <option value="public">Public</option>
                      <option value="alumni">Alumni Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email-visibility" className="block text-sm font-medium text-gray-700">Email Visibility</label>
                    <select
                      id="email-visibility"
                      name="email-visibility"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none text-gray-600 focus:ring-[#7F56D9] focus:border-[#7F56D9] sm:text-sm rounded-md"
                      value={privacySettings.emailVisibility}
                      onChange={(e) => handlePrivacySettingChange('emailVisibility', e.target.value)}
                    >
                      <option value="public">Public</option>
                      <option value="contacts">Contacts Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Security Settings */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors mb-2 sm:mb-0">
                      Manage Login Alerts
                    </button>
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors">
                      View Security Incidents
                    </button>
                  </div>
                </div>
              </section>

              {/* Backup and Data Export */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Backup and Data Export</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors mb-2 sm:mb-0">
                      Export User Data
                    </button>
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors">
                      Export Event Data
                    </button>
                  </div>
                </div>
              </section>

              {/* Support and Feedback */}
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support and Feedback</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:space-x-4">
                    <button className="bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors mb-2 sm:mb-0">
                      Contact Support
                    </button>
                    <a href="#" className="text-[#7F56D9] hover:text-[#6A4AC5] transition-colors self-center">
                      Visit Help Center
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="text-gray-500">
                © 2024 Alumni Association. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}