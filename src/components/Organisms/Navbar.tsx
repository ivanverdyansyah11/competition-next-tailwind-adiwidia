import NavbarBrand from "@/components/Atoms/NavbarBrand";
import NavbarMenu from "@/components/Molecules/NavbarGroup/NavbarMenu";
import ButtonHamburger from "@/components/Atoms/Button/ButtonHamburger";

type Props = {
    toggleSidebarAction: () => void;
}

export default function Navbar({toggleSidebarAction}: Props) {
    return (
        <nav className="navbar">
            <div className="container">
                <NavbarBrand/>
                <NavbarMenu/>
                <ButtonHamburger toggleSidebarAction={toggleSidebarAction}/>
            </div>
        </nav>
    )
}