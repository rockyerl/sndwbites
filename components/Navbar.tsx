"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    totalItems: number;
    onCartClick: () => void;
}

export default function Navbar({ totalItems, onCartClick }: NavbarProps) {
    const [hoverCart, setHoverCart] = useState(false);

    return (
        <>
            {/* ── Top ticker bar ── */}
            <div style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 101,
                background: "var(--lime)", height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden",
            }}>
                <div style={{
                    display: "flex", gap: 48, alignItems: "center",
                    animation: "tickerScroll 22s linear infinite",
                    whiteSpace: "nowrap" as const,
                    color: "var(--forest)", fontWeight: 700, fontSize: 11, letterSpacing: 1.5,
                }}>
                    {["🦐 REBON UDANG ASLI", "✅ TANPA MSG BERLEBIH", "🥜 KACANG PILIHAN PREMIUM", "⭐ RATING 4.9 — 500+ PELANGGAN PUAS", "🌿 100% PRODUK INDONESIA"].map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                    {/* duplicate for seamless loop */}
                    {["🦐 REBON UDANG ASLI", "✅ TANPA MSG BERLEBIH", "🥜 KACANG PILIHAN PREMIUM", "⭐ RATING 4.9 — 500+ PELANGGAN PUAS", "🌿 100% PRODUK INDONESIA"].map((t, i) => (
                        <span key={`b${i}`}>{t}</span>
                    ))}
                </div>
            </div>

            {/* ── Main Navbar ── */}
            <nav style={{
                position: "fixed", top: 28, left: 0, right: 0, zIndex: 100,
                background: "rgba(26,61,31,0.97)", backdropFilter: "blur(14px)",
                padding: "10px 28px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                boxShadow: "0 2px 24px rgba(0,0,0,0.3)",
                borderBottom: "1px solid rgba(139,195,74,0.15)",
            }}>
                {/* Logo + name + tagline */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ position: "relative" }}>
                        <Image
                            src="/logo.jpeg"
                            alt="SNDW Bites"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", border: "2px solid var(--lime)", display: "block" }}
                        />
                        {/* online dot */}
                        <span style={{
                            position: "absolute", bottom: 1, right: 1,
                            width: 9, height: 9, borderRadius: "50%",
                            background: "#4caf50", border: "1.5px solid var(--forest)",
                        }} />
                    </div>
                    <div>
                        <div style={{ color: "white", fontWeight: 900, fontSize: 16, letterSpacing: 1, lineHeight: 1.1 }}>SNDW BITES</div>
                        <div style={{ color: "var(--lime)", fontSize: 10, fontWeight: 600, letterSpacing: 0.5 }}>Kriuk · Gurih · Nikmat 🌿</div>
                    </div>
                </div>

                {/* Nav links */}
                <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {[
                        { label: "Produk", href: "#produk-rebon" },
                        { label: "Tentang", href: "#tentang" },
                        { label: "Testimoni", href: "#testimoni" },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600, fontSize: 13, padding: "6px 14px", borderRadius: 8, transition: "all 0.2s", position: "relative" }}
                            onMouseEnter={e => { e.currentTarget.style.color = "var(--lime-bright)"; e.currentTarget.style.background = "rgba(139,195,74,0.08)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.background = "transparent"; }}
                        >
                            {label}
                        </a>
                    ))}

                    {/* Divider */}
                    <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />

                    {/* Cart button */}
                    <button
                        onClick={onCartClick}
                        onMouseEnter={() => setHoverCart(true)}
                        onMouseLeave={() => setHoverCart(false)}
                        style={{
                            background: hoverCart
                                ? "linear-gradient(135deg, var(--lime-bright), var(--lime))"
                                : "linear-gradient(135deg, var(--lime), var(--lime-bright))",
                            border: "none", borderRadius: 20, padding: "8px 18px",
                            color: "var(--forest)", fontWeight: 800, cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 6, fontSize: 13,
                            position: "relative", marginLeft: 4,
                            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                            transform: hoverCart ? "translateY(-2px) scale(1.04)" : "scale(1)",
                            boxShadow: hoverCart ? "0 6px 20px rgba(139,195,74,0.45)" : "none",
                        }}
                    >
                        <ShoppingCart size={15} style={{ transition: "transform 0.3s", transform: hoverCart ? "rotate(-10deg)" : "none" }} />
                        Keranjang
                        {totalItems > 0 && (
                            <span style={{
                                position: "absolute", top: -8, right: -8,
                                background: "#e74c3c", color: "white", borderRadius: "50%",
                                width: 20, height: 20, fontSize: 10, fontWeight: 900,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 2px 8px rgba(231,76,60,0.6)",
                                animation: "badgePop 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                            }}>
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            <style>{`
                @keyframes tickerScroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes badgePop {
                    from { transform: scale(0); }
                    to   { transform: scale(1); }
                }
            `}</style>
        </>
    );
}