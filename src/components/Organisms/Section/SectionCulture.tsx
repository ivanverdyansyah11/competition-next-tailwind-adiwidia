'use client';

import Title from '@/components/Atoms/Text/Title';
import Description from '@/components/Atoms/Text/Description';
import ButtonCustom from '@/components/Atoms/Button/ButtonCustom';
import { useParams } from 'next/navigation';
import { convertSlug } from '@/utils/convert-slug';
import CardCulture from '@/components/Molecules/Card/CardCulture';
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

type CultureRow = {
  id?: string | number | null;
  slug: string;
  title?: string | null;      // atau 'name' tergantung skema
  name?: string | null;
  location?: string | null;
  media_url?: string | null;
  category_slug?: string;
  province_slug?: string;
};

export default function SectionCulture() {
  const { category, province, culture_slug } = useParams<{
    category: string;
    province: string;
    culture_slug?: string;
  }>();

  const categoryParam = convertSlug({ slug: category || '' });

  const [items, setItems] = useState<CultureRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const getTitle = (row: CultureRow) => row.title || row.name || '';
  const getImage = (row: CultureRow) =>
    row.media_url || '';
  const getLocation = (row: CultureRow) => row.location || '';

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMsg('');

      let query = supabase
          .from('view_cultures_with_category_province')
          .select('*')
          .eq('category_slug', category)
          .eq('province_slug', province)
          .order('name', { ascending: true, nullsFirst: false })
          .limit(8);

      if (culture_slug) {
        query = query.neq('slug', culture_slug);
      }

      const { data, error } = await query;
      if (error) throw error;

      setItems((data ?? []) as CultureRow[]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('Gagal memuat data budaya terkait.');
      }
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [category, province, culture_slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (
    <section className="section-culture section-content-gap section-mt-gap">
      <div className="section-header">
        <Title
          label={`Jelajahi ${categoryParam} Serupa yang Memperkaya Warisan Budaya Nusantara`}
        />
        <Description value="Telusuri berbagai pilihan budaya untuk memperluas wawasan dan pengalaman Anda dalam mengenal kekayaan warisan bangsa." />
      </div>

      <div className="section-content">
        {/* Skeleton saat loading */}
        {loading &&
          [...Array(8)].map((_, i) => (
            <div key={i}>
              <div
                className="animate-pulse rounded-xl bg-gray-100 h-36"
              />
            </div>
          ))}

        {/* Error state */}
        {!loading && errorMsg && (
          <div className="text-red-600 text-sm">{errorMsg}</div>
        )}

        {/* Data */}
        {!loading &&
          !errorMsg &&
          items.map((row) => (
            <CardCulture
              key={row.id ?? row.slug}
              redirect={`/culture/${category}/${province}/${row.slug}`}
              image={getImage(row)}
              title={getTitle(row)}
              location={getLocation(row)}
            />
          ))}

        {!loading && !errorMsg && items.length === 0 && (
          <div className="text-sm text-gray-500 flex justify-center w-full">
            Belum ada data {categoryParam.toLowerCase()} serupa.
          </div>
        )}
      </div>

      <div className="button-group element-wrapper">
        <ButtonCustom
          style="button-primary"
          redirect={`/culture/${category}/${province}`}
          label={`Lebih Banyak ${categoryParam}`}
        />
      </div>
    </section>
  );
}
