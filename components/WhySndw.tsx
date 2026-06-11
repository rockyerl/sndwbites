"use client";

import { useEffect, useRef } from "react";

const features = [
    { icon: "🌿", title: "Bahan Alami", desc: "Dipilih dari bahan segar tanpa pengawet buatan" },
    { icon: "⚡", title: "Super Kriuk", desc: "Renyah yang tahan lama, dijamin kriuk di setiap gigitan" },
    { icon: "🎯", title: "Rasa Autentik", desc: "Bumbu khas yang meresap sempurna dan bikin nagih" },
    { icon: "📦", title: "Higienis", desc: "Dikemas ketat & bersih, freshness terjaga sampai rumahmu" },
];

export default function WhySndw() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = "1";
                        (entry.target as HTMLElement).style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.15 }
        );
        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="tentang" style={{ background: "var(--cream)", padding: "100px 24px 80px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 52 }}>
                    <span style={{ color: "var(--lime)", fontWeight: 800, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" as const }}>
                        🌿 Kenapa SNDW?
                    </span>
                    <h2 style={{ color: "var(--forest)", fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, marginTop: 8 }}>
                        Beda dari snack biasa
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                    {features.map((f, i) => (
                        <div
                            key={f.title}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            style={{
                                background: "white",
                                borderRadius: 20,
                                padding: "28px 22px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                border: "1px solid rgba(139,195,74,0.15)",
                                transition: "all 0.4s ease",
                                textAlign: "center" as const,
                                opacity: 0,
                                transform: "translateY(28px)",
                                transitionDelay: `${i * 80}ms`,
                                cursor: "default",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                                e.currentTarget.style.boxShadow = "0 18px 40px rgba(139,195,74,0.22)";
                                e.currentTarget.style.borderColor = "rgba(139,195,74,0.5)";
                                const icon = e.currentTarget.querySelector(".feat-icon") as HTMLElement;
                                if (icon) icon.style.animation = "wiggle 0.5s ease-in-out 2";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                                e.currentTarget.style.borderColor = "rgba(139,195,74,0.15)";
                            }}
                        >
                            <div className="feat-icon" style={{ fontSize: 40, marginBottom: 14, display: "block", transition: "transform 0.3s" }}>{f.icon}</div>
                            <h3 style={{ color: "var(--forest)", fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{f.title}</h3>
                            <p style={{ color: "#777", lineHeight: 1.6, fontSize: 13 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}