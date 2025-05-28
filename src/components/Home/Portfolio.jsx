"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
function Portfolio() {
 const portfolio = [
  {
    title: "Smart Home Services & Retail App",
    category: "Mobile App Development",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumKoCxzD0DQkEFIRNZ5MqBjLvotuhOKYrSbUGT", // Replace with screenshot of the app
    description: "Developed a comprehensive mobile application for electric items, enabling users to book repair services for TVs, ACs, and CCTVs, as well as purchase new products, all within one intuitive platform.",
  },
  {
    title: "Dynamic Community Engagement Portal",
    category: "Web Development",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumnTve33A1z8WShHVuacLDIv5XR0itPqOklGMb", // Replace with screenshot of community website
    description: "Crafted a robust web platform designed to foster community interaction, facilitate event organization, and enhance member communication for a vibrant local group.",
  },
  {
    title: "Logistics & Transport Company Website",
    category: "Web Development",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum6vClSkOFtYkXDQV3xwMmdzE6iugCS4bW9e72", // Replace with screenshot of transport company website
    description: "Designed and developed a professional and efficient website for a transport company, focusing on streamlined service inquiries, tracking, and company information.",
  },
  {
    title: "Comprehensive Brand Identity Development",
    category: "Branding / Graphic Design",
    image: "https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumRcZjHr6mu2iQAmoaFD3d9eMskP7J6LXV4IRl", // Replace with a collage or mockups of various branding projects
    description: "Delivered cohesive branding solutions for a diverse range of clients, including educational institutions, innovative startups, and specialty cafes, establishing strong and memorable visual identities.",
  },
];
  return (
    <div className='min-h-screen bg-white '>
       <section id="portfolio" className="py-20 bg-white w-full">
              <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <Badge className="bg-emerald-100 text-emerald-700 mb-4">Our Work</Badge>
                  <h2 className="text-2xl lg:text-4xl md:text-5xl font-bold text-black mb-6">Featured Projects</h2>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    Take a look at some of our recent work and see how we've helped businesses achieve their goals.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 gap-8">
                  {portfolio.map((project, index) => (
                    <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">View Project</Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-emerald-100 text-emerald-700 mb-3">{project.category}</Badge>
                        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}

export default Portfolio
