'use client'

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Topbar from "@/components/Organisms/Topbar";
import {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {bounceTransition} from "@/utils/motion-variant";

export default function Navbar() {
    const pathname = usePathname();
    const [isPopupCategoryOpen, setIsPopupCategoryOpen] = useState<boolean>(false);

    const togglePopupCategory = () => {
        setIsPopupCategoryOpen(!isPopupCategoryOpen);
    }

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link href="/" className="navbar-brand">
                        <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
                    </Link>
                    <div className="navbar-menu">
                        <Link href="/" className={`menu-item ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsPopupCategoryOpen(false)}>Beranda</Link>
                        <Link href="/about" className={`menu-item ${pathname === '/about' ? 'active' : ''}`} onClick={() => setIsPopupCategoryOpen(false)}>Tentang</Link>
                        <button type="button" className={`menu-item ${pathname.startsWith('/culture') ? 'active' : ''}`} onClick={togglePopupCategory}>Kategori</button>
                        <Link href="/collection" className={`menu-item ${pathname.startsWith('/collection') ? 'active' : ''}`} onClick={() => setIsPopupCategoryOpen(false)}>Koleksi 3D</Link>
                    </div>
                    <a href="/chat" target="_blank" className="navbar-button w-fit">
                        Tanya AI
                        <Image src="/image/icon/chat/chat-light.svg" alt="Chat Icon" width={16} height={16}/>
                    </a>
                </div>
            </nav>
            <AnimatePresence>
                {isPopupCategoryOpen && (
                    <motion.div
                        className="topbar-container container"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={bounceTransition}
                    >
                        <Topbar onClickAction={() => setIsPopupCategoryOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}