import DetailCollectionPage from "@/components/Templates/DetailCollectionPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Detail Koleksi 3D Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Detail Koleksi 3D Adiwidia - Budaya Inovasi Digital"
    }
};

export default function DetailCollection() {
    return <DetailCollectionPage/>;
}