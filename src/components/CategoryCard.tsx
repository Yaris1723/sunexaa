import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            className="group block p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all hover:border-primary/20"
        >
            <div className="flex flex-col h-full">
                <div className="mb-4 text-primary p-3 bg-accent w-fit rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {description}
                </p>
                <div className="flex items-center text-sm font-semibold text-secondary-foreground group-hover:text-primary transition-colors mt-auto">
                    Explore Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
