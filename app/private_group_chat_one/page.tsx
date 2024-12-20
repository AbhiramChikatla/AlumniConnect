"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreVertical, Paperclip, Send, SmilePlus, Users } from 'lucide-react'

interface Message {
  id: number
  content: string
  timestamp: string
  sender: string
  isOutgoing: boolean
}

const initialMessages: Message[] = [
  { id: 1, content: "Hey everyone! How's the project going?", timestamp: "10:30 AM", sender: "Alice", isOutgoing: true },
  { id: 2, content: "It's going well! We're making good progress.", timestamp: "10:32 AM", sender: "Bob", isOutgoing: false },
  { id: 3, content: "I've just finished the design mockups. Can I share them here?", timestamp: "10:35 AM", sender: "Charlie", isOutgoing: false },
  { id: 4, content: "Please go ahead and share them.", timestamp: "10:36 AM", sender: "Alice", isOutgoing: true },
]

interface Group {
  id: number
  name: string
  memberCount: number
  isPinned: boolean
}

const groups: Group[] = [
  { id: 1, name: "Pinned Group 1", memberCount: 25, isPinned: true },
  { id: 2, name: "Pinned Group 2", memberCount: 25, isPinned: true },
  { id: 3, name: "Group 1", memberCount: 25, isPinned: false },
  { id: 4, name: "Group 2", memberCount: 25, isPinned: false },
  { id: 5, name: "Group 3", memberCount: 25, isPinned: false },
  { id: 6, name: "Group 4", memberCount: 25, isPinned: false },
  { id: 7, name: "Group 5", memberCount: 25, isPinned: false },
]

export default function Page() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [activeGroup, setActiveGroup] = useState<Group>(groups[0])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "Alice",
        isOutgoing: true
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex border-l border-r">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <Tabs defaultValue="group" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="group">Group Chats</TabsTrigger>
                  <TabsTrigger value="personal">Personal Chats</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-4">
                <Input
                  className="w-[300px]"
                  placeholder="Search chats..."
                  type="search"
                />
                <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                  Create New Group
                </Button>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-sm font-medium">{activeGroup.name}</h2>
                  <p className="text-xs text-gray-500">{activeGroup.memberCount} members</p>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex-1 p-4 space-y-6 overflow-y-auto">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-start gap-3 ${message.isOutgoing ? 'justify-end' : ''}`}>
                    {!message.isOutgoing && (
                      <Avatar className="h-8 w-8 shrink-0">
                        <AvatarFallback className="bg-purple-100 text-purple-500">
                          {message.sender.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`space-y-1 ${message.isOutgoing ? 'items-end' : 'items-start'}`}>
                      <div className="flex items-center gap-2">
                        {!message.isOutgoing && <span className="font-medium text-sm">{message.sender}</span>}
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                      <div className={`inline-block rounded-lg px-3 py-2 text-sm ${
                        message.isOutgoing 
                          ? "bg-purple-500 text-white" 
                          : "bg-gray-100 text-gray-900"
                      }`}>
                        {message.content}
                      </div>
                    </div>
                    {message.isOutgoing && (
                      <Avatar className="h-8 w-8 shrink-0">
                        <AvatarFallback className="bg-purple-100 text-purple-500">
                          {message.sender.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-4 border-t">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <SmilePlus className="h-5 w-5 text-gray-500" />
                </Button>
                <Input 
                  className="flex-1" 
                  placeholder="Type a message..." 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button 
                  size="icon" 
                  className="shrink-0 bg-purple-500 hover:bg-purple-600"
                  onClick={sendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="w-80 p-4 border-l">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium mb-3">Pinned Groups</h2>
                <div className="space-y-2">
                  {groups.filter(group => group.isPinned).map(group => (
                    <div
                      key={group.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={() => setActiveGroup(group)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {group.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">{group.name}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {group.memberCount} members
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-3">All Groups</h2>
                <div className="space-y-2">
                  {groups.filter(group => !group.isPinned).map(group => (
                    <div
                      key={group.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                      onClick={() => setActiveGroup(group)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {group.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">{group.name}</div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {group.memberCount} members
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

