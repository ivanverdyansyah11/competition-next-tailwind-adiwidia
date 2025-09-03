'use client'

import {useLenisScroll} from "@/hooks/useLenisScroll";
import AboutPage from "@/components/Templates/AboutPage";

export default function About() {
    useLenisScroll();

    return <AboutPage/>;
}