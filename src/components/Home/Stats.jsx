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
function Stats() {
    const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "3", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]
  return (
    <div className=''>
      <section className="bg-white relative overflow-hidden pb-5">
         {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-emerald-50 opacity-90 "></div>
            {/* Background decorative elements */}
           
      
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-4 relative z-10 ">
             
      
              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {/* Card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-300 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 -z-10"></div>
                    
                    {/* Card content */}
                    <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-50 group-hover:border-emerald-100 transition-all duration-300 h-full flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      />
                      
                      {/* Animated number */}
                      <motion.div
                        className="text-4xl md:text-5xl font-bold text-emerald-600 mb-3 relative"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {stat.number}
                        {/* <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-emerald-200 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        /> */}
                      </motion.div>
                      
                      {/* Label */}
                      <motion.div
                        className="text-gray-700 text-lg font-medium mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        {stat.label}
                      </motion.div>
                      
                      {/* Floating dots decoration */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-100 opacity-70"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    </div>
  )
}

export default Stats
