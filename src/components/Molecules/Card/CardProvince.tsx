import Image from "next/image";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";

type Props = {
    redirect: string,
    title: string,
    description: string,
    totalData: number,
}

export default function CardProvince({redirect, title, description, totalData}: Props) {
    return (
        <div className="card-province">
            <h6 className="province-title">{title}</h6>
            <p className="province-description">{description}</p>
            <p className="province-total">
                <Image src="/image/icon/mountain/mountain-dark.svg" alt="Mountain Icon" width={12} height={12} className="total-icon"/>
                {totalData} Data
            </p>
            <ButtonCustom
                style="button-small-secondary"
                redirect={redirect}
                label="Lihat Provinsi"
                className="w-full"
            />
        </div>
    )
}
