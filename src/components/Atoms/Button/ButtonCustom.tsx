import Link from "next/link";

type ButtonType = "button" | "submit" | "reset";
type StyleType = "button-primary" | "button-secondary" | "button-light" | "button-blank" | "button-small-primary" | "button-small-secondary";

type Props = {
    style: StyleType,
    redirect?: string,
    label: string,
    buttonType?: ButtonType,
    className?: string,
    onClick?: () => void,
    disabled?: boolean
}

export default function ButtonCustom({style, redirect, label, buttonType = "button", className, onClick, disabled}: Props) {
    return (
        redirect ? (
            <Link href={redirect} className={`${style} ${className}`}>
                {label}
            </Link>
        ) : (
            <button type={buttonType} className={`${style} ${className}`} onClick={onClick} disabled={disabled}>
                {label}
            </button>
        )
    )
}
