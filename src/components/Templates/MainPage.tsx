import SectionMainHero from "@/components/Organisms/Section/SectionMainHero";
import SectionAboutUs from "@/components/Organisms/Section/SectionAboutUs";
import SectionWhyChooseUs from "@/components/Organisms/Section/SectionWhyChooseUs";
import SectionGallery from "@/components/Organisms/Section/SectionGallery";
import SectionFAQ from "@/components/Organisms/Section/SectionFAQ";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";

export default function MainPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionMainHero/>
                <SectionAboutUs/>
                <SectionWhyChooseUs/>
                <SectionGallery/>
                <SectionFAQ/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}