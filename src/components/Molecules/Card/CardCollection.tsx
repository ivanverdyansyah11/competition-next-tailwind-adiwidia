import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

type Props = {
    title: string,
    description: string,
    redirect: string,
}

export default function CardCollection({title, description, redirect}: Props) {
    return (
        <div className="card-collection">
            <h6 className="collection-title">{title}</h6>
            <p className="collection-description">{description}</p>
            <ButtonCustom
                redirect={redirect}
                style="button-small-secondary"
                label="Lihat Koleksi"
                className="w-full"
            />
        </div>
    )
}