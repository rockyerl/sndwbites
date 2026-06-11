"use client";

import Image from "next/image";
import { ShoppingCart, Flame, Award, Leaf, Globe } from "lucide-react";
import { Product } from "./data";

interface ProductRebonProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const features = [
    { icon: <Leaf size={15} />, text: "Rebon udang asli pilihan", color: "#8bc34a" },
    { icon: <Flame size={15} />, text: "Tanpa MSG berlebih", color: "#ff6b35" },
    { icon: <Award size={15} />, text: "Premium Quality", color: "#f39c12" },
    { icon: <Globe size={15} />, text: "100% Produk Indonesia", color: "#4fc3f7" },
];

export default function ProductRebon({ product, onAddToCart }: ProductRebonProps) {
    return (
        <section id="produk-rebon" style={{ background: "var(--cream)", padding: "100px 24px", position: "relative", overflow: "hidden" }}>

            {/* ── Decorative background blobs ── */}
            <div style={{ position: "absolute", top: -80, right: -80, width: 340, height: 340, background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -60, width: 280, height: 280, background: "radial-gradient(circle, rgba(139,195,74,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

            {/* ── Dot pattern ── */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.3,
                backgroundImage: "radial-gradient(circle, rgba(139,195,74,0.35) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
            }} />

            <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* ── Section header ── */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.25)", borderRadius: 20, padding: "5px 16px", marginBottom: 14 }}>
                        <span style={{ fontSize: 16 }}>🦐</span>
                        <span style={{ color: "#ff6b35", fontWeight: 800, fontSize: 11, letterSpacing: 3, textTransform: "uppercase" as const }}>Varian Pertama</span>
                    </div>
                    <h2 style={{ color: "var(--forest)", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, marginBottom: 10 }}>
                        SNDW Bites Rebon Udang
                    </h2>
                    <p style={{ color: "#888", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
                        Snack renyah dengan cita rasa laut yang bikin kamu nggak bisa berhenti ngemil
                    </p>
                    {/* Decorative line */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 18 }}>
                        <div style={{ height: 1, width: 50, background: "linear-gradient(to right, transparent, #ff6b35)" }} />
                        <span style={{ fontSize: 18 }}>🦐</span>
                        <div style={{ height: 1, width: 50, background: "linear-gradient(to left, transparent, #ff6b35)" }} />
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 56, alignItems: "center" }}>

                    {/* ── Image side ── */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ position: "relative" as const, width: 320, height: 380 }}>
                            {/* Glow */}
                            <div style={{ position: "absolute", inset: -20, background: "linear-gradient(135deg, rgba(255,107,53,0.18), rgba(139,195,74,0.12))", borderRadius: 40, filter: "blur(24px)" }} />
                            {/* Main image */}
                            <div style={{ position: "relative" as const, borderRadius: 28, overflow: "hidden", boxShadow: "0 30px 70px rgba(0,0,0,0.2)", border: "3px solid rgba(255,107,53,0.2)" }}>
                                <Image src="/product-rebon.jpeg" alt="SNDW Bites Rebon Udang" width={320} height={380} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                                {/* Gradient overlay bottom */}
                                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }} />
                                {/* Badge top */}
                                <div style={{ position: "absolute" as const, top: 14, left: 14, background: "linear-gradient(135deg, #e74c3c, #c0392b)", color: "white", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 800, letterSpacing: 1, boxShadow: "0 4px 12px rgba(231,76,60,0.4)" }}>🔥 BESTSELLER</div>
                                {/* Price bottom */}
                                <div style={{ position: "absolute", bottom: 14, left: 14, color: "white", fontWeight: 900, fontSize: 18, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>Rp20.000</div>
                            </div>
                            {/* Floating review chip */}
                            <div style={{ position: "absolute", top: -16, right: -18, background: "white", borderRadius: 14, padding: "8px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 6, border: "1px solid rgba(139,195,74,0.2)" }}>
                                <span style={{ fontSize: 16 }}>⭐</span>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 13, color: "var(--forest)", lineHeight: 1.1 }}>4.9 / 5</div>
                                    <div style={{ fontSize: 10, color: "#aaa" }}>500+ ulasan</div>
                                </div>
                            </div>
                            {/* Floating stock chip */}
                            <div style={{ position: "absolute", bottom: -14, right: -14, background: "var(--forest)", borderRadius: 14, padding: "8px 14px", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 6 }}>
                                <span style={{ fontSize: 14 }}>📦</span>
                                <div style={{ fontWeight: 700, fontSize: 11, color: "var(--lime-bright)", lineHeight: 1.2 }}>Stok<br />Tersedia</div>
                            </div>
                        </div>
                    </div>

                    {/* ── Info side ── */}
                    <div>
                        <div style={{ display: "inline-block", background: "rgba(255,107,53,0.1)", borderRadius: 8, padding: "4px 12px", marginBottom: 12 }}>
                            <p style={{ color: "#ff6b35", fontWeight: 800, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" as const, margin: 0 }}>
                                Gurih Laut yang Bikin Nagih
                            </p>
                        </div>
                        <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85, marginBottom: 28 }}>
                            Kriuk renyah dengan cita rasa <strong style={{ color: "var(--forest)" }}>rebon udang asli pilihan</strong>. Gurih alami langsung dari laut, ringan di mulut tapi berat di kantong — karena selalu mau nambah lagi!
                        </p>

                        {/* Features */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                            {features.map(f => (
                                <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, background: "white", borderRadius: 12, padding: "10px 14px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
                                    <span style={{ color: f.color, flexShrink: 0 }}>{f.icon}</span>
                                    <span style={{ color: "#444", fontSize: 13, fontWeight: 600 }}>{f.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, background: "linear-gradient(to right, rgba(255,107,53,0.2), transparent)", marginBottom: 24 }} />

                        {/* Price + CTA */}
                        <div style={{ background: "white", borderRadius: 20, padding: "20px 24px", boxShadow: "0 6px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(255,107,53,0.12)" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 14 }}>
                                <div>
                                    <div style={{ color: "#bbb", fontSize: 11, marginBottom: 2, fontWeight: 600, letterSpacing: 0.5 }}>HARGA PER BUNGKUS</div>
                                    <div style={{ color: "var(--forest)", fontWeight: 900, fontSize: 30, lineHeight: 1 }}>Rp20.000</div>
                                    <div style={{ color: "#aaa", fontSize: 11, marginTop: 4 }}>⚡ Ready stock · Pengiriman cepat</div>
                                </div>
                                <button
                                    onClick={() => onAddToCart(product)}
                                    style={{ background: "linear-gradient(135deg, #ff6b35, #e74c3c)", border: "none", borderRadius: 16, padding: "14px 26px", color: "white", fontWeight: 800, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease", boxShadow: "0 8px 24px rgba(231,76,60,0.35)" }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(231,76,60,0.45)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(231,76,60,0.35)"; }}
                                >
                                    <ShoppingCart size={16} /> Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}