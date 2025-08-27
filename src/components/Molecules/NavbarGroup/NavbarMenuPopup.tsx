import NavbarPopupLink from "@/components/Atoms/Link/NavbarPopupLink";
import {useClickOutside} from "@/hooks/useClickOutside";

type Icon = {
    dark: string;
    light: string;
}

type PopupLink = {
    redirect: string;
    label: string;
    icon: Icon;
}

type Props = {
    popupLinks: PopupLink[];
    isShowPopupCategory: boolean;
    togglePopupAction: () => void;
}

export default function NavbarMenuPopup({popupLinks, isShowPopupCategory, togglePopupAction}: Props) {
    const popupRef = useClickOutside<HTMLDivElement>(togglePopupAction, isShowPopupCategory);

    return (
        <div ref={popupRef} className={`menu-popup ${isShowPopupCategory ? 'show' : ''}`}>
            {popupLinks.map((popupLink, index) => (
                <NavbarPopupLink
                    key={index}
                    redirect={popupLink.redirect}
                    label={popupLink.label}
                    icon={popupLink.icon}
                />
            ))}
        </div>
    )
}