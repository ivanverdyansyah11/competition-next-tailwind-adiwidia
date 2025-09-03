import Link from "next/link";
import Image from "next/image";
import Description from "@/components/Atoms/Text/Description";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="content-brand">
                    <Link href="/" className="brand-logo">
                        <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
                    </Link>
                    <Description size="small" value="Platform digital yang menghubungkan warisan budaya Indonesia dengan teknologi modern. Melalui inovasi digital, kami berkomitmen menjaga, memperkenalkan, dan menghidupkan kembali kekayaan budaya."/>
                </div>
                <div className="content-link">
                    <div className="link-group">
                        <h6 className="link-title">Tautan Cepat</h6>
                        <div className="link-grid grid-cols-1">
                            <Link href="/" className="link">Beranda</Link>
                            <Link href="/about" className="link">Tentang Kami</Link>
                            <Link href="/gallery" className="link">Galeri</Link>
                            <Link href="/collection" className="link">Jelajahi Koleksi 3D</Link>
                        </div>
                    </div>
                    <div className="link-group">
                        <h6 className="link-title">Kategori</h6>
                        <div className="link-grid grid-cols-2 grid-rows-4">
                            <Link href="/budaya/destinasi-budaya" className="link">Destinasi Budaya</Link>
                            <Link href="/budaya/adat-tradisi" className="link">Adat & Tradisi</Link>
                            <Link href="/budaya/makanan-kuliner" className="link">Makanan & Kuliner</Link>
                            <Link href="/budaya/busana-aksesoris" className="link">Busana & Aksesoris</Link>
                            <Link href="/budaya/seni-pertunjukan" className="link">Seni Pertunjukan</Link>
                            <Link href="/budaya/bahasa-sastra" className="link">Bahasa & Sastra</Link>
                            <Link href="/budaya/seni-rupa-kerajinan" className="link">Seni Rupa & Kerajinan</Link>
                            <Link href="/budaya/arsitektur-bangunan" className="link">Arsitektur & Bangunan</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="footer-copyright">© 2025  Semua hak dilindungi undang-undang.</p>
            </div>
        </footer>
    )
}