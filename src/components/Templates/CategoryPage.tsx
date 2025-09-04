'use client'

import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import Footer from "@/components/Organisms/Section/Footer";
import SectionCategoryHero from "@/components/Organisms/Section/SectionCategoryHero";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function CategoryPage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionCategoryHero/>
                <SectionCTA/>
            </div>
            <Footer/>
        </main>
    );
}