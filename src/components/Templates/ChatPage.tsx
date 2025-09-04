'use client'

import SectionChat from "@/components/Organisms/Section/SectionChat";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function ChatPage() {
    useLenisScroll();

    return (
        <main className="main">
            <SectionChat/>
        </main>
    );
}