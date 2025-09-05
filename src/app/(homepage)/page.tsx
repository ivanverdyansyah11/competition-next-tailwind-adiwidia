import MainPage from "@/components/Templates/MainPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Beranda Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Beranda Adiwidia - Budaya Inovasi Digital"
    },
    icons: {
        icon: [
            { url: "/image/favicon/favicon.ico" },
            { url: "/image/favicon/favicon.svg", type: "image/svg+xml" },
            { url: "/image/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/image/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/image/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        ],
        apple: [
            { url: "/image/favicon/apple-touch-icon.png", sizes: "180x180" },
        ],
        shortcut: "/image/favicon/favicon.ico",
    },
    other: {
        "apple-mobile-web-app-title": "Adiwidia",
    },
    manifest: "/image/favicon/manifest.json",
};

export default function Main() {
    return <MainPage/>;
}