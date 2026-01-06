"use client";

import Link from "next/link";
import { ArrowRight, Sun, Zap, Box, TrendingUp, ShieldCheck, Truck, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CategoryCard } from "@/components/CategoryCard";
import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";

// Animated Stat Component
function AnimatedStat({ label, value, suffix = "" }: { label: string; value: string; suffix?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  // Extract number from value if it's numeric
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  const count = useCounter({
    end: numericValue,
    duration: 2000,
    isInView: isInView && isNumeric
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <div className="text-3xl font-black text-primary mb-1">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const { ref: categoriesRef, isInView: categoriesInView } = useInView({ threshold: 0.1 });
  const { ref: whyUsRef, isInView: whyUsInView } = useInView({ threshold: 0.1 });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <motion.div
          className="absolute top-0 right-0 p-12 opacity-20 transform translate-x-1/3 -translate-y-1/3"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sun className="h-96 w-96 text-secondary" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              Empowering Industries through <span className="text-secondary">Reliable Procurement</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              BABA SUNEXAA is your trusted B2B partner for Solar, Steel, Electrical, and Industrial Infrastructure supply. We bridge the gap between verified manufacturers and industrial projects.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary/90 transition-all inline-flex items-center justify-center hover:shadow-xl hover:scale-105 transform"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center hover:shadow-xl"
              >
                View Catalog
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-accent py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedStat value="100" suffix="%" label="Verified Vendors" />
            <AnimatedStat value="B2B" label="Bulk Sourcing" />
            <AnimatedStat value="PAN-India" label="Logistics Network" />
            <AnimatedStat value="ISO" label="Quality Compliant" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive supply solutions for renewable energy, infrastructure, and heavy engineering sectors.
            </p>
          </motion.div>

          <motion.div
            ref={categoriesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="Solar Products"
                description="High-efficiency PV modules, mounting structures, and complete BOS solutions for utility-scale and rooftop projects."
                href="/products#solar"
                icon={<Sun className="h-8 w-8" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="Galvanised Steel"
                description="Premium GI coils, sheets, pipes, and fabricated components designed for superior corrosion resistance."
                href="/products#steel"
                icon={<Box className="h-8 w-8" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="Electrical Systems"
                description="LT/HT panels, switchgear, cables, and earthing systems for robust power distribution infrastructure."
                href="/products#electrical"
                icon={<Zap className="h-8 w-8" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="Industrial Electronics"
                description="Advanced PLC, SCADA, sensors, and meters for industrial automation and precise control."
                href="/products#industrial"
                icon={<TrendingUp className="h-8 w-8" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="EV Infrastructure"
                description="Charger enclosures, pedestals, and busbars to support the growing e-mobility ecosystem."
                href="/products#ev"
                icon={<Truck className="h-8 w-8" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CategoryCard
                title="HR Steel & Structurals"
                description="Heavy-duty beams, channels, and plates for construction and large-scale fabrication."
                href="/products#hr-steel"
                icon={<BarChart3 className="h-8 w-8" />}
              />
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/products" className="text-primary font-bold hover:underline inline-flex items-center">
              View Complete Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              className="md:w-1/2"
              ref={whyUsRef}
              initial="hidden"
              animate={whyUsInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.span
                className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block"
                variants={fadeInUp}
              >
                Our Value Proposition
              </motion.span>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                variants={fadeInUp}
              >
                Why Partner with BABA SUNEXAA?
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-6 text-lg"
                variants={fadeInUp}
              >
                We replace procurement chaos with calculated precision. Our vendor-aggregation model ensures you get project-based pricing without compromising on quality or timelines.
              </motion.p>

              <motion.div className="space-y-6" variants={staggerContainer}>
                <motion.div className="flex" variants={fadeInLeft}>
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Certified Quality</h4>
                    <p className="text-sm text-muted-foreground">Rigorous vetting of manufacturers and mill-certified materials.</p>
                  </div>
                </motion.div>
                <motion.div className="flex" variants={fadeInLeft}>
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Single-Window Procurement</h4>
                    <p className="text-sm text-muted-foreground">Consolidated sourcing for Solar, Steel, and Electrical needs.</p>
                  </div>
                </motion.div>
                <motion.div className="flex" variants={fadeInLeft}>
                  <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Logistics Expertise</h4>
                    <p className="text-sm text-muted-foreground">End-to-end delivery management to project sites across India.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={whyUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Abstract visual representation instead of image for now */}
              <div className="bg-primary rounded-lg p-8 relative z-10 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-secondary font-bold text-xl mb-2">Solar EPC</h3>
                    <p className="text-white/80 text-sm">End-to-end component supply</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-secondary font-bold text-xl mb-2">Infra Dev</h3>
                    <p className="text-white/80 text-sm">Bulk steel & structurals</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-secondary font-bold text-xl mb-2">OEMs</h3>
                    <p className="text-white/80 text-sm">Industrial electronics</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-secondary font-bold text-xl mb-2">Factories</h3>
                    <p className="text-white/80 text-sm">Automation & Power</p>
                  </motion.div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 rounded-lg -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Connect with our industrial procurement experts to get a project-specific quote today.
          </p>
          <Link
            href="/contact"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
