"use client";

import { ShieldCheck, BarChart3, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="bg-primary pt-24 pb-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About BABA SUNEXAA</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Empowering Industries through Reliable Procurement & Supply Chain Solutions.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
                            <div className="h-1 w-20 bg-secondary mb-6"></div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                BABA SUNEXAA Trading Private Limited is a premier B2B trading and industrial supply platform headquartered in Salem, Tamil Nadu. We serve as a critical bridge between verify manufacturers and industrial consumers, aggregating demand to deliver cost-effective, high-quality material solutions.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not merely supply products; we engineer procurement efficiency. By strictly adhering to a vendor-aggregation and bulk procurement model, we eliminate inefficiencies in the supply chain, ensuring that EPCs, OEMs, and infrastructure developers receive materials that meet rigorous technical specifications.
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-accent/30 p-8 rounded-lg border border-border">
                            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <Globe className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Aggregate Demand</h4>
                                        <p className="text-sm text-muted-foreground">Consolidating requirements to negotiate better terms with mills and OEMs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <BarChart3 className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Coordinate Fabrication</h4>
                                        <p className="text-sm text-muted-foreground">Managing custom fabrication requirements to precise project standards.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="h-6 w-6 text-primary mr-3 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Ensure Compliance</h4>
                                        <p className="text-sm text-muted-foreground">Implementing strict quality checks and documentation control.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Commitment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="relative rounded-lg p-[3px] group"
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Border */}
                            <div className="absolute inset-0 rounded-lg bg-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Card Content */}
                            <div className="relative bg-background rounded-lg p-8 shadow-sm">
                                <motion.div
                                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </motion.div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    Transparency
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                    Clear documentation and honest communication throughout the procurement lifecycle.
                                </p>
                            </div>
                        </motion.div>
                         <motion.div
                            className="relative rounded-lg p-[3px] group"
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Border */}
                            <div className="absolute inset-0 rounded-lg bg-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Card Content */}
                            <div className="relative bg-background rounded-lg p-8 shadow-sm">
                                <motion.div
                                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </motion.div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    Quality
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                    Certified products from tier-1 manufacturers ensuring long-term reliability.
                                </p>
                            </div>
                        </motion.div>
                         <motion.div
                            className="relative rounded-lg p-[3px] group"
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Border */}
                            <div className="absolute inset-0 rounded-lg bg-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Card Content */}
                            <div className="relative bg-background rounded-lg p-8 shadow-sm">
                                <motion.div
                                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <ShieldCheck className="h-8 w-8 text-primary" />
                                </motion.div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    Execution
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                    Unwavering support to ensure your projects stay on schedule and within budget.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Businesses Trust Us</h2>
                    <p className="text-primary-foreground/90 max-w-3xl mx-auto text-lg leading-relaxed">
                        In a fragmented market, BABA SUNEXAA stands out by offering a professional, corporate approach to trading. We are not retailers; we are industrial partners who understand the complexities of large-scale projects and offer the supply stability required for success.
                    </p>
                </div>
            </section>
        </div>
    );
}
