"use client";

import Image from "next/image";
import { ShoppingCart, Leaf, Sparkles, Award, Globe } from "lucide-react";
import { Product } from "./data";

interface ProductKacangProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const features = [
    { icon: <Leaf size={15} />, text: "Kacang pilihan berkualitas", color: "#8bc34a" },
    { icon: <Sparkles size={15} />, text: "Bumbu rempah alami", color: "#b5e05a" },
    { icon: <Award size={15} />, text: "Best Choice Award", color: "#f39c12" },
    { icon: <Globe size={15} />, text: "Dibuat dengan cinta di Indonesia", color: "#4fc3f7" },
];

export default function ProductKacang({ product, onAddToCart }: ProductKacangProps) {
    return (
        <>
            {/* Divider wave */}
            <div style={{ height: 60, background: "var(--forest)", clipPath: "ellipse(60% 100% at 50% 100%)", marginTop: -2 }} />

            <section id="produk-kacang" style={{ background: "var(--forest)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>

                {/* ── Decorative background blobs ── */}
                <div style={{ position: "absolute", top: -60, left: -60, width: 320, height: 320, background: "radial-gradient(circle, rgba(139,195,74,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -80, right: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(181,224,90,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

                {/* ── Grid overlay ── */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05,
                    backgroundImage: "linear-gradient(rgba(139,195,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,195,74,1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                }} />

                <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>

                    {/* ── Section header ── */}
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,195,74,0.12)", border: "1px solid rgba(139,195,74,0.3)", borderRadius: 20, padding: "5px 16px", marginBottom: 14 }}>
                            <span style={{ fontSize: 16 }}>🥜</span>
                            <span style={{ color: "var(--lime)", fontWeight: 800, fontSize: 11, letterSpacing: 3, textTransform: "uppercase" as const }}>Varian Kedua</span>
                        </div>
                        <h2 style={{ color: "white", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, marginBottom: 10 }}>
                            SNDW Bites Kacang
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                            Kacang pilihan berbumbu rempah khas Indonesia yang kriuknya nggak ada habisnya
                        </p>
                        {/* Decorative line */}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 18 }}>
                            <div style={{ height: 1, width: 50, background: "linear-gradient(to right, transparent, rgba(139,195,74,0.6))" }} />
                            <span style={{ fontSize: 18 }}>🥜</span>
                            <div style={{ height: 1, width: 50, background: "linear-gradient(to left, transparent, rgba(139,195,74,0.6))" }} />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>

                        {/* ── Info side (left) ── */}
                        <div style={{ order: 1 }}>
                            <div style={{ display: "inline-block", background: "rgba(181,224,90,0.12)", borderRadius: 8, padding: "4px 12px", marginBottom: 12 }}>
                                <p style={{ color: "var(--lime-bright)", fontWeight: 800, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" as const, margin: 0 }}>
                                    Kriuk Gurih Penuh Cita Rasa
                                </p>
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, lineHeight: 1.85, marginBottom: 28 }}>
                                Perpaduan sempurna <strong style={{ color: "white" }}>kacang pilihan</strong> dengan bumbu rahasia SNDW yang sudah teruji. Teksturnya nendang, rasanya bikin senyum-senyum sendiri setiap gigitan!
                            </p>

                            {/* Features grid */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                                {features.map(f => (
                                    <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "10px 14px", border: "1px solid rgba(139,195,74,0.15)" }}>
                                        <span style={{ color: f.color, flexShrink: 0 }}>{f.icon}</span>
                                        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600 }}>{f.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: "linear-gradient(to right, rgba(139,195,74,0.3), transparent)", marginBottom: 24 }} />

                            {/* Price + CTA */}
                            <div style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", borderRadius: 20, padding: "20px 24px", border: "1px solid rgba(139,195,74,0.2)" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 14 }}>
                                    <div>
                                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 2, fontWeight: 600, letterSpacing: 0.5 }}>HARGA PER BUNGKUS</div>
                                        <div style={{ color: "var(--lime-bright)", fontWeight: 900, fontSize: 30, lineHeight: 1 }}>Rp20.000</div>
                                        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 4 }}>⚡ Ready stock · Pengiriman cepat</div>
                                    </div>
                                    <button
                                        onClick={() => onAddToCart(product)}
                                        style={{ background: "linear-gradient(135deg, var(--lime), var(--lime-bright))", border: "none", borderRadius: 16, padding: "14px 26px", color: "var(--forest)", fontWeight: 800, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease", boxShadow: "0 8px 24px rgba(139,195,74,0.3)" }}
                                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(139,195,74,0.45)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,195,74,0.3)"; }}
                                    >
                                        <ShoppingCart size={16} /> Tambah ke Keranjang
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ── Image side (right) ── */}
                        <div style={{ display: "flex", justifyContent: "center", order: 2 }}>
                            <div style={{ position: "relative" as const, width: 320, height: 380 }}>
                                {/* Glow */}
                                <div style={{ position: "absolute", inset: -20, background: "linear-gradient(135deg, rgba(139,195,74,0.2), rgba(26,61,31,0.1))", borderRadius: 40, filter: "blur(24px)" }} />
                                {/* Main image */}
                                <div style={{ position: "relative" as const, borderRadius: 28, overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,0.4)", border: "3px solid rgba(139,195,74,0.2)" }}>
                                    <Image src="/product-kacang.jpeg" alt="SNDW Bites Kacang" width={320} height={380} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                                    {/* Gradient overlay bottom */}
                                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
                                    {/* Badge */}
                                    <div style={{ position: "absolute" as const, top: 14, left: 14, background: "linear-gradient(135deg, #8bc34a, #b5e05a)", color: "var(--forest)", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 800, letterSpacing: 1, boxShadow: "0 4px 12px rgba(139,195,74,0.4)" }}>⭐ FAVORIT</div>
                                    {/* Price bottom */}
                                    <div style={{ position: "absolute", bottom: 14, left: 14, color: "white", fontWeight: 900, fontSize: 18, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>Rp20.000</div>
                                </div>
                                {/* Floating review chip */}
                                <div style={{ position: "absolute", top: -16, right: -18, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: 14, padding: "8px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)", display: "flex", alignItems: "center", gap: 6, border: "1px solid rgba(139,195,74,0.25)" }}>
                                    <span style={{ fontSize: 16 }}>⭐</span>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: 13, color: "white", lineHeight: 1.1 }}>4.9 / 5</div>
                                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>500+ ulasan</div>
                                    </div>
                                </div>
                                {/* Floating stock chip */}
                                <div style={{ position: "absolute", bottom: -14, right: -14, background: "rgba(139,195,74,0.15)", backdropFilter: "blur(10px)", borderRadius: 14, padding: "8px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)", display: "flex", alignItems: "center", gap: 6, border: "1px solid rgba(139,195,74,0.25)" }}>
                                    <span style={{ fontSize: 14 }}>📦</span>
                                    <div style={{ fontWeight: 700, fontSize: 11, color: "var(--lime-bright)", lineHeight: 1.2 }}>Stok<br />Tersedia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider wave bottom */}
            <div style={{ height: 60, background: "var(--cream)", clipPath: "ellipse(60% 100% at 50% 0%)", marginBottom: -2 }} />
        </>
    );
}