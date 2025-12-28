import { Sun, Box, Zap, TrendingUp, Truck, CheckCircle2 } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="bg-background pb-20">
            <section className="bg-primary py-20 text-white mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Portfolio</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Comprehensive industrial supply solutions sourced from verify manufacturers.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 space-y-20">

                {/* Solar */}
                <div id="solar" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <Sun className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">Solar Products</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductItem
                            title="Solar Panels"
                            description="High-efficiency Mono-PERC, Polycrystalline, and Bifacial modules sourced from leading Tier-1 manufacturers."
                        />
                        <ProductItem
                            title="Mounting Structures"
                            description="Robust Hot Dip Galvanised (HDG) and Galvalume mounting structures. Custom fabrication available."
                        />
                        <ProductItem
                            title="Solar BOS & Accessories"
                            description="ACDB/DCDB boxes, connectors, crimping tools, and safety equipment."
                        />
                        <ProductItem
                            title="Earthing & Protection"
                            description="Maintenance-free earthing electrodes, lightning arrestors (ESE/Conventional), and earthing compounds."
                        />
                    </div>
                </div>

                {/* Galvanised Steel */}
                <div id="steel" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <Box className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">Galvanised Steel Products</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductItem
                            title="GI Coils, Sheets & Pipes"
                            description="Premium Galvanised Iron coils and sheets with certified coating thickness. ERW and Seamless GI pipes."
                        />
                        <ProductItem
                            title="HDG Products"
                            description="Hot Dip Galvanised hardware including angles, channels, and custom brackets."
                        />
                        <ProductItem
                            title="Fabricated GI Components"
                            description="Precision-engineered fabricated components tailored to specific project drawings."
                        />
                        <ProductItem
                            title="Fasteners & Supports"
                            description="High-tensile fasteners, clamps, and support systems ensuring structural integrity."
                        />
                    </div>
                </div>

                {/* HR Steel */}
                <div id="hr-steel" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <CheckCircle2 className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">HR Steel & Structurals</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductItem
                            title="HR Coils, Sheets & Plates"
                            description="Hot Rolled steel in various grades (IS 2062, etc.) for general engineering and structural apps."
                        />
                        <ProductItem
                            title="Beams, Channels, Angles"
                            description="Standard and heavy-duty structural steel sections for construction and PEB structures."
                        />
                        <ProductItem
                            title="Hollow Sections"
                            description="Square (SHS) and Rectangular (RHS) hollow sections offering high strength-to-weight ratios."
                        />
                        <ProductItem
                            title="Fabrication Supply"
                            description="Raw material supply for large-scale fabrication units and infrastructure projects."
                        />
                    </div>
                </div>

                {/* Electrical */}
                <div id="electrical" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <Zap className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">Electrical Products</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductItem
                            title="Panels"
                            description="Custom-built LT/HT panels, PCC, MCC, and APFC panels ensuring efficient power distribution."
                        />
                        <ProductItem
                            title="Switchgear"
                            description="Circuit breakers (MCB, MCCB, ACB), relays, and contactors from top-tier brands."
                        />
                        <ProductItem
                            title="Cables & Management"
                            description="LT/HT Power cables, Control cables, Cable trays (Perforated/Ladder), and glands."
                        />
                    </div>
                </div>

                {/* Industrial Electronics */}
                <div id="industrial" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <TrendingUp className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">Industrial Electronics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductItem title="PLC & SCADA" description="Programmable Logic Controllers and Supervisory systems." />
                        <ProductItem title="Sensors" description="Inductive, capacitive, and photoelectric sensors." />
                        <ProductItem title="Meters" description="Digital multifunction meters, energy meters, and panel meters." />
                        <ProductItem title="Industrial SMPS" description="Robust Switched Mode Power Supplies for industrial loads." />
                    </div>
                </div>

                {/* EV Infra */}
                <div id="ev" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-border pb-4">
                        <Truck className="h-10 w-10 text-secondary" />
                        <h2 className="text-3xl font-bold text-primary">EV Infrastructure</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductItem title="Charger Enclosures" description="Weather-proof, durable enclosures for AC and DC EV chargers." />
                        <ProductItem title="Pedestals" description="Mounting pedestals and stands for standalone charger installations." />
                        <ProductItem title="HV Components" description="High-voltage components, busbars, and battery pack enclosures." />
                    </div>
                    <p className="mt-4 text-sm text-red-500 font-medium bg-red-50 p-3 rounded-md border border-red-100 inline-block">
                        ⚠️ Industrial & infrastructure supply only — not retail EV spare parts.
                    </p>
                </div>

            </div>
        </div>
    );
}

function ProductItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}
