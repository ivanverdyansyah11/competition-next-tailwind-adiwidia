type Props = {
    label: string,
    className?: string,
}

export default function Headline({label, className}: Props) {
    return (
        <h1 className={`headline ${className}`}>
            {label}
        </h1>
    )
}