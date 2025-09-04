import Footer from "@/components/Organisms/Section/Footer";
import SectionDetailCulture from "@/components/Organisms/Section/SectionDetailCulture";
import SectionMap from "@/components/Organisms/Section/SectionMap";
import SectionCulture from "@/components/Organisms/Section/SectionCulture";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";

export default function DetailCulturePage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionDetailCulture/>
                <SectionMap/>
                <SectionCulture/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}