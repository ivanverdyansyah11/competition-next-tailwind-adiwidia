import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionGalleryHero from "@/components/Organisms/Section/SectionGalleryHero";

export default function GalleryPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionGalleryHero/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}