import ButtonSubmit from "@/components/Atoms/Button/ButtonSubmit";
import {useState} from "react";

type ButtonSize = "small" | "normal";

type Props = {
    value?: string;
    placeholder: string;
    buttonSize?: ButtonSize;
    onSubmitAction: (search: string) => void;
}

export default function InputSearch({value = "", placeholder, buttonSize = "normal", onSubmitAction}: Props) {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitAction(inputValue);
    };

    return (
        <form className={`form-input ${buttonSize}`} onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="input-submit">
                <ButtonSubmit/>
            </div>
        </form>
    );
}