import "swiper/css";
import CardFeatured from "@/components/Molecules/Card/CardFeatured";
import SectionHero from "@/components/Organisms/Section/SectionHero";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

export default function SectionAboutHero() {
    return (
        <>
            <SectionHero
                icon="/image/icon/star/star-primary.svg"
                subtitle="Cerita Tentang Adiwidia"
                headline="Mengenal Adiwidia Sebagai Penjaga Budaya Nusantara"
                description="Adiwidia hadir sebagai platform digital yang berfokus pada pelestarian budaya Indonesia. Melalui teknologi interaktif dan konten yang edukatif, kami berkomitmen menghadirkan kekayaan tradisi bangsa agar tetap hidup, dikenal, dan diwariskan kepada generasi mendatang."
                buttons={[
                    {style: 'button-primary', redirect: '/about#fact-analyst', label: 'Jelajahi Lebih Lanjut'},
                ]}
            >
                <>
                    <section className="section-swipper">
                        <Swiper
                            className="section-content"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            loop={true}
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div className="swipper-image wrapper-image">
                                    <Image src="/image/swiper/swiper-1.png" alt="Swiper Image" fill className="image image-full"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swipper-image wrapper-image">
                                    <Image src="/image/swiper/swiper-2.png" alt="Swiper Image" fill className="image image-full"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swipper-image wrapper-image">
                                    <Image src="/image/swiper/swiper-3.png" alt="Swiper Image" fill className="image image-full"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swipper-image wrapper-image">
                                    <Image src="/image/swiper/swiper-4.png" alt="Swiper Image" fill className="image image-full"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swipper-image wrapper-image">
                                    <Image src="/image/swiper/swiper-5.png" alt="Swiper Image" fill className="image image-full"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                    <section className="section-featured">
                        <div className="section-content">
                            <CardFeatured
                                icon="/image/icon/earth/earth-primary.svg"
                                title="Peta Interaktif Budaya Nusantara"
                                description="Menampilkan persebaran budaya Indonesia melalui peta digital interaktif. Pengunjung dapat menjelajahi tradisi, tarian, musik, dan kuliner khas tiap daerah."
                            />
                            <CardFeatured
                                icon="/image/icon/headphone/headphone-primary.svg"
                                title="Cerita Budaya Multimedia"
                                description="Menyajikan kisah budaya dalam format audio, video, dan animasi. Konten dibuat menarik agar mudah dipahami generasi muda."
                            />
                            <CardFeatured
                                icon="/image/icon/statue/statue-primary.svg"
                                title="3D Showcase Benda Kebudayaan"
                                description="Menampilkan artefak budaya seperti batik, keris, dan wayang dalam model 3D yang bisa diputar 360°. Dilengkapi penjelasan singkat sejarah dan filosofi."
                            />
                            <CardFeatured
                                icon="/image/icon/palette/palette-primary.svg"
                                title="Galeri Visual Budaya"
                                description="Menyediakan koleksi foto, ilustrasi, dan video budaya Indonesia. Setiap visual dilengkapi penjelasan singkat agar mudah dipahami pengunjung."
                            />
                        </div>
                    </section>
                </>
            </SectionHero>
        </>
    )
}