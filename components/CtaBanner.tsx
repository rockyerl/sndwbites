"use client";

import { Product } from "./data";

interface CtaBannerProps {
    products: Product[];
    onAddToCartAndOrder: (product: Product) => void;
}

export default function CtaBanner({ products, onAddToCartAndOrder }: CtaBannerProps) {
    return (
        <section style={{
            background: "linear-gradient(135deg, var(--lime) 0%, var(--lime-bright) 100%)",
            padding: "72px 24px",
            textAlign: "center" as const,
            position: "relative",
            overflow: "hidden",
        }}>
            {/* decorative blobs */}
            <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.15)", top: -60, right: -40, pointerEvents: "none" }} />
            <div style={{ position: "absolute", width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)", bottom: -30, left: 20, pointerEvents: "none" }} />

            <div style={{ fontSize: 48, marginBottom: 16, animation: "bounce-slow 3s ease-in-out infinite" }}>🤤</div>
            <h2 style={{ color: "var(--forest)", fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 900, marginBottom: 12, position: "relative" }}>
                Siap Kriuk Bareng?
            </h2>
            <p style={{ color: "rgba(15,36,18,0.65)", fontSize: 17, maxWidth: 420, margin: "0 auto 36px" }}>
                Pilih varian favoritmu dan pesan langsung via WhatsApp sekarang!
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" as const }}>
                <button
                    onClick={() => onAddToCartAndOrder(products[0])}
                    style={{
                        background: "var(--forest)", color: "white", border: "none", borderRadius: 50,
                        padding: "15px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer",
                        transition: "all 0.3s ease", display: "inline-flex", alignItems: "center", gap: 8,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.04)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.28)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
                >
                    🦐 Pesan Rebon Udang
                </button>
                <button
                    onClick={() => onAddToCartAndOrder(products[1])}
                    style={{
                        background: "white", color: "var(--forest)", border: "2px solid var(--forest)",
                        borderRadius: 50, padding: "15px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer",
                        transition: "all 0.3s ease", display: "inline-flex", alignItems: "center", gap: 8,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.04)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,0,0,0.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                >
                    🥜 Pesan Kacang
                </button>
            </div>
        </section>
    );
}