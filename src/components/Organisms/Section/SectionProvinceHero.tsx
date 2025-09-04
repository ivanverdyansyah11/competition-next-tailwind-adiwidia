'use client'

import "swiper/css";
import SectionHero from "@/components/Organisms/Section/SectionHero";
import {useParams, usePathname} from "next/navigation";
import {useState} from "react";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import {convertSlug} from "@/utils/convert-slug";
import CardCulture from "@/components/Molecules/Card/CardCulture";

export default function SectionProvinceHero() {
    const pathname = usePathname();
    const { category, province } = useParams<{ category: string; province: string; }>();
    const [search, setSearch] = useState<string>('');
    const categoryParam = convertSlug({slug: category || ""});
    const provinceParam = convertSlug({slug: province || ""});

    const onSubmitSearch = ({searchValue}: {searchValue: string}) => {
        setSearch(searchValue);
        console.log(search)
    }

    return (
        <>
            <SectionHero
                icon="/image/icon/map/map-primary.svg"
                subtitle={`Jelajahi ${categoryParam} Budaya di ${provinceParam}`}
                headline={`Menemukan Keunikan ${categoryParam} Indonesia dari ${provinceParam}`}
                description={`Adiwidia menghadirkan ${categoryParam} khas dari ${provinceParam} dalam sajian digital interaktif yang memudahkan Anda mengenal budaya setempat lebih dekat dan bermakna.`}
                search={search}
                placeholder={`Cari ${categoryParam}`}
                onSubmitAction={onSubmitSearch}
            >
                <>
                    <section className="section-culture section-content-gap">
                        <div className="section-content">
                            <CardCulture
                                redirect={`${pathname}/pura-besakih`}
                                image="/image/destination/destination-1.png"
                                title="Pura Besakih"
                                location="Karangasem, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/pura-ulun-danu-beratan`}
                                image="/image/destination/destination-2.png"
                                title="Pura Ulun Danu Beratan"
                                location="Tabanan, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/pura-tanah-lot`}
                                image="/image/destination/destination-3.png"
                                title="Pura Tanah Lot"
                                location="Tabanan, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/pura-luhur-uluwatu`}
                                image="/image/destination/destination-4.png"
                                title="Pura Luhur Uluwatu"
                                location="Badung, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/taman-ayun`}
                                image="/image/destination/destination-5.png"
                                title="Taman Ayun"
                                location="Mengwi, Badung, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/puri-agung-ubud`}
                                image="/image/destination/destination-6.png"
                                title="Puri Agung Ubud (Ubud Palace)"
                                location="Gianyar, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/goa-gajah`}
                                image="/image/destination/destination-7.png"
                                title="Goa Gajah"
                                location="Gianyar, Bali"
                            />
                            <CardCulture
                                redirect={`${pathname}/desa-penglipuran`}
                                image="/image/destination/destination-8.png"
                                title="Desa Penglipuran"
                                location="Bangli, Bali"
                            />
                        </div>
                        <ButtonCustom
                            style="button-primary"
                            label={`Lebih Banyak ${categoryParam}`}
                        />
                    </section>
                </>
            </SectionHero>
        </>
    )
}