"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ChatArea() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <Tabs defaultValue="group" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="group">Group Chats</TabsTrigger>
            <TabsTrigger value="personal">Personal Chats</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input
              className="w-[300px]"
              placeholder="Search chats..."
              type="search"
            />
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600">
            Create New Group
          </Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a group to start chatting
      </div>
    </div>
  )
}

