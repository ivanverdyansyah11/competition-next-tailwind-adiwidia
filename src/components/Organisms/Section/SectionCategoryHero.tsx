'use client';

import 'swiper/css';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useParams, usePathname } from 'next/navigation';

import SectionHero from '@/components/Organisms/Section/SectionHero';
import CardProvince from '@/components/Molecules/Card/CardProvince';
import ButtonCustom from '@/components/Atoms/Button/ButtonCustom';
import { convertSlug } from '@/utils/convert-slug';
import { supabase } from '@/utils/supabase';

type Row = {
  // sesuaikan dengan kolom di view kamu
  id?: string | number | null;
  category_slug: string;
  province_slug: string;
  province_name?: string | null;   // ← biasanya ada
  name?: string | null;            // fallback bila pakai 'name'
  description?: string | null;     // opsional
  total_cultures?: number | null;  // ← counter di view
  total_characters?: number | null; // fallback jika kamu pakai nama ini
};

export default function SectionCategoryHero() {
  const pathname = usePathname();
  const { category } = useParams<{ category: string }>();
  const categoryParam = useMemo(
    () => convertSlug({ slug: category || '' }),
    [category]
  );

  // UI states
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<Row[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(12);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const hasMore = items.length < total;

  // helpers untuk handle perbedaan nama kolom
  const getProvinceTitle = (row: Row) => {console.log(row); return row.province_name || row.name || ''};
  const getProvinceDesc  = (row: Row) => row.description || '';
  const getTotalCount    = (row: Row) =>
    (row.total_cultures ?? row.total_characters ?? 0);

  const fetchProvinces = useCallback(
    async (opts?: { reset?: boolean; keyword?: string }) => {
      try {
        setLoading(true);
        setErrorMsg('');

        const currentPage = opts?.reset ? 1 : page;
        const from = (currentPage - 1) * pageSize;
        const to = from + pageSize - 1;

        const kw = (opts?.keyword ?? search).trim();

        let query = supabase
          .from('view_culture_counts_by_category_province')
          .select('*', { count: 'exact' })
          .eq('category_slug', category) // filter by category-slug
          // urutkan berdasarkan nama provinsi (pakai kolom yang ada)
          .order('province_name', { ascending: true, nullsFirst: false })
          .range(from, to);

        // Search di nama provinsi (dan fallback name)
        if (kw) {
          query = query.or(
            `province_name.ilike.%${kw}%,name.ilike.%${kw}%`
          );
        }

        const { data, error, count } = await query;
        if (error) throw error;

        setTotal(count ?? 0);
        if (opts?.reset) {
          setItems(data ?? []);
          setPage(1);
        } else {
          setItems(prev => [...prev, ...(data ?? [])]);
        }
      } catch (err: any) {
        setErrorMsg(err?.message ?? 'Failed to load provinces.');
      } finally {
        setLoading(false);
      }
    },
    [category, page, pageSize, search]
  );

  useEffect(() => {
    // refetch ketika category berubah
    setItems([]);
    setTotal(0);
    setPage(1);
    fetchProvinces({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (page > 1) fetchProvinces();
  }, [page, fetchProvinces]);

  const onSubmitSearch = ({ searchValue }: { searchValue: string }) => {
    setSearch(searchValue);
    setItems([]);
    setTotal(0);
    setPage(1);
    fetchProvinces({ reset: true, keyword: searchValue }); // anti-stale keyword
  };

  const onLoadMore = () => {
    if (!loading && hasMore) setPage(p => p + 1);
  };

  return (
    <SectionHero
      icon="/image/icon/open-book/open-book-primary.svg"
      subtitle="Jelajahi Kekayaan Budaya Nusantara"
      headline={`Menemukan Pesona ${categoryParam} Indonesia Dalam Satu Tempat`}
      description={`Adiwidia menghadirkan ragam ${categoryParam} Indonesia yang dikemas secara digital, interaktif, dan mudah diakses, agar budaya tetap hidup dan dikenal oleh generasi sekarang.`}
      search={search}
      placeholder="Cari provinsi"
      onSubmitAction={onSubmitSearch}
    >
      <>
        <section className="section-province section-content-gap">
          {errorMsg && (
            <div className="text-red-600 text-sm mb-3">{errorMsg}</div>
          )}

          <div className="section-content">
            {items.map((row) => (
              <CardProvince
                key={row.id ?? row.province_slug}
                redirect={`${pathname}/${row.province_slug}`}
                title={getProvinceTitle(row)}
                description={getProvinceDesc(row)}
                totalData={getTotalCount(row)}
              />
            ))}

            {loading && items.length === 0 && (
              <>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse rounded-xl bg-gray-100 h-28"
                  />
                ))}
              </>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <ButtonCustom
              style={hasMore ? 'button-primary' : 'button-blank'}
              label={
                loading && items.length > 0
                  ? 'Memuat...'
                  : hasMore
                    ? 'Lebih Banyak Provinsi'
                    : 'Semua provinsi sudah ditampilkan'
              }
              onClick={onLoadMore}
              disabled={!hasMore || loading}
            />
          </div>

          <p className="mt-3 text-center text-sm text-gray-500">
            Menampilkan {items.length} dari {total} provinsi
            {search ? ` untuk pencarian “${search}”` : ''}.
          </p>
        </section>
      </>
    </SectionHero>
  );
}
