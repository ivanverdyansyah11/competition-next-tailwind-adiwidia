import BannerMainHero from "@/components/Molecules/Section/BannerMainHero";
import HeaderMainHero from "@/components/Molecules/Section/HeaderMainHero";
import ContentMainHero from "@/components/Molecules/Section/ContentMainHero";

export default function MainHero() {
    return (
        <section className="section-hero section-mt-gap">
            <HeaderMainHero/>
            <BannerMainHero/>
            <ContentMainHero/>
        </section>
    )
}