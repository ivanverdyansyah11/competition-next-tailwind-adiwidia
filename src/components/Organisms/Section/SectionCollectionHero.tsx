'use client'

import "swiper/css";
import SectionHero from "@/components/Organisms/Section/SectionHero";
import {useParams, usePathname} from "next/navigation";
import {useState} from "react";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import {convertSlug} from "@/utils/convert-slug";
import CardCulture from "@/components/Molecules/Card/CardCulture";
import CardCollection from "@/components/Molecules/Card/CardCollection";

export default function SectionCollectionHero() {
    const [search, setSearch] = useState<string>('');

    const onSubmitSearch = ({searchValue}: {searchValue: string}) => {
        setSearch(searchValue);
        console.log(search)
    }

    return (
        <>
            <SectionHero
                icon="/image/icon/cube/cube-primary.svg"
                subtitle="Jelajahi Warisan Budaya dalam Dimensi Baru"
                headline="Menghadirkan Koleksi Budaya Indonesia dalam Visualisasi 3D Interaktif"
                description="Nikmati pengalaman unik menjelajahi benda-benda budaya Indonesia melalui koleksi 3D interaktif yang dapat diputar, diperbesar, dan dipelajari dengan mudah di Adiwidia."
                search={search}
                placeholder="Cari koleksi 3D"
                onSubmitAction={onSubmitSearch}
            >
                <>
                    <section className="section-collection section-content-gap">
                        <div className="section-content">
                            <CardCollection
                                title="Keris"
                                description="Senjata tradisional Indonesia dengan filosofi dan ukiran khas setiap daerah."
                                redirect="/collection/keris"
                            />
                            <CardCollection
                                title="Tari Piring Minangkabau"
                                description="Peralatan tari berupa piring yang menjadi bagian dari pertunjukan budaya Minangkabau."
                                redirect="/collection/tari-piring-minangkabau"
                            />
                            <CardCollection
                                title="Rumah Adat Toraja (Tongkonan)"
                                description="Rumah panggung khas Sulawesi Selatan dengan atap unik menyerupai perahu."
                                redirect="/collection/rumah-adat-toraja"
                            />
                            <CardCollection
                                title="Topeng Cirebon"
                                description="Topeng khas Cirebon yang digunakan dalam pertunjukan tari dan ritual budaya."
                                redirect="/collection/topeng-cirebon"
                            />
                            <CardCollection
                                title="Wayang Kulit"
                                description="Boneka pipih dari kulit yang digunakan dalam pertunjukan teater tradisional Jawa."
                                redirect="/collection/wayang-kulit"
                            />
                            <CardCollection
                                title="Alat Musik Gamelan"
                                description="Ensemble musik tradisional Jawa dan Bali dengan gong, kendang, dan saron."
                                redirect="/collection/alat-musik-gamelan"
                            />
                            <CardCollection
                                title="Ulos Batak"
                                description="Kain tradisional Sumatera Utara yang digunakan untuk upacara adat dan simbol status sosial."
                                redirect="/collection/ulos-batak"
                            />
                            <CardCollection
                                title="Alat Musik Angklung"
                                description="Instrumen bambu khas Sunda yang dimainkan dengan digoyangkan untuk menghasilkan nada."
                                redirect="/collection/alat-musik-angklung"
                            />
                            <CardCollection
                                title="Topeng Betawi"
                                description="Topeng khas Betawi yang digunakan dalam pertunjukan seni tari dan drama rakyat."
                                redirect="/collection/topeng-betawi"
                            />
                            <CardCollection
                                title="Batik Tulis"
                                description="Kain tradisional Indonesia dengan motif dan filosofi khas yang dibuat manual."
                                redirect="/collection/batik-tulis"
                            />
                            <CardCollection
                                title="Dayak Mandau"
                                description="Pedang tradisional Kalimantan yang menjadi simbol budaya suku Dayak."
                                redirect="/collection/dayak-mandau"
                            />
                            <CardCollection
                                title="Tari Kecak Bali"
                                description="Kostum dan properti tari Kecak yang menjadi simbol budaya ritual dan cerita Ramayana."
                                redirect="/collection/tari-kecak-bali"
                            />
                        </div>
                        <ButtonCustom
                            style="button-primary"
                            label={`Lebih Banyak Koleksi`}
                        />
                    </section>
                </>
            </SectionHero>
        </>
    )
}