'use client'

import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionGalleryHero from "@/components/Organisms/Section/SectionGalleryHero";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function GalleryPage() {
    useLenisScroll();

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