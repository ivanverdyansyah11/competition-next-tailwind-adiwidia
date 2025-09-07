import InputSearch from "@/components/Atoms/Input/InputSearch";
import {useState} from "react";
import ChatHeader from "@/components/Atoms/ParticleChatAI/ChatHeader";
import ChatRoom from "@/components/Atoms/ParticleChatAI/ChatRoom";

export default function CardChatAI() {
    const [search, setSearch] = useState<string>('');

    const onSubmitSearch = ({searchValue}: {searchValue: string}) => {
        setSearch(searchValue);
        console.log(search)
    }

    return (
        <div className="card-chat">
            <ChatHeader/>
            <ChatRoom/>
            <div className="chat-footer">
                <InputSearch
                    icon="submit"
                    inputSize="small"
                    value={search}
                    placeholder="Tulis pesan anda disini"
                    onSubmitAction={(search) => onSubmitSearch({searchValue: search})}
                />
            </div>
        </div>
    )
}