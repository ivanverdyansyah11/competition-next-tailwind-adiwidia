type Props = {
    value: string,
    caption: string,
}

export default function FactAnalyst({value, caption}: Props) {
    return (
        <div className="fact-analyst">
            <h2 className="analyst-title title">{value}</h2>
            <p className="analyst-caption">{caption}</p>
        </div>
    )
}