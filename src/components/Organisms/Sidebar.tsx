import SidebarHeader from "@/components/Molecules/SidebarGroup/SidebarHeader";
import SidebarMenu from "@/components/Molecules/SidebarGroup/SidebarMenu";

type Props = {
    isSidebarShow: boolean;
    toggleSidebarAction: () => void;
}

export default function Sidebar({isSidebarShow, toggleSidebarAction}: Props) {
    return (
        <aside className={`sidebar ${isSidebarShow ? 'show' : ''}`}>
            <SidebarHeader toggleSidebarAction={toggleSidebarAction}/>
            <SidebarMenu toggleSidebarAction={toggleSidebarAction}/>
        </aside>
    )
}