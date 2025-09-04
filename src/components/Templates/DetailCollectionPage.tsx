import Footer from "@/components/Organisms/Section/Footer";
import SectionDetailCollection from "@/components/Organisms/Section/SectionDetailCollection";

export default function DetailCollectionPage() {
    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionDetailCollection/>
            </div>
            <Footer/>
        </main>
    );
}