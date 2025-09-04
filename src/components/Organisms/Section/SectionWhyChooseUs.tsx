import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";
import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import BadgeWhyChooseUs from "@/components/Atoms/Badge/BadgeWhyChooseUs";
import FactAnalyst from "@/components/Atoms/Text/FactAnalyst";

type Props = {
    showFactAnalyst?: boolean;
}

export default function SectionWhyChooseUs({showFactAnalyst = true}: Props) {
    return (
        <section className="section-why-choose-us section-mt-gap">
            <div className="section-content" id="section-content">
                <div className="element-wrapper mb-[16px] md:mb-[20px]">
                    <Title label="Alasan Mengapa Adiwidia Menjadi Pilihan Tepat Pelestarian Budaya"/>
                </div>
                <div className="content-description mb-[28px] lg:mb-[32px]">
                    <div className="element-wrapper">
                        <Description value="Adiwidia hadir sebagai platform digital yang menggabungkan teknologi modern dengan kekayaan budaya Indonesia. Melalui pendekatan interaktif, konten edukatif, dan desain yang menarik, kami berkomitmen untuk memudahkan siapa saja dalam mengenal, mengeksplorasi, dan melestarikan warisan budaya bangsa."/>
                    </div>
                    <div className="element-wrapper">
                        <Description value="Dengan dukungan komunitas dan inovasi berkelanjutan, Adiwidia menjadi ruang yang tepat untuk menjaga budaya Indonesia tetap hidup di era digital."/>
                    </div>
                </div>
                <div className="content-point">
                    <BadgeWhyChooseUs name="Konten Edukatif dan Interaktif"/>
                    <BadgeWhyChooseUs name="Keaslian dan Kredibilitas Konten"/>
                    <BadgeWhyChooseUs name="Jangkauan Budaya Nusantara"/>
                    <BadgeWhyChooseUs name="Desain Visual Menarik"/>
                    <BadgeWhyChooseUs name="Inovasi Digital Modern"/>
                    <BadgeWhyChooseUs name="Akses Mudah dan Cepat"/>
                    <BadgeWhyChooseUs name="Dukungan Komunitas Aktif"/>
                    <BadgeWhyChooseUs name="Fokus Pelestarian Jangka Panjang"/>
                </div>
            </div>
            <div className="section-content" id="section-banner">
                <div className="content-banner wrapper-image">
                    {/*<Image src="/image/banner/banner-why-choose-us-gif.gif" alt="Banner Hero" fill className="banner-image image-full"/>*/}
                    {/*<BadgeBanner*/}
                    {/*    title="Kelingking Beach"*/}
                    {/*    location="Nusa Penida, Bali"*/}
                    {/*    className="bottom-[20px] left-[20px] md:!bottom-[32px] md:!left-[32px]"*/}
                    {/*/>*/}
                    <Image src="/image/banner/banner-why-choose-us.png" alt="Banner Hero" fill className="banner-image image-full"/>
                    <BadgeBanner
                        title="Gunung Bromo"
                        location="Jawa Timur, Indonesia"
                        className="bottom-[20px] left-[20px] md:!bottom-[32px] md:!left-[32px]"
                    />
                </div>
                {showFactAnalyst && (
                    <div className="content-analyst">
                        <FactAnalyst value="+300" caption="Bahasa Daerah"/>
                        <FactAnalyst value="+17.000" caption="Pulau di Indonesia"/>
                        <FactAnalyst value="+1.200" caption="Kebudayaan Kami"/>
                    </div>
                )}
            </div>
        </section>
    )
}