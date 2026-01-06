"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "@/lib/animations";

export default function ContactPage() {
    return (
        <div className="bg-background pb-20">
            <section className="bg-primary py-20 text-white mb-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Get in touch for a project-based quote or technical consultation.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Contact Info & Map */}
                    <motion.div
                        className="lg:w-1/2 space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <motion.div variants={fadeInLeft}>
                            <h2 className="text-2xl font-bold mb-6 text-primary">Head Office</h2>
                            <div className="space-y-6">
                                <motion.div
                                    className="flex items-start group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <MapPin className="h-6 w-6 text-secondary mr-4 mt-1 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Address</h4>
                                        <p className="text-muted-foreground">
                                            Building No – 454, Pillayar Nagar,<br />
                                            Kanthampatty, Suramangalam,<br />
                                            Salem – 636005, Tamil Nadu, India.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-center group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Phone className="h-6 w-6 text-secondary mr-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Phone</h4>
                                        <p className="text-muted-foreground font-medium">+91 9561415222</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-center group"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Mail className="h-6 w-6 text-secondary mr-4 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        <p className="text-muted-foreground">director@babasunexaa.com</p>
                                        <p className="text-muted-foreground">kowshikrajab@babasunexaa.com</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            className="bg-accent/50 rounded-lg p-1 h-64 border border-border overflow-hidden relative"
                            variants={fadeInLeft}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                <p className="text-muted-foreground text-sm">[Google Map Placeholder: Salem, TN]</p>
                            </div>
                            {/* Embed code would go here */}
                        </motion.div>
                    </motion.div>

                    {/* Inquiry Form */}
                    <motion.div
                        className="lg:w-1/2 bg-card border border-border rounded-xl p-8 shadow-sm"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-foreground">Send an Inquiry</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Your Company Ltd"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="category">Product Category</label>
                                <select
                                    id="category"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                >
                                    <option value="">Select a category</option>
                                    <option value="solar">Solar Products</option>
                                    <option value="steel">Galvanised Steel</option>
                                    <option value="electrical">Electrical Systems</option>
                                    <option value="industrial">Industrial Electronics</option>
                                    <option value="ev">EV Infrastructure</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="message">Project Details / Requirements</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Describe your project requirements and estimated quantity..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-md hover:bg-secondary/90 transition-all"
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Submit Request
                            </motion.button>
                            <p className="text-xs text-muted-foreground text-center mt-2">
                                Our team usually responds within 24 hours.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

