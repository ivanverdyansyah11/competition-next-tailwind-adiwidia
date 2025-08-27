'use client';

import Navbar from "@/components/Organisms/Navbar";
import Sidebar from "@/components/Organisms/Sidebar";
import {useState} from "react";

type Props = {
    children: React.ReactNode;
}

export default function HomepageBase({children}: Props) {
    const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);

    const toggleSidebarShow = () => {
        setIsSidebarShow(!isSidebarShow);
    }

    return (
        <>
            <Navbar toggleSidebarAction={toggleSidebarShow}/>
            <Sidebar isSidebarShow={isSidebarShow} toggleSidebarAction={toggleSidebarShow}/>
            <div className="content-homepage">
                {children}
            </div>
        </>
    )
}