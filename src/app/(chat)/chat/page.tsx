import ChatPage from "@/components/Templates/ChatPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Chat AI Adiwidia - Budaya Inovasi Digital",
    openGraph: {
        title: "Chat AI Adiwidia - Budaya Inovasi Digital"
    }
};

export default function Chat() {
    return <ChatPage/>;
}