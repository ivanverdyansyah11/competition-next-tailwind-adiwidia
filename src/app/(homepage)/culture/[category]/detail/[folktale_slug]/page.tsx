import DetailFolktalePage from "@/components/Templates/DetailFolktalePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Detail Cerita Rakyat Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Detail Cerita Rakyat Adiwidia - Budaya Inovasi Digital"
    }
};

export default function DetailFolktale() {
    return <DetailFolktalePage/>;
}