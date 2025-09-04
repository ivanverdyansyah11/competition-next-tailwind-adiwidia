import Link from "next/link";
import Image from "next/image";

export default function NavbarMini() {
    return (
        <nav className="navbar-mini">
            <div className="container">
                <Link href="/chat" className="mini-brand">
                    <Image src="/image/brand/brand-logo-ai.svg" alt="Brand Logo" width={200} height={52}/>
                </Link>
            </div>
        </nav>
    )
}