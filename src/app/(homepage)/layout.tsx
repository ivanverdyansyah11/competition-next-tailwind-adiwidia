// import ScrollProgressBar from "@/components/Atoms/Homepage/ScrollProgressBar";
import "../../styles/homepage.css"
import HomepageBase from "@/components/Templates/HomepageBase";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
              <body>
                  <HomepageBase>
                      {children}
                  </HomepageBase>
              </body>
        </html>
    );
}