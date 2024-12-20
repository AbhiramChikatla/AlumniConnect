import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-white ">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center gap-2 font-semibold">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <span className="text-purple-600">AlmaConnect</span>
                </div>
                <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <Button variant="ghost">Home</Button>
                    <Button variant="ghost">Networking Hub</Button>
                    <Button variant="ghost">Portals</Button>
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Search Threads..."
                            className="w-64 pl-8"
                        />
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="@user" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
