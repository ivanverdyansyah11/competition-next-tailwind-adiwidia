import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";

export default function BannerMainHero() {
    return (
        <div className="section-banner wrapper-image">
            <Image src="/image/banner/banner-hero-gif.gif" alt="Banner Hero" fill className="banner-image image-full"/>
            <BadgeBanner
                title="Gunung Bromo"
                location="Jawa Timur, Indonesia"
            />
        </div>
    )
}