"use client";

import { Sun, Box, Zap, TrendingUp, Truck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

function ProductItem({ title, description }: { title: string, description: string }) {
    return (
        <motion.div
            className="bg-card p-4 rounded-lg border border-border h-38 flex flex-col"
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                borderColor: "rgba(11, 37, 69, 0.4)"
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground flex-grow">{description}</p>
        </motion.div>
    );
}

function ProductSection({
    id,
    icon,
    title,
    children
}: {
    id: string;
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            id={id}
            className="scroll-mt-24"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                >
                    {icon}
                </motion.div>
                <h2 className="text-3xl font-bold text-primary">{title}</h2>
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function ProductsPage() {
    return (
        <div className="bg-background pb-20">
            <section className="bg-primary pt-24 pb-20 text-white mb-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Product Portfolio
                    </motion.h1>
                    <motion.p
                        className="text-xl text-primary-foreground/90 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Comprehensive industrial supply solutions sourced from verify manufacturers.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 space-y-20">

                {/* Solar */}
                <ProductSection
                    id="solar"
                    icon={<Sun className="h-10 w-10 text-secondary" />}
                    title="Solar Products"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Solar Panels"
                            description="High-efficiency Mono-PERC, Polycrystalline, and Bifacial modules sourced from leading Tier-1 manufacturers."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Mounting Structures"
                            description="Robust Hot Dip Galvanised (HDG) and Galvalume mounting structures. Custom fabrication available."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Solar BOS & Accessories"
                            description="ACDB/DCDB boxes, connectors, crimping tools, and safety equipment."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Earthing & Protection"
                            description="Maintenance-free earthing electrodes, lightning arrestors (ESE/Conventional), and earthing compounds."
                        />
                    </motion.div>
                </ProductSection>

                {/* Galvanised Steel */}
                <ProductSection
                    id="steel"
                    icon={<Box className="h-10 w-10 text-secondary" />}
                    title="Galvanised Steel Products"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="GI Coils, Sheets & Pipes"
                            description="Premium Galvanised Iron coils and sheets with certified coating thickness. ERW and Seamless GI pipes."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="HDG Products"
                            description="Hot Dip Galvanised hardware including angles, channels, and custom brackets."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Fabricated GI Components"
                            description="Precision-engineered fabricated components tailored to specific project drawings."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Fasteners & Supports"
                            description="High-tensile fasteners, clamps, and support systems ensuring structural integrity."
                        />
                    </motion.div>
                </ProductSection>

                {/* HR Steel */}
                <ProductSection
                    id="hr-steel"
                    icon={<CheckCircle2 className="h-10 w-10 text-secondary" />}
                    title="HR Steel & Structurals"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="HR Coils, Sheets & Plates"
                            description="Hot Rolled steel in various grades (IS 2062, etc.) for general engineering and structural apps."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Beams, Channels, Angles"
                            description="Standard and heavy-duty structural steel sections for construction and PEB structures."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Hollow Sections"
                            description="Square (SHS) and Rectangular (RHS) hollow sections offering high strength-to-weight ratios."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Fabrication Supply"
                            description="Raw material supply for large-scale fabrication units and infrastructure projects."
                        />
                    </motion.div>
                </ProductSection>

                {/* Electrical */}
                <ProductSection
                    id="electrical"
                    icon={<Zap className="h-10 w-10 text-secondary" />}
                    title="Electrical Products"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Panels"
                            description="Custom-built LT/HT panels, PCC, MCC, and APFC panels ensuring efficient power distribution."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Switchgear"
                            description="Circuit breakers (MCB, MCCB, ACB), relays, and contactors from top-tier brands."
                        />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem
                            title="Cables & Management"
                            description="LT/HT Power cables, Control cables, Cable trays (Perforated/Ladder), and glands."
                        />
                    </motion.div>
                </ProductSection>

                {/* Industrial Electronics */}
                <ProductSection
                    id="industrial"
                    icon={<TrendingUp className="h-10 w-10 text-secondary" />}
                    title="Industrial Electronics"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem title="PLC & SCADA" description="Programmable Logic Controllers and Supervisory systems." />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem title="Sensors" description="Inductive, capacitive, and photoelectric sensors." />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem title="Meters" description="Digital multifunction meters, energy meters, and panel meters." />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem title="Industrial SMPS" description="Robust Switched Mode Power Supplies for industrial loads." />
                    </motion.div>
                </ProductSection>

                {/* EV Infra */}
                <ProductSection
                    id="ev"
                    icon={<Truck className="h-10 w-10 text-secondary" />}
                    title="EV Infrastructure"
                >
                    <motion.div variants={staggerItem}>
                        <ProductItem title="Charger Enclosures" description="Weather-proof, durable enclosures for AC and DC EV chargers." />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem title="Pedestals" description="Mounting pedestals and stands for standalone charger installations." />
                    </motion.div>
                    <motion.div variants={staggerItem}>
                        <ProductItem title="HV Components" description="High-voltage components, busbars, and battery pack enclosures." />
                    </motion.div>
                </ProductSection>

                <p className="mt-4 text-sm text-red-500 font-medium bg-red-50 p-3 rounded-md border border-red-100 inline-block">
                    ⚠️ Industrial & infrastructure supply only — not retail EV spare parts.
                </p>

            </div>
        </div>
    );
}

