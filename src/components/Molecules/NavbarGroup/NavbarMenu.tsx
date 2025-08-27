'use client';

import Link from "next/link";
import NavbarMenuLink from "@/components/Atoms/Link/NavbarMenuLink";
import NavbarMenuPopup from "@/components/Molecules/NavbarGroup/NavbarMenuPopup";
import {useState} from "react";
import {usePathname} from "next/navigation";

export default function NavbarMenu() {
    const pathname = usePathname();
    const [isShowPopupCategory, setIsShowPopupCategory] = useState<boolean>(false);

    const toggleShowPopupCategory = () => {
        setIsShowPopupCategory(!isShowPopupCategory);
    }

    return (
        <div className="navbar-menu">
            <NavbarMenuLink
                redirect="/about-us"
                label="Tentang Kami"
                isActive={pathname.startsWith('/about-us')}
            />
            <NavbarMenuLink
                label="Kategori"
                isActive={isShowPopupCategory}
                togglePopupAction={toggleShowPopupCategory}
            >
                <NavbarMenuPopup
                    isShowPopupCategory={isShowPopupCategory}
                    togglePopupAction={toggleShowPopupCategory}
                    popupLinks={[
                        {
                            label: "Destinasi Budaya",
                            redirect: "/cultural-destination",
                            icon: {
                                dark: "bg-[url(/image/icon/mountain/mountain-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/mountain/mountain-light.svg)]",
                            }
                        },
                        {
                            label: "Makanan & Kuliner",
                            redirect: "/food-cuisine",
                            icon: {
                                dark: "bg-[url(/image/icon/food/food-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/food/food-light.svg)]",
                            }
                        },
                        {
                            label: "Seni Pertunjukan",
                            redirect: "/performing-art",
                            icon: {
                                dark: "bg-[url(/image/icon/mask/mask-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/mask/mask-light.svg)]",
                            }
                        },
                        {
                            label: "Seni Rupa & Kerajinan",
                            redirect: "/fine-art-craft",
                            icon: {
                                dark: "bg-[url(/image/icon/palette/palette-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/palette/palette-light.svg)]",
                            }
                        },
                        {
                            label: "Adat & Tradisi",
                            redirect: "/custom-tradition",
                            icon: {
                                dark: "bg-[url(/image/icon/prayer/prayer-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/prayer/prayer-light.svg)]",
                            }
                        },
                        {
                            label: "Busana & Aksesoris",
                            redirect: "/fashion-accessories",
                            icon: {
                                dark: "bg-[url(/image/icon/cloth/cloth-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/cloth/cloth-light.svg)]",
                            }
                        },
                        {
                            label: "Bahasa & Sastra",
                            redirect: "/language-literature",
                            icon: {
                                dark: "bg-[url(/image/icon/pen/pen-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/pen/pen-light.svg)]",
                            }
                        },
                        {
                            label: "Arsitektur & Bangunan",
                            redirect: "/architecture-building",
                            icon: {
                                dark: "bg-[url(/image/icon/home/home-dark.svg)]",
                                light: "group-hover/button:bg-[url(/image/icon/home/home-light.svg)]",
                            }
                        },
                    ]}
                />
            </NavbarMenuLink>
            <NavbarMenuLink
                redirect="/gallery"
                label="Galeri"
                isActive={pathname.startsWith('/gallery')}
            />
            <NavbarMenuLink
                redirect="/3d-collection"
                label="Koleksi 3D"
                isActive={pathname.startsWith('/3d-collection')}
            />
            <Link href="/adiwidia-ai" className="button-navbar group/button">
                <span className="icon w-[16px] h-[16px] bg-[url(/image/icon/chat/chat-light.svg)] group-hover/button:bg-[url(/image/icon/chat/chat-dark.svg)]"></span>
                Tanya AI
            </Link>
        </div>
    )
}