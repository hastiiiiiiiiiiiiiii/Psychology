"use client";

import Image from "next/image";
import Link from "next/link";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "framer-motion";

export default function CTA() {
    /* ------------------------------
        Scroll Parallax
    ------------------------------ */

    const { scrollY } = useScroll();

    const backgroundY = useTransform(
        scrollY,
        [0, 3000],
        [0, 140]
    );

    /* ------------------------------
        Mouse Parallax
    ------------------------------ */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 60,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 60,
        damping: 20,
    });

    function handleMouseMove(e) {
        const { innerWidth, innerHeight } = window;

        const x = (e.clientX - innerWidth / 2) / 45;
        const y = (e.clientY - innerHeight / 2) / 45;

        mouseX.set(x);
        mouseY.set(y);
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden py-36"
        >
            {/* ===========================
            Background Image
      =========================== */}

            <motion.div
                style={{
                    y: backgroundY,
                    x: smoothX,
                    scale: 1.08,
                }}
                className="absolute inset-0"
            >
                <Image
                    src="/9.jpg"
                    alt="Psychology"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* ===========================
            Dark Overlay
      =========================== */}

            <div className="absolute inset-0 bg-black/55" />

            {/* ===========================
            Premium Gradient
      =========================== */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/75" />

            {/* ===========================
            Radial Light
      =========================== */}

            <motion.div
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
                className="absolute left-1/2 top-1/2 h-[650px] w-[650px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full
        bg-[#7D9A70]/20
        blur-[170px]"
            />

            {/* ===========================
            Decorative Blur 1
      =========================== */}

            <motion.div
                animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 9,
                    ease: "easeInOut",
                }}
                className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#6F8A63]/20 blur-[140px]"
            />

            {/* ===========================
            Decorative Blur 2
      =========================== */}

            <motion.div
                animate={{
                    y: [0, 35, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 11,
                    ease: "easeInOut",
                }}
                className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#9AB089]/20 blur-[170px]"
            >
            </motion.div>

            {/* ===========
          ادامه...
      =========== */}
            {/* ===========================
            Floating Light Particles
      =========================== */}

            {[...Array(18)].map((_, index) => (
                <motion.div
                    key={index}
                    initial={{
                        opacity: 0,
                        y: 80,
                        x: Math.random() * 100 - 50,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        y: -220,
                        x: Math.random() * 80 - 40,
                    }}
                    transition={{
                        duration: 7 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 6,
                        ease: "easeInOut",
                    }}
                    className="absolute h-2 w-2 rounded-full bg-white/40 blur-[1px]"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: "-20px",
                    }}
                />
            ))}

            {/* ===========================
            Floating Leaves
      =========================== */}

            {[...Array(7)].map((_, index) => (
                <motion.div
                    key={`leaf-${index}`}
                    initial={{
                        opacity: 0,
                        rotate: -20,
                        y: 100,
                    }}
                    animate={{
                        opacity: [0, 0.18, 0],
                        y: -700,
                        x: [0, 35, -25, 20, 0],
                        rotate: [0, 15, -15, 12, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 18 + index * 2,
                        delay: index * 2,
                        ease: "linear",
                    }}
                    className="absolute text-5xl select-none"
                    style={{
                        left: `${10 + index * 12}%`,
                        bottom: "-120px",
                        filter: "blur(.5px)",
                    }}
                >
                    🍃
                </motion.div>
            ))}

            {/* ===========================
            Floating Glow
      =========================== */}

            <motion.div
                animate={{
                    opacity: [0.2, 0.45, 0.2],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                }}
                className="absolute left-1/4 top-24 h-44 w-44 rounded-full bg-white/10 blur-[110px]"
            />

            <motion.div
                animate={{
                    opacity: [0.15, 0.4, 0.15],
                    scale: [1.05, 1, 1.05],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                }}
                className="absolute right-1/4 bottom-20 h-56 w-56 rounded-full bg-[#6F8A63]/20 blur-[130px]"
            />

            {/* ===========================
            Vignette
      =========================== */}

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.35) 100%)",
                }}
            />

            {/* ===========================
            Noise Texture
      =========================== */}

            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
                style={{
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/noise.png')",
                }}
            />

            {/* ===========================
            Content
      =========================== */}
            {/* ===========================
              Content
      =========================== */}

            <div className="relative z-20 mx-auto flex min-h-[650px] max-w-screen-xl items-center justify-center px-6 lg:px-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                    className="max-w-4xl text-center"
                >
                    {/* Badge */}

                    <motion.span
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: .2,
                            duration: .5,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl"
                    >
                        ✨ اولین قدم همیشه مهم‌ترین قدم است
                    </motion.span>

                    {/* Title */}

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: .35,
                            duration: .8,
                        }}
                        className="mt-10 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
                    >
                        امروز برای آرامش
                        <br />
                        آینده‌تان تصمیم بگیرید.
                    </motion.h2>

                    {/* Description */}

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: .55,
                            duration: .8,
                        }}
                        className="mx-auto mt-8 max-w-3xl text-lg leading-10 text-white/85"
                    >
                        اگر احساس می‌کنید به همراهی، گفتگو یا راهنمایی تخصصی
                        نیاز دارید، همین امروز اولین قدم را بردارید.
                        <br />
                        تغییرات بزرگ، همیشه از یک تصمیم کوچک آغاز می‌شوند.
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: .8,
                            duration: .7,
                        }}
                        className="mt-14 flex flex-wrap justify-center gap-5"
                    >
                        <Link
                            href="/appointment"
                            className="group rounded-full bg-[#6F8A63] px-10 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#5C7452] hover:shadow-2xl"
                        >
                            <span className="flex items-center gap-3">
                                شروع مشاوره

                                <motion.span
                                    animate={{
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                    }}
                                >
                                    ←
                                </motion.span>
                            </span>
                        </Link>

                        <Link
                            href="/contact"
                            className="rounded-full border border-white/30 bg-white/10 px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
                        >
                            تماس با ما
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}