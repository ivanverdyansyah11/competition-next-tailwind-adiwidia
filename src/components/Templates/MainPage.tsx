import MainHero from "@/components/Organisms/Section/Main/MainHero";
import MainAboutUs from "@/components/Organisms/Section/Main/MainAboutUs";
import MainWhyChooseUs from "@/components/Organisms/Section/Main/MainWhyChooseUs";
import MainGallery from "@/components/Organisms/Section/Main/MainGallery";
import MainFAQ from "@/components/Organisms/Section/Main/MainFAQ";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";

export default function MainPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <MainHero/>
                <MainAboutUs/>
                <MainWhyChooseUs/>
                <MainGallery/>
                <MainFAQ/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}