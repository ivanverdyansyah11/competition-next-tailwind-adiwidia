import Link from "next/link";

type Props = {
    redirect?: string;
    label: string;
    children?: React.ReactNode;
    togglePopupAction?: () => void;
    isActive?: boolean;
}

export default function NavbarMenuLink({redirect, label, children, togglePopupAction, isActive}: Props) {
    return (
        redirect ? (
            <Link href={redirect} className={`menu-link ${isActive ? 'active' : ''}`}>{label}</Link>
        ) : (
            <div className="menu-link-wrapper relative">
                <button type="button" className={`menu-link ${isActive ? 'active' : ''}`} onClick={togglePopupAction}>{label}</button>
                {children}
            </div>
        )
    )
}