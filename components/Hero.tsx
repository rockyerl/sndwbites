"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, ChevronDown } from "lucide-react";

interface HeroProps {
    onOrderClick: () => void;
}

// Partikel khusus Hero — warna disesuaikan tema hijau
const HERO_PARTICLES = [
    { emoji: "🌿", color: "rgba(139,195,74,0.7)" },
    { emoji: "✨", color: "rgba(181,224,90,0.8)" },
    { emoji: "💚", color: "rgba(139,195,74,0.6)" },
    { emoji: "🍃", color: "rgba(139,195,74,0.7)" },
    { emoji: "⚡", color: "rgba(181,224,90,0.6)" },
    { emoji: "🦐", color: "rgba(255,255,255,0.5)" },
    { emoji: "🥜", color: "rgba(255,255,255,0.5)" },
    { emoji: "🌱", color: "rgba(139,195,74,0.8)" },
];

export default function Hero({ onOrderClick }: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const [hoverLihat, setHoverLihat] = useState(false);
    const [hoverPesan, setHoverPesan] = useState(false);
    const [particles, setParticles] = useState<
        { id: number; x: number; size: number; delay: number; dur: number; emoji: string; opacity: number }[]
    >([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: 18 }, (_, i) => {
                const p = HERO_PARTICLES[i % HERO_PARTICLES.length];
                return {
                    id: i,
                    x: Math.random() * 100,
                    size: Math.random() * 20 + 14,
                    delay: Math.random() * 12,
                    dur: 10 + Math.random() * 10,
                    emoji: p.emoji,
                    opacity: 0.35 + Math.random() * 0.35,
                };
            })
        );
    }, []);

    return (
        <section
            ref={heroRef}
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(160deg, var(--forest) 0%, #2d5a35 55%, #1a3d1f 100%)",
                position: "relative",
                overflow: "hidden",
                paddingTop: 80,
                paddingBottom: 40,
            }}
        >
            {/* ── Particles (hanya di dalam Hero) ── */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        bottom: "-30px",
                        fontSize: `${p.size}px`,
                        opacity: p.opacity,
                        animation: `heroFloatUp ${p.dur}s linear ${p.delay}s infinite`,
                        pointerEvents: "none",
                        zIndex: 1,
                        filter: "drop-shadow(0 0 6px rgba(139,195,74,0.4))",
                    }}
                >
                    {p.emoji}
                </div>
            ))}

            {/* ── Animated background blobs ── */}
            <div style={{
                position: "absolute", top: "5%", right: "-5%",
                width: 420, height: 420,
                background: "radial-gradient(circle, rgba(139,195,74,0.18) 0%, transparent 70%)",
                borderRadius: "50%", filter: "blur(40px)",
                animation: "blobFloat1 9s ease-in-out infinite",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "5%", left: "-8%",
                width: 340, height: 340,
                background: "radial-gradient(circle, rgba(181,224,90,0.12) 0%, transparent 70%)",
                borderRadius: "50%", filter: "blur(40px)",
                animation: "blobFloat2 11s ease-in-out infinite",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", top: "40%", left: "10%",
                width: 180, height: 180,
                background: "radial-gradient(circle, rgba(139,195,74,0.09) 0%, transparent 70%)",
                borderRadius: "50%", filter: "blur(30px)",
                animation: "blobFloat1 13s ease-in-out 2s infinite",
                pointerEvents: "none",
            }} />

            {/* ── Grid overlay ── */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
                backgroundImage: "linear-gradient(rgba(139,195,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,195,74,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
            }} />

            {/* ── Aurora sweep ── */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(180deg, transparent 0%, rgba(139,195,74,0.06) 40%, rgba(45,90,53,0.1) 60%, transparent 100%)",
                animation: "aurora 8s ease-in-out infinite",
            }} />

            {/* ── Content ── */}
            <div style={{ textAlign: "center", zIndex: 2, padding: "0 20px", maxWidth: 720 }}>

                {/* Logo */}
                <div className="animate-bounce-slow" style={{ marginBottom: 28, display: "inline-block" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <div style={{
                            position: "absolute", inset: -10,
                            borderRadius: "50%",
                            border: "2.5px dashed rgba(139,195,74,0.4)",
                            animation: "spinSlow 18s linear infinite",
                        }} />
                        <Image
                            src="/logo.jpeg"
                            alt="SNDW Bites"
                            width={170}
                            height={170}
                            style={{ borderRadius: "50%", border: "5px solid var(--lime)", boxShadow: "0 0 70px rgba(139,195,74,0.45), 0 20px 60px rgba(0,0,0,0.5)", display: "block" }}
                        />
                    </div>
                </div>

                {/* Badge */}
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "rgba(139,195,74,0.18)", border: "1px solid rgba(139,195,74,0.35)",
                    color: "var(--lime-bright)", borderRadius: 20, padding: "5px 16px",
                    fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 20,
                    textTransform: "uppercase" as const,
                    animation: "fadeSlideUp 0.6s ease both",
                }}>
                    🌿 Snack Premium · 100% Indonesia
                </div>

                {/* Headline */}
                <h1 style={{
                    color: "white", fontSize: "clamp(2.4rem, 7.5vw, 5rem)",
                    fontWeight: 900, lineHeight: 1.05, letterSpacing: -1, marginBottom: 16,
                    animation: "fadeSlideUp 0.7s ease 0.1s both",
                }}>
                    Kriuk yang{" "}
                    <span style={{
                        color: "var(--lime-bright)",
                        textShadow: "0 0 40px rgba(181,224,90,0.6)",
                        display: "inline-block",
                        animation: "wiggleFun 2.5s ease-in-out 1.5s infinite",
                    }}>Nggak</span>
                    <br />
                    Bisa Berhenti! 🤤
                </h1>

                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", marginBottom: 12, letterSpacing: 0.5, animation: "fadeSlideUp 0.7s ease 0.2s both" }}>
                    Rebon Udang · Kacang Pilihan
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 36, fontStyle: "italic", animation: "fadeSlideUp 0.7s ease 0.3s both" }}>
                    Gurih · Renyah · Nikmat — dari dapur Indonesia
                </p>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const, animation: "fadeSlideUp 0.7s ease 0.4s both" }}>
                    <button
                        onClick={() => document.getElementById("produk-rebon")?.scrollIntoView({ behavior: "smooth" })}
                        onMouseEnter={() => setHoverLihat(true)}
                        onMouseLeave={() => setHoverLihat(false)}
                        style={{
                            background: hoverLihat
                                ? "linear-gradient(135deg, var(--lime-bright), var(--lime))"
                                : "linear-gradient(135deg, var(--lime), var(--lime-bright))",
                            border: "none", borderRadius: 50, padding: "16px 38px",
                            color: "var(--forest)", fontWeight: 900, fontSize: 16, cursor: "pointer",
                            boxShadow: hoverLihat
                                ? "0 16px 40px rgba(139,195,74,0.55), 0 0 0 6px rgba(139,195,74,0.15)"
                                : "0 8px 30px rgba(139,195,74,0.4)",
                            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                            transform: hoverLihat ? "translateY(-5px) scale(1.06)" : "scale(1)",
                            display: "inline-flex", alignItems: "center", gap: 8,
                        }}
                    >
                        <ShoppingCart size={18}
                                      style={{ transition: "transform 0.3s", transform: hoverLihat ? "rotate(-12deg) scale(1.2)" : "none" }}
                        />
                        Lihat Produk
                    </button>

                    <button
                        onClick={onOrderClick}
                        onMouseEnter={() => setHoverPesan(true)}
                        onMouseLeave={() => setHoverPesan(false)}
                        style={{
                            background: hoverPesan ? "rgba(255,255,255,0.12)" : "transparent",
                            border: `2px solid ${hoverPesan ? "var(--lime-bright)" : "rgba(255,255,255,0.35)"}`,
                            borderRadius: 50, padding: "16px 32px",
                            color: hoverPesan ? "var(--lime-bright)" : "white",
                            fontWeight: 700, fontSize: 16, cursor: "pointer",
                            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                            transform: hoverPesan ? "translateY(-5px) scale(1.04)" : "scale(1)",
                            boxShadow: hoverPesan ? "0 10px 28px rgba(139,195,74,0.2)" : "none",
                            display: "inline-flex", alignItems: "center", gap: 8,
                        }}
                    >
                        <span style={{
                            display: "inline-block",
                            transition: "transform 0.3s",
                            transform: hoverPesan ? "scale(1.3) rotate(10deg)" : "none",
                        }}>💬</span>
                        Pesan WA
                    </button>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: 36, justifyContent: "center", marginTop: 52, flexWrap: "wrap" as const, animation: "fadeSlideUp 0.7s ease 0.5s both" }}>
                    {[["2", "Varian Rasa"], ["500+", "Pelanggan Puas"], ["⭐ 4.9", "Rating"]].map(([val, label], idx) => (
                        <div key={label} style={{ textAlign: "center", animation: `fadeSlideUp 0.5s ease ${0.5 + idx * 0.1}s both` }}>
                            <div style={{ color: "var(--lime-bright)", fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", textShadow: "0 0 20px rgba(181,224,90,0.4)" }}>{val}</div>
                            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 2 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", opacity: 0.5, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, zIndex: 2 }} className="animate-bounce-slow">
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>scroll</span>
                <ChevronDown color="white" size={26} />
            </div>

            {/* Keyframes */}
            <style>{`
                @keyframes heroFloatUp {
                    0%   { transform: translateY(0)      rotate(0deg);   opacity: 0; }
                    5%   { opacity: 1; }
                    90%  { opacity: 0.6; }
                    100% { transform: translateY(-105vh) rotate(360deg); opacity: 0; }
                }
                @keyframes blobFloat1 {
                    0%,100% { transform: translate(0,0) scale(1); }
                    33%     { transform: translate(-30px, 25px) scale(1.07); }
                    66%     { transform: translate(20px, -15px) scale(0.95); }
                }
                @keyframes blobFloat2 {
                    0%,100% { transform: translate(0,0) scale(1); }
                    33%     { transform: translate(25px, -20px) scale(1.05); }
                    66%     { transform: translate(-15px, 30px) scale(0.96); }
                }
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes aurora {
                    0%,100% { opacity: 1; transform: translateY(0); }
                    50%     { opacity: 0.5; transform: translateY(-15px); }
                }
                @keyframes wiggleFun {
                    0%,100% { transform: rotate(0deg); }
                    20%     { transform: rotate(-4deg) scale(1.05); }
                    40%     { transform: rotate(4deg) scale(1.05); }
                    60%     { transform: rotate(-2deg); }
                    80%     { transform: rotate(2deg); }
                }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}