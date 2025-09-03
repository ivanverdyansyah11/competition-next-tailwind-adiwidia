import Image from "next/image";

type Props = {
    icon: string,
    label: string,
}

export default function BadgeSubtitle({icon, label}: Props) {
    return (
        <div className="badge-subtitle">
            <Image src={icon} alt="Badge Subtitle Icon" width={16} height={16}/>
            {label}
        </div>
    )
}