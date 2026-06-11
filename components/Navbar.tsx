"use client";

import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
    totalItems: number;
    onCartClick: () => void;
}

export default function Navbar({ totalItems, onCartClick }: NavbarProps) {
    const [hoverCart, setHoverCart] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Produk", href: "#produk-rebon" },
        { label: "Tentang", href: "#tentang" },
        { label: "Testimoni", href: "#testimoni" },
    ];

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
                    {["🦐 REBON UDANG ASLI", "✅ TANPA MSG BERLEBIH", "🥜 KACANG PILIHAN PREMIUM", "⭐ RATING 4.9 — 500+ PELANGGAN PUAS", "🌿 100% PRODUK INDONESIA"].map((t, i) => (
                        <span key={`b${i}`}>{t}</span>
                    ))}
                </div>
            </div>

            {/* ── Main Navbar ── */}
            <nav style={{
                position: "fixed", top: 28, left: 0, right: 0, zIndex: 100,
                background: scrolled
                    ? "var(--dark)"
                    : "color-mix(in srgb, var(--dark) 88%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                padding: "10px 20px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.45)" : "0 2px 12px rgba(0,0,0,0.2)",
                borderBottom: "1.5px solid rgba(181,224,90,0.18)",
                transition: "box-shadow 0.3s, background 0.3s",
            }}>

                {/* Logo + name + tagline */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                        position: "relative",
                        /* White ring so logo always has contrast regardless of bg */
                        padding: 2,
                        borderRadius: "50%",
                        background: "white",
                        boxShadow: "0 0 0 2px var(--lime), 0 4px 12px rgba(0,0,0,0.3)",
                    }}>
                        <Image
                            src="/logo.jpeg"
                            alt="SNDW Bites"
                            width={38}
                            height={38}
                            style={{ borderRadius: "50%", display: "block" }}
                            unoptimized
                        />
                        {/* online dot */}
                        <span style={{
                            position: "absolute", bottom: 2, right: 2,
                            width: 9, height: 9, borderRadius: "50%",
                            background: "#4caf50", border: "1.5px solid white",
                        }} />
                    </div>
                    <div>
                        <div style={{ color: "white", fontWeight: 900, fontSize: 16, letterSpacing: 1, lineHeight: 1.1 }}>SNDW BITES</div>
                        <div style={{ color: "var(--lime)", fontSize: 10, fontWeight: 600, letterSpacing: 0.5 }}>Kriuk · Gurih · Nikmat 🌿</div>
                    </div>
                </div>

                {/* Desktop nav links + cart */}
                <div className="navbar-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 600, fontSize: 13, padding: "6px 14px", borderRadius: 8, transition: "all 0.2s" }}
                            onMouseEnter={e => { e.currentTarget.style.color = "var(--lime-bright)"; e.currentTarget.style.background = "rgba(139,195,74,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.background = "transparent"; }}
                        >
                            {label}
                        </a>
                    ))}

                    <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />

                    <CartButton
                        hoverCart={hoverCart}
                        setHoverCart={setHoverCart}
                        totalItems={totalItems}
                        onCartClick={onCartClick}
                    />
                </div>

                {/* Mobile right: cart badge + hamburger */}
                <div className="navbar-mobile" style={{ display: "none", alignItems: "center", gap: 10 }}>
                    {/* Mini cart icon */}
                    <button
                        onClick={onCartClick}
                        style={{
                            background: "linear-gradient(135deg, var(--lime), var(--lime-bright))",
                            border: "none", borderRadius: "50%",
                            width: 38, height: 38,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer", position: "relative",
                            boxShadow: "0 4px 12px rgba(139,195,74,0.35)",
                        }}
                    >
                        <ShoppingCart size={16} color="var(--forest)" />
                        {totalItems > 0 && (
                            <span style={{
                                position: "absolute", top: -4, right: -4,
                                background: "#e74c3c", color: "white", borderRadius: "50%",
                                width: 18, height: 18, fontSize: 9, fontWeight: 900,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 2px 6px rgba(231,76,60,0.6)",
                            }}>{totalItems}</span>
                        )}
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        style={{
                            background: "rgba(139,195,74,0.1)", border: "1px solid rgba(139,195,74,0.25)",
                            borderRadius: 8, width: 38, height: 38,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            cursor: "pointer", transition: "background 0.2s",
                        }}
                        aria-label="Menu"
                    >
                        {menuOpen
                            ? <X size={18} color="var(--lime-bright)" />
                            : <Menu size={18} color="var(--lime-bright)" />}
                    </button>
                </div>
            </nav>

            {/* ── Mobile dropdown menu ── */}
            <div style={{
                position: "fixed",
                top: menuOpen ? 28 + 58 : 28 + 58 - 8,
                left: 0, right: 0,
                zIndex: 99,
                background: "var(--dark)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1.5px solid rgba(181,224,90,0.15)",
                padding: menuOpen ? "12px 20px 16px" : "0 20px",
                maxHeight: menuOpen ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1), padding 0.25s, top 0.25s",
                pointerEvents: menuOpen ? "auto" : "none",
            }}>
                {navLinks.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            display: "block",
                            color: "rgba(255,255,255,0.85)",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: 16,
                            padding: "13px 0",
                            borderBottom: "1px solid rgba(139,195,74,0.08)",
                            letterSpacing: 0.3,
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--lime-bright)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                    >
                        {label}
                    </a>
                ))}
                <button
                    onClick={() => { setMenuOpen(false); onCartClick(); }}
                    style={{
                        marginTop: 14,
                        width: "100%",
                        background: "linear-gradient(135deg, var(--lime), var(--lime-bright))",
                        border: "none", borderRadius: 12,
                        padding: "12px 0",
                        color: "var(--forest)", fontWeight: 800, fontSize: 15,
                        cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        boxShadow: "0 6px 20px rgba(139,195,74,0.3)",
                    }}
                >
                    <ShoppingCart size={16} />
                    Keranjang {totalItems > 0 && `(${totalItems})`}
                </button>
            </div>

            <style>{`
                @keyframes tickerScroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes badgePop {
                    from { transform: scale(0); }
                    to   { transform: scale(1); }
                }

                /* Desktop: show full nav links, hide mobile */
                @media (min-width: 640px) {
                    .navbar-desktop { display: flex !important; }
                    .navbar-mobile  { display: none   !important; }
                }

                /* Mobile: hide desktop links, show hamburger */
                @media (max-width: 639px) {
                    .navbar-desktop { display: none  !important; }
                    .navbar-mobile  { display: flex  !important; }
                }
            `}</style>
        </>
    );
}

/* Extracted so desktop cart button stays clean */
function CartButton({ hoverCart, setHoverCart, totalItems, onCartClick }: {
    hoverCart: boolean;
    setHoverCart: (v: boolean) => void;
    totalItems: number;
    onCartClick: () => void;
}) {
    return (
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
    );
}