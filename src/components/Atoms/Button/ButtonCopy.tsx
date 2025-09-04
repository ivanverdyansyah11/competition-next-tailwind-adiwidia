'use client'

export default function ButtonCopy() {
    const onCopy = () => {
        const fullUrl = window.location.href;
        navigator.clipboard.writeText(fullUrl)
            .then(() => {
                alert("URL berhasil disalin: " + fullUrl);
            })
            .catch((err) => {
                alert("Gagal menyalin URL: " + err);
            });
    };

    return (
        <button type="button" className="button-copy group/button" onClick={onCopy}>
            <span className={`icon w-[16px] h-[16px] bg-[url('/image/icon/copy/copy-primary.svg')] group-hover/button:bg-[url('/image/icon/copy/copy-light.svg')]`}></span>
        </button>
    )
}