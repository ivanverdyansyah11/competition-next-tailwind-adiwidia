import CardFeatured from "@/components/Molecules/Card/CardFeatured";
import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";
import BadgeSubtitle from "@/components/Atoms/Badge/BadgeSubtitle";
import Headline from "@/components/Atoms/Text/Headline";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

export default function MainHero() {
    return (
        <section className="section-hero section-mt-gap">
            <div className="section-header gap-0">
                <div className="element-wrapper mb-[12px] lg:mb-[16px]">
                    <BadgeSubtitle
                        icon="/image/icon/globe/globe-primary.svg"
                        label="Melestarikan Budaya, Menginspirasi Generasi"
                    />
                </div>
                <div className="element-wrapper mb-[24px] lg:mb-[28px]">
                    <Headline label="Menghubungkan Warisan Budaya Indonesia dengan Inovasi Digital"/>
                </div>
                <div className="element-wrapper mb-[28px] lg:mb-[32px]">
                    <Description value="Platform digital yang menghubungkan warisan budaya Indonesia dengan teknologi modern. Melalui inovasi digital, kami berkomitmen menjaga, memperkenalkan, dan menghidupkan kembali kekayaan budaya di era global."/>
                </div>
                <div className="button-group element-wrapper">
                    <ButtonCustom
                        style="button-primary"
                        redirect="/about#category"
                        label="Eksplorasi Budaya"
                    />
                    <ButtonCustom
                        style="button-secondary"
                        redirect="/#featured"
                        label="Pelajari Lebih Lanjut"
                    />
                </div>
            </div>
            <div className="section-banner wrapper-image">
                <Image src="/image/banner/banner-hero-gif.gif" alt="Banner Hero" fill className="banner-image image-full"/>
                <BadgeBanner
                    title="Gunung Bromo"
                    location="Jawa Timur, Indonesia"
                />
            </div>
            <section className="section-featured">
                <div className="featured-grid">
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
        </section>
    )
}