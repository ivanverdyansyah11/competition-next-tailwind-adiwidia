'use client'

import CollectionPage from "@/components/Templates/CollectionPage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Collection() {
    useLenisScroll();

    return <CollectionPage/>;
}