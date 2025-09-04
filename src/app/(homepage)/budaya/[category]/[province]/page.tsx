'use client'

import CulturePage from "@/components/Templates/CulturePage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Culture() {
    useLenisScroll();

    return <CulturePage/>;
}