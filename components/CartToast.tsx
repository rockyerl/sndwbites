"use client";

import { CheckCircle } from "lucide-react";

interface CartToastProps {
    show: boolean;
    productName: string;
}

export default function CartToast({ show, productName }: CartToastProps) {
    return (
        <div
            style={{
                position: "fixed",
                top: 20,
                right: 20,
                zIndex: 1000,
                background: "var(--forest)",
                color: "white",
                borderRadius: 16,
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transform: show ? "translateX(0)" : "translateX(130%)",
                transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                maxWidth: 280,
            }}
        >
            <CheckCircle size={18} color="var(--lime)" style={{ flexShrink: 0 }} />
            <span style={{ fontWeight: 700, fontSize: 13 }}>{productName} ditambahkan! 🛒</span>
        </div>
    );
}