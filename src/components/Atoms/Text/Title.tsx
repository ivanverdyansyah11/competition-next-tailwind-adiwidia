type Props = {
    label: string,
    className?: string,
}

export default function Title({label, className}: Props) {
    return (
        <h2 className={`title ${className}`}>
            {label}
        </h2>
    )
}