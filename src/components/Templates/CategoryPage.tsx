'use client';

import SectionCTA from '@/components/Organisms/Section/SectionCTA';
import SectionCategoryHero from '@/components/Organisms/Section/SectionCategoryHero';
import SectionFolktale from '@/components/Organisms/Section/SectionFolktale'; // pastikan path ini sesuai
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  useLenisScroll();
  const { category } = useParams<{ category: string }>();

  const isFolktale = (category ?? '').toLowerCase() === 'cerita-rakyat';

  return (
    <main className="main">
      <div className="container section-pb-gap">
        {isFolktale ? <SectionFolktale /> : <SectionCategoryHero />}
        <SectionCTA />
      </div>
    </main>
  );
}
