import "@/styles/homepage.css";
import ScrollProgressBar from "@/components/Atoms/ScrollProgressBar";
import Navbar from "@/components/Organisms/Navbar";
import {Metadata} from "next";
import Footer from "@/components/Organisms/Section/Footer";

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
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ScrollProgressBar/>
        <Navbar/>
        <div className="content-homepage">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}