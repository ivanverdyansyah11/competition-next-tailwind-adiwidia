import Link from "next/link";

type Icon = {
    dark: string;
    light: string;
}

type Props = {
    redirect: string;
    label: string;
    icon: Icon;
}

export default function NavbarPopupLink({redirect, label, icon}: Props) {
    return (
        <Link href={redirect} className="popup-button group/button">
            <div className="button-icon group-hover/button:bg-primary group-hover/button:border-transparent">
                <span className={`icon inline-block w-[14px] h-[14px] ${icon.dark} ${icon.light}`}></span>
            </div>
            {label}
        </Link>
    )
}