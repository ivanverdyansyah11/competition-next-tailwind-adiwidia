'use client'

import DetailCollectionPage from "@/components/Templates/DetailCollectionPage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function DetailCollection() {
    useLenisScroll();

    return <DetailCollectionPage/>;
}