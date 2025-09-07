// utils/youtube.ts
export function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '').toLowerCase();

    let id = '';
    if (host === 'youtu.be') {
      id = u.pathname.split('/').filter(Boolean)[0] ?? '';
    } else if (host.endsWith('youtube.com')) {
      const path = u.pathname;
      if (path === '/watch') id = u.searchParams.get('v') ?? '';
      else if (path.startsWith('/embed/')) id = path.split('/')[2] ?? '';
      else if (path.startsWith('/shorts/')) id = path.split('/')[2] ?? '';
      else if (path.startsWith('/live/')) id = path.split('/')[2] ?? '';
    }
    if (!id) return null;

    // parse timestamp (?t=1h2m3s | ?t=83 | ?start=…)
    const tParam = u.searchParams.get('t') || u.searchParams.get('start');
    let start = 0;
    if (tParam) {
      const m = tParam.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      if (m) {
        const h = parseInt(m[1] || '0', 10);
        const mnt = parseInt(m[2] || '0', 10);
        const s = parseInt(m[3] || '0', 10);
        start = h * 3600 + mnt * 60 + s;
      } else {
        const n = parseInt(tParam, 10);
        if (!Number.isNaN(n)) start = n;
      }
    }

    const qs = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3',
    });
    if (start > 0) qs.set('start', String(start));

    return `https://www.youtube.com/embed/${id}?${qs.toString()}`;
  } catch {
    return null;
  }
}
