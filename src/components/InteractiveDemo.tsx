import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  height?: number;
  description?: string;
}

/**
 * Embeds an interactive app (VQE, etc.) inside an article.
 * Lazy-loads on click so the article page stays fast.
 */
export default function InteractiveDemo({ src, title, height = 700, description }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="widget-slot my-10 rounded-2xl overflow-hidden border border-violet-500/15 bg-violet-500/[0.03]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-violet-500/10 bg-black/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <span className="text-xs text-zinc-500 font-mono ml-2">{title}</span>
        </div>
        <a href={src} target="_blank" rel="noopener"
           className="text-xs text-zinc-600 hover:text-violet-400 transition-colors">
          open full screen ↗
        </a>
      </div>

      {/* Iframe or placeholder */}
      {loaded ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height={height}
          className="block border-0 bg-[#0a0a0a]"
          allow="accelerometer"
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-4 cursor-pointer
                     bg-gradient-to-br from-[#0a0a14] to-[#0f0a1e]"
          style={{ height }}
          onClick={() => setLoaded(true)}
        >
          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20
                          flex items-center justify-center text-3xl">
            ⚛️
          </div>
          <div className="text-center">
            <p className="text-zinc-300 font-medium mb-1">{title}</p>
            {description && <p className="text-sm text-zinc-500 mb-4 max-w-xs">{description}</p>}
            <button
              className="px-5 py-2 rounded-xl text-sm font-medium
                         bg-violet-600/80 text-white border border-violet-500/40
                         hover:bg-violet-600 transition-all"
              onClick={() => setLoaded(true)}
            >
              Launch Interactive Demo
            </button>
          </div>
          <p className="text-xs text-zinc-700">Connects to live backend — requires internet</p>
        </div>
      )}
    </div>
  );
}
