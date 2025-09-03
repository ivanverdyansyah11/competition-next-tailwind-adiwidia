import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import CardFAQ from "@/components/Molecules/Card/CardFAQ";
import {useState} from "react";

export default function MainFAQ() {
    const [faqOpen, setFAQOpen] = useState<number | null>(null);

    const toggleFAQ = ({number}: {number: number}) => {
        if (faqOpen === number) {
            setFAQOpen(null);
            return;
        }
        setFAQOpen(number);
    }

    return (
        <section className="section-faq section-content-gap section-mt-gap">
            <div className="section-header">
                <Title label="Pertanyaan Umum Seputar Adiwidia dan Pelestarian Budaya"/>
                <Description value="Temukan jawaban dari pertanyaan yang sering diajukan seputar Adiwidia."/>
            </div>
            <div className="section-content">
                <CardFAQ
                    isOpen={faqOpen === 1}
                    question="Apa itu Adiwidia?"
                    answer="Adiwidia adalah platform digital yang berfokus pada pelestarian budaya Indonesia melalui media interaktif dan inovatif."
                    onClickOpenAction={() => toggleFAQ({number: 1})}
                />
                <CardFAQ
                    isOpen={faqOpen === 2}
                    question="Apakah Adiwidia hanya menampilkan budaya dari daerah tertentu?"
                    answer="Tidak, Adiwidia menghadirkan ragam budaya dari seluruh Indonesia, mulai dari Sabang hingga Merauke."
                    onClickOpenAction={() => toggleFAQ({number: 2})}
                />
                <CardFAQ
                    isOpen={faqOpen === 3}
                    question="Apakah saya bisa ikut berkontribusi di Adiwidia?"
                    answer="Tentu, Anda dapat berbagi cerita, foto, atau informasi budaya melalui fitur kontribusi komunitas."
                    onClickOpenAction={() => toggleFAQ({number: 3})}
                />
                <CardFAQ
                    isOpen={faqOpen === 4}
                    question="Bagaimana cara menggunakan fitur peta interaktif?"
                    answer="Anda cukup klik pada wilayah yang ditandai di peta, lalu informasi budaya dari daerah tersebut akan muncul."
                    onClickOpenAction={() => toggleFAQ({number: 4})}
                />
                <CardFAQ
                    isOpen={faqOpen === 5}
                    question="Apakah konten Adiwidia bisa diakses gratis?"
                    answer="Ya, sebagian besar konten dapat diakses secara gratis, namun ada fitur premium untuk pengalaman lebih lengkap."
                    onClickOpenAction={() => toggleFAQ({number: 5})}
                />
                <CardFAQ
                    isOpen={faqOpen === 6}
                    question="Apakah Adiwidia tersedia dalam bahasa selain Indonesia?"
                    answer="Saat ini fokus utama kami adalah bahasa Indonesia, namun versi bahasa Inggris sedang dalam pengembangan."
                    onClickOpenAction={() => toggleFAQ({number: 6})}
                />
                <CardFAQ
                    isOpen={faqOpen === 7}
                    question="Apakah Adiwidia bisa digunakan di perangkat mobile?"
                    answer="Ya, Adiwidia dirancang responsif sehingga dapat diakses melalui komputer, tablet, maupun smartphone."
                    onClickOpenAction={() => toggleFAQ({number: 7})}
                />
                <CardFAQ
                    isOpen={faqOpen === 8}
                    question="Apa manfaat bergabung sebagai anggota Adiwidia?"
                    answer="Anggota dapat menyimpan koleksi favorit, berkontribusi konten budaya, dan mendapatkan akses ke fitur eksklusif."
                    onClickOpenAction={() => toggleFAQ({number: 8})}
                />
            </div>
        </section>
    )
}