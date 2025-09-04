import Image from "next/image";

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="header-brand">
                <Image src="/image/brand/logo.svg" alt="Brand Logo" width={28} height={28} className="brand-logo"/>
                <h6 className="brand-name">ChatAI</h6>
            </div>
        </div>
    );
}