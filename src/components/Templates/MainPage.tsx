'use client'

import SectionMainHero from "@/components/Organisms/Section/SectionMainHero";
import SectionAbout from "@/components/Organisms/Section/SectionAbout";
import SectionWhyChooseUs from "@/components/Organisms/Section/SectionWhyChooseUs";
import SectionGallery from "@/components/Organisms/Section/SectionGallery";
import SectionFAQ from "@/components/Organisms/Section/SectionFAQ";
import SectionCTA from "@/components/Organisms/Section/SectionCTA";
import {useLenisScroll} from "@/hooks/useLenisScroll";

export default function MainPage() {
    useLenisScroll();

    return (
        <main className="main">
            <div className="container section-pb-gap">
                <SectionMainHero/>
                <SectionAbout
                    title="Membangun Ruang Digital untuk Melestarikan Budaya Indonesia"
                    descriptions={[
                        'Adiwidia adalah platform digital yang lahir untuk menjaga dan menghidupkan kembali kekayaan budaya Indonesia. Melalui sentuhan inovasi, kami berkomitmen menjadikan warisan budaya tetap relevan, mudah diakses, serta menginspirasi generasi masa kini dan mendatang.'
                    ]}
                    button={{
                        style: "button-primary",
                        redirect: "/about",
                        label: "Pelajari Tentang Kami",
                    }}
                />
                <SectionWhyChooseUs/>
                <SectionGallery/>
                <SectionFAQ/>
                <SectionCTA/>
            </div>
        </main>
    );
}