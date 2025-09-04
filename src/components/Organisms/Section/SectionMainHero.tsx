import CardFeatured from "@/components/Molecules/Card/CardFeatured";
import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";
import SectionHero from "@/components/Organisms/Section/SectionHero";

export default function SectionMainHero() {
    return (
        <>
            <SectionHero
                icon="/image/icon/globe/globe-primary.svg"
                subtitle="Melestarikan Budaya, Menginspirasi Generasi"
                headline="Menghubungkan Warisan Budaya Indonesia dengan Inovasi Digital"
                description="Platform digital yang menghubungkan warisan budaya Indonesia dengan teknologi modern. Melalui inovasi digital, kami berkomitmen menjaga, memperkenalkan, dan menghidupkan kembali kekayaan budaya di era global."
                buttons={[
                    {style: 'button-primary', redirect: '/about#category', label: 'Eksplorasi Budaya'},
                    {style: 'button-secondary', redirect: '/#featured', label: 'Pelajari Lebih Lanjut'},
                ]}
            >
                <>
                    <div className="section-banner wrapper-image">
                        {/*<Image src="/image/banner/banner-hero-gif.gif" alt="Banner Hero" fill className="banner-image image-full"/>*/}
                        <Image src="/image/banner/banner-hero.png" alt="Banner Hero" fill className="banner-image image-full"/>
                        <BadgeBanner
                            title="Gunung Bromo"
                            location="Jawa Timur, Indonesia"
                        />
                    </div>
                    <section className="section-featured">
                        <div className="section-content">
                            <CardFeatured
                                icon="/image/icon/earth/earth-primary.svg"
                                title="Peta Interaktif Budaya Nusantara"
                                description="Menampilkan persebaran budaya Indonesia melalui peta digital interaktif. Pengunjung dapat menjelajahi tradisi, tarian, musik, dan kuliner khas tiap daerah."
                            />
                            <CardFeatured
                                icon="/image/icon/headphone/headphone-primary.svg"
                                title="Cerita Budaya Multimedia"
                                description="Menyajikan kisah budaya dalam format audio, video, dan animasi. Konten dibuat menarik agar mudah dipahami generasi muda."
                            />
                            <CardFeatured
                                icon="/image/icon/statue/statue-primary.svg"
                                title="3D Showcase Benda Kebudayaan"
                                description="Menampilkan artefak budaya seperti batik, keris, dan wayang dalam model 3D yang bisa diputar 360°. Dilengkapi penjelasan singkat sejarah dan filosofi."
                            />
                            <CardFeatured
                                icon="/image/icon/palette/palette-primary.svg"
                                title="Galeri Visual Budaya"
                                description="Menyediakan koleksi foto, ilustrasi, dan video budaya Indonesia. Setiap visual dilengkapi penjelasan singkat agar mudah dipahami pengunjung."
                            />
                        </div>
                    </section>
                </>
            </SectionHero>
        </>
    )
}