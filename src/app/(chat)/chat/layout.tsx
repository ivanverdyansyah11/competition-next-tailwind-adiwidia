import "@/styles/homepage.css";
import NavbarMini from "@/components/Organisms/NavbarMini";

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