'use client';

import 'swiper/css';
import SectionHero from '@/components/Organisms/Section/SectionHero';
import ButtonCustom from '@/components/Atoms/Button/ButtonCustom';
import CardCollection from '@/components/Molecules/Card/CardCollection';
import { supabase } from '@/utils/supabase';
import { useCallback, useEffect, useRef, useState } from 'react';

type ItemRow = {
  id?: string | number | null;
  slug: string;
  title?: string | null;
  name?: string | null;
  description?: string | null;
};

const PAGE_SIZE = 12;
// Pakai kedua kemungkinan nama tabel
const TABLE_CANDIDATES = ['virtual_museum_items'] as const;
// Coba order by title → fallback name
const ORDER_COLUMNS = [ 'name'] as const;

export default function SectionCollectionHero() {
  const [search, setSearch] = useState<string>('');
  const [items, setItems] = useState<ItemRow[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [activeTable, setActiveTable] = useState<(typeof TABLE_CANDIDATES)[number] | null>(null);

  const hasMore = items.length < total;

  const prevSearchRef = useRef<string>(''); // untuk deteksi clear

  const getTitle = (row: ItemRow) => row.title || row.name || '';
  const getDesc = (row: ItemRow) => row.description || '';

  const escapeIlike = (kw: string) => kw.replace(/[%_]/g, '\\$&');

  const fetchItems = useCallback(
    async (opts?: { reset?: boolean; keyword?: string }) => {
      try {
        setLoading(true);
        setErrorMsg('');

        const currentPage = opts?.reset ? 1 : page;
        const from = (currentPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        const rawKw = (opts?.keyword ?? search).trim();
        const escKw = escapeIlike(rawKw);

        const tablesToTry = activeTable
          ? ([activeTable, ...TABLE_CANDIDATES.filter((t) => t !== activeTable)] as string[])
          : (TABLE_CANDIDATES as unknown as string[]);

        let lastError: any = null;
        let fetched = false;

        for (const table of tablesToTry) {
          for (const orderCol of ORDER_COLUMNS) {
            let base = supabase.from(table).select('*', { count: 'exact' });

            if (escKw) {
              base = base.or(
                `name.ilike.%${escKw}%,description.ilike.%${escKw}%`
              );
            }

            const { data, error, count } = await base
              .order(orderCol, { ascending: true, nullsFirst: false })
              .range(from, to);

            if (!error) {
              setTotal(count ?? 0);
              if (opts?.reset) {
                setItems((data ?? []) as ItemRow[]);
                setPage(1);
              } else {
                setItems((prev) => [...prev, ...((data ?? []) as ItemRow[])]);
              }
              setActiveTable(table as (typeof TABLE_CANDIDATES)[number]);
              fetched = true;
              break;
            } else {
              lastError = error;
              // Kolom tidak ada → coba kolom berikutnya
              if ((error as any)?.code === '42703' || /column .* does not exist/i.test(error.message)) {
                continue;
              }
              // Tabel tidak ada → coba tabel berikutnya
              if ((error as any)?.code === '42P01' || /relation .* does not exist/i.test(error.message)) {
                break;
              }
              // Error lain → coba tabel berikutnya
              break;
            }
          }
          if (fetched) break;
        }

        if (!fetched) throw lastError ?? new Error('Gagal mengambil data dari database.');
      } catch (err: unknown) {
        if (opts?.reset) {
          setItems([]);
          setTotal(0);
        }
        setErrorMsg(err instanceof Error ? err.message : 'Gagal memuat koleksi.');
      } finally {
        setLoading(false);
      }
    },
    [activeTable, page, search]
  );

  // Initial load
  useEffect(() => {
    fetchItems({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load next page
  useEffect(() => {
    if (page > 1) fetchItems();
  }, [page, fetchItems]);

  // AUTO RESET: saat input dikosongkan, fetch semua data lagi (tanpa menunggu submit)
  useEffect(() => {
    const was = prevSearchRef.current;
    if (was !== '' && search === '' && !loading) {
      setItems([]);
      setTotal(0);
      setPage(1);
      setActiveTable(null);
      fetchItems({ reset: true, keyword: '' });
    }
    prevSearchRef.current = search;
  }, [search, loading, fetchItems]);

  const onSubmitSearch = ({ searchValue }: { searchValue: string }) => {
    // Kalau submit kosong → tampilkan semua data
    const kw = searchValue.trim();
    setSearch(kw);
    setItems([]);
    setTotal(0);
    setPage(1);
    setActiveTable(null);
    fetchItems({ reset: true, keyword: kw }); // kw bisa '' → fetch all
  };

  const onLoadMore = () => {
    if (!loading && hasMore) setPage((p) => p + 1);
  };

  return (
    <>
      <SectionHero
        icon="/image/icon/cube/cube-primary.svg"
        subtitle="Jelajahi Warisan Budaya dalam Dimensi Baru"
        headline="Menghadirkan Koleksi Budaya Indonesia dalam Visualisasi 3D Interaktif"
        description="Nikmati pengalaman unik menjelajahi benda-benda budaya Indonesia melalui koleksi 3D interaktif yang dapat diputar, diperbesar, dan dipelajari dengan mudah di Adiwidia."
        search={search}
        onChangeSearch={setSearch}
        onSubmitAction={onSubmitSearch}
        placeholder="Cari koleksi 3D"
        searchIcon="submit"
        searchInputSize="small"
        searchDisabled={loading}
      >
        <>
          <section className="section-collection section-content-gap">
            {errorMsg && <div className="text-red-600 text-sm mb-3">{errorMsg}</div>}

            <div className="section-content">
              {loading && items.length === 0 && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="animate-pulse rounded-xl bg-gray-100 h-36" />
                  ))}
                </>
              )}

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
