"use client";

import { useState, useEffect } from "react";

export default function FloatingParticles() {
    const [particles, setParticles] = useState<
        { id: number; x: number; size: number; delay: number; dur: number; emoji: string }[]
    >([]);

    useEffect(() => {
        const emojis = ["🌿", "✨", "💚", "🍃", "⚡", "🦐", "🥜"];
        setParticles(
            Array.from({ length: 14 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                size: Math.random() * 18 + 12,
                delay: Math.random() * 10,
                dur: 12 + Math.random() * 8,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
            }))
        );
    }, []);

    return (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        bottom: "-20px",
                        fontSize: `${p.size}px`,
                        animation: `floatUp ${p.dur}s linear ${p.delay}s infinite`,
                        opacity: 0.3,
                    }}
                >
                    {p.emoji}
                </div>
            ))}
        </div>
    );
}