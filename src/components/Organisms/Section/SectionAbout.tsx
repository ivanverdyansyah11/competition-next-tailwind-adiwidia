import Image from "next/image";
import BadgeBanner from "@/components/Atoms/Badge/BadgeBanner";
import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

type StyleType = "button-primary" | "button-secondary" | "button-light" | "button-small-primary" | "button-small-secondary";

type ButtonProps = {
    style: StyleType,
    redirect: string,
    label: string,
}

type Props = {
    title: string,
    descriptions: string[],
    button?: ButtonProps,
}

export default function SectionAbout({title, descriptions, button}: Props) {
    return (
        <section className="section-about section-mt-gap">
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
                        <Title label={title}/>
                    </div>
                </div>
                <div className={`element-wrapper flex flex-col gap-[8px] ${button ? 'mb-[28px] lg:mb-[32px]' : ''}`}>
                    {descriptions.map((description, index) => (
                        <Description key={index} value={description}/>
                    ))}
                </div>
                {button && (
                    <div className="button-group element-wrapper">
                        <ButtonCustom
                            style={button.style}
                            redirect={button.redirect}
                            label={button.label}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}