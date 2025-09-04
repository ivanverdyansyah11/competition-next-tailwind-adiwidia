'use client'

import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import SectionProvinceHero from "@/components/Organisms/Section/SectionProvinceHero";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function ProvincePage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionProvinceHero/>
                <SectionCTA/>
            </div>
        </main>
    );
}