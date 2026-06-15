"use client";

import { useState } from "react";

const presets = [
  "A professional Dutch plumber in dark navy work clothes fixing pipes under a kitchen sink, photorealistic, natural light, clean modern interior",
  "A certified installer mounting a modern heat pump on a brick wall exterior, professional, sunny day, Zuid-Holland Netherlands",
  "Close-up of a plumber's hands connecting copper pipes, tools on the side, workshop lighting, highly detailed photorealistic",
  "A technician installing solar panels on a Dutch residential rooftop, blue sky, professional uniform, photorealistic",
  "Modern CV boiler installation in a utility room, professional plumber working, clean and organized, photorealistic",
];

export default function FotosGenereren() {
  const [prompt, setPrompt] = useState(presets[0]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<{ mimeType: string; data: string } | null>(null);
  const [error, setError] = useState("");

  async function generate() {
    setLoading(true);
    setError("");
    setImage(null);
    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setImage(json);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Er ging iets mis");
    } finally {
      setLoading(false);
    }
  }

  function download() {
    if (!image) return;
    const link = document.createElement("a");
    link.href = `data:${image.mimeType};base64,${image.data}`;
    link.download = "instamonteur-foto.png";
    link.click();
  }

  return (
    <main className="min-h-screen bg-muted/30 pt-[116px] pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-10">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">AI Tool</span>
          <h1 className="text-3xl md:text-4xl font-black text-brand mt-2">Foto generator</h1>
          <p className="text-muted-foreground mt-2">Genereer professionele foto&apos;s voor de website via Gemini AI.</p>
        </div>

        {/* Presets */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-brand mb-2">Snelle opties:</p>
          <div className="flex flex-wrap gap-2">
            {presets.map((p, i) => (
              <button
                key={i}
                onClick={() => setPrompt(p)}
                className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-orange-400 hover:bg-orange-50 transition-colors text-muted-foreground hover:text-brand"
              >
                Optie {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-white focus:outline-none focus:border-orange-400 transition-colors resize-none mb-4"
          placeholder="Beschrijf de foto die je wil genereren..."
        />

        <button
          onClick={generate}
          disabled={loading || !prompt.trim()}
          className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Genereren...
            </>
          ) : "Genereer foto"}
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        {image && (
          <div className="mt-8">
            <img
              src={`data:${image.mimeType};base64,${image.data}`}
              alt="Gegenereerde foto"
              className="w-full rounded-2xl shadow-xl border border-border"
            />
            <button
              onClick={download}
              className="mt-4 inline-flex items-center gap-2 border-2 border-brand text-brand font-bold px-6 py-3 rounded-full hover:bg-brand hover:text-white transition-colors"
            >
              Download foto
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
