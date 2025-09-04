import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionCultureHero from "@/components/Organisms/Section/SectionCultureHero";

export default function CulturePage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionCultureHero/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}