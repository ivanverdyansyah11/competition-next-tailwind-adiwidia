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

export default function SectionDetailCollection() {
    const { slug } = useParams<{ slug: string; }>();
    const slugParam = convertSlug({slug: slug || ""});
    const [tabActive, setTabActive] = useState<string>('description');

    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <section className="section-detail-collection section-content-gap section-top-hero">
            <div className="detail-collection-header">
                <div className="header-data">
                    <div className="element-wrapper mb-[6px] lg:mb-[8px]">
                        <Title className="data-title" label={slugParam}/>
                    </div>
                    <div className="element-wrapper">
                        <Description value="Putar objek 360° dengan mouse atau sentuhan"/>
                    </div>
                </div>
                <ButtonCopy/>
            </div>
            <div className="detail-collection-frame">
                <p className="frame-caption">Asset 3D disini</p>
            </div>
            <div className="detail-collection-content">
                <div className="content-card">
                    <div className="card-menu">
                        <button type="button" className={`menu-tab ${tabActive === "description" ? "active" : ""}`} onClick={() => setTabActive("description")}>
                            Deskripsi
                        </button>
                        <button type="button" className={`menu-tab ${tabActive === "culture-story" ? "active" : ""}`} onClick={() => setTabActive("culture-story")}>
                            Cerita Budaya
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
                                    variants={variants}
                                    transition={{ duration: 0.3 }}
                                    className="body-group"
                                    id="description"
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
                                    variants={variants}
                                    transition={{ duration: 0.3 }}
                                    className="body-group"
                                    id="culture-story"
                                >
                                    <div className="body-header">
                                        <div className="header-icon">
                                            <Image src="/image/icon/file/file-light.svg" alt="Definition Icon" width={14} height={14}/>
                                        </div>
                                        <p className="header-title">Cerita Budaya</p>
                                    </div>
                                    <div className="body-content">
                                        <Description value="Bagi wisatawan, Gunung Bromo menawarkan pengalaman yang tak terlupakan, mulai dari menyaksikan matahari terbit di lautan pasir hingga menjelajahi lembah dan bukit sekitarnya. Keindahan alam berpadu dengan nilai budaya lokal membuat setiap kunjungan menjadi momen edukatif sekaligus spiritual. Banyak pengunjung merasa terinspirasi oleh harmoni antara alam dan tradisi yang tetap terjaga hingga kini."/>
                                        <Description value="Gunung Bromo bukan hanya pemandangan alam yang menakjubkan, tetapi juga pusat kehidupan budaya suku Tengger. Setiap tahun, warga setempat menggelar ritual Kasada sebagai bentuk penghormatan kepada leluhur dan Dewa Gunung, mempersembahkan sesajen di kawah Bromo. Tradisi ini menjadi bagian penting dari identitas masyarakat dan memupuk rasa kebersamaan serta cinta terhadap alam sekitar."/>
                                        <Description value="Bagi wisatawan, Gunung Bromo menawarkan pengalaman yang tak terlupakan, mulai dari menyaksikan matahari terbit di lautan pasir hingga menjelajahi lembah dan bukit sekitarnya. Keindahan alam berpadu dengan nilai budaya lokal membuat setiap kunjungan menjadi momen edukatif sekaligus spiritual. Banyak pengunjung merasa terinspirasi oleh harmoni antara alam dan tradisi yang tetap terjaga hingga kini."/>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <CardChatAI/>
            </div>
        </section>
    )
}