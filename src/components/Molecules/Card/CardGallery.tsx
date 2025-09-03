import Image from "next/image";

type GalleryType = "square" | "portrait" | "landscape";

type Props = {
    type: GalleryType,
    image: string,
}

export default function CardGallery({type, image}: Props) {
    return (
        <div className="card-gallery group/gallery" id={type}>
            <Image src={image} alt="Gallery Image" fill className="gallery-image image-full"/>
            <div className="gallery-button group-hover/gallery:!scale-100 group-hover/gallery:!opacity-100">
                <Image src="/image/icon/search/search-light.svg" alt="Search Icon" width={24} height={24}/>
            </div>
        </div>
    )
}