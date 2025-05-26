"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react"
import FAQSection from "../Services/Faq"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/sendEmail/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@adaddictz.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 80006 00133",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      value: "123 Business Street",
      description: "San Francisco, CA 94102",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      value: "Mon - Fri: 9am - 6pm",
      description: "Weekend support available",
    },
  ]

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/adaddictz",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/adaddictz",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/adaddictz",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "https://facebook.com/adaddictz"
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      <ToastContainer />

      {/* Contact Form & Info Section */}
      <section id="form" className="py-20 bg-white">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="lg:text-3xl text-2xl font-bold text-black mb-8">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with us through any of the following channels. We're here to help and answer any questions
                you might have.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <CardContent className="lg:px-6 px-4">
                      <div className="flex items-start">
                        <div className="text-emerald-500 mr-4 mt-1">{info.icon}</div>
                        <div>
                          <h3 className="font-bold text-black mb-1">{info.title}</h3>
                          <p className="text-lg text-black mb-1">{info.value}</p>
                          {/* <p className="text-gray-600 text-sm">{info.description}</p> */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

            {/* WhatsApp Quick Connect */}
            <div className="mt-8 ">
                <Card className="border-emerald-200 bg-emerald-50 ">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <MessageCircle className="w-8 h-8 text-emerald-500 mr-0 sm:mr-4 mb-2 sm:mb-0" />
                            <div className="flex-1 mb-3 sm:mb-0">
                                <h3 className="font-bold text-black mb-1">Quick Connect</h3>
                                <p className="text-gray-600 text-sm">Message us directly on WhatsApp for instant support</p>
                            </div>
                            <Button
                                asChild
                                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer mt-2 sm:mt-0"
                            >
                                <a
                                    href="https://wa.me/+916204991247"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Message Now
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            </div>
            <div>
                <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-black mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                {/* {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    <span className="text-emerald-700">Message sent successfully! We'll get back to you soon.</span>
                  </div> */}
                

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 123-4567"
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      required
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Website Development</option>
                      <option value="app-development">App Development</option>
                      <option value="social-media-handling">Social Media Handling</option>
                      <option value="social-media-marketing">Social Media Marketing</option>
                      <option value="graphic-designing">Graphic Designing</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
    
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of San Francisco, we're always happy to meet in person.
            </p>
          </div>

          <Card className="border-0 overflow-hidden">
            <div className="rounded-xl overflow-hidden shadow-lg h-[460px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33982735148!2d-87.8720468!3d41.8339041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAS Trans Inc Headquarters Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  )
}