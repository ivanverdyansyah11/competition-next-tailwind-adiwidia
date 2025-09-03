import Image from "next/image";
import Link from "next/link";

type Props = {
    redirect: string,
    image: string,
    title: string,
}

export default function CardCategory({redirect, image, title}: Props) {
    return (
        <Link href={redirect} className="card-category group/card">
            <Image src={image} alt="Category Image" fill className="category-image image-full group-hover/card:scale-[102%]"/>
            <h6 className="category-title">{title}</h6>
        </Link>
    )
}