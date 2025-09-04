import ButtonSubmit from "@/components/Atoms/Button/ButtonSubmit";
import {useState} from "react";

type InputSize = "small" | "normal";
type IconType = "search" | "submit";

type Props = {
    value?: string;
    placeholder: string;
    inputSize?: InputSize;
    onSubmitAction: (search: string) => void;
    icon?: IconType,
}

export default function InputSearch({value = "", placeholder, inputSize = "normal", onSubmitAction, icon = "search"}: Props) {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitAction(inputValue);
    };

    return (
        <form className={`form-input ${inputSize}`} onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-submit">
                <ButtonSubmit icon={icon}/>
            </div>
        </form>
    );
}