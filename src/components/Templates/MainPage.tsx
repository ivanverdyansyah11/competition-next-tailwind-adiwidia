import MainHero from "@/components/Organisms/Section/Main/MainHero";
import MainAboutUs from "@/components/Organisms/Section/Main/MainAboutUs";
import MainWhyChooseUs from "@/components/Organisms/Section/Main/MainWhyChooseUs";

export default function MainPage() {
    return (
        <main className="main">
            <div className="container mb-[500px]">
                <MainHero/>
                <MainAboutUs/>
                <MainWhyChooseUs/>
            </div>
        </main>
    );
}