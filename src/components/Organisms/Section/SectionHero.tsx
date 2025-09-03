import BadgeSubtitle from "@/components/Atoms/Badge/BadgeSubtitle";
import Headline from "@/components/Atoms/Text/Headline";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

type StyleType = "button-primary" | "button-secondary" | "button-light" | "button-small-primary" | "button-small-secondary";

type ButtonProps = {
    style: StyleType,
    redirect: string,
    label: string,
}

type Props = {
    icon: string,
    subtitle: string,
    headline: string,
    description: string,
    buttons?: ButtonProps[],
    children: React.ReactNode,
}

export default function SectionHero({icon, subtitle, headline, description, buttons, children}: Props) {
    return (
        <section className="section-hero section-mt-gap">
            <div className="section-header gap-0">
                <div className="element-wrapper mb-[12px] lg:mb-[16px]">
                    <BadgeSubtitle
                        icon={icon}
                        label={subtitle}
                    />
                </div>
                <div className="element-wrapper mb-[24px] lg:mb-[28px]">
                    <Headline label={headline}/>
                </div>
                <div className="element-wrapper mb-[28px] lg:mb-[32px]">
                    <Description value={description}/>
                </div>
                {buttons && buttons.length > 0 && (
                    <div className="button-group element-wrapper">
                        {buttons.map((button, index) => (
                            <ButtonCustom
                                key={index}
                                style={button.style}
                                redirect={button.redirect}
                                label={button.label}
                            />
                        ))}
                    </div>
                )}
            </div>
            {children}
        </section>
    )
}