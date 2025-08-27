type Props = {
    toggleSidebarAction: () => void;
}

export default function ButtonHamburger({toggleSidebarAction}: Props) {
    return (
        <button type="button" className="navbar-hamburger button-navbar group/button" onClick={toggleSidebarAction}>
            <span className="icon w-[13px] h-[13px] bg-[url(/image/icon/menu/menu-light.svg)] group-hover/button:bg-[url(/image/icon/menu/menu-dark.svg)]"></span>
            Menu
        </button>
    )
}