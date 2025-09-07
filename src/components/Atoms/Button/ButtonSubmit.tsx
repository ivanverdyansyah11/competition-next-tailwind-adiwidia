import Image from "next/image";

type IconType = "search" | "submit";

type Props = {
    icon?: IconType,
    disabled?: boolean,
}

export default function ButtonSubmit({icon = "search", disabled = false}: Props) {
    return (
        <button disabled={disabled} type="submit" className="button-submit">
            {icon === 'search' ? (
                <Image src="/image/icon/search/search-light.svg" alt="Search Icon" width={16} height={16} className="submit-icon image-full"/>
            ) : (
                <Image src="/image/icon/send/send-light.svg" alt="Send Icon" width={16} height={16} className="submit-icon image-full"/>
            )}
        </button>
    )
}
