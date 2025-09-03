import MainHero from "@/components/Organisms/Section/Main/MainHero";
import MainAboutUs from "@/components/Organisms/Section/Main/MainAboutUs";

export default function MainPage() {
    return (
        <main className="main">
            <div className="container">
                <MainHero/>
                <MainAboutUs/>
            </div>
        </main>
    );
}