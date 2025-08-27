'use client';

import Link from "next/link";
import SidebarMenuLink from "@/components/Atoms/Link/SidebarMenuLink";
import SidebarMenuPopup from "@/components/Molecules/SidebarGroup/SidebarMenuPopup";
import {useState} from "react";
import {usePathname} from "next/navigation";

type Props = {
    toggleSidebarAction: () => void;
}

export default function SidebarMenu({toggleSidebarAction}: Props) {
    const pathname = usePathname();
    const [isShowMenuCategory, setIsShowMenuCategory] = useState<boolean>(false);

    const toggleShowMenuCategory = () => {
        setIsShowMenuCategory(!isShowMenuCategory);
    }

    return (
        <div className="sidebar-menu">
            <SidebarMenuLink
                redirect="/"
                label="Beranda"
                toggleSidebarAction={toggleSidebarAction}
                isActive={pathname === '/'}
            />
            <SidebarMenuLink
                redirect="/about-us"
                label="Tentang Kami"
                toggleSidebarAction={toggleSidebarAction}
                isActive={pathname.startsWith('/about-us')}
            />
            <SidebarMenuLink
                label="Kategori"
                togglePopupAction={toggleShowMenuCategory}
                isActive={isShowMenuCategory}
            >
                <SidebarMenuPopup
                    isShowMenuCategory={isShowMenuCategory}
                    togglePopupAction={toggleShowMenuCategory}
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
            </SidebarMenuLink>
            <SidebarMenuLink
                redirect="/gallery"
                label="Galeri"
                toggleSidebarAction={toggleSidebarAction}
                isActive={pathname.startsWith('/gallery')}
            />
            <SidebarMenuLink
                redirect="/3d-collection"
                label="Koleksi 3D"
                toggleSidebarAction={toggleSidebarAction}
                isActive={pathname.startsWith('/3d-collection')}
            />
            <Link href="/adiwidia-ai" className="w-full button-navbar justify-center group/button" onClick={toggleSidebarAction}>
                <span className="icon w-[16px] h-[16px] bg-[url(/image/icon/chat/chat-light.svg)] group-hover/button:bg-[url(/image/icon/chat/chat-dark.svg)]"></span>
                Tanya AI
            </Link>
        </div>
    )
}