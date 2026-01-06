"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

export function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group block"
        >
            <motion.div
                className="p-6 bg-card border border-border rounded-lg shadow-sm h-full flex flex-col"
                whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    borderColor: "rgba(11, 37, 69, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <motion.div
                    className="mb-4 text-primary p-3 bg-accent w-fit rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex items-center text-sm font-semibold text-secondary-foreground group-hover:text-primary transition-colors mt-auto">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </motion.div>
        </Link>
    );
}
