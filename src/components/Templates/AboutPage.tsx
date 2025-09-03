import SectionAbout from "@/components/Organisms/Section/SectionAbout";
import SectionWhyChooseUs from "@/components/Organisms/Section/SectionWhyChooseUs";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionAboutHero from "@/components/Organisms/Section/SectionAboutHero";
import SectionFactAnalyst from "@/components/Organisms/Section/SectionFactAnalyst";
import SectionCategory from "@/components/Organisms/Section/SectionCategory";

export default function AboutPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionAboutHero/>
                <SectionFactAnalyst/>
                <SectionCategory/>
                <SectionAbout
                    title="Membangun Ruang Digital untuk Melestarikan Budaya Indonesia"
                    descriptions={[
                        'Adiwidia adalah platform yang berkomitmen menghadirkan kekayaan budaya Indonesia ke dalam ruang digital. Kami percaya bahwa teknologi dapat menjadi jembatan untuk memperkenalkan tradisi bangsa, sekaligus menjaganya agar tetap relevan di era modern.',
                        'Dengan menggabungkan inovasi dan nilai budaya, Adiwidia menjadi ruang interaktif untuk belajar, memahami, dan merayakan warisan Indonesia.'
                    ]}
                />
                <SectionWhyChooseUs showFactAnalyst={false}/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}