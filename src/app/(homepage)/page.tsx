import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
          </Link>
          <div className="navbar-menu">
            <Link href="/about-us" className="menu-link">Tentang Kami</Link>
            <p className="menu-link">Kategori</p>
            <Link href="/gallery" className="menu-link">Galeri</Link>
            <Link href="/3d-collection" className="menu-link">Koleksi 3D</Link>
            <Link href="/adiwidia-ai" className="button-navbar">
              <Image src="/image/icon/chat/chat-light.svg" alt="Chat Light Icon" width={16} height={16}/>
              Tanya AI
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}