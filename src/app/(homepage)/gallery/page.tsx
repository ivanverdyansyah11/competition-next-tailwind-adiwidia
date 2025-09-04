'use client'

import GalleryPage from "@/components/Templates/GalleryPage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Gallery() {
    useLenisScroll();

    return <GalleryPage/>;
}