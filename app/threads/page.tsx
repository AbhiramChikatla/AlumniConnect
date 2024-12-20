"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Home,
    PenSquare,
    TrendingUp,
    Gift,
    Briefcase,
    GraduationCap,
    Calendar,
    BookOpen,
    Inbox,
    Trophy,
    Users,
    MessageCircle,
    Share2,
    Search,
    Bell,
    ThumbsUp,
} from "lucide-react";

interface Thread {
    id: string;
    user: {
        name: string;
        handle: string;
        avatar: string;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    replies: number;
    shares: number;
}

interface Channel {
    id: string;
    name: string;
    avatar: string;
    members: string;
}

interface Person {
    id: string;
    name: string;
    bio: string;
    avatar: string;
}

const threads: Thread[] = [
    {
        id: "1",
        user: {
            name: "user1234",
            handle: "@user1234",
            avatar: "/placeholder.svg",
        },
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis leo sed ipsum fringilla rhoncus.",
        timestamp: "2h ago",
        likes: 10,
        replies: 5,
        shares: 2,
    },
    {
        id: "2",
        user: {
            name: "user1234",
            handle: "@user1234",
            avatar: "/placeholder.svg",
        },
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu velit eros. Vivamus malesuada neque in mattis pharetra. Mauris quis ligula placerat, ornare ligula non, auctor neque. Etiam urna felis, molestie eu fermentum sed, vehicula in turpis. Etiam eget lorem libero.",
        timestamp: "3h ago",
        likes: 15,
        replies: 3,
        shares: 1,
    },
    {
        id: "3",
        user: {
            name: "user1234",
            handle: "@user1234",
            avatar: "/placeholder.svg",
        },
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis leo sed ipsum fringilla rhoncus.",
        image: "/placeholder.svg?height=300&width=400",
        timestamp: "4h ago",
        likes: 20,
        replies: 8,
        shares: 4,
    },
    {
        id: "4",
        user: {
            name: "user1234",
            handle: "@user1234",
            avatar: "/placeholder.svg",
        },
        content:
            "Another interesting post to ensure we have enough content to scroll.",
        timestamp: "5h ago",
        likes: 7,
        replies: 2,
        shares: 1,
    },
    {
        id: "5",
        user: {
            name: "user1234",
            handle: "@user1234",
            avatar: "/placeholder.svg",
        },
        content:
            "One more post to make sure we have plenty of scrollable content.",
        timestamp: "6h ago",
        likes: 12,
        replies: 4,
        shares: 3,
    },
];

const channels: Channel[] = [
    {
        id: "1",
        name: "Drama's Channel",
        avatar: "/placeholder.svg",
        members: "1.2K members",
    },
    {
        id: "2",
        name: "John's Channel",
        avatar: "/placeholder.svg",
        members: "890 members",
    },
    {
        id: "3",
        name: "Sports Channel",
        avatar: "/placeholder.svg",
        members: "2.5K members",
    },
];

const people: Person[] = [
    {
        id: "1",
        name: "John Manchester",
        bio: "I am a professional Web Developer and I like to play video games whenever I am stressed",
        avatar: "J",
    },
    {
        id: "2",
        name: "John Manchester",
        bio: "I am a professional Web Developer and I like to play video games whenever I am stressed",
        avatar: "J",
    },
    {
        id: "3",
        name: "John Manchester",
        bio: "I am a professional Web Developer and I like to play video games whenever I am stressed",
        avatar: "J",
    },
];

function PeopleYouMayKnow() {
    return (
        <Card className="mb-4 overflow-hidden border-0 bg-white p-4 shadow-sm">
            <CardContent className="p-0">
                <h2 className="mb-4 font-semibold">People You May Know</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {people.map((person) => (
                        <div
                            key={person.id}
                            className="flex flex-col items-center text-center"
                        >
                            <Avatar className="h-16 w-16 mb-3">
                                <AvatarFallback className="bg-gray-200 text-lg">
                                    {person.avatar}
                                </AvatarFallback>
                            </Avatar>
                            <h3 className="font-medium mb-1">{person.name}</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                                {person.bio}
                            </p>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                Connect
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default function ThreadsPage() {
    const [showPeopleYouMayKnow, setShowPeopleYouMayKnow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            // Show the component when user has scrolled 30% of the page
            if (scrollPosition > (bodyHeight - windowHeight) * 0.3) {
                setShowPeopleYouMayKnow(true);
            } else {
                setShowPeopleYouMayKnow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <header className="fixed top-0 z-50 w-full border-b bg-white">
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

            <div className="flex pt-16">
                {/* Sidebar */}
                <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-white">
                    <div className="flex h-full flex-col p-4">
                        <nav className="space-y-2">
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2"
                            >
                                <Home className="h-5 w-5" />
                                Home
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2"
                            >
                                <PenSquare className="h-5 w-5" />
                                Create
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2"
                            >
                                <TrendingUp className="h-5 w-5" />
                                Trending
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2"
                            >
                                <Gift className="h-5 w-5" />
                                Donate
                            </Button>

                            <div className="pt-4">
                                <h2 className="mb-2 px-4 text-sm font-semibold">
                                    Topics
                                </h2>
                                <div className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <Briefcase className="h-5 w-5" />
                                        Internships
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <GraduationCap className="h-5 w-5" />
                                        Workshops
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <Calendar className="h-5 w-5" />
                                        Events
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <BookOpen className="h-5 w-5" />
                                        Coursework
                                    </Button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h2 className="mb-2 px-4 text-sm font-semibold">
                                    Networking
                                </h2>
                                <div className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <Inbox className="h-5 w-5" />
                                        Inbox
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <Trophy className="h-5 w-5" />
                                        Success Stories
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2"
                                    >
                                        <Users className="h-5 w-5" />
                                        Alumni Directory
                                    </Button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 pl-64">
                    <div className="flex">
                        {/* Threads */}
                        <div className="flex-1 border-r">
                            <div className="mx-auto max-w-2xl px-4 py-8">
                                {threads.map((thread, index) => (
                                    <React.Fragment key={thread.id}>
                                        <Card className="mb-4 overflow-hidden border-0 bg-white p-4 shadow-sm">
                                            <div className="flex gap-3">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage
                                                        src={thread.user.avatar}
                                                        alt={thread.user.name}
                                                    />
                                                    <AvatarFallback>
                                                        {thread.user.name[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold">
                                                                {
                                                                    thread.user
                                                                        .name
                                                                }
                                                            </span>
                                                            <span className="text-sm text-gray-500">
                                                                {
                                                                    thread.user
                                                                        .handle
                                                                }
                                                            </span>
                                                            <span className="text-sm text-gray-500">
                                                                •
                                                            </span>
                                                            <span className="text-sm text-gray-500">
                                                                {
                                                                    thread.timestamp
                                                                }
                                                            </span>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-purple-600"
                                                        >
                                                            Follow
                                                        </Button>
                                                    </div>
                                                    <p className="mt-2 text-gray-800">
                                                        {thread.content}
                                                    </p>
                                                    {thread.image && (
                                                        <div className="mt-3">
                                                            <img
                                                                src={
                                                                    thread.image
                                                                }
                                                                alt="Post image"
                                                                className="rounded-lg border object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="mt-4 flex gap-4">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="gap-1 text-gray-500"
                                                        >
                                                            <ThumbsUp className="h-4 w-4" />
                                                            {thread.likes}
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="gap-1 text-gray-500"
                                                        >
                                                            <MessageCircle className="h-4 w-4" />
                                                            {thread.replies}
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="gap-1 text-gray-500"
                                                        >
                                                            <Share2 className="h-4 w-4" />
                                                            {thread.shares}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                        {index === 2 &&
                                            showPeopleYouMayKnow && (
                                                <PeopleYouMayKnow />
                                            )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Popular Channels */}
                        <div className="hidden w-80 p-4 lg:block">
                            <h2 className="mb-4 font-semibold">
                                Popular Channels
                            </h2>
                            <div className="space-y-4">
                                {channels.map((channel) => (
                                    <div
                                        key={channel.id}
                                        className="flex items-center gap-3"
                                    >
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage
                                                src={channel.avatar}
                                                alt={channel.name}
                                            />
                                            <AvatarFallback>
                                                {channel.name[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h3 className="font-medium">
                                                {channel.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {channel.members}
                                            </p>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="bg-purple-600 hover:bg-purple-700"
                                        >
                                            Join
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
