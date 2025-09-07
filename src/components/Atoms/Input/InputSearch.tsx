'use client';

import ButtonSubmit from '@/components/Atoms/Button/ButtonSubmit';
import { useEffect, useMemo, useState } from 'react';

type InputSize = 'small' | 'normal';
type IconType = 'search' | 'submit';

type Props = {
  /** Controlled value dari parent (opsional). Jika diberikan, gunakan juga onChangeAction. */
  value?: string;
  /** Default value untuk mode uncontrolled. Abaikan jika value dikirim. */
  defaultValue?: string;
  placeholder: string;
  inputSize?: InputSize;
  /** Dipanggil saat submit (Enter / klik tombol). */
  onSubmitAction: (search: string) => void;
  /** Dipanggil saat user mengetik (controlled). */
  onChangeAction?: (next: string) => void;
  icon?: IconType;
  disabled?: boolean;
  autoFocus?: boolean;
  name?: string;
  /** Nonaktifkan trimming otomatis (default: true = trim). */
  trimOnSubmit?: boolean;
};

export default function InputSearch({
  value,
  defaultValue = '',
  placeholder,
  inputSize = 'normal',
  onSubmitAction,
  onChangeAction,
  icon = 'search',
  disabled = false,
  autoFocus = false,
  name,
  trimOnSubmit = true,
}: Props) {
  // Controlled vs uncontrolled
  const isControlled = useMemo(() => value !== undefined, [value]);

  // State internal hanya dipakai pada mode uncontrolled
  const [internalValue, setInternalValue] = useState<string>(value ?? defaultValue);

  // Sinkronisasi saat parent mengubah "value" (controlled)
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isControlled]);

  const currentValue = isControlled ? (value as string) : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    if (!isControlled) setInternalValue(next);
    onChangeAction?.(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;
    const out = trimOnSubmit ? currentValue.trim() : currentValue;
    if (!out) return; // hindari submit kosong
    onSubmitAction(out);
    // Kosongkan hanya pada mode uncontrolled; pada controlled serahkan ke parent
    if (!isControlled) setInternalValue('');
  };

  return (
    <form className={`form-input ${inputSize}`} onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        autoFocus={autoFocus}
        aria-label={placeholder}
        enterKeyHint={icon === 'submit' ? 'send' : 'search'}
      />
      <div className="input-submit">
        <ButtonSubmit icon={icon} disabled={disabled} />
      </div>
    </form>
  );
}
