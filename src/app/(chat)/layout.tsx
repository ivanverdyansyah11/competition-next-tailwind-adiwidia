import "@/styles/homepage.css";
import NavbarMini from "@/components/Organisms/NavbarMini";
import {Metadata} from "next";

export const metadata: Metadata = {
    description: "Adiwidia: Platform digital interaktif untuk melestarikan budaya Indonesia melalui inovasi dan eksplorasi virtual.",
    openGraph: {
        description: "Adiwidia: Platform digital interaktif untuk melestarikan budaya Indonesia melalui inovasi dan eksplorasi virtual.",
        url: "https://adiwidia.vercel.app/",
        siteName: "Adiwidia",
        images: [
            {
                url: "/image/favicon/android-chrome-512x512.png",
                width: 1200,
                height: 1200,
                alt: "Adiwidia Logo",
            },
        ],
        locale: "id_ID",
        type: "website",
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

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <NavbarMini/>
        <div className="content-homepage">
            {children}
        </div>
        </body>
        </html>
    );
}