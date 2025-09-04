import CollectionPage from "@/components/Templates/CollectionPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Koleksi 3D Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Koleksi 3D Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Collection() {
    return <CollectionPage/>;
}