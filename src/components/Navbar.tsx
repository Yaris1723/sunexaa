"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Home, Users, Package, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/products", label: "Products", icon: Package },
    { href: "/industries", label: "Industries", icon: Building },
    { href: "/contact", label: "Contact", icon: Phone },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-6 inset-x-0 mx-auto max-w-6xl z-50 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-md shadow-xl transition-all duration-300">
            <div className="px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-primary leading-none">
                            BABA SUNEXAA
                        </span>
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                            Trading Pvt Ltd
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:bg-[#0B2545] hover:text-white px-4 py-2 rounded-full transition-all flex items-center gap-2"
                        >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                        </Link>
                    ))}
                    <div className="pl-4 ml-4 border-l border-border/50 h-6 flex items-center">
                        <Link
                            href="/contact"
                            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground rounded-full hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 mx-2 p-4 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium px-4 py-3 rounded-lg hover:bg-[#0B2545] hover:text-white transition-colors flex items-center gap-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <link.icon className="h-5 w-5" />
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <Link
                                href="/contact"
                                className="text-lg font-medium px-4 py-3 rounded-lg text-primary hover:bg-primary/5 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Quote
                            </Link>
                            <div className="pt-4 space-y-3 px-4">
                                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                    <span>+91 9561415222</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4" />
                                    <span>director@babasunexaa.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
