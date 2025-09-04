import DetailCulturePage from "@/components/Templates/DetailCulturePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Detail Budaya Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Detail Budaya Adiwidia - Budaya Inovasi Digital"
    }
};

export default function DetailCulture() {
    return <DetailCulturePage/>;
}