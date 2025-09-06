'use client'
import { supabase } from "@/utils/supabase";
import { Icon, InlineIcon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

type Props = {
    onClickAction: () => void;
}
const { data:categories, error } = await supabase
  .from('categories')
  .select()



export default function Topbar({onClickAction}: Props) {
    return (
        <div className="topbar">
          {categories && categories.map((category) => (
            <Link key={category.id} href={`/culture/${category.slug}`} className="topbar-link group/link" onClick={onClickAction}>
                <div className="link-icon group-hover/link:bg-primary">
                    <Icon icon="hugeicons:globe-02" className="size-4 icon" />
                  </div>
                {category.category_name}
            </Link>
          ))}
        </div>
    );
}
