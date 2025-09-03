import "swiper/css";

import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import ButtonArrow from "@/components/Atoms/Button/ButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import CardCategory from "@/components/Molecules/Card/CardCategory";
import { Navigation } from "swiper/modules";

export default function SectionCategory() {
    return (
        <section className="section-category section-mt-gap">
            <div className="section-content">
                <div className="element-wrapper mb-[16px] md:mb-[20px]">
                    <Title label="Menyusuri Jejak Budaya Indonesia Dari Masa Ke Masa"/>
                </div>
                <div className="content-description mb-[28px] lg:mb-[32px]">
                    <div className="element-wrapper">
                        <Description value="Indonesia memiliki kekayaan budaya yang lahir dari ribuan pulau dengan beragam tradisi, bahasa, dan kesenian. Setiap unsur budaya menyimpan makna mendalam yang mencerminkan kearifan lokal serta nilai kehidupan masyarakat."/>
                    </div>
                    <div className="element-wrapper">
                        <Description value="Melalui Adiwidia, warisan ini dihadirkan kembali dalam bentuk digital agar mudah dijangkau dan terus lestari."/>
                    </div>
                </div>
                <div className="content-button button-group element-wrapper">
                    <ButtonCustom
                        style="button-primary"
                        redirect="/collection"
                        label="Jelajahi Koleksi 3D"
                    />
                </div>
            </div>
            <div className="section-list">
                <Swiper
                    className="category-swipper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                    navigation={{
                        prevEl: ".navigation-button#navigation-button-prev",
                        nextEl: ".navigation-button#navigation-button-next",
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/cultural-destination.png"
                            redirect="/budaya/destinasi-budaya"
                            title="Destinasi Budaya"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/custom-tradition.png"
                            redirect="/budaya/adat-tradisi"
                            title="Adat & Tradisi"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/food-cuisine.png"
                            redirect="/budaya/makanan-kuliner"
                            title="Makanan & Kuliner"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/fashion-accessories.png"
                            redirect="/budaya/busana-aksesoris"
                            title="Busana & Aksesoris"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/performing-art.png"
                            redirect="/budaya/seni-pertunjukan"
                            title="Seni Pertunjukan"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/language-literature.png"
                            redirect="/budaya/bahasa-sastra"
                            title="Bahasa & Sastra"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/fine-art-craft.png"
                            redirect="/budaya/seni-rupa-kerajinan"
                            title="Seni Rupa & Kerajinan"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCategory
                            image="/image/category/architecture-building.png"
                            redirect="/budaya/arsitektur-bangunan"
                            title="Arsitektur & Bangunan"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="category-navigation button-group element-wrapper">
                    <div className="navigation-button" id="navigation-button-prev">
                        <ButtonArrow isReversed={true}/>
                    </div>
                    <div className="navigation-button" id="navigation-button-next">
                        <ButtonArrow/>
                    </div>
                </div>
            </div>
        </section>
    )
}