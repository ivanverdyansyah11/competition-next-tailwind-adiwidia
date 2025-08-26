// import ScrollProgressBar from "@/components/Atoms/Homepage/ScrollProgressBar";
import "../../styles/homepage.css"

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
              <body>
                  <div className="content-homepage">
                      {children}
                  </div>
              </body>
        </html>
    );
}