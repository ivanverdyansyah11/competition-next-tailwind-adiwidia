import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import CardGallery from "@/components/Molecules/Card/CardGallery";
import useFancybox from "@/hooks/useFancybox";
import Link from "next/link";

export default function MainGallery() {
    const [galleriesRef] = useFancybox({
        // Your custom options
    });

    return (
        <section className="section-gallery section-content-gap section-mt-gap">
            <div className="section-header">
                <Title label="Menjelajahi Kekayaan Budaya Indonesia dalam Satu Galeri"/>
                <Description value="Galeri Adiwidia menampilkan foto, ilustrasi, dan video budaya Indonesia yang sarat makna."/>
            </div>
            <div ref={galleriesRef} className="section-content">
                <Link data-fancybox="gallery" href="/image/gallery/gallery-1.png">
                    <CardGallery type="portrait" image="/image/gallery/gallery-1.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-2.png">
                    <CardGallery type="landscape" image="/image/gallery/gallery-2.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-3.png">
                    <CardGallery type="portrait" image="/image/gallery/gallery-3.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-4.png">
                    <CardGallery type="portrait" image="/image/gallery/gallery-4.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-5.png">
                    <CardGallery type="landscape" image="/image/gallery/gallery-5.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-6.png">
                    <CardGallery type="portrait" image="/image/gallery/gallery-6.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-7.png">
                    <CardGallery type="landscape" image="/image/gallery/gallery-7.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-8.png">
                    <CardGallery type="landscape" image="/image/gallery/gallery-8.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-9.png">
                    <CardGallery type="square" image="/image/gallery/gallery-9.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-10.png">
                    <CardGallery type="square" image="/image/gallery/gallery-10.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-11.png">
                    <CardGallery type="portrait" image="/image/gallery/gallery-11.png"/>
                </Link>
                <Link data-fancybox="gallery" href="/image/gallery/gallery-12.png">
                    <CardGallery type="landscape" image="/image/gallery/gallery-12.png"/>
                </Link>
            </div>
            <div className="button-group element-wrapper">
                <ButtonCustom
                    style="button-primary"
                    redirect="/gallery"
                    label="Lebih Banyak Gambar"
                />
            </div>
        </section>
    )
}