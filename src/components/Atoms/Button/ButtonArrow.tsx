type Props = {
    isReversed?: boolean;
}

export default function ButtonArrow({isReversed = false}: Props) {
    return (
        <button type="button" className="button-arrow group/button">
            <span className={`icon w-[16px] h-[16px] bg-[url('/image/icon/arrow/arrow-dark.svg')] group-hover/button:bg-[url('/image/icon/arrow/arrow-light.svg')] ${isReversed ? 'rotate-180' : ''}`}></span>
        </button>
    )
}