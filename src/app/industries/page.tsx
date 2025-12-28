import { Sun, Zap, Truck, Warehouse, Factory, HardHat } from "lucide-react";

const industries = [
    {
        title: "Solar EPC",
        icon: <Sun className="h-10 w-10 text-secondary" />,
        description: "Supporting Engineering, Procurement, and Construction firms with end-to-end supply of modules, mounting structures, and balance of system components, ensuring rapid project commissioning.",
    },
    {
        title: "Power Plants",
        icon: <Zap className="h-10 w-10 text-secondary" />,
        description: "Delivering critical electrical and structural components for thermal, hydro, and renewable power generation facilities.",
    },
    {
        title: "EV OEM & Charging Infra",
        icon: <Truck className="h-10 w-10 text-secondary" />,
        description: "Partnering with Charge Point Operators (CPOs) and EV manufacturers to supply robust enclosures, pedestals, and electrical infrastructure for charging stations.",
    },
    {
        title: "Infrastructure Projects",
        icon: <HardHat className="h-10 w-10 text-secondary" />,
        description: "Supplying bulk steel and structural materials for highways, bridges, railways, and public infrastructure developments.",
    },
    {
        title: "Manufacturing Units",
        icon: <Factory className="h-10 w-10 text-secondary" />,
        description: "Providing raw materials and industrial electronics to keep production lines running efficiently and automating processes.",
    },
    {
        title: "Logistics & Warehousing",
        icon: <Warehouse className="h-10 w-10 text-secondary" />,
        description: "Supplying structural steel and roofing solutions for the construction of modern warehousing and logistics parks.",
    },
];

export default function IndustriesPage() {
    return (
        <div className="bg-background pb-20">
            <section className="bg-primary py-20 text-white mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Strategic supply solutions tailored for key economic sectors.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="bg-card border border-border p-8 rounded-lg hover:shadow-lg transition-shadow group">
                            <div className="mb-6 p-4 bg-primary/5 rounded-full w-fit group-hover:bg-primary group-hover:bg-opacity-100 transition-colors">
                                {/* Hack to change icon color on hover if needed, but keeping simple for now */}
                                <div className="group-hover:text-white transition-colors">
                                    {industry.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">{industry.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
