import Link from "next/link";

type Props = {
    redirect?: string;
    label: string;
    children?: React.ReactNode;
    togglePopupAction?: () => void;
    toggleSidebarAction?: () => void;
    isActive?: boolean;
}

export default function SidebarMenuLink({redirect, label, children, togglePopupAction, toggleSidebarAction, isActive}: Props) {
    return (
        redirect ? (
            <Link href={redirect} className={`menu-link ${isActive ? 'active' : ''}`} onClick={toggleSidebarAction}>{label}</Link>
        ) : (
            <div className="menu-link-wrapper relative group/link">
                <button type="button" className={`menu-link ${isActive ? 'active' : ''}`} onClick={togglePopupAction}>
                    {label}
                    <span className={`icon w-[12px] h-[12px] ${!isActive ? `rotate-90 bg-[url(/image/icon/chevron/chevron-dark.svg)]` : `rotate-[270deg] bg-[url(/image/icon/chevron/chevron-primary.svg)]`} group-hover/link:rotate-[270deg] group-hover/link:bg-[url(/image/icon/chevron/chevron-primary.svg)]`}></span>
                </button>
                {children}
            </div>
        )
    )
}