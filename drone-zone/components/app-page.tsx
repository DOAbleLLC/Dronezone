'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import NavigationMenuClient from '@/components/NavigationMenuClient'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <header className="container mx-auto p-4 z-10 relative ">
        <NavigationMenuClient />
      </header>

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/drone001.png?height=1080&width=1920"
          alt="DJI Drone"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0"
        />
        <div className="relative z-5 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            Elevate Your Drone Skills
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
            Join the community of expert drone pilots and take your skills to new heights
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto p-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to DronePilotHub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Latest Drone News</h3>
              <ul className="space-y-2">
                <li>New regulations for commercial drone use</li>
                <li>Breakthrough in drone battery technology</li>
                <li>Upcoming drone racing championship</li>
              </ul>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Featured Course</h3>
              <p className="mb-4">Master Aerial Photography: Capture stunning images from the sky</p>
              <Button>Enroll Now</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Part 107 Commercial Drone License</h3>
              <p className="mb-4">Prepare for your FAA certification with our comprehensive practice exams.</p>
              <Button>Start Practice</Button>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Recreational Drone Pilot Quiz</h3>
              <p className="mb-4">Test your knowledge of recreational drone flying rules and best practices.</p>
              <Button>Take Quiz</Button>
            </div>
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Advanced Drone Operations</h3>
              <p className="mb-4">Challenge yourself with scenarios for complex drone operations.</p>
              <Button>Begin Test</Button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shop Merchandise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-blue-800 bg-opacity-50 p-4 rounded-lg">
                <div className="bg-gray-300 h-80 mb-4 rounded-md"></div>
                <h3 className="text-lg font-semibold mb-2">Drone Pilot T-Shirt</h3>
                <p className="mb-4">$24.99</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-blue-700 bg-opacity-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Advertisement</h2>
            <p className="mb-4">Showcase your brand to drone enthusiasts!</p>
            <Button variant="outline">Learn More</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">DronePilotHub</h3>
              <p className="text-sm">Your gateway to the world of drone piloting</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <ul className="text-sm">
                <li><Link href="#">Facebook</Link></li>
                <li><Link href="#">Twitter</Link></li>
                <li><Link href="#">Instagram</Link></li>
                <li><Link href="#">YouTube</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="mr-2" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} DronePilotHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}