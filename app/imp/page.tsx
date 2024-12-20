"use client"
import { useState } from 'react'
import { Search, Filter, Plus, Edit, Trash2, Mail, Key, ChevronDown, X } from 'lucide-react'

export default function UsersAdminPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', graduationYear: 2020, department: 'Computer Science', registrationDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', graduationYear: 2019, department: 'Business', registrationDate: '2023-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', graduationYear: 2021, department: 'Engineering', registrationDate: '2023-03-10' },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ graduationYear: '', department: '' })
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '', graduationYear: '', department: '' })

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.graduationYear === '' || user.graduationYear.toString() === filters.graduationYear) &&
    (filters.department === '' || user.department === filters.department)
  )

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()
    setUsers([...users, { ...newUser, id: users.length + 1, graduationYear: parseInt(newUser.graduationYear), registrationDate: new Date().toISOString().split('T')[0] }])
    setNewUser({ name: '', email: '', graduationYear: '', department: '' })
    setIsAddUserModalOpen(false)
  }

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="relative mb-4 md:mb-0 md:w-1/3">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex space-x-4">
              <select
                className="pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-gray-600 focus:ring-[#7F56D9] focus:border-transparent"
                value={filters.graduationYear}
                onChange={(e) => setFilters({ ...filters, graduationYear: e.target.value })}
              >
                <option value="">Graduation Year</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
              <select
                className="pl-3 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-gray-600 focus:ring-[#7F56D9] focus:border-transparent"
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
              >
                <option value="">Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business</option>
                <option value="Engineering">Engineering</option>
              </select>
              <button
                className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => setFilters({ graduationYear: '', department: '' })}
              >
                <Filter className="w-5 h-5 mr-2" />
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* User List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">All Users</h2>
            <button
              className="flex items-center px-4 py-2 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6A4AC5] transition-colors"
              onClick={() => setIsAddUserModalOpen(true)}
            >
              <Plus className="w-5 h-5 mr-2" />
              Add New User
            </button>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Graduation Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Registration Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium  text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-[#7F56D9] rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{getInitials(user.name)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.graduationYear}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.registrationDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#7F56D9] hover:text-[#6A4AC5] mr-3">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900 mr-3" onClick={() => handleDeleteUser(user.id)}>
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 mr-3">
                      <Mail className="w-5 h-5" />
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-700">
                      <Key className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New User Modal */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add New User</h2>
              <button onClick={() => setIsAddUserModalOpen(false)} className="text-gray-500 text-gray-600 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                <input
                  type="number"
                  id="graduationYear"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newUser.graduationYear}
                  onChange={(e) => setNewUser({ ...newUser, graduationYear: e.target.value })}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  id="department"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent"
                  value={newUser.department}
                  onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7F56D9] text-white py-2 px-4 rounded-md hover:bg-[#6A4AC5] transition-colors"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}