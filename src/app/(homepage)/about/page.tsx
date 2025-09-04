import AboutPage from "@/components/Templates/AboutPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Tentang Kami Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Tentang Kami Adiwidia - Budaya Inovasi Digital"
    }
};

export default function About() {
    return <AboutPage/>;
}