import Link from "next/link"
import { Book,  Home, MessageSquare, PlusCircle, Share2, Trophy, Users2 } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-60 flex flex-col bg-white p-4 h-[calc(100vh-57px)]">
      <nav className="space-y-1">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <PlusCircle className="h-4 w-4" />
          Create
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Trophy className="h-4 w-4" />
          Trending
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Share2 className="h-4 w-4" />
          Donate
        </Link>

        <div className="pt-4 pb-2">
          <p className="px-3 text-xs font-medium text-gray-500">Topics</p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Book className="h-4 w-4" />
          Internships
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Users2 className="h-4 w-4" />
          Workshops
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <MessageSquare className="h-4 w-4" />
          Events
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Book className="h-4 w-4" />
          Coursework
        </Link>

        <div className="pt-4 pb-2">
          <p className="px-3 text-xs font-medium text-gray-500">Networking</p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <MessageSquare className="h-4 w-4" />
          Inbox
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Trophy className="h-4 w-4" />
          Success Stories
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        >
          <Users2 className="h-4 w-4" />
          Alumni Directory
        </Link>
      </nav>
    </div>
  )
}

