'use client'

import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionCollectionHero from "@/components/Organisms/Section/SectionCollectionHero";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function CollectionPage() {
    useLenisScroll();

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