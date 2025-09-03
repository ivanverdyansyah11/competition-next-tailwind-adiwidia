import Headline from "@/components/Atoms/Text/Headline";
import Description from "@/components/Atoms/Text/Description";

export default function SectionFactAnalyst() {
    return (
        <section className="section-fact-analyst section-mt-gap">
            <div className="section-content">
                <div className="fact-analyst-item">
                    <Headline className="item-value" label="+300"/>
                    <Description size="small" className="item-caption" value="Bahasa Daerah"/>
                </div>
                <div className="fact-analyst-item">
                    <Headline className="item-value" label="+17k"/>
                    <Description size="small" className="item-caption" value="Pulau di Indonesia"/>
                </div>
                <div className="fact-analyst-item">
                    <Headline className="item-value" label="+1.2k"/>
                    <Description size="small" className="item-caption" value="Tradisi, Ritual, dan Upacara Adat"/>
                </div>
                <div className="fact-analyst-item">
                    <Headline className="item-value" label="+500"/>
                    <Description size="small" className="item-caption" value="Karya Budaya Interaktif"/>
                </div>
                <div className="fact-analyst-item">
                    <Headline className="item-value" label="+10k"/>
                    <Description size="small" className="item-caption" value="Pengunjung Adiwidia"/>
                </div>
            </div>
        </section>
    )
}