"use client"
import { useState } from 'react'
import { 
  Search, Filter, Plus, Edit, Trash2, Bell, Download, Calendar, MapPin, Users, 
  ChevronDown, X, BarChart2, Briefcase, Settings, 
} from 'lucide-react'

export default function EventsAdminPage() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Annual Alumni Gala', date: '2023-09-15', location: 'Grand Hall, New York', status: 'upcoming', attendees: 150 },
    { id: 2, name: 'Career Fair 2023', date: '2023-10-05', location: 'University Campus', status: 'upcoming', attendees: 500 },
    { id: 3, name: 'Homecoming Weekend', date: '2023-11-20', location: 'University Stadium', status: 'upcoming', attendees: 1000 },
    { id: 4, name: 'Alumni Networking Mixer', date: '2023-08-10', location: 'Downtown Conference Center', status: 'past', attendees: 75 },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ status: '', location: '' })
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '', description: '', speakers: '' })
  const [activeSection, setActiveSection] = useState('Events')

  const menuItems = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Users', icon: Users },
    { name: 'Events', icon: Calendar },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Settings', icon: Settings },
  ]

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.status === '' || event.status === filters.status) &&
    (filters.location === '' || event.location.includes(filters.location))
  )

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    setEvents([...events, { ...newEvent, id: events.length + 1, status: 'upcoming', attendees: 0 }])
    setNewEvent({ name: '', date: '', location: '', description: '', speakers: '' })
    setIsAddEventModalOpen(false)
  }

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800'
      case 'ongoing':
        return 'bg-blue-100 text-blue-800'
      case 'past':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
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
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
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
                  <span className="font-medium">John Doe</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Events Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="relative mb-4 md:mb-0 md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex space-x-4">
                  <select
                    className="pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="">All Statuses</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="past">Past</option>
                  </select>
                  <select
                    className="pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="University Campus">University Campus</option>
                    <option value="Downtown">Downtown</option>
                  </select>
                  <button
                    className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    onClick={() => setFilters({ status: '', location: '' })}
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Events List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">All Events</h2>
                <button
                  className="flex items-center px-4 py-2 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6A4AC5] transition-colors"
                  onClick={() => setIsAddEventModalOpen(true)}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Event
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                        <div className="flex space-x-2">
                          <button className="text-[#7F56D9] hover:text-[#6A4AC5]">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteEvent(event.id)}>
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <Bell className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Events Button */}
            <div className="mt-8 flex justify-end">
              <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export Events
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Add New Event Modal */}
      {isAddEventModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add New Event</h2>
              <button onClick={() => setIsAddEventModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddEvent}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newEvent.name}
                  onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <label htmlFor="speakers" className="block text-sm font-medium text-gray-700 mb-1">Guest Speakers</label>
                <input
                  type="text"
                  id="speakers"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newEvent.speakers}
                  onChange={(e) => setNewEvent({ ...newEvent, speakers: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors"
              >
                Add Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}