'use client';

import InputSearch from '@/components/Atoms/Input/InputSearch';
import ChatHeader from '@/components/Atoms/ParticleChatAI/ChatHeader';
import ChatRoom from '@/components/Atoms/ParticleChatAI/ChatRoom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Message = { id: string; role: 'user' | 'assistant'; content: string };

export type ChatStoryContext = {
  title: string;                // wajib
  category?: string;            // default: "Cerita Rakyat"
  region?: string;              // default: "Tidak diketahui"
  descriptionHtml?: string;     // boleh kosong
};

function stripHtml(html?: string): string {
  if (!html) return '';
  const text = html
    .replace(/<\/(script|style)>/gi, ']')
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return text.length > 4000 ? text.slice(0, 4000) + '…' : text;
}

export default function CardChatAIStory({ context }: { context: ChatStoryContext | null }) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const greetedRef = useRef(false);

  // context + fallback aman
  const safeTitle = context?.title?.trim() || 'Cerita Rakyat';
  const safeCategory = context?.category?.trim() || 'Cerita Rakyat';
  const safeRegion = context?.region?.trim() || 'Tidak diketahui';
  const safeDesc = useMemo(
    () => stripHtml(context?.descriptionHtml) || 'Deskripsi belum tersedia.',
    [context?.descriptionHtml]
  );

  const contextReady = !!context && !!context.title;

  // greet sekali saat context ready/title ada
  useEffect(() => {
    if (!contextReady || greetedRef.current) return;
    setMessages([
      {
        id: 'assistant-welcome',
        role: 'assistant',
        content: `Halo! Saya pemandu virtual untuk cerita “${safeTitle}”. Silakan tanya apa saja — ringkasan, asal-usul, tokoh, nilai moral, hingga relevansinya hari ini.`,
      },
    ]);
    greetedRef.current = true;
  }, [contextReady, safeTitle]);

  const sendMessage = useCallback(
    async (text: string) => {
      const q = text.trim();
      if (!q || isLoading) return;

      setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', content: q }]);
      setInput('');
      setIsLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: q,
            // tetap gunakan artifactContext agar kompatibel dengan API-mu sekarang
            artifactContext: {
              title: safeTitle,
              category: safeCategory,
              period: '',
              description: safeDesc,
              region: safeRegion,
              material: '',
              culturalStory: '',
            },
          }),
        });

        const data = await res.json();
        if (!res.ok || data?.error) throw new Error(data?.error || `HTTP ${res.status}`);

        setMessages(prev => [
          ...prev,
          { id: `a-${Date.now()}`, role: 'assistant', content: data.response || 'Maaf, tidak ada respons.' },
        ]);
      } catch {
        setMessages(prev => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: 'assistant',
            content: 'Maaf, terjadi kesalahan ketika memproses pertanyaan Anda. Silakan coba lagi.',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, safeTitle, safeCategory, safeDesc, safeRegion]
  );

  return (
    <div className="card-chat">
      <ChatHeader />
      {/* Pastikan ChatRoom kamu sudah mendukung props {messages, isLoading} */}
      <ChatRoom messages={messages} isLoading={isLoading} />
      <div className="chat-footer">
        <InputSearch
          icon="submit"
          inputSize="small"
          value={input}
          placeholder={safeTitle ? `Tanya tentang “${safeTitle}”…` : 'Tulis pesan anda disini'}
          onChangeAction={setInput}
          onSubmitAction={sendMessage}
          disabled={isLoading || !contextReady}
        />
      </div>
      {!contextReady && (
        <p className="mt-2 text-xs text-gray-500">Menunggu data cerita…</p>
      )}
    </div>
  );
}
