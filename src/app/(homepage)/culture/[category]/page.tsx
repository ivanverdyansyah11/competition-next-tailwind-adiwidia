'use client'

import CategoryPage from "@/components/Templates/CategoryPage";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function Category() {
    useLenisScroll();

    return <CategoryPage/>;
}