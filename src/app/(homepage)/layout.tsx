import "@/styles/homepage.css";
import ScrollProgressBar from "@/components/Atoms/ScrollProgressBar";
import Navbar from "@/components/Organisms/Navbar";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ScrollProgressBar/>
        <Navbar/>
        <div className="content-homepage">
            {children}
        </div>
        </body>
        </html>
    );
}