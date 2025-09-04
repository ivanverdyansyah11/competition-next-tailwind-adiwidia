import Link from "next/link";

type ButtonType = "button" | "submit" | "reset";
type LinkTarget = "_blank" | "_self";
type StyleType = "button-primary" | "button-secondary" | "button-light" | "button-blank" | "button-small-primary" | "button-small-secondary";

type Props = {
    style: StyleType,
    redirect?: string,
    linkTarget?: LinkTarget,
    label: string,
    buttonType?: ButtonType,
    className?: string,
}

export default function ButtonCustom({style, redirect, linkTarget = "_self", label, buttonType = "button", className}: Props) {
    return (
        redirect ? (
            <Link href={redirect} legacyBehavior>
                <a target={linkTarget} className={`${style} ${className}`}>
                    {label}
                </a>
            </Link>
        ) : (
            <button type={buttonType} className={`${style} ${className}`}>
                {label}
            </button>
        )
    )
}