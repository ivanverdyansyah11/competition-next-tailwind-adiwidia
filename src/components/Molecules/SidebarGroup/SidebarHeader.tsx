import Image from "next/image";
import SidebarBrand from "@/components/Atoms/SidebarBrand";

type Props = {
    toggleSidebarAction: () => void;
}

export default function SidebarHeader({toggleSidebarAction}: Props) {
    return (
        <div className="sidebar-header">
            <SidebarBrand toggleSidebarAction={toggleSidebarAction}/>
            <button type="button" className="button-navbar-reverse" onClick={toggleSidebarAction}>
                <Image src="/image/icon/exit/exit-dark.svg" alt="Exit Dark Icon" width={12} height={12}/>
                Kembali
            </button>
        </div>
    )
}