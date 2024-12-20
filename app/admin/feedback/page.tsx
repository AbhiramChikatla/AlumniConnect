"use client"
import { useState } from 'react'
import { 
  Search, Filter, Plus, Eye, Check, Trash2, Download, Tag,
  BarChart2, Users, Calendar, Briefcase, Settings, Bell, ChevronDown,
  MessageSquare, Clock, ArrowUpRight, Star
} from 'lucide-react'

export default function FeedbackAdminPage() {
  const [complaints, setComplaints] = useState([
    { id: 1, title: 'Login Issue', userName: 'John Doe', date: '2024-09-15', priority: 'high', status: 'open', description: 'Unable to log in to the alumni portal', category: 'technical' },
    { id: 2, title: 'Payment Failure', userName: 'Jane Smith', date: '2024-09-14', priority: 'medium', status: 'open', description: 'Payment for event registration failed', category: 'billing' },
    { id: 3, title: 'Feature Request', userName: 'Mike Johnson', date: '2024-09-13', priority: 'low', status: 'open', description: 'Requesting a job board feature', category: 'feature' },
    { id: 4, title: 'Profile Update Issue', userName: 'Emily Brown', date: '2024-09-12', priority: 'high', status: 'resolved', description: 'Unable to update profile picture', category: 'technical' },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ status: '', priority: '', date: '' })
  const [isAddComplaintModalOpen, setIsAddComplaintModalOpen] = useState(false)
  const [newComplaint, setNewComplaint] = useState({ title: '', userName: '', description: '', priority: 'medium', category: '' })
  const [activeSection, setActiveSection] = useState('Feedback')
  const [selectedComplaints, setSelectedComplaints] = useState<number[]>([])
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false)

  const menuItems = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Users', icon: Users },
    { name: 'Events', icon: Calendar },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Feedback', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ]

  const filteredComplaints = complaints.filter(complaint => 
    (complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     complaint.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     complaint.id.toString().includes(searchTerm)) &&
    (filters.status === '' || complaint.status === filters.status) &&
    (filters.priority === '' || complaint.priority === filters.priority) &&
    (filters.date === '' || complaint.date === filters.date)
  )

  const handleAddComplaint = (e: React.FormEvent) => {
    e.preventDefault()
    setComplaints([...complaints, { ...newComplaint, id: complaints.length + 1, status: 'open', date: new Date().toISOString().split('T')[0] }])
    setNewComplaint({ title: '', userName: '', description: '', priority: 'medium', category: '' })
    setIsAddComplaintModalOpen(false)
  }

  const handleResolveComplaint = (id: number) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? { ...complaint, status: 'resolved' } : complaint
    ))
  }

  const handleDeleteComplaint = (id: number) => {
    setComplaints(complaints.filter(complaint => complaint.id !== id))
  }

  const handleBulkResolve = () => {
    setComplaints(complaints.map(complaint => 
      selectedComplaints.includes(complaint.id) ? { ...complaint, status: 'resolved' } : complaint
    ))
    setSelectedComplaints([])
  }

  const handleBulkDelete = () => {
    setComplaints(complaints.filter(complaint => !selectedComplaints.includes(complaint.id)))
    setSelectedComplaints([])
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
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

        {/* Feedback Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="relative w-full md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search complaints..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex flex-wrap md:flex-nowrap space-y-2 md:space-y-0 md:space-x-4">
                  <select
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="resolved">Resolved</option>
                  </select>
                  <select
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.priority}
                    onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
                  >
                    <option value="">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <input
                    type="date"
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border text-gray-600 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  />
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    onClick={() => setFilters({ status: '', priority: '', date: '' })}
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Complaints List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">All Complaints</h2>
                <div className="flex flex-wrap justify-center md:justify-end space-y-2 md:space-y-0 space-x-0 md:space-x-4">
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6A4AC5] transition-colors"
                    onClick={() => setIsAddComplaintModalOpen(true)}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Complaint
                  </button>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    onClick={handleBulkResolve}
                    disabled={selectedComplaints.length === 0}
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Bulk Resolve
                  </button>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    onClick={handleBulkDelete}
                    disabled={selectedComplaints.length === 0}
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Bulk Delete
                  </button>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => setIsAnalyticsModalOpen(true)}
                  >
                    <BarChart2 className="w-5 h-5 mr-2" />
                    Analytics
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredComplaints.map((complaint) => (
                  <div key={complaint.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                        <input
                          type="checkbox"
                          checked={selectedComplaints.includes(complaint.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedComplaints([...selectedComplaints, complaint.id])
                            } else {
                              setSelectedComplaints(selectedComplaints.filter(id => id !== complaint.id))
                            }
                          }}
                          className="h-4 w-4 text-[#7F56D9] focus:ring-[#7F56D9] border-gray-300 rounded"
                        />
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{complaint.userName}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{complaint.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Tag className="w-4 h-4 mr-2" />
                        <span>{complaint.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority.charAt(0).toUpperCase() + complaint.priority.slice(1)} Priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${complaint.status === 'open' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex justify-end space-x-2 mt-4">
                        <button className="text-[#7F56D9] hover:text-[#6A4AC5]">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-green-600 hover:text-green-800" onClick={() => handleResolveComplaint(complaint.id)}>
                          <Check className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteComplaint(complaint.id)}>
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Complaints Button */}
            <div className="mt-8 flex justify-end">
              <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export Complaints
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Add New Complaint Modal */}
      {isAddComplaintModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Complaint</h2>
            <form onSubmit={handleAddComplaint} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Complaint Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newComplaint.title}
                  onChange={(e) => setNewComplaint({ ...newComplaint, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                <input
                  type="text"
                  id="userName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newComplaint.userName}
                  onChange={(e) => setNewComplaint({ ...newComplaint, userName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newComplaint.description}
                  onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  id="priority"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newComplaint.priority}
                  onChange={(e) => setNewComplaint({ ...newComplaint, priority: e.target.value })}
                  required
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newComplaint.category}
                  onChange={(e) => setNewComplaint({ ...newComplaint, category: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddComplaintModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7F56D9] text-white rounded-md hover:bg-[#6A4AC5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]"
                >
                  Add Complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {isAnalyticsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Feedback Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Average Response Time</h3>
                <p className="text-3xl font-bold text-blue-600">2.5 days</p>
                <p className="text-sm text-blue-500 mt-2">
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                  15% faster than last month
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Open Complaints</h3>
                <p className="text-3xl font-bold text-green-600">12</p>
                <p className="text-sm text-green-500 mt-2">
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                  3 less than last week
                </p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">User Satisfaction</h3>
                <p className="text-3xl font-bold text-purple-600">4.2 / 5</p>
                <p className="text-sm text-purple-500 mt-2">
                  <Star className="inline w-4 h-4 mr-1" />
                  Based on 50 ratings
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsAnalyticsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}