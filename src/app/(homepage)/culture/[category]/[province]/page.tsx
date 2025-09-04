'use client'

import ProvincePage from "@/components/Templates/ProvincePage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Culture() {
    useLenisScroll();

    return <ProvincePage/>;
}