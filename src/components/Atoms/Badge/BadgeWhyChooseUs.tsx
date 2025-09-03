import Image from "next/image";

type Props = {
    name: string
}

export default function BadgeWhyChooseUs({name}: Props) {
    return (
        <div className="badge-why-choose-us">
            <div className="why-choose-us-icon">
                <Image src="/image/icon/flash/flash-light.svg" alt="Point Icon" width={12} height={12}/>
            </div>
            <p className="why-choose-us-value">{name}</p>
        </div>
    )
}