import MainPage from "@/components/Templates/MainPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Beranda Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Beranda Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Main() {
    return <MainPage/>;
}