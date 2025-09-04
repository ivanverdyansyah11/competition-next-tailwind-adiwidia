'use client'

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
                </Link>
                <div className="navbar-menu">
                    <Link href="/" className={`menu-item ${pathname === '/' ? 'active' : ''}`}>Beranda</Link>
                    <Link href="/about" className={`menu-item ${pathname === '/about' ? 'active' : ''}`}>Tentang Kami</Link>
                    <button type="button" className={`menu-item ${pathname.startsWith('/culture') ? 'active' : ''}`}>Kategori</button>
                    <Link href="/collection" className={`menu-item ${pathname.startsWith('/collection') ? 'active' : ''}`}>Koleksi 3D</Link>
                </div>
                <Link href="/chat" className="navbar-button w-fit">
                    Tanya AI
                    <Image src="/image/icon/chat/chat-light.svg" alt="Chat Icon" width={16} height={16}/>
                </Link>
            </div>
        </nav>
    )
}