import Image from "next/image";
import Link from "next/link";

export default function NavbarBrand() {
    return (
        <Link href="/" className="navbar-brand">
            <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
        </Link>
    )
}