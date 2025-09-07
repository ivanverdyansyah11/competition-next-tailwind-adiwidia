'use client';

import 'swiper/css';
import SectionHero from '@/components/Organisms/Section/SectionHero';
import ButtonCustom from '@/components/Atoms/Button/ButtonCustom';
import CardCollection from '@/components/Molecules/Card/CardCollection';
import { supabase } from '@/utils/supabase';
import { useCallback, useEffect, useState } from 'react';

type ItemRow = {
  id?: string | number | null;
  slug: string;
  title?: string | null;        // kolom umum
  name?: string | null;         // fallback
  description?: string | null;
  // tambahkan field lain kalau ada (e.g., image_url, tags, etc.)
};

export default function SectionCollectionHero() {
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<ItemRow[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(12);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const hasMore = items.length < total;

  const getTitle = (row: ItemRow) => row.title || row.name || '';
  const getDesc = (row: ItemRow) => row.description || '';

  const fetchItems = useCallback(
    async (opts?: { reset?: boolean; keyword?: string }) => {
      try {
        setLoading(true);
        setErrorMsg('');

        const currentPage = opts?.reset ? 1 : page;
        const from = (currentPage - 1) * pageSize;
        const to = from + pageSize - 1;

        const kw = (opts?.keyword ?? search).trim();

        let query = supabase
          .from('virtual_museum_items') // sesuai permintaan
          .select('*', { count: 'exact' })
          .order('name', { ascending: true, nullsFirst: false })
          .range(from, to);

        if (kw) {
          // cari di title/name/description
          query = query.or(
            `title.ilike.%${kw}%,name.ilike.%${kw}%,description.ilike.%${kw}%`
          );
        }

        const { data, error, count } = await query;
        if (error) throw error;

        setTotal(count ?? 0);
        if (opts?.reset) {
          setItems((data ?? []) as ItemRow[]);
          setPage(1);
        } else {
          setItems(prev => [...prev, ...((data ?? []) as ItemRow[])]);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMsg(err.message);
        } else {
          setErrorMsg('Gagal memuat koleksi.');
        }
      } finally {
        setLoading(false);
      }
    },
    [page, pageSize, search]
  );

  // initial load
  useEffect(() => {
    fetchItems({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load next page
  useEffect(() => {
    if (page > 1) fetchItems();
  }, [page, fetchItems]);

  const onSubmitSearch = ({ searchValue }: { searchValue: string }) => {
    setSearch(searchValue);
    setItems([]);
    setTotal(0);
    setPage(1);
    fetchItems({ reset: true, keyword: searchValue }); // anti-stale
  };

  const onLoadMore = () => {
    if (!loading && hasMore) setPage(p => p + 1);
  };

  return (
    <>
      <SectionHero
        icon="/image/icon/cube/cube-primary.svg"
        subtitle="Jelajahi Warisan Budaya dalam Dimensi Baru"
        headline="Menghadirkan Koleksi Budaya Indonesia dalam Visualisasi 3D Interaktif"
        description="Nikmati pengalaman unik menjelajahi benda-benda budaya Indonesia melalui koleksi 3D interaktif yang dapat diputar, diperbesar, dan dipelajari dengan mudah di Adiwidia."
        search={search}
        placeholder="Cari koleksi 3D"
        onSubmitAction={onSubmitSearch}
      >
        <>
          <section className="section-collection section-content-gap">
            {errorMsg && (
              <div className="text-red-600 text-sm mb-3">{errorMsg}</div>
            )}

            <div className="section-content">
              {/* Skeleton saat first load */}
              {loading && items.length === 0 && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-pulse rounded-xl bg-gray-100 h-36" />
                  ))}
                </>
              )}

              {/* Items */}
              {items.map((row) => (
                <CardCollection
                  key={row.id ?? row.slug}
                  title={getTitle(row)}
                  description={getDesc(row)}
                  redirect={`/collection/${row.slug}`}
                />
              ))}

              {!loading && !errorMsg && items.length === 0 && (
                <div className="text-sm text-gray-500">
                  Tidak ada koleksi yang cocok{search ? ` untuk “${search}”` : ''}.
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <ButtonCustom
                style={hasMore ? 'button-primary' : 'button-blank'}
                label={
                  loading && items.length > 0
                    ? 'Memuat...'
                    : hasMore
                    ? 'Lebih Banyak Koleksi'
                    : 'Semua koleksi sudah ditampilkan'
                }
                onClick={onLoadMore}
                disabled={!hasMore || loading}
              />
            </div>

            <p className="mt-3 text-center text-sm text-gray-500">
              Menampilkan {items.length} dari {total} koleksi
              {search ? ` untuk “${search}”` : ''}.
            </p>
          </section>
        </>
      </SectionHero>
    </>
  );
}
