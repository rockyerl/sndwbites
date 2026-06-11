"use client";

import { X, Minus, Plus } from "lucide-react";
import { CartItem, Product, products } from "./data";

interface OrderModalProps {
    show: boolean;
    onClose: () => void;
    cart: CartItem[];
    onAddToCart: (product: Product) => void;
    onUpdateQty: (id: number, delta: number) => void;
    name: string;
    setName: (v: string) => void;
    phone: string;
    setPhone: (v: string) => void;
    address: string;
    setAddress: (v: string) => void;
    submitted: boolean;
    onSend: () => void;
    onReset: () => void;
}

// WhatsApp SVG icon
function WhatsAppIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export default function OrderModal({
                                       show, onClose, cart, onAddToCart, onUpdateQty,
                                       name, setName, phone, setPhone, address, setAddress,
                                       submitted, onSend, onReset,
                                   }: OrderModalProps) {
    if (!show) return null;

    const totalPrice = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
    const canSubmit = name && address && phone && cart.length > 0;

    return (
        <div
            style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(8px)", zIndex: 200, display: "flex",
                alignItems: "center", justifyContent: "center", padding: 16,
                animation: "fadeIn 0.25s ease",
            }}
            onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div style={{
                background: "white", borderRadius: 28, padding: "32px 28px",
                maxWidth: 520, width: "100%", maxHeight: "90vh", overflowY: "auto" as const,
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                animation: "modalPop 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}>
                {submitted ? (
                    <div style={{ textAlign: "center", padding: "24px 0" }}>
                        <div style={{ fontSize: 64, marginBottom: 16, animation: "bounce-slow 1s ease-in-out 3" }}>🎉</div>
                        <h3 style={{ color: "var(--forest)", fontWeight: 900, fontSize: 24, marginBottom: 10 }}>Pesanan Terkirim!</h3>
                        <p style={{ color: "#666", marginBottom: 28, lineHeight: 1.6 }}>
                            Cek WhatsApp kamu — kami akan segera konfirmasi dan proses pesananmu!
                        </p>
                        <button
                            onClick={onReset}
                            style={{ background: "var(--lime)", border: "none", borderRadius: 50, padding: "12px 36px", fontWeight: 800, color: "var(--forest)", cursor: "pointer", fontSize: 15, transition: "all 0.2s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "var(--lime-bright)"; e.currentTarget.style.transform = "scale(1.04)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "var(--lime)"; e.currentTarget.style.transform = "none"; }}
                        >
                            Tutup
                        </button>
                    </div>
                ) : (
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                            <h3 style={{ color: "var(--forest)", fontWeight: 900, fontSize: 21 }}>🛒 Form Pemesanan</h3>
                            <button
                                onClick={onClose}
                                style={{ background: "#f0f0f0", border: "none", borderRadius: "50%", width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                                onMouseEnter={e => (e.currentTarget.style.background = "#e0e0e0")}
                                onMouseLeave={e => (e.currentTarget.style.background = "#f0f0f0")}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Quick add buttons */}
                        <div style={{ marginBottom: 16 }}>
                            <p style={{ fontWeight: 700, color: "#888", fontSize: 12, marginBottom: 10, textTransform: "uppercase" as const, letterSpacing: 1 }}>
                                Tambah Produk
                            </p>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
                                {products.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => onAddToCart(p)}
                                        style={{ background: "#f5faf0", border: "1.5px solid rgba(139,195,74,0.35)", borderRadius: 12, padding: "8px 14px", fontSize: 13, fontWeight: 700, color: "var(--forest)", cursor: "pointer", transition: "all 0.2s" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "#e8f5e0"; e.currentTarget.style.borderColor = "var(--lime)"; e.currentTarget.style.transform = "scale(1.04)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "#f5faf0"; e.currentTarget.style.borderColor = "rgba(139,195,74,0.35)"; e.currentTarget.style.transform = "none"; }}
                                    >
                                        + {p.name.replace("SNDW Bites ", "")}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cart */}
                        {cart.length > 0 ? (
                            <div style={{ marginBottom: 20, background: "#f8fdf2", borderRadius: 16, padding: 16, border: "1px solid rgba(139,195,74,0.2)" }}>
                                <p style={{ fontWeight: 700, color: "var(--forest)", marginBottom: 12, fontSize: 14 }}>Keranjang Belanja:</p>
                                {cart.map((item) => (
                                    <div key={item.product.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 8 }}>
                                        <span style={{ fontWeight: 600, fontSize: 13, flex: 1, color: "#333" }}>{item.product.name}</span>
                                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <button
                                                onClick={() => onUpdateQty(item.product.id, -1)}
                                                style={{ background: "var(--forest)", color: "white", border: "none", borderRadius: "50%", width: 24, height: 24, cursor: "pointer", fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.2s" }}
                                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span style={{ fontWeight: 800, minWidth: 22, textAlign: "center" as const, fontSize: 15 }}>{item.qty}</span>
                                            <button
                                                onClick={() => onUpdateQty(item.product.id, 1)}
                                                style={{ background: "var(--lime)", color: "var(--forest)", border: "none", borderRadius: "50%", width: 24, height: 24, cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.2s" }}
                                                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                                                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                                            >
                                                <Plus size={12} />
                                            </button>
                                            <span style={{ color: "var(--forest)", fontWeight: 700, fontSize: 13, minWidth: 72, textAlign: "right" as const }}>
                                                Rp{(item.product.price * item.qty).toLocaleString("id-ID")}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ borderTop: "1.5px solid rgba(139,195,74,0.3)", paddingTop: 10, marginTop: 6, display: "flex", justifyContent: "space-between", fontWeight: 900, color: "var(--forest)", fontSize: 17 }}>
                                    <span>Total</span>
                                    <span>Rp{totalPrice.toLocaleString("id-ID")}</span>
                                </div>
                            </div>
                        ) : (
                            <div style={{ textAlign: "center", padding: "16px 0", color: "#aaa", marginBottom: 16, background: "#fafafa", borderRadius: 12 }}>
                                <div style={{ fontSize: 36, marginBottom: 6 }}>🛒</div>
                                <p style={{ fontSize: 13 }}>Gunakan tombol di atas untuk menambah produk</p>
                            </div>
                        )}

                        {/* Form fields */}
                        {[
                            { label: "Nama Lengkap", val: name, set: setName, placeholder: "Contoh: Rina Santoso", isTextarea: false },
                            { label: "Nomor HP / WhatsApp", val: phone, set: setPhone, placeholder: "Contoh: 08123456789", isTextarea: false },
                            { label: "Alamat Pengiriman", val: address, set: setAddress, placeholder: "Masukkan alamat lengkap kamu...", isTextarea: true },
                        ].map((f) => (
                            <div key={f.label} style={{ marginBottom: 14 }}>
                                <label style={{ display: "block", fontWeight: 700, color: "var(--forest)", fontSize: 13, marginBottom: 5 }}>{f.label}</label>
                                {f.isTextarea ? (
                                    <textarea
                                        value={f.val}
                                        onChange={e => f.set(e.target.value)}
                                        placeholder={f.placeholder}
                                        rows={3}
                                        style={{ width: "100%", border: "2px solid #e0e0e0", borderRadius: 12, padding: "10px 14px", fontSize: 14, resize: "vertical" as const, fontFamily: "inherit", boxSizing: "border-box" as const, transition: "border-color 0.2s" }}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        value={f.val}
                                        onChange={e => f.set(e.target.value)}
                                        placeholder={f.placeholder}
                                        style={{ width: "100%", border: "2px solid #e0e0e0", borderRadius: 12, padding: "10px 14px", fontSize: 14, fontFamily: "inherit", boxSizing: "border-box" as const, transition: "border-color 0.2s" }}
                                    />
                                )}
                            </div>
                        ))}

                        <button
                            onClick={onSend}
                            disabled={!canSubmit}
                            className="btn-whatsapp"
                            style={{
                                width: "100%", border: "none", borderRadius: 50, padding: "16px",
                                background: canSubmit ? undefined : "#ccc",
                                color: "white", fontWeight: 900, fontSize: 16,
                                cursor: canSubmit ? "pointer" : "not-allowed",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                                marginTop: 10,
                                boxShadow: canSubmit ? "0 8px 24px rgba(37,211,102,0.35)" : "none",
                            }}
                        >
                            <WhatsAppIcon size={20} /> Kirim Pesanan via WhatsApp
                        </button>
                        <p style={{ color: "#bbb", fontSize: 11, textAlign: "center" as const, marginTop: 10 }}>
                            Kamu akan diarahkan ke WhatsApp untuk konfirmasi pesanan
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}