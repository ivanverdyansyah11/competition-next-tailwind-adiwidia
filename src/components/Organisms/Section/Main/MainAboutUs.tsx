import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";
import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

export default function MainAboutUs() {
    return (
        <section className="section-about-us section-mt-gap">
            <div className="section-banner wrapper-image" id="banner-image-portrait">
                <Image src="/image/banner/banner-about-1.png" alt="Banner About Us" fill className="banner-image image-full"/>
                <BadgeBanner
                    type="small"
                    title="Raja Ampat"
                    location="Papua Barat, Indonesia"
                    className="bottom-[20px] left-[20px]"
                />
            </div>
            <div className="section-banner wrapper-image" id="banner-image-square">
                <Image src="/image/banner/banner-about-2.png" alt="Banner About Us" fill className="banner-image image-full"/>
                <BadgeBanner
                    type="small"
                    title="Kelingking Beach"
                    location="Nusa Penida, Bali"
                    className="bottom-[20px] left-[20px]"
                />
            </div>
            <div className="section-content">
                <div className="content-title-wrapper">
                    <div className="content-title element-wrapper mb-[16px] md:mb-[20px] lg:mb-0">
                        <Title label="Membangun Ruang Digital untuk Melestarikan Budaya Indonesia"/>
                    </div>
                </div>
                <div className="element-wrapper mb-[28px] lg:mb-[32px]">
                    <Description value="Adiwidia adalah platform digital yang lahir untuk menjaga dan menghidupkan kembali kekayaan budaya Indonesia. Melalui sentuhan inovasi, kami berkomitmen menjadikan warisan budaya tetap relevan, mudah diakses, serta menginspirasi generasi masa kini dan mendatang."/>
                </div>
                <div className="button-group element-wrapper">
                    <ButtonCustom
                        style="button-primary"
                        redirect="/about"
                        label="Pelajari Tentang Kami"
                    />
                </div>
            </div>
        </section>
    )
}