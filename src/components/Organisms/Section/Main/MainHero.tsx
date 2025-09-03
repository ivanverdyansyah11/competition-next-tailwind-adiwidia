import BannerMainHero from "@/components/Molecules/Section/Banner/BannerMainHero";
import HeaderMainHero from "@/components/Molecules/Section/Header/HeaderMainHero";

export default function MainHero() {
    return (
        <section className="section-hero section-mt-gap">
            <HeaderMainHero/>
            <BannerMainHero/>
        </section>
    )
}