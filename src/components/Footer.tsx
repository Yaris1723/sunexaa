import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">BABA SUNEXAA</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                            Empowering industries through reliable procurement and supply chain solutions.
                            Your trusted B2B partner for Solar, Steel, and Industrial infrastructure.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors text-primary-foreground/80">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors text-primary-foreground/80">Our Products</Link></li>
                            <li><Link href="/industries" className="hover:text-white transition-colors text-primary-foreground/80">Industries Served</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors text-primary-foreground/80">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-secondary">Our Portfolio</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products#solar" className="hover:text-white transition-colors text-primary-foreground/80">Solar & Renewable</Link></li>
                            <li><Link href="/products#steel" className="hover:text-white transition-colors text-primary-foreground/80">Galvanised Steel</Link></li>
                            <li><Link href="/products#electrical" className="hover:text-white transition-colors text-primary-foreground/80">Electrical & EV</Link></li>
                            <li><Link href="/products#industrial" className="hover:text-white transition-colors text-primary-foreground/80">Industrial Electronics</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 shrink-0 text-secondary" />
                                <span className="text-primary-foreground/80">
                                    Building No – 454, Pillayar Nagar,<br />
                                    Kanthampatty, Suramangalam,<br />
                                    Salem – 636005, TN.
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 shrink-0 text-secondary" />
                                <span className="text-primary-foreground/80">+91 9561415222</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 mr-3 shrink-0 text-secondary" />
                                <div className="text-primary-foreground/80">
                                    <span>director@babasunexaa.com</span><br />
                                    <span>kowshikrajab@babasunexaa.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} BABA SUNEXAA Trading Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span>CIN: U46909TZ2025PTC036620</span>
                        <span>GST: 33AAOCB0999E1ZI</span>
                    </div>
                </div>
                <div className="text-center mt-4 text-[10px] text-primary-foreground/40">
                    Disclaimer: We operate strictly as a B2B Industrial Supplier. We do not offer retail sales or individual spare parts.
                </div>
            </div>
        </footer>
    );
}
