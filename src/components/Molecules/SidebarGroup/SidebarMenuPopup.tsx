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
    isShowMenuCategory: boolean;
    togglePopupAction: () => void;
}

export default function SidebarMenuPopup({popupLinks, isShowMenuCategory, togglePopupAction}: Props) {
    const popupRef = useClickOutside<HTMLDivElement>(togglePopupAction, isShowMenuCategory);

    return (
        <div ref={popupRef} className={`menu-popup ${isShowMenuCategory ? 'show' : ''}`}>
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