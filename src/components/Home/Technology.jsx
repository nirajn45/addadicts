"use client"
import { Badge } from "@/components/ui/badge"
function Technology() {
     const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ]
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 mb-4">Technology</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Tools We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-emerald-50 transition-colors duration-300 shadow-md group-hover:shadow-lg">
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
