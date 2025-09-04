'use client'

import DetailCulturePage from "@/components/Templates/DetailCulturePage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function DetailCulture() {
    useLenisScroll();

    return <DetailCulturePage/>;
}