import { Sidebar } from "@/components/sidebar"
import { ThreadCreator } from "@/components/thread-connector"
import { Header } from "@/components/Header"
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1 mt-5">
        <Sidebar />
        <main className="flex-1 border-l">
          <ThreadCreator />
        </main>
      </div>
    </div>
  )
}

