import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionCollectionHero from "@/components/Organisms/Section/SectionCollectionHero";

export default function CollectionPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionCollectionHero/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}