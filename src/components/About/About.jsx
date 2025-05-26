"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ArrowRight,
  Users,
  Target,
  Zap,
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
function About() {
   const team = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years of experience in digital design and strategy",
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer specializing in modern web technologies",
    },
    {
      name: "Mike Rodriguez",
      role: "UX Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "User experience expert with a passion for human-centered design",
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Agile project management specialist ensuring timely delivery",
    },
  ]
  return (
    <div className='min-h-screen bg-white '>
       <section id="about" className="py-20 bg-emerald-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <Badge className="bg-emerald-100 text-emerald-700 mb-4">About Us</Badge>
                    <h2 className="text-2xl md:text-5xl font-bold text-black mb-6">
                      We're Passionate About Digital Excellence
                    </h2>
                    <p className="lg:text-xl text-lg text-gray-600 mb-8">
                      With over 5 years of experience, we've helped businesses of all sizes achieve their digital goals
                      through innovative design and development solutions.
                    </p>
      
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mb-8">
                      <div className="flex items-center">
                        <Users className="w-8 h-8 text-emerald-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Expert Team</div>
                          <div className="text-gray-600 text-sm">Skilled professionals</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Target className="w-8 h-8 text-emerald-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Goal Oriented</div>
                          <div className="text-gray-600 text-sm">Results-driven approach</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-8 h-8 text-emerald-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Fast Delivery</div>
                          <div className="text-gray-600 text-sm">Quick turnaround</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-8 h-8 text-emerald-500 mr-3" />
                        <div>
                          <div className="font-bold text-black">Quality Work</div>
                          <div className="text-gray-600 text-sm">Premium standards</div>
                        </div>
                      </div>
                    </div>
      
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Learn More About Us</Button>
                  </div>
      
                  <div className="relative">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      {team.map((member, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
                          <CardContent className="px-4 ">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-28 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                            />
                            <h4 className="font-bold text-black text-sm">{member.name}</h4>
                            <p className="text-emerald-500 text-xs mb-2">{member.role}</p>
                            <p className="text-gray-600 text-xs">{member.bio}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default About
