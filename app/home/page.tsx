"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {  Briefcase, Users, GraduationCap,  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Gift, User, Calendar } from "lucide-react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GlobeDemo } from "../globeDemo";
import {
    BookOpen,
    Newspaper,
    Building2,
    Settings,
    ArrowRight,
} from "lucide-react";
import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const successStories = [
    {
        id: 1,
        name: "Dr. Emily Chen",
        gradYear: "2010",
        title: "Pioneering Cancer Research",
        image: "/placeholder.svg?height=400&width=300",
        story: "Dr. Chen's groundbreaking work in immunotherapy has led to new treatments for aggressive forms of cancer, earning her the prestigious Nobel Prize in Medicine.",
        achievement: "Nobel Prize Winner",
        color: "bg-gradient-to-br from-pink-400 to-red-500",
    },
    {
        id: 2,
        name: "Mark Rodriguez",
        gradYear: "2008",
        title: "Tech Innovator & Philanthropist",
        image: "/placeholder.svg?height=400&width=300",
        story: "Mark's AI startup revolutionized natural language processing, leading to a billion-dollar acquisition. He now dedicates his time to funding educational initiatives worldwide.",
        achievement: "Forbes 30 Under 30",
        color: "bg-gradient-to-br from-blue-400 to-indigo-500",
    },
    {
        id: 3,
        name: "Sarah Okonkwo",
        gradYear: "2015",
        title: "Environmental Advocate",
        image: "/placeholder.svg?height=400&width=300",
        story: "Sarah's innovative approach to ocean cleanup has removed over 1 million tons of plastic from the world's oceans, inspiring a global movement for marine conservation.",
        achievement: "UN Environment Programme Champion",
        color: "bg-gradient-to-br from-green-400 to-teal-500",
    },
    {
        id: 4,
        name: "Alex Patel",
        gradYear: "2012",
        title: "Space Exploration Pioneer",
        image: "/placeholder.svg?height=400&width=300",
        story: "Alex's work on advanced propulsion systems has been crucial in making interplanetary travel a reality, paving the way for the first human mission to Mars.",
        achievement: "NASA Exceptional Achievement Medal",
        color: "bg-gradient-to-br from-purple-400 to-indigo-500",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "The alumni network has been invaluable for my career growth. I've made connections that led to amazing opportunities.",
        name: "Jane Smith",
        position: "CEO at Tech Innovators",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 2,
        quote: "Attending alumni events has rekindled my passion for learning and allowed me to give back to my alma mater.",
        name: "John Doe",
        position: "Professor of Computer Science",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 3,
        quote: "The mentorship program connected me with industry leaders who have guided me through critical career decisions.",
        name: "Emily Johnson",
        position: "Startup Founder",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 4,
        quote: "I'm grateful for the ongoing support and resources provided by our alumni association. It's truly a lifelong community.",
        name: "Michael Chen",
        position: "Non-Profit Director",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 5,
        quote: "The alumni network helped me transition to a new field. The support and advice I received were priceless.",
        name: "Sarah Thompson",
        position: "Environmental Scientist",
        image: "/placeholder.svg?height=80&width=80",
    },
];
const ToolCard = ({
    icon: Icon,
    title,
    description,
    delay,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
    delay: number;
}) => (
    <div
        className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{ animationDelay: `${delay}ms` }}
    >
        <Icon className="w-12 h-12 text-purple-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const EventCard = ({
    event,
    isOpen,
    toggleOpen,
}: {
    event: any;
    isOpen: boolean;
    toggleOpen: () => void;
}) => {
    return (
        <motion.div
            layout
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
            <motion.img
                src={event.image}
                // alt={event.title}
                className="w-full h-48 object-cover"
                layoutId={`image-${event.id}`}
            />
            <div className="p-6">
                <motion.h3
                    className="text-2xl font-bold mb-2 text-gray-500"
                    layoutId={`title-${event.id}`}
                >
                    {event.title}
                </motion.h3>
                <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-600 mb-4">
                                {event.description}
                            </p>
                            <div className="flex items-center text-gray-600">
                                <Users className="w-4 h-4 mr-2" />
                                <span>
                                    {event.attendees} expected attendees
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Button
                    onClick={toggleOpen}
                    className="mt-4 w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
                >
                    {isOpen ? (
                        <>
                            <span>Show Less</span>
                            <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                    ) : (
                        <>
                            <span>Learn More</span>
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </div>
        </motion.div>
    );
};

type OrbitingElementProps = {
    size: any;
    orbitSize: any;
    duration: any;
    delay: any;
    icon: any;
    style: React.CSSProperties & { "--orbitSize": string };
};
const events = [
    {
        id: 1,
        title: "Annual Alumni Gala",
        date: "September 15, 2023",
        location: "Grand Ballroom, Alumni Center",
        description:
            "Join us for an evening of celebration, networking, and honoring distinguished alumni.",
        attendees: 250,
        image: "./one.jpg",
    },
    {
        id: 2,
        title: "Tech Innovation Summit",
        date: "October 5-7, 2023",
        location: "University Conference Center",
        description:
            "Explore the latest in technology with talks from industry leaders and hands-on workshops.",
        attendees: 500,
        image: "/two.jpg",
    },
    {
        id: 3,
        title: "Class of 2013 10-Year Reunion",
        date: "November 18-20, 2023",
        location: "Various Campus Locations",
        description:
            "Reconnect with your classmates and relive your college memories in this weekend-long celebration.",
        attendees: 300,
        image: "/three.jpg",
      },
      {
        id: 4,
        title: "Global Alumni Day of Service",
        date: "April 22, 2024",
        location: "Worldwide",
        description:
        "Join alumni around the world in giving back to our communities through various service projects.",
        attendees: 1000,
        image: "/four.jpeg",
    },
];

const FloatingCard = ({
    icon,
    text,
    amount,
    className,
}: {
    icon: any;
    text: string;
    amount: any;
    className: string;
}) => (
    <div
        className={`absolute p-2 bg-white rounded-lg shadow-lg flex items-center space-x-2 animate-float ${className}`}
    >
        {icon}
        <div>
            <p className="text-sm font-semibold">{text}</p>
            {amount && (
                <p className="text-lg font-bold text-blue-600">{amount}</p>
            )}
        </div>
    </div>
);
const ProfileCard = () => (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-64 animate-float">
        <div className="flex items-center space-x-3 mb-3">
            <Image
                src="/placeholder.svg"
                alt="Donovan Floyd"
                width={40}
                height={40}
                className="rounded-full"
            />
            <h3 className="font-semibold text-gray-500">Donovan Floyd</h3>
        </div>
        <div className="relative h-24 bg-green-100 rounded">
            <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-green-400 rounded"
                style={{
                    clipPath: "polygon(0 100%, 100% 30%, 100% 100%, 0% 100%)",
                }}
            ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Updated data</span>
            <span>Engaged</span>
            <span>Donor</span>
        </div>
        <div className="mt-2 text-right">
            <span className="text-blue-600 font-semibold">Retained +300%</span>
        </div>
    </div>
);


export default function AlumniHomepage() {
    const [openEvent, setOpenEvent] = useState<string | null>(null);

    const toggleEvent = (id: string | null): void => {
      setOpenEvent(openEvent === id ? null : id);
    };
    const tools = [
        {
            icon: Users,
            title: "Mentorship Network",
            description:
                "Connect with experienced alumni for career guidance and support.",
        },
        {
            icon: BookOpen,
            title: "Affinity Groups",
            description:
                "Join communities based on shared interests or experiences.",
        },
        {
            icon: GraduationCap,
            title: "Alumni Directory",
            description: "Explore and connect with fellow graduates worldwide.",
        },
        {
            icon: Newspaper,
            title: "News & Updates",
            description:
                "Stay informed about alumni achievements and university news.",
        },
        {
            icon: Briefcase,
            title: "Job Board",
            description:
                "Discover career opportunities shared by alumni and partners.",
        },
        {
            icon: Building2,
            title: "Business Directory",
            description: "Support alumni-owned businesses and services.",
        },
        {
            icon: Settings,
            title: "Custom Programs",
            description:
                "Tailor your alumni experience with personalized features.",
        },
    ];
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextStory = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    };

    const prevStory = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + successStories.length) % successStories.length
        );
    };
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Image
                        src="/college-logo.svg"
                        alt="College Logo"
                        width={150}
                        height={50}
                    />
                    <nav className="hidden md:flex space-x-4">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Home
                        </Link>
                        <Link
                            href="/register"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Alumni Registration
                        </Link>
                        <Link
                            href="/network"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Networking Hub
                        </Link>
                        <Link
                            href="/jobs"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Job Portal
                        </Link>
                        <Link
                            href="/events"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Events & Reunions
                        </Link>
                        <Link
                            href="/donate"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Donate
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-purple-700"
                        >
                            Contact
                        </Link>
                    </nav>
                    <Button className="bg-purple-700 text-white hover:bg-purple-800">
                        Join Alumni Association
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden bg-gradient-to-b from-purple-700 via-purple-600 to-blue-500">
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                            GROW YOUR ALUMNI NETWORK
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-50">
                            The integrated platform that works on top of your
                            CRM for digital engagement, event management, and
                            online giving campaigns, turning thousands of alumni
                            into active members without adding staff.
                        </p>
                        <div className="space-x-4">
                            <Button className="bg-white text-purple-700 hover:bg-gray-100">
                                Request Demo
                            </Button>
                            <Button className="bg-purple-700 text-white border border-white hover:bg-purple-800">
                                Join the Network
                            </Button>
                        </div>
                    </div>

                    {/* Globe container - bottom center and half visible */}
                    <div className="globe-container w-[600px] h-[600px] absolute bottom-[-150px] left-1/2 transform -translate-x-1/2">
                        <GlobeDemo />
                    </div>
                </div>
            </section>

            {/* some potential about the app */}

            <section className="relative bg-blue-50 my-20 overflow-hidden p-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-blue-600 mb-4">
                            Give thousands of constituents reasons to give, year
                            after year
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Engaged constituents are your most likely donors.
                            Continuous engagement retains and expands their
                            donations.
                        </p>
                        <p className="text-lg text-gray-600">
                            Almabase provides the power-tools to help
                            advancement teams small or large,
                            <span className="text-purple-600 font-semibold">
                                {" "}
                                measure & craft that repeatable journey{" "}
                            </span>
                            for thousands of alumni, parents and friends.
                        </p>
                    </div>
                </div>

                <FloatingCard
                    icon={<User className="text-blue-500" />}
                    text="Updated Profile"
                    className="top-10 right-1/4 text-gray-500"
                    amount={undefined}
                />
                <FloatingCard
                    icon={<Gift className="text-purple-500" />}
                    text="Made larger gift"
                    amount="$4,000"
                    className="top-1/4 right-1/3 text-gray-500"
                />
                <FloatingCard
                    icon={<Calendar className="text-green-500" />}
                    text="Attended homecoming"
                    className="bottom-1/4 right-1/4 text-gray-600"
                    amount={undefined}
                />
                <FloatingCard
                    icon={<Users className="text-orange-500" />}
                    text="Interacted as mentor"
                    className="top-1/3 right-10 text-gray-600"
                    amount={undefined}
                />
                <FloatingCard
                    icon={<Calendar className="text-red-500" />}
                    text="Attended Event"
                    className="bottom-10 right-1/3 text-gray-600"
                    amount={undefined}
                />
                <FloatingCard
                    icon={<Gift className="text-blue-500" />}
                    text="Gifted $550"
                    className="bottom-1/3 right-20 text-gray-600"
                    amount={undefined}
                />
                <div className="absolute bottom-5 right-40 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Giving Tuesday
                </div>

                <ProfileCard />
            </section>
            

            <section className="p-20 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-start mb-12 gap-5">
                        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-8">
                            <h2 className="text-4xl font-bold mb-4 leading-tight">
                                Empowering Alumni Connections
                            </h2>
                            <p className="text-xl mb-6 text-purple-200">
                                Integrated tools for powerful digital
                                engagement, fostering a thriving alumni
                                community.
                            </p>
                            <Button className="bg-white text-purple-700 hover:bg-purple-100 transition-colors duration-300">
                                Explore Tools{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tools.map((tool, index) => (
                                <ToolCard
                                    key={index}
                                    icon={tool.icon}
                                    title={tool.title}
                                    description={tool.description}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

    
            <section className="py-20 bg-gray-100 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-700">
                        Alumni Success Stories
                    </h2>
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col lg:flex-row items-center lg:items-stretch bg-white rounded-xl shadow-2xl overflow-hidden"
                            >
                                <div className="w-full lg:w-1/2 relative">
                                    <div
                                        className={`absolute inset-0 ${successStories[currentIndex].color} opacity-90`}
                                    ></div>
                                    <img
                                        src={successStories[currentIndex].image}
                                        // alt={successStories[currentIndex].name}
                                        className="w-full h-full object-cover mix-blend-overlay"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-3xl font-bold mb-2">
                                            {successStories[currentIndex].name}
                                        </h3>
                                        <p className="text-xl">
                                            Class of{" "}
                                            {
                                                successStories[currentIndex]
                                                    .gradYear
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-2xl font-semibold mb-4 text-gray-600">
                                            {successStories[currentIndex].title}
                                        </h4>
                                        <p className="text-gray-600 mb-6">
                                            {successStories[currentIndex].story}
                                        </p>
                                        <div className="bg-gray-100 p-4 rounded-lg">
                                            <p className="font-semibold text-gray-800">
                                                Achievement:
                                            </p>
                                            <p className="text-purple-600">
                                                {
                                                    successStories[currentIndex]
                                                        .achievement
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-between items-center">
                                        <Button
                                            onClick={prevStory}
                                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                                            aria-label="Previous story"
                                        >
                                            <ChevronLeft className="h-6 w-6" />
                                        </Button>
                                        <div className="text-gray-500">
                                            {currentIndex + 1} /{" "}
                                            {successStories.length}
                                        </div>
                                        <Button
                                            onClick={nextStory}
                                            className="bg-purple-600 text-white hover:bg-purple-700"
                                            aria-label="Next story"
                                        >
                                            <ChevronRight className="h-6 w-6" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-100 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
                        What Our Alumni Say
                    </h2>
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 w-full md:w-[calc(100%-2rem)] lg:w-[calc(50%-2rem)] snap-center px-4"
                                >
                                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600 flex items-center space-x-6 transition-all duration-300 hover:shadow-xl">
                                        <div className="flex-grow">
                                            <p className="text-gray-600 mb-4 text-lg italic">
                                                "{testimonial.quote}"
                                            </p>
                                            <h3 className="font-semibold text-lg text-gray-600">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.position}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                width={80}
                                                height={80}
                                                className="rounded-full border-2 border-purple-600"
                                            />
                                            <span className="sr-only">
                                                {testimonial.image}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2 shadow-lg hover:bg-purple-100 transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2 shadow-lg hover:bg-purple-100 transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </section>

            

            <section className="py-20 bg-gradient-to-br from-purple-100 to-indigo-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">
                        Upcoming Events & Reunions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
                        {events.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                isOpen={openEvent === event.id}
                                toggleOpen={() => toggleEvent(event.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 p-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                        {/* Logo and Description */}
                        <div className="lg:col-span-4">
                            <h2 className="text-2xl font-bold mb-4 text-gray-500">
                                Alumni Association
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Committed to fostering lifelong connections, our
                                Alumni Association ensures every graduate has
                                access to a thriving network and resources
                                needed to succeed.
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <Linkedin size={24} />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <Facebook size={24} />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <Twitter size={24} />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 text-gray-500">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/events"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Events & Reunions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/career"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Career Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/mentorship"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Mentorship Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/donate"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Give Back
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 text-gray-500">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/news"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Alumni News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/magazine"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Alumni Magazine
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/library"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Digital Library
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/directory"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Alumni Directory
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* About */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 text-gray-500">
                                About
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Our Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/team"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faq"
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg font-semibold mb-4 text-gray-600">
                                Stay Connected
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Get alumni news and updates delivered monthly.
                            </p>
                            <form className="flex flex-col space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full"
                                />
                                <Button
                                    type="submit"
                                    className="bg-purple-700 text-white hover:bg-purple-800 w-full"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-600 text-sm">
                                &copy; 2024 Alumni Association. All rights
                                reserved.
                            </p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <Link
                                    href="/terms"
                                    className="text-gray-600 hover:text-gray-800 text-sm"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 hover:text-gray-800 text-sm"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/accessibility"
                                    className="text-gray-600 hover:text-gray-800 text-sm"
                                >
                                    Accessibility
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
