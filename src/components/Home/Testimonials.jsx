"use client";

import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Monitor,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import Image from "next/image";

const colors = {
  primary: "#10b981",     // Emerald
  dark: "#111827",        // Gray-900
  light: "#f9fafb",       // Gray-50
  gray: "#f3f4f6",        // Gray-100
  primaryLight: "#d1fae5" // Emerald-100
};

const testimonialData = {
  students: [
    {
      name: "Ronit JaiPrakash",
      role: "Application Developer, Caelius Consultancy",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFewlI7VW09Fg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708280686326?e=1750896000&v=beta&t=0R4Hv32FtHwwVjasXKxKdfRdrRIjmG-WsS3WtPzXrbk",
      testimonial: "The Uniques Community provided me with the skills and connections to launch my career as a Full Stack Developer. The mentorship I received was invaluable in helping me secure my role at Caelius Consultancy.",
      rating: 5,
      highlight: "MERN Stack Expert"
    },
    {
      name: "Naveen Jaiswal",
      role: "Software Developer, Thor Solutions",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHVwXFQ1mWrtA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710089176344?e=1750896000&v=beta&t=aHOisuhFveYFq6GRDuF14B0vIfq5DvWZAgTK0zK_qQU",
      testimonial: "Through the practical projects and industry-focused training at The Uniques, I developed the technical expertise needed to excel in my role developing product customization platforms.",
      rating: 5,
      highlight: "Product Development"
    },
    {
      name: "Parveen Jaiswal",
      role: "Web Developer, SpacePepper Studios",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFnP2LqKHK4Tg/profile-displayphoto-shrink_400_400/B56ZXRMoqbGsAk-/0/1742971506111?e=1750896000&v=beta&t=YpcZyttRFoUJDxr-s0uaEkHz7azUendwExwEos5ITXQ",
      testimonial: "As an MCD Level-1 certified developer, I can attribute much of my success to the guidance and opportunities provided by The Uniques Community. They helped transform my passion into expertise.",
      rating: 5,
      highlight: "MCD Certified"
    },
    // {
    //   name: "Mantasha Tabassum",
    //   role: "Application Developer, Caelius Consulting",
    //   image: "https://media.licdn.com/dms/image/v2/D4D03AQElXzWUBeGTYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697386293419?e=1750896000&v=beta&t=fHVOQ0t1DJ3-zImyPe3Z6ELvu4bIrcxbJJs3oJuZVtg",
    //   testimonial: "The Uniques Community gave me the confidence and AWS expertise I needed to implement cloud solutions and optimize infrastructure. Their hands-on approach truly made the difference.",
    //   rating: 5,
    //   highlight: "AWS Specialist"
    // }
  ],
  faculty: [
    {
      name: "Dr. Rajesh Sharma",
      role: "Professor of Computer Science, IIT Delhi",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      testimonial: "The curriculum designed by The Uniques Community bridges the gap between academic learning and industry requirements perfectly. My students who engage with their programs consistently perform better in real-world applications.",
      rating: 5,
      highlight: "Industry Alignment"
    },
    {
      name: "Prof. Anita Desai",
      role: "Head of IT Department, Delhi University",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      testimonial: "I've witnessed a remarkable transformation in students who participate in The Uniques programs. Their confidence, technical skills, and problem-solving abilities show significant improvement.",
      rating: 5,
      highlight: "Skill Enhancement"
    },
    // {
    //   name: "Dr. Vikram Mehta",
    //   role: "Dean of Engineering, Chandigarh University",
    //   image: "https://randomuser.me/api/portraits/men/32.jpg",
    //   testimonial: "The Uniques Community's approach to practical learning complements our academic curriculum perfectly. Their industry connections provide our students with invaluable networking opportunities.",
    //   rating: 5,
    //   highlight: "Practical Approach"
    // },
    {
      name: "Prof. Sunita Patel",
      role: "Director of Placements, Panjab University",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      testimonial: "Companies actively seek out students who have trained with The Uniques Community. Their program significantly enhances our placement statistics and student career outcomes.",
      rating: 5,
      highlight: "Enhanced Placements"
    }
  ],
  professionals: [
    {
      name: "Amit Kumar",
      role: "CTO, TechForward Solutions",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      testimonial: "The graduates from The Uniques Community join our team with a solid foundation in both technical skills and professional attitude. Their training clearly emphasizes real-world problem solving.",
      rating: 5,
      highlight: "Industry Ready"
    },
    {
      name: "Priya Sharma",
      role: "Engineering Manager, Microsoft India",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      testimonial: "We've hired multiple developers trained by The Uniques, and they consistently demonstrate strong coding practices and teamwork. Their preparation for the industry is exceptional.",
      rating: 5,
      highlight: "Team Players"
    },
    // {
    //   name: "Rahul Verma",
    //   role: "Lead Developer, Amazon Web Services",
    //   image: "https://randomuser.me/api/portraits/men/36.jpg",
    //   testimonial: "The Uniques Community produces developers who understand not just coding, but the entire software development lifecycle. This makes them valuable assets to any tech team.",
    //   rating: 4,
    //   highlight: "Full Lifecycle Skills"
    // },
    {
      name: "Neha Gupta",
      role: "Hiring Manager, Google",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      testimonial: "I'm always impressed by candidates from The Uniques Community. They demonstrate both technical excellence and the soft skills essential for success in collaborative environments.",
      rating: 5,
      highlight: "Balanced Skillset"
    }
  ]
};

const TestimonialCard = ({ image, name, role, testimonial, rating = 5, highlight, delay = 0 }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, 30]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 relative h-full"
    >
      {/* Quote icon decoration */}
      <div className="absolute top-4 right-4 text-emerald-100">
        <Quote className="w-8 h-8" />
      </div>
      
      {/* Highlight badge */}
      {highlight && (
        <div className="absolute -top-3 left-6 py-1 px-3 rounded-full text-xs font-medium bg-emerald-600 text-white">
          {highlight}
        </div>
      )}
      
      {/* Star rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'fill-emerald-500 text-emerald-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial}"</p>
      
      <div className="flex items-center pt-4 border-t border-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const sections = ['students', 'faculty', 'professionals'];
  const activeSection = sections[page % sections.length];
  
  const sectionIcons = {
    'students': <GraduationCap className="w-4 h-4" />,
    'faculty': <Briefcase className="w-4 h-4" />,
    'professionals': <Monitor className="w-4 h-4" />
  };
  
  const sectionTitles = {
    students: "Student Success Stories",
    faculty: "Faculty Perspectives",
    professionals: "Industry Recognition"
  };

  const sectionDescriptions = {
    students: "Hear from our alumni who have successfully launched their careers through our programs",
    faculty: "Academic professionals share their insights on the impact of our training",
    professionals: "Industry leaders discuss the quality and preparedness of our graduates"
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPage(([prevPage]) => [prevPage + 1]);
        setTimeout(() => setIsAnimating(false), 700);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const paginate = (newDirection) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPage([page + newDirection, newDirection]);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 bg-emerald-100 rounded-full opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 bg-emerald-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </motion.span>
          
          <AnimatePresence mode="wait">
            <motion.div key={activeSection + "header"}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              >
                {sectionTitles[activeSection]}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                {sectionDescriptions[activeSection]}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial cards */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonialData[activeSection].map((testimonial, index) => (
                <TestimonialCard
                  key={`${activeSection}-${index}`}
                  {...testimonial}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-all z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Category selector */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex bg-white rounded-full shadow-sm p-1">
            {sections.map((section, index) => {
              const isActive = page % sections.length === index;
              return (
                <motion.button
                  key={section}
                  onClick={() => {
                    if (!isAnimating && !isActive) {
                      setIsAnimating(true);
                      setPage([index, index > page % sections.length ? 1 : -1]);
                      setTimeout(() => setIsAnimating(false), 700);
                    }
                  }}
                  className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-all ${isActive ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:text-emerald-600'}`}
                  whileHover={!isActive ? { scale: 1.05 } : {}}
                >
                  <span className="mr-2">
                    {React.cloneElement(sectionIcons[section], {
                      className: `w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`
                    })}
                  </span>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-2 ">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && page % sections.length !== index) {
                  setIsAnimating(true);
                  setPage([index, index > page % sections.length ? 1 : -1]);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: page % sections.length === index ? colors.primary : colors.gray,
                opacity: page % sections.length === index ? 1 : 0.5
              }}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}