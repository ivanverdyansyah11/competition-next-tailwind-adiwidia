'use client'

import SectionDetailCulture from "@/components/Organisms/Section/SectionDetailCulture";
import SectionMap from "@/components/Organisms/Section/SectionMap";
import SectionCulture from "@/components/Organisms/Section/SectionCulture";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function DetailCulturePage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionDetailCulture/>
                <SectionMap/>
                <SectionCulture/>
                <SectionCTA/>
            </div>
        </main>
    );
}