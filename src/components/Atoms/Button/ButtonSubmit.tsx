import Image from "next/image";

type IconType = "search" | "submit";

type Props = {
    icon?: IconType,
}

export default function ButtonSubmit({icon = "search"}: Props) {
    return (
        <button type="submit" className="button-submit">
            {icon === 'search' ? (
                <Image src="/image/icon/search/search-light.svg" alt="Search Icon" width={16} height={16} className="submit-icon image-full"/>
            ) : (
                <Image src="/image/icon/send/send-light.svg" alt="Send Icon" width={16} height={16} className="submit-icon image-full"/>
            )}
        </button>
    )
}