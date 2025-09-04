import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import {useParams} from "next/navigation";
import {convertSlug} from "@/utils/convert-slug";
import CardCulture from "@/components/Molecules/Card/CardCulture";

export default function SectionCulture() {
    const { category, province } = useParams<{ category: string; province: string; culture_slug: string; }>();
    const categoryParam = convertSlug({slug: category || ""});

    return (
        <section className="section-culture section-content-gap section-mt-gap">
            <div className="section-header">
                <Title label={`Jelajahi ${categoryParam} Serupa yang Memperkaya Warisan Budaya Nusantara`}/>
                <Description value="Telusuri berbagai pilihan budaya untuk memperluas wawasan dan pengalaman Anda dalam mengenal kekayaan warisan bangsa."/>
            </div>
            <div className="section-content">
                <CardCulture
                    redirect={`/culture/${category}/${province}/pura-besakih`}
                    image="/image/destination/destination-1.png"
                    title="Pura Besakih"
                    location="Karangasem, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/pura-ulun-danu-beratan`}
                    image="/image/destination/destination-2.png"
                    title="Pura Ulun Danu Beratan"
                    location="Tabanan, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/pura-tanah-lot`}
                    image="/image/destination/destination-3.png"
                    title="Pura Tanah Lot"
                    location="Tabanan, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/pura-luhur-uluwatu`}
                    image="/image/destination/destination-4.png"
                    title="Pura Luhur Uluwatu"
                    location="Badung, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/taman-ayun`}
                    image="/image/destination/destination-5.png"
                    title="Taman Ayun"
                    location="Mengwi, Badung, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/puri-agung-ubud`}
                    image="/image/destination/destination-6.png"
                    title="Puri Agung Ubud (Ubud Palace)"
                    location="Gianyar, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/goa-gajah`}
                    image="/image/destination/destination-7.png"
                    title="Goa Gajah"
                    location="Gianyar, Bali"
                />
                <CardCulture
                    redirect={`/culture/${category}/${province}/desa-penglipuran`}
                    image="/image/destination/destination-8.png"
                    title="Desa Penglipuran"
                    location="Bangli, Bali"
                />
            </div>
            <div className="button-group element-wrapper">
                <ButtonCustom
                    style="button-primary"
                    redirect={`/culture/${category}/${province}`}
                    label={`Lebih Banyak ${categoryParam}`}
                />
            </div>
        </section>
    )
}