import BadgeSubtitle from "@/components/Atoms/Badge/BadgeSubtitle";
import Headline from "@/components/Atoms/Text/Headline";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

export default function HeaderMainHero() {
    return (
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
    )
}