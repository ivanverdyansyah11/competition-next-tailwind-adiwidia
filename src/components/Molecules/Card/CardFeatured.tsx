import Image from "next/image";

type Props = {
    icon: string,
    title: string,
    description: string,
}

export default function CardFeatured({icon, title, description}: Props) {
    return (
        <div className="card-featured">
            <div className="featured-icon">
                <Image src={icon} alt="Featured Icon" width={16} height={16}/>
            </div>
            <h6 className="featured-title">{title}</h6>
            <p className="featured-description">{description}</p>
        </div>
    )
}