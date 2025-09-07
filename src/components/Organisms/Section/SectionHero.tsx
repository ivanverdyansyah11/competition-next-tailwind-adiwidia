'use client'

import BadgeSubtitle from "@/components/Atoms/Badge/BadgeSubtitle";
import Headline from "@/components/Atoms/Text/Headline";
import Description from "@/components/Atoms/Text/Description";
import ButtonCustom from "@/components/Atoms/Button/ButtonCustom";
import InputSearch from "@/components/Atoms/Input/InputSearch";

type StyleType =
  | "button-primary"
  | "button-secondary"
  | "button-light"
  | "button-blank"
  | "button-small-primary"
  | "button-small-secondary";

type ButtonProps = {
  style: StyleType;
  redirect?: string;
  label: string;
};

type Props = {
  icon: string;
  subtitle: string;
  headline: string;
  description: string;
  buttons?: ButtonProps[];
  /** Nilai search dari parent (opsional). */
  search?: string;
  placeholder?: string;
  /** Dipanggil saat submit. */
  onSubmitAction?: ({ searchValue }: { searchValue: string }) => void;

  /** ----- Opsi baru agar kompatibel dengan InputSearch terbaru ----- */
  /** Pakai ini kalau mau mode controlled: update state parent saat user mengetik. */
  onChangeSearch?: (next: string) => void;
  /** Icon tombol di input: 'search' | 'submit' (default: 'search') */
  searchIcon?: "search" | "submit";
  /** Ukuran input: 'small' | 'normal' (default: 'normal') */
  searchInputSize?: "small" | "normal";
  /** Disable input kalau perlu */
  searchDisabled?: boolean;

  children: React.ReactNode;
};

export default function SectionHero({
  icon,
  subtitle,
  headline,
  description,
  buttons,
  search,
  placeholder,
  onSubmitAction,

  // props kompatibilitas baru
  onChangeSearch,
  searchIcon = "search",
  searchInputSize = "normal",
  searchDisabled = false,

  children,
}: Props) {
  // Jika parent menyediakan onChangeSearch → controlled mode
  // Jika tidak → uncontrolled, gunakan defaultValue + key agar sinkron ketika `search` prop berubah
  const isControlled = typeof onChangeSearch === "function";

  return (
    <section className="section-hero section-top-hero">
      <div className="section-header gap-0">
        <div className="element-wrapper mb-[12px] lg:mb-[16px]">
          <BadgeSubtitle icon={icon} label={subtitle} />
        </div>

        <div className="element-wrapper mb-[24px] lg:mb-[28px]">
          <Headline label={headline} />
        </div>

        <div className="element-wrapper mb-[28px] lg:mb-[32px]">
          <Description value={description} />
        </div>

        {buttons && buttons.length > 0 ? (
          <div className="button-group element-wrapper">
            {buttons.map((button, index) => (
              <ButtonCustom
                key={index}
                style={button.style}
                redirect={button.redirect}
                label={button.label}
              />
            ))}
          </div>
        ) : (
          <div className="element-search-wrapper">
            {isControlled ? (
              // CONTROLLED: parent mengelola state `search`
              <InputSearch
                key={`search-controlled`} // tidak perlu re-mount di mode controlled
                disabled={!!searchDisabled}
                placeholder={placeholder || "Cari sesuatu"}
                value={search ?? ""}
                onChangeAction={onChangeSearch}
                onSubmitAction={(val) => onSubmitAction?.({ searchValue: val })}
                icon={searchIcon}
                inputSize={searchInputSize}
              />
            ) : (
              // UNCONTROLLED: internal state di InputSearch,
              // tapi kita pakai `key` agar defaultValue ikut terupdate saat prop `search` berubah
              <InputSearch
                key={`search-uncontrolled-${search ?? ""}`}
                disabled={!!searchDisabled}
                placeholder={placeholder || "Cari sesuatu"}
                defaultValue={search ?? ""}
                onSubmitAction={(val) => onSubmitAction?.({ searchValue: val })}
                icon={searchIcon}
                inputSize={searchInputSize}
              />
            )}
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
