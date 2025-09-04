import Image from "next/image";

export default function ChatRoom() {
    return (
        <div className="chat-room">
            <div className="room-chat-question">
                <p className="question">Halo Adiwidia, bisa rekomendasikan saya destinasi budaya yang terkenal di Jawa Tengah?</p>
            </div>
            <div className="room-chat-answer">
                <div className="answer-profile">
                    <Image src="/image/brand/logo.svg" alt="Profile Image" width={16} height={16} className="profile-image"/>
                </div>
                <p className="answer">Tentu! Di Jawa Tengah, salah satu destinasi budaya terkenal adalah Candi Borobudur di Magelang. Candi ini merupakan warisan dunia UNESCO dan memiliki relief yang penuh makna filosofi kehidupan. Apakah Anda ingin saya tampilkan rute dan informasi kunjungan di Google Maps?</p>
            </div>
            <div className="room-chat-question">
                <p className="question">Menarik sekali! Kalau dari kuliner, makanan khas yang harus dicoba di Sumatra Barat apa ya?</p>
            </div>
        </div>
    );
}