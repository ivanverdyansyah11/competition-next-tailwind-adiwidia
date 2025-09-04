import Image from "next/image";
import Link from "next/link";

type Props = {
    redirect: string,
    image: string,
    title: string,
    location: string,
}

export default function CardCulture({redirect, image, title, location}: Props) {
    return (
        <Link href={redirect} className="card-culture group/card">
            <div className="culture-image wrapper-image">
                <Image src={image} alt="Culture Image" fill className="image image-full group-hover/card:scale-[102%]"/>
            </div>
            <h6 className="culture-title">{title}</h6>
            <p className="culture-location">
                <span className="dot bg-primary"></span>
                {location}
            </p>
        </Link>
    )
}