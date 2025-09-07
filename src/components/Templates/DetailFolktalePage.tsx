'use client'

import SectionDetailFolktale from "@/components/Organisms/Section/SectionDetailFolktale";
import SectionFolktale from "@/components/Organisms/Section/SectionFolktale";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import {useLenisScroll} from "@/hooks/useLenisScroll";

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
