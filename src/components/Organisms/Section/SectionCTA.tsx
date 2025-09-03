import Title from "@/components/Atoms/Text/Title";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

export default function SectionCTA() {
    return (
        <section className="section-cta section-mt-gap">
            <div className="cta-content">
                <div className="content-data">
                    <Title className="data-title" label="Bersama Adiwidia, Mari Lestarikan Budaya Indonesia Secara Digital"/>
                    <Description className="data-description" value="Jadilah bagian dari gerakan digital yang menjaga, menghidupkan, dan memperkenalkan budaya Indonesia kepada dunia."/>
                </div>
                <ButtonCustom
                    style="button-light"
                    redirect="/about#category"
                    label="Eksplorasi Budaya"
                />
            </div>
        </section>
    )
}