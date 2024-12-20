"use client"
import { useState } from 'react'
import { 
  Search, Filter, Plus, Eye, Trash2, Copy, BarChart, Download,
  BarChart2, Users, Calendar, Briefcase, Settings, Bell, ChevronDown,
  MapPin, Building, Users as UsersIcon, Clock, ArrowUpRight
} from 'lucide-react'

export default function JobsAdminPage() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'New York', status: 'open', postingDate: '2023-05-15', applicants: 25, description: 'Exciting opportunity for a skilled software engineer...', qualifications: 'Bachelor\'s degree in Computer Science...', deadline: '2023-06-30' },
    { id: 2, title: 'Data Analyst', company: 'Data Corp', location: 'San Francisco', status: 'open', postingDate: '2023-05-10', applicants: 18, description: 'Join our data team to analyze complex datasets...', qualifications: 'Strong background in statistics and data analysis...', deadline: '2023-06-25' },
    { id: 3, title: 'Marketing Manager', company: 'Brand Inc', location: 'Chicago', status: 'closed', postingDate: '2023-04-20', applicants: 40, description: 'Lead our marketing efforts to drive brand growth...', qualifications: '5+ years of experience in digital marketing...', deadline: '2023-05-31' },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ status: '', location: '', company: '' })
  const [isAddJobModalOpen, setIsAddJobModalOpen] = useState(false)
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '', description: '', qualifications: '', deadline: '' })
  const [activeSection, setActiveSection] = useState('Jobs')
  const [selectedJobs, setSelectedJobs] = useState<number[]>([])
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false)

  const menuItems = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Users', icon: Users },
    { name: 'Events', icon: Calendar },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Settings', icon: Settings },
  ]

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.status === '' || job.status === filters.status) &&
    (filters.location === '' || job.location === filters.location) &&
    (filters.company === '' || job.company === filters.company)
  )

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault()
    setJobs([...jobs, { ...newJob, id: jobs.length + 1, status: 'open', postingDate: new Date().toISOString().split('T')[0], applicants: 0 }])
    setNewJob({ title: '', company: '', location: '', description: '', qualifications: '', deadline: '' })
    setIsAddJobModalOpen(false)
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id))
  }

  const handleBulkDelete = () => {
    setJobs(jobs.filter(job => !selectedJobs.includes(job.id)))
    setSelectedJobs([])
  }

  const handleDuplicateJob = (job: any) => {
    const newJob = { ...job, id: jobs.length + 1, title: `${job.title} (Copy)`, postingDate: new Date().toISOString().split('T')[0], applicants: 0 }
    setJobs([...jobs, newJob])
  }

  const getStatusColor = (status: string) => {
    return status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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

        {/* Jobs Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="relative w-full md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex flex-wrap md:flex-nowrap space-y-2 md:space-y-0 md:space-x-4">
                  <select
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  >
                    <option value="">All Statuses</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                  <select
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  >
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                  <select
                    className="w-full md:w-auto pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                    value={filters.company}
                    onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                  >
                    <option value="">All Companies</option>
                    <option value="Tech Co">Tech Co</option>
                    <option value="Data Corp">Data Corp</option>
                    <option value="Brand Inc">Brand Inc</option>
                  </select>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    onClick={() => setFilters({ status: '', location: '', company: '' })}
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">All Jobs</h2>
                <div className="flex flex-wrap justify-center md:justify-end space-y-2 md:space-y-0 space-x-0 md:space-x-4">
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6A4AC5] transition-colors"
                    onClick={() => setIsAddJobModalOpen(true)}
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Job
                  </button>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    onClick={handleBulkDelete}
                    disabled={selectedJobs.length === 0}
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Bulk Delete
                  </button>
                  <button
                    className="w-full md:w-auto flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => setIsAnalyticsModalOpen(true)}
                  >
                    <BarChart className="w-5 h-5 mr-2" />
                    Job Analytics
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <input
                          type="checkbox"
                          checked={selectedJobs.includes(job.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedJobs([...selectedJobs, job.id])
                            } else {
                              setSelectedJobs(selectedJobs.filter(id => id !== job.id))
                            }
                          }}
                          className="h-4 w-4 text-[#7F56D9] focus:ring-[#7F56D9] border-gray-300 rounded"
                        />
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.postingDate}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <UsersIcon className="w-4 h-4 mr-2" />
                        <span>{job.applicants} Applicants</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                        <div className="flex space-x-2">
                          <button className="text-[#7F56D9] hover:text-[#6A4AC5]">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800" onClick={() => handleDuplicateJob(job)}>
                            <Copy className="w-5 h-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteJob(job.id)}>
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Jobs Button */}
            <div className="mt-8 flex justify-end">
              <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Export Jobs
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Add New Job Modal */}
      {isAddJobModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Job</h2>
            <form onSubmit={handleAddJob} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.company}
                  onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
                <textarea
                  id="qualifications"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.qualifications}
                  onChange={(e) => setNewJob({ ...newJob, qualifications: e.target.value })}
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                <input
                  type="date"
                  id="deadline"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newJob.deadline}
                  onChange={(e) => setNewJob({ ...newJob, deadline: e.target.value })}
                  required
                />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddJobModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#7F56D9] text-white rounded-md hover:bg-[#6A4AC5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7F56D9]"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Job Analytics Modal */}
      {isAnalyticsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Average Applicants</h3>
                <p className="text-3xl font-bold text-blue-600">28</p>
                <p className="text-sm text-blue-500 mt-2">
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                  12% increase
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Average Time Open</h3>
                <p className="text-3xl font-bold text-green-600">15 days</p>
                <p className="text-sm text-green-500 mt-2">
                  <ArrowUpRight className="inline w-4 h-4 mr-1" />
                  3 days faster
                </p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Most Popular Job</h3>
                <p className="text-xl font-bold text-purple-600">Software Engineer</p>
                <p className="text-sm text-purple-500 mt-2">
                  250 views
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