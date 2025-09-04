import "swiper/css";
import SectionHero from "@/components/Organisms/Section/SectionHero";
import Link from "next/link";
import CardGallery from "@/components/Molecules/Card/CardGallery";
import useFancybox from "@/hooks/useFancybox";

export default function SectionGalleryHero() {
    const [galleriesRef] = useFancybox({});

    return (
        <>
            <SectionHero
                icon="/image/icon/image/image-primary.svg"
                subtitle="Jelajahi Kekayaan Budaya Nusantara"
                headline="Menemukan Indahnya Indonesia Lewat Galeri Digital Interaktif"
                description="Galeri Adiwidia menghadirkan koleksi budaya Indonesia dalam bentuk visual yang menarik, interaktif, dan mudah dijelajahi untuk mengenal lebih dekat warisan bangsa."
                buttons={[
                    {style: 'button-primary', redirect: '/collection', label: 'Lihat Koleksi 3D'},
                    {style: 'button-blank', label: '32 Koleksi Gambar'},
                ]}
            >
                <>
                    <section className="section-gallery">
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
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-13.png">
                                <CardGallery type="portrait" image="/image/gallery/gallery-13.png"/>
                            </Link>
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-14.png">
                                <CardGallery type="landscape" image="/image/gallery/gallery-14.png"/>
                            </Link>
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-15.png">
                                <CardGallery type="landscape" image="/image/gallery/gallery-15.png"/>
                            </Link>
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-16.png">
                                <CardGallery type="square" image="/image/gallery/gallery-16.png"/>
                            </Link>
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-17.png">
                                <CardGallery type="square" image="/image/gallery/gallery-17.png"/>
                            </Link>
                            <Link data-fancybox="gallery" href="/image/gallery/gallery-18.png">
                                <CardGallery type="portrait" image="/image/gallery/gallery-18.png"/>
                            </Link>
                        </div>
                    </section>
                </>
            </SectionHero>
        </>
    )
}