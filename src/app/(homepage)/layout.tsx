import "@/styles/homepage.css";
import ScrollProgressBar from "@/components/Atoms/ScrollProgressBar";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <ScrollProgressBar/>
        <div className="content-homepage">
            {children}
        </div>
        </body>
        </html>
    );
}