"use client";

import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";
import { testimonials } from "./data";

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [animating, setAnimating] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = (i: number) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setActiveTestimonial(i);
            setAnimating(false);
        }, 220);
    };

    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setActiveTestimonial((p) => (p + 1) % testimonials.length);
                setAnimating(false);
            }, 220);
        }, 4000);
    };

    useEffect(() => {
        resetInterval();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    const t = testimonials[activeTestimonial];

    return (
        <section style={{ background: "#f0f7e6", padding: "80px 24px" }}>
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
                <span style={{ color: "var(--lime)", fontWeight: 800, fontSize: 12, letterSpacing: 3, textTransform: "uppercase" as const }}>
                    ⭐ Kata Mereka
                </span>
                <h2 style={{ color: "var(--forest)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginTop: 8, marginBottom: 40 }}>
                    Sudah Ribuan yang Kriuk!
                </h2>

                <div style={{
                    background: "white",
                    borderRadius: 24,
                    padding: "36px 32px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    border: "2px solid rgba(139,195,74,0.2)",
                    minHeight: 180,
                    transition: "all 0.22s ease",
                    opacity: animating ? 0 : 1,
                    transform: animating ? "translateY(8px) scale(0.98)" : "translateY(0) scale(1)",
                }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
                        {Array.from({ length: t.stars }).map((_, i) => (
                            <Star key={i} size={20} color="#f39c12" fill="#f39c12" />
                        ))}
                    </div>
                    <p style={{ color: "#444", fontSize: 17, lineHeight: 1.75, fontStyle: "italic", marginBottom: 20 }}>
                        &ldquo;{t.text}&rdquo;
                    </p>
                    <div style={{ fontWeight: 800, color: "var(--forest)" }}>{t.name}</div>
                    <div style={{ color: "#999", fontSize: 12, marginTop: 2 }}>{t.loc}</div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { goTo(i); resetInterval(); }}
                            style={{
                                width: i === activeTestimonial ? 26 : 8,
                                height: 8,
                                borderRadius: 4,
                                border: "none",
                                cursor: "pointer",
                                background: i === activeTestimonial ? "var(--lime)" : "#ccc",
                                transition: "all 0.3s ease",
                                padding: 0,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}