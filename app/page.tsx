"use client";

import { useState } from "react";
import { products, Product, CartItem } from "@/components/data";
import FloatingParticles from "@/components/FloatingParticles";
import CartToast from "@/components/CartToast";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductRebon from "@/components/ProductRebon";
import ProductKacang from "@/components/ProductKacang";
import WhySndw from "@/components/WhySndw";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showOrder, setShowOrder] = useState(false);
    const [showCartToast, setShowCartToast] = useState(false);
    const [toastProduct, setToastProduct] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.product.id === product.id);
            if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { product, qty: 1 }];
        });
        setToastProduct(product.name);
        setShowCartToast(true);
        setTimeout(() => setShowCartToast(false), 2500);
    };

    const updateQty = (id: number, delta: number) => {
        setCart((prev) => prev.map((i) => i.product.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter((i) => i.qty > 0));
    };

    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

    const sendToWhatsApp = () => {
        if (!name || !address || !phone || cart.length === 0) return;
        const items = cart.map((i) => `• ${i.product.name} x${i.qty} = Rp${(i.product.price * i.qty).toLocaleString("id-ID")}`).join("\n");
        const msg = `Halo SNDW Bites! 👋\n\nSaya ingin pesan:\n${items}\n\n*Total: Rp${totalPrice.toLocaleString("id-ID")}*\n\nNama: ${name}\nNo. HP: ${phone}\nAlamat: ${address}\n\nMohon konfirmasi pesanan saya ya! 🙏`;
        window.open(`https://wa.me/628218860518?text=${encodeURIComponent(msg)}`, "_blank");
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        setShowOrder(false);
        setCart([]);
        setName("");
        setAddress("");
        setPhone("");
    };

    return (
        <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
            <FloatingParticles />
            <CartToast show={showCartToast} productName={toastProduct} />

            <Navbar totalItems={totalItems} onCartClick={() => setShowOrder(true)} />
            <Hero onOrderClick={() => setShowOrder(true)} />
            <ProductRebon product={products[0]} onAddToCart={addToCart} />
            <ProductKacang product={products[1]} onAddToCart={addToCart} />
            <WhySndw />
            <Testimonials />
            <CtaBanner
                products={products}
                onAddToCartAndOrder={(product) => { addToCart(product); setShowOrder(true); }}
            />
            <Footer />

            <OrderModal
                show={showOrder}
                onClose={() => setShowOrder(false)}
                cart={cart}
                onAddToCart={addToCart}
                onUpdateQty={updateQty}
                name={name} setName={setName}
                phone={phone} setPhone={setPhone}
                address={address} setAddress={setAddress}
                submitted={submitted}
                onSend={sendToWhatsApp}
                onReset={handleReset}
            />
        </main>
    );
}