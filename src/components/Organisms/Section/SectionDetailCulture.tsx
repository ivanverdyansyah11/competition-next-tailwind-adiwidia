'use client'

import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import {useParams} from "next/navigation";
import {convertSlug} from "@/utils/convert-slug";
import ButtonCopy from "@/components/Atoms/Button/ButtonCopy";
import CardChatAI from "@/components/Molecules/Card/CardChatAI";
import Image from "next/image";
import {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {menuTabVariants} from "@/utils/motion-variant";

export default function SectionDetailCulture() {
    const { category, province, culture_slug } = useParams<{ category: string; province: string; culture_slug: string; }>();
    const categoryParam = convertSlug({slug: category || ""});
    const provinceParam = convertSlug({slug: province || ""});
    const slugParam = convertSlug({slug: culture_slug || ""});
    const [tabActive, setTabActive] = useState<string>('description');

    const recipeExampleData = `<ul>
        <li>500 gr daging sapi, potong dadu</li>
        <li>400 ml santan kelapa</li>
        <li>5 lembar daun jeruk</li>
        <li>2 batang serai, memarkan</li>
        <li>3 cm lengkuas, memarkan</li>
        <li>5 siung bawang putih, haluskan</li>
        <li>8 siung bawang merah, haluskan</li>
        <li>5 buah cabai merah keriting, haluskan</li>
        <li>1 sdt ketumbar bubuk</li>
        <li>Garam & gula secukupnya</li>
    </ul>`;

    const stepByStepExampleData = `<ol>
        <li>
          <strong>Tumis Bumbu Halus</strong><br>
          Panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.
        </li>
        <li>
          <strong>Masukkan Rempah</strong><br>
          Tambahkan daun jeruk, serai, lengkuas, dan ketumbar bubuk, aduk rata.
        </li>
        <li>
          <strong>Masukkan Daging</strong><br>
          Tambahkan potongan daging, aduk hingga berubah warna.
        </li>
        <li>
          <strong>Tuang Santan</strong><br>
          Masukkan santan, masak dengan api kecil sambil sesekali diaduk agar santan tidak pecah.
        </li>
        <li>
          <strong>Masak Hingga Kering</strong><br>
          Masak selama 2–3 jam hingga daging empuk dan bumbu meresap, santan mengering dan berwarna cokelat gelap.
        </li>
        <li>
          <strong>Cek Rasa & Sajikan</strong><br>
          Koreksi rasa dengan garam dan gula, angkat, sajikan hangat dengan nasi putih.
        </li>
    </ol>`;

    return (
        <section className="section-detail-culture section-content-gap section-top-hero">
            <div className="detail-culture-header">
                <div className="header-data">
                    <div className="element-wrapper mb-[8px]">
                        <p className="breadcrumb">Beranda / {categoryParam} / {provinceParam} / <span>{slugParam}</span></p>
                    </div>
                    <div className="element-wrapper">
                        <Title className="data-title" label={slugParam}/>
                    </div>
                </div>
                <ButtonCopy/>
            </div>
            <div className="detail-culture-image">
                <Image src="/image/destination/destination-1.png" alt="Thumbnail Image" fill className="image-full"/>
            </div>
            <div className="detail-culture-content">
                <div className="content-card">
                    <div className="card-menu">
                        <button type="button" className={`menu-tab ${tabActive === "description" ? "active" : ""}`} onClick={() => setTabActive("description")}>
                            Deskripsi
                        </button>
                        <button type="button" className={`menu-tab ${tabActive === "culture-story" ? "active" : ""}`} onClick={() => setTabActive("culture-story")}>
                            Cerita Budaya
                        </button>
                        <button type="button" className={`menu-tab ${tabActive === "video" ? "active" : ""}`} onClick={() => setTabActive("video")}>
                            Video
                        </button>
                        <button type="button" className={`menu-tab ${tabActive === "recipe" ? "active" : ""}`} onClick={() => setTabActive("recipe")}>
                            Resep Makanan
                        </button>
                    </div>
                    <div className="card-body overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            {tabActive === "description" && (
                                <motion.div
                                    key="description"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={menuTabVariants}
                                    transition={{ duration: 0.2 }}
                                    className="body-group"
                                >
                                    <div className="body-header">
                                        <div className="header-icon">
                                            <Image src="/image/icon/file/file-light.svg" alt="Definition Icon" width={14} height={14}/>
                                        </div>
                                        <p className="header-title">Pengalaman Warga Tengger</p>
                                    </div>
                                    <div className="body-content">
                                        <Description value="Gunung Bromo bukan hanya pemandangan alam yang menakjubkan, tetapi juga pusat kehidupan budaya suku Tengger. Setiap tahun, warga setempat menggelar ritual Kasada sebagai bentuk penghormatan kepada leluhur dan Dewa Gunung, mempersembahkan sesajen di kawah Bromo. Tradisi ini menjadi bagian penting dari identitas masyarakat dan memupuk rasa kebersamaan serta cinta terhadap alam sekitar."/>
                                        <Description value="Bagi wisatawan, Gunung Bromo menawarkan pengalaman yang tak terlupakan, mulai dari menyaksikan matahari terbit di lautan pasir hingga menjelajahi lembah dan bukit sekitarnya. Keindahan alam berpadu dengan nilai budaya lokal membuat setiap kunjungan menjadi momen edukatif sekaligus spiritual. Banyak pengunjung merasa terinspirasi oleh harmoni antara alam dan tradisi yang tetap terjaga hingga kini."/>
                                    </div>
                                </motion.div>
                            )}

                            {tabActive === "culture-story" && (
                                <motion.div
                                    key="culture-story"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={menuTabVariants}
                                    transition={{ duration: 0.2 }}
                                    className="body-group"
                                >
                                    <div className="body-header">
                                        <div className="header-icon">
                                            <Image src="/image/icon/open-book/open-book-light.svg" alt="Definition Icon" width={14} height={14}/>
                                        </div>
                                        <p className="header-title">Cerita Budaya Gunung Bromo</p>
                                    </div>
                                    <div className="body-content">
                                        <Description value="Gunung Bromo bukan hanya keindahan alam yang memukau, tetapi juga pusat kehidupan budaya suku Tengger. Setiap tahun, warga setempat melaksanakan ritual Kasada, mempersembahkan sesajen di kawah sebagai bentuk penghormatan kepada leluhur dan Dewa Gunung. Tradisi ini menjadi simbol kekuatan komunitas dan cinta mereka terhadap alam sekitar, sekaligus menjaga nilai-nilai leluhur tetap hidup."/>
                                        <Description value="Bagi pengunjung, Gunung Bromo menawarkan pengalaman unik yang memadukan wisata alam dan edukasi budaya. Menyaksikan matahari terbit di lautan pasir atau menyelami ritual Kasada memberikan pemahaman mendalam tentang harmoni antara manusia, alam, dan tradisi. Setiap perjalanan di Bromo tidak hanya memanjakan mata, tetapi juga menghidupkan pengalaman spiritual dan budaya yang autentik."/>
                                        <Description value="Bagi wisatawan, Gunung Bromo menawarkan pengalaman yang tak terlupakan, mulai dari menyaksikan matahari terbit di lautan pasir hingga menjelajahi lembah dan bukit sekitarnya. Keindahan alam berpadu dengan nilai budaya lokal membuat setiap kunjungan menjadi momen edukatif sekaligus spiritual. Banyak pengunjung merasa terinspirasi oleh harmoni antara alam dan tradisi yang tetap terjaga hingga kini."/>
                                    </div>
                                </motion.div>
                            )}

                            {tabActive === "video" && (
                                <motion.div
                                    key="video"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={menuTabVariants}
                                    transition={{ duration: 0.2 }}
                                    className="body-group"
                                >
                                    <div className="body-header">
                                        <div className="header-icon">
                                            <Image src="/image/icon/video/video-light.svg" alt="Definition Icon" width={14} height={14}/>
                                        </div>
                                        <p className="header-title">Rekaman Pesona Gunung Bromo</p>
                                    </div>
                                    <div className="body-content">
                                        <Description value="Nikmati tayangan video yang menghadirkan cerita, proses, dan pengalaman budaya Indonesia lebih hidup dan nyata."/>
                                        <div className="content-video">
                                            {/* Taruh disini */}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {tabActive === "recipe" && (
                                <>
                                    <motion.div
                                        key="recipe"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={menuTabVariants}
                                        transition={{ duration: 0.2 }}
                                        className="body-group"
                                    >
                                        <div className="body-header">
                                            <div className="header-icon">
                                                <Image src="/image/icon/canned-food/canned-food-light.svg" alt="Definition Icon" width={14} height={14}/>
                                            </div>
                                            <p className="header-title">Bahan yang Dibutuhkan</p>
                                        </div>
                                        <div className="body-content">
                                            <Description value={recipeExampleData}/>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        key="recipe"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={menuTabVariants}
                                        transition={{ duration: 0.2 }}
                                        className="body-group"
                                    >
                                        <div className="body-header">
                                            <div className="header-icon">
                                                <Image src="/image/icon/canned-food/canned-food-light.svg" alt="Definition Icon" width={14} height={14}/>
                                            </div>
                                            <p className="header-title">Bahan yang Dibutuhkan</p>
                                        </div>
                                        <div className="body-content">
                                            <Description value={stepByStepExampleData}/>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <CardChatAI/>
            </div>
        </section>
    )
}