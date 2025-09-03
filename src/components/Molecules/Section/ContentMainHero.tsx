import CardFeatured from "@/components/Molecules/Card/CardFeatured";

export default function ContentMainHero() {
    return (
        <section className="section-featured">
            <div className="featured-grid">
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
    )
}