'use client'

import "swiper/css";
import SectionHero from "@/components/Organisms/Section/SectionHero";
import {useParams, usePathname} from "next/navigation";
import {useState} from "react";
import CardProvince from "@/components/Molecules/Card/CardProvince";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import {convertSlug} from "@/utils/convert-slug";

export default function SectionCategoryHero() {
    const pathname = usePathname();
    const { category } = useParams<{ category: string; }>();
    const [search, setSearch] = useState<string>('');
    const categoryParam = convertSlug({slug: category || ""});

    const onSubmitSearch = ({searchValue}: {searchValue: string}) => {
        setSearch(searchValue);
        console.log(search)
    }

    return (
        <>
            <SectionHero
                icon="/image/icon/open-book/open-book-primary.svg"
                subtitle="Jelajahi Kekayaan Budaya Nusantara"
                headline={`Menemukan Pesona ${categoryParam} Indonesia Dalam Satu Tempat`}
                description={`Adiwidia menghadirkan ragam ${categoryParam} Indonesia yang dikemas secara digital, interaktif, dan mudah diakses, agar budaya tetap hidup dan dikenal oleh generasi sekarang.`}
                search={search}
                placeholder="Cari provinsi"
                onSubmitAction={onSubmitSearch}
            >
                <>
                    <section className="section-province section-content-gap">
                        <div className="section-content">
                            <CardProvince
                                redirect={`${pathname}/jawa-tengah`}
                                title="Jawa Tengah"
                                description="Pusat peninggalan sejarah seperti Borobudur, Prambanan, dan seni tradisi."
                                totalData={30}
                            />
                            <CardProvince
                                redirect={`${pathname}/jawa-barat`}
                                title="Jawa Barat"
                                description="Tanah Sunda dengan musik angklung, kesenian tradisional, dan alam indah."
                                totalData={18}
                            />
                            <CardProvince
                                redirect={`${pathname}/sumatera-utara`}
                                title="Sumatera Utara"
                                description="Wilayah budaya Batak dengan Danau Toba, rumah adat, dan ulos."
                                totalData={15}
                            />
                            <CardProvince
                                redirect={`${pathname}/nusa-tenggara-timur`}
                                title="Nusa Tenggara Timur (NTT)"
                                description="Wilayah eksotis dengan tradisi Pasola dan tenun ikat khas."
                                totalData={13}
                            />
                            <CardProvince
                                redirect={`${pathname}/bali`}
                                title="Bali"
                                description="Pulau dengan tradisi Hindu, pura, dan seni tari yang mendunia."
                                totalData={25}
                            />
                            <CardProvince
                                redirect={`${pathname}/di-yogyakarta`}
                                title="DI Yogyakarta"
                                description="Kota budaya Jawa dengan keraton, batik, dan candi bersejarah."
                                totalData={22}
                            />
                            <CardProvince
                                redirect={`${pathname}/jawa-timur`}
                                title="Jawa Timur"
                                description="Daerah asal Reog Ponorogo, ludruk, serta situs kerajaan besar."
                                totalData={20}
                            />
                            <CardProvince
                                redirect={`${pathname}/aceh`}
                                title="Aceh"
                                description="Serambi Mekah dengan tradisi Islam yang berpadu seni tari saman."
                                totalData={14}
                            />
                            <CardProvince
                                redirect={`${pathname}/papua`}
                                title="Papua"
                                description="Tanah suku asli dengan tarian, ukiran kayu, dan alat musik tifa."
                                totalData={11}
                            />
                            <CardProvince
                                redirect={`${pathname}/sumatera-barat`}
                                title="Sumatera Barat"
                                description="Rumah budaya Minangkabau dengan rumah gadang dan tari piring."
                                totalData={17}
                            />
                            <CardProvince
                                redirect={`${pathname}/kalimantan-barat`}
                                title="Kalimantan Barat"
                                description="Tanah Dayak dengan rumah panjang, tradisi adat, dan festival Naik Dango."
                                totalData={12}
                            />
                            <CardProvince
                                redirect={`${pathname}/sulawesi-selatan`}
                                title="Sulawesi Selatan"
                                description="Budaya Bugis-Makassar dengan rumah panggung dan perahu pinisi."
                                totalData={16}
                            />
                        </div>
                        <ButtonCustom
                            style="button-primary"
                            label="Lebih Banyak Provinsi"
                        />
                    </section>
                </>
            </SectionHero>
        </>
    )
}