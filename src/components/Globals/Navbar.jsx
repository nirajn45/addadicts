"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Add scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  // Helper to check if nav item is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

return (
    <div className="w-full bg-white">
        <nav
            className={`fixed top-0 py-3 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <div className="">
                            <img
                                src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumI1FFE6R21jqluvKkFoRaDpPfCGTtxewIs74z"
                                alt="Adaddictz Logo"
                                width={140}
                                height={40}
                                className="object-contain "
                                priority
                            />
                        </div>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`
                                        relative px-4 py-2 rounded-full font-medium transition-all duration-300
                                        ${
                                            isActive(item.href)
                                                ? "bg-emerald-600 text-white shadow-md scale-105"
                                                : "text-semibold hover:bg-emerald-50 hover:text-emerald-600"
                                        }
                                    `}
                                    style={{
                                        boxShadow:
                                            isActive(item.href)
                                                ? "0 4px 16px 0 rgba(16,185,129,0.10)"
                                                : undefined,
                                    }}
                                >
                                    <span
                                        className={`transition-all duration-300 ${
                                            isActive(item.href) ? "font-semibold" : ""
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/contact">
                    <div className="hidden md:block cursor-pointer">
                        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
                    </div>
                    </Link>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-emerald-600 transition-colors duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`
                                    block px-3 py-2 rounded-full transition-all duration-300
                                    ${
                                        isActive(item.href)
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "text-black hover:bg-emerald-50 hover:text-emerald-600"
                                    }
                                `}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    </div>
)
}

export default Navbar
