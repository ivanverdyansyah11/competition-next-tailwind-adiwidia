'use client'

import SectionDetailCollection from "@/components/Organisms/Section/SectionDetailCollection";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function DetailCollectionPage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionDetailCollection/>
            </div>
        </main>
    );
}