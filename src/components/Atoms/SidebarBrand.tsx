import Image from "next/image";
import Link from "next/link";

type Props = {
    toggleSidebarAction: () => void;
}

export default function SidebarBrand({toggleSidebarAction}: Props) {
    return (
        <Link href="/" className="header-brand" onClick={toggleSidebarAction}>
            <Image src="/image/brand/brand-logo.svg" alt="Brand Logo" width={160} height={52}/>
        </Link>
    )
}