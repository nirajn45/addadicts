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
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description: "Modern e-commerce solution with advanced features",
    },
    {
      title: "Banking App",
      category: "Mobile App",
      image: "/placeholder.svg?height=300&width=400",
      description: "Secure mobile banking application with biometric authentication",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Clean and intuitive dashboard for data visualization",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity design for tech startup",
    },
  ]
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
