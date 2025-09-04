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
        icon: "/image/favicon/favicon.ico",
        shortcut: "/image/favicon/favicon.ico",
        apple: "/image/favicon/apple-touch-icon.png",
    },
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