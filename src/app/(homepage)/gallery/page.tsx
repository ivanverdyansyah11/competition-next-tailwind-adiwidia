import GalleryPage from "@/components/Templates/GalleryPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Galeri Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Galeri Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Gallery() {
    return <GalleryPage/>;
}