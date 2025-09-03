type SizeType = "small" | "normal";

type Props = {
    value: string,
    className?: string,
    size?: SizeType,
}

export default function Description({value, className, size = "normal"}: Props) {
    return (
        <p className={`description ${className} ${size}`}>
            {value}
        </p>
    )
}