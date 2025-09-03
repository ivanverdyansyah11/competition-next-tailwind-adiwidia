type BadgeType = "small" | "normal";

type Props = {
    type?: BadgeType,
    title: string,
    location: string,
    className?: string,
}

export default function BadgeBanner({type = "normal", title, location, className}: Props) {
    return (
        <div className={`badge-banner ${type} ${className}`}>
            <h5 className="banner-title">{title}</h5>
            <p className="banner-detail">
                <span className="dot"></span>
                {location}
            </p>
        </div>
    )
}