"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import { Mountain, Briefcase, Users, GraduationCap, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Gift, User, Calendar,  } from 'lucide-react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import  { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { GlobeDemo } from './globeDemo'
import { 
   BookOpen,  Newspaper, 
   Building2, Settings, ArrowRight
} from 'lucide-react'




const testimonials = [
  {
    id: 1,
    quote: "The alumni network has been invaluable for my career growth. I've made connections that led to amazing opportunities.",
    author: "Jane Smith",
    position: "CEO at Tech Innovators",
    image: "/placeholder.svg"
  },
  
  {
    id: 3,
    quote: "The mentorship program connected me with industry leaders who have guided me through critical career decisions.",
    author: "Emily Johnson",
    position: "Startup Founder",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    quote: "I'm grateful for the ongoing support and resources provided by our alumni association. It's truly a lifelong community.",
    author: "Michael Chen",
    position: "Non-Profit Director",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    quote: "The alumni network helped me transition to a new field. The support and advice I received were priceless.",
    author: "Sarah Thompson",
    position: "Environmental Scientist",
    image: "/placeholder.svg"
  }
]
const ToolCard = ({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) => (
  <div 
    className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-12 h-12 text-purple-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)


type OrbitingElementProps = {
  size: any;
  orbitSize: any;
  duration: any;
  delay: any;
  icon: any;
  style: React.CSSProperties & { '--orbitSize': string };

};


const FloatingCard = ({ icon, text, amount, className }: { icon: any, text: string, amount: any, className: string }) => (
    <div className={`absolute p-2 bg-white rounded-lg shadow-lg flex items-center space-x-2 animate-float ${className}`}>
      {icon}
      <div>
        <p className="text-sm font-semibold">{text}</p>
        {amount && <p className="text-lg font-bold text-blue-600">{amount}</p>}
      </div>
    </div>
  )
  const ProfileCard = () => (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-64 animate-float">
      <div className="flex items-center space-x-3 mb-3">
        <Image src="/placeholder.svg" alt="Donovan Floyd" width={40} height={40} className="rounded-full" />
        <h3 className="font-semibold text-gray-500">Donovan Floyd</h3>
      </div>
      <div className="relative h-24 bg-green-100 rounded">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-400 rounded" style={{ clipPath: 'polygon(0 100%, 100% 30%, 100% 100%, 0% 100%)' }}></div>
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
  )
const OrbitingElement = ({ size, orbitSize, duration, delay, icon, style }: OrbitingElementProps) => (
    <div 
      className={`absolute rounded-full flex items-center justify-center
                  animate-orbit`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      {icon}
    </div>
  )

export default function AlumniHomepage() {
  const tools = [
    { icon: Users, title: "Mentorship Network", description: "Connect with experienced alumni for career guidance and support." },
    { icon: BookOpen, title: "Affinity Groups", description: "Join communities based on shared interests or experiences." },
    { icon: GraduationCap, title: "Alumni Directory", description: "Explore and connect with fellow graduates worldwide." },
    { icon: Newspaper, title: "News & Updates", description: "Stay informed about alumni achievements and university news." },
    { icon: Briefcase, title: "Job Board", description: "Discover career opportunities shared by alumni and partners." },
    { icon: Building2, title: "Business Directory", description: "Support alumni-owned businesses and services." },
    { icon: Settings, title: "Custom Programs", description: "Tailor your alumni experience with personalized features." },
  ]
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image src="/college-logo.svg" alt="College Logo" width={150} height={50} />
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-purple-700">Home</Link>
            <Link href="/register" className="text-gray-600 hover:text-purple-700">Alumni Registration</Link>
            <Link href="/network" className="text-gray-600 hover:text-purple-700">Networking Hub</Link>
            <Link href="/jobs" className="text-gray-600 hover:text-purple-700">Job Portal</Link>
            <Link href="/events" className="text-gray-600 hover:text-purple-700">Events & Reunions</Link>
            <Link href="/donate" className="text-gray-600 hover:text-purple-700">Donate</Link>
            <Link href="/about" className="text-gray-600 hover:text-purple-700">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-700">Contact</Link>
          </nav>
          <Button className="bg-purple-700 text-white hover:bg-purple-800">Join Alumni Association</Button>
        </div>
      </header>

      {/* Hero Section */}
      
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-purple-700 via-purple-600 to-blue-500">
      {/* Orbiting elements */}
      {/* <OrbitingElement size={40} orbitSize={300} duration={20} delay={0} icon={<Image src="/placeholder.svg" alt="Icon" width={30} height={30} />} style={undefined} />
      <OrbitingElement size={50} orbitSize={400} duration={25} delay={5} icon={<Image src="/placeholder.svg" alt="Icon" width={40} height={40} />} style={undefined} />
      <OrbitingElement size={60} orbitSize={500} duration={30} delay={10} icon={<Image src="/placeholder.svg" alt="Icon" width={50} height={50} />} style={undefined} />
      <OrbitingElement size={45} orbitSize={600} duration={35} delay={15} icon={<Image src="/placeholder.svg" alt="Icon" width={35} height={35} />} style={undefined} />
      <OrbitingElement size={55} orbitSize={700} duration={40} delay={20} icon={<Image src="/placeholder.svg" alt="Icon" width={45} height={45} />} style={undefined} /> */}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">GROW YOUR ALUMNI NETWORK</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The integrated platform that works on top of your CRM for digital engagement, 
            event management and online giving campaigns, turning thousands of alumni 
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
        <div className="globe relative border-white">

        {/* <GlobeDemo/> */}
        </div>
      </div>
    </section>


    {/* some potential about the app */}
   
<section className="relative bg-blue-50 my-20 overflow-hidden p-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Give thousands of constituents reasons to give, year after year
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Engaged constituents are your most likely donors. Continuous engagement retains and expands their donations.
          </p>
          <p className="text-lg text-gray-600">
            Almabase provides the power-tools to help advancement teams small or large, 
            <span className="text-purple-600 font-semibold"> measure & craft that repeatable journey </span> 
            for thousands of alumni, parents and friends.
          </p>
        </div>
      </div>

      <FloatingCard 
                  icon={<User className="text-blue-500" />}
                  text="Updated Profile"
                  className="top-10 right-1/4 text-gray-500" amount={undefined}      />
      <FloatingCard 
        icon={<Gift className="text-purple-500" />}
        text="Made larger gift"
        amount="$4,000"
        className="top-1/4 right-1/3 text-gray-500"
      />
      <FloatingCard 
                  icon={<Calendar className="text-green-500" />}
                  text="Attended homecoming"
                  className="bottom-1/4 right-1/4 text-gray-600" amount={undefined}      />
      <FloatingCard 
                  icon={<Users className="text-orange-500" />}
                  text="Interacted as mentor"
                  className="top-1/3 right-10 text-gray-600" amount={undefined}      />
      <FloatingCard 
                  icon={<Calendar className="text-red-500" />}
                  text="Attended Event"
                  className="bottom-10 right-1/3 text-gray-600" amount={undefined}      />
      <FloatingCard 
                  icon={<Gift className="text-blue-500" />}
                  text="Gifted $550"
                  className="bottom-1/3 right-20 text-gray-600" amount={undefined}      />
      <div className="absolute bottom-5 right-40 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
        Giving Tuesday
      </div>

      <ProfileCard />
    </section>
      {/* Key Feature Sections */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Alumni Registration</h3>
              <p>Easy sign-up process and profile updates for all alumni.</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Networking Hub</h3>
              <p>Connect with alumni based on profession, location, and interests.</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Job Portal</h3>
              <p>Explore job opportunities and post job openings for fellow alumni.</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-purple-700" />
              <h3 className="text-xl font-semibold mb-2">Donation Portal</h3>
              <p>Give back to your alma mater and support future generations.</p>
              <Button className="mt-4 bg-purple-700 text-white hover:bg-purple-800">Donate Now</Button>
            </Card>
          </div>
        </div>
      </section> */}


<section className="p-20 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start mb-12 gap-5">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-8">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Empowering Alumni Connections
            </h2>
            <p className="text-xl mb-6 text-purple-200">
              Integrated tools for powerful digital engagement, fostering a thriving alumni community.
            </p>
            <Button className="bg-white text-purple-700 hover:bg-purple-100 transition-colors duration-300">
              Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-500">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <Image src={`/alumni-${i}.jpg`} alt={`Alumni ${i}`} width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-600">Class of 2010</p>
                  </div>
                </div>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link href="#" className="text-purple-700 hover:underline">Read More</Link>
              </Card>
            ))}
          </div>
        </div>
      </section>


      

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-600">What Our Alumni Say</h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-500">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>

      {/* Events and Reunions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-500">Upcoming Events & Reunions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold mb-2">Annual Alumni Gala</h3>
                <p className="mb-2">Date: June 15, 2023</p>
                <p className="mb-4">Location: Grand Hotel, City Center</p>
                <Button className="w-full bg-purple-700 text-white hover:bg-purple-800">Register Now</Button>
              </Card>
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
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Alumni Association</h2>
            <p className="text-gray-600 mb-4">
              Committed to fostering lifelong connections, our Alumni Association ensures every graduate has access to a thriving network and resources needed to succeed.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-600 hover:text-gray-800">Events & Reunions</Link></li>
              <li><Link href="/career" className="text-gray-600 hover:text-gray-800">Career Services</Link></li>
              <li><Link href="/mentorship" className="text-gray-600 hover:text-gray-800">Mentorship Program</Link></li>
              <li><Link href="/donate" className="text-gray-600 hover:text-gray-800">Give Back</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/news" className="text-gray-600 hover:text-gray-800">Alumni News</Link></li>
              <li><Link href="/magazine" className="text-gray-600 hover:text-gray-800">Alumni Magazine</Link></li>
              <li><Link href="/library" className="text-gray-600 hover:text-gray-800">Digital Library</Link></li>
              <li><Link href="/directory" className="text-gray-600 hover:text-gray-800">Alumni Directory</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-800">Our Mission</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-gray-800">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-800">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Stay Connected</h3>
            <p className="text-gray-600 mb-4">Get alumni news and updates delivered monthly.</p>
            <form className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full"
              />
              <Button type="submit" className="bg-purple-700 text-white hover:bg-purple-800 w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">&copy; 2024 Alumni Association. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-600 hover:text-gray-800 text-sm">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-800 text-sm">Privacy Policy</Link>
              <Link href="/accessibility" className="text-gray-600 hover:text-gray-800 text-sm">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}