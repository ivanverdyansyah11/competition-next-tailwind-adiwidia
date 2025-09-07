'use client'

import SectionDetailCulture from "@/components/Organisms/Section/SectionDetailCulture";
import SectionMap from "@/components/Organisms/Section/SectionMap";
import SectionCulture from "@/components/Organisms/Section/SectionCulture";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import {useLenisScroll} from "@/hooks/useLenisScroll";
import SectionDetailFolktale from "@/components/Organisms/Section/SectionDetailCulture";
import SectionFolktale from "../Organisms/Section/SectionFolktale";

export default function DetailFolktalePage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionDetailFolktale/>
                <SectionFolktale/>
                <SectionCTA/>
            </div>
        </main>
    );
}
