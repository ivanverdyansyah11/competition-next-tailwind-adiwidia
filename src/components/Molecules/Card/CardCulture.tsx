'use client'
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
            <div className="culture-image wrapper-image aspect-square">
                <img src={image} alt="Culture Image" className="image image-full group-hover/card:scale-[102%] aspect-square"/>
            </div>
            <h6 className="culture-title">{title}</h6>
            <div className="culture-location">
              <span className="dot bg-primary"></span>
              <p className="line-clamp-1"> {location} </p>
            </div>
        </Link>
    )
}
