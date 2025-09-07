import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

type Props = {
    title: string,
    location: string,
    redirect: string,
}

export default function CardFolktale({title, location, redirect}: Props) {
    return (
        <div className="card-collection">
            <h6 className="collection-title">{title}</h6>
            <p className="collection-description line-clamp-2">{location}</p>
            <ButtonCustom
                redirect={redirect}
                style="button-small-secondary"
                label="Lihat Koleksi"
                className="w-full"
            />
        </div>
    )
}
