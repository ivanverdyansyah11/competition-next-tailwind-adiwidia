'use client'

import MainPage from "@/components/Templates/MainPage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Main() {
    useLenisScroll();

    return <MainPage/>;
}