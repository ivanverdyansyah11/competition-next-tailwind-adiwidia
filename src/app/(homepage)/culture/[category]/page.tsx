import CategoryPage from "@/components/Templates/CategoryPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Kategori Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Kategori Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Category() {
    return <CategoryPage/>;
}