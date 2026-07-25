"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "خانه", href: "/" },
        { name: "درباره من", href: "/about" },
        { name: "خدمات", href: "/services" },
        { name: "مقالات", href: "/articles" },
        { name: "سوالات متداول", href: "/faq" },
        { name: "رزرو نوبت", href: "/appointment" },
        { name: "تماس با ما", href: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${isScrolled
                        ? "bg-white/80 backdrop-blur-xl border-b border-[#DAD7CD] shadow-sm"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-6 lg:px-8">

                    {/* Logo */}

                    <Link href="/" className="relative h-12 w-36 shrink-0 rounded-b-full">
                        <Image
                            src="/logo.jpg"
                            alt="Hoda Moradi"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}

                    <nav className="hidden items-center gap-10 lg:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative text-[15px] font-medium text-[#3D4A3F] transition-colors duration-300 hover:text-[#6B8E5A]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}

                    <div className="hidden lg:block">
                        <Link
                            href="/appointment"
                            className="rounded-full bg-[#6B8E5A] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#587548]"
                        >
                            شروع مشاوره
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
                    >
                        <Menu size={28} className="text-[#3D4A3F]" />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.35 }}
                            className="fixed right-0 top-0 z-50 flex h-screen w-[300px] flex-col bg-[#FFFCF7] p-8 shadow-2xl"
                        >
                            <div className="mb-12 flex items-center justify-between">

                                <Image
                                    src="/logo.png"
                                    alt="Hoda Moradi"
                                    width={120}
                                    height={50}
                                />

                                <button onClick={() => setIsOpen(false)}>
                                    <X size={28} />
                                </button>

                            </div>

                            <div className="flex flex-col gap-7">

                                {navLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-[#3D4A3F] transition hover:text-[#6B8E5A]"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                            </div>

                            <Link
                                href="/appointment"
                                onClick={() => setIsOpen(false)}
                                className="mt-auto rounded-full bg-[#6B8E5A] py-4 text-center font-medium text-white transition hover:bg-[#587548]"
                            >
                                شروع مشاوره
                            </Link>

                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}