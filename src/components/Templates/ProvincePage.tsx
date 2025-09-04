import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionProvinceHero from "@/components/Organisms/Section/SectionProvinceHero";

export default function ProvincePage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionProvinceHero/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}