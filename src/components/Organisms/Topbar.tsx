import Link from "next/link";

type Props = {
    onClickAction: () => void;
}

export default function Topbar({onClickAction}: Props) {
    return (
        <div className="topbar">
            <Link href="/culture/destinasi-budaya" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/mountain/mountain-primary.svg')] group-hover/link:bg-[url('/image/icon/mountain/mountain-light.svg')]"></span>
                </div>
                Destinasi Budaya
            </Link>
            <Link href="/culture/adat-tradisi" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/food/food-primary.svg')] group-hover/link:bg-[url('/image/icon/food/food-light.svg')]"></span>
                </div>
                Adat & Tradisi
            </Link>
            <Link href="/culture/makanan-kuliner" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/mask/mask-primary.svg')] group-hover/link:bg-[url('/image/icon/mask/mask-light.svg')]"></span>
                </div>
                Makanan & Kuliner
            </Link>
            <Link href="/culture/busana-aksesoris" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/art/art-primary.svg')] group-hover/link:bg-[url('/image/icon/art/art-light.svg')]"></span>
                </div>
                Busana & Aksesoris
            </Link>
            <Link href="/culture/seni-pertunjukan" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/prayer/prayer-primary.svg')] group-hover/link:bg-[url('/image/icon/prayer/prayer-light.svg')]"></span>
                </div>
                Seni Pertunjukan
            </Link>
            <Link href="/culture/bahasa-sastra" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/cloth/cloth-primary.svg')] group-hover/link:bg-[url('/image/icon/cloth/cloth-light.svg')]"></span>
                </div>
                Bahasa & Sastra
            </Link>
            <Link href="/culture/seni-rupa-kerajinan" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/pen/pen-primary.svg')] group-hover/link:bg-[url('/image/icon/pen/pen-light.svg')]"></span>
                </div>
                Seni Rupa & Kerajinan
            </Link>
            <Link href="/culture/arsitektur-bangunan" className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <span className="icon w-[12px] h-[12px] bg-[url('/image/icon/home/home-primary.svg')] group-hover/link:bg-[url('/image/icon/home/home-light.svg')]"></span>
                </div>
                Arsitektur & Bangunan
            </Link>
        </div>
    );
}