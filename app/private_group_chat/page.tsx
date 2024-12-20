// import { Header } from "@/components/header"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/sidebar"
import { ChatArea } from "@/components/chat-area"
import { GroupsList } from "@/components/group-list"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1 mt-5">
        <Sidebar />
        <main className="flex-1 border-l border-r mt-10">
          <ChatArea />
        </main>
        <div className="mt-10">
        <GroupsList />

        </div>
      </div>
    </div>
  )
}

