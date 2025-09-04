import ProvincePage from "@/components/Templates/ProvincePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Provinsi Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Provinsi Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Culture() {
    return <ProvincePage/>;
}