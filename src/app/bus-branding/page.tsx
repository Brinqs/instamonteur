"use client";

import { useState } from "react";

const BASE = `The first image is a white Peugeot Expert service van. The second image is the exact "Insta Monteur" company logo (dark blue text with orange elements).
Apply the EXACT logo from the second image faithfully — reproduce every detail. Do NOT add phone numbers or extra text.
IMPORTANT: The logo must ALWAYS be placed in the upper-right area of the van's side panel, clearly visible and large.
Keep the van's 3D shape, wheels, windows and background exactly the same. Only change the paintwork/wrap/stickers.`;

const styles = [
  {
    label: "1 — Minimaal logo",
    description: "Witte bus, alleen het logo als grote sticker op de zijkant",
    prompt: `${BASE}
Style: Keep the van completely white and clean. Apply the Insta Monteur logo as a single large professional vinyl sticker/decal on the side panel only. The sticker should be centered on the sliding door area. No color changes to the van body. The logo follows the van's surface realistically.`,
  },
  {
    label: "2 — Navy wrap met oranje streep",
    description: "Donkerblauwe wrap met oranje diagonale streep en logo",
    prompt: `${BASE}
Style: Professional vehicle wrap. Navy blue (#0F2878) covers the lower 2/3 of the side panels. A bold orange (#F97316) diagonal stripe runs from front-bottom to rear-top. The Insta Monteur logo is centered in white on the navy section. Roof stays white. Realistic vinyl wrap with reflections.`,
  },
  {
    label: "3 — Oranje onderste helft",
    description: "Witte bovenkant, oranje onderkant, logo in het midden",
    prompt: `${BASE}
Style: The van is split horizontally: white on the top half, vibrant orange (#F97316) on the bottom half. A thin navy blue pinstripe separates the two colors. The Insta Monteur logo is placed prominently on the white upper section of the side panel. Clean and modern look.`,
  },
  {
    label: "4 — Volledig navy met logo groot",
    description: "Volledig donkerblauwe bus met groot wit logo",
    prompt: `${BASE}
Style: Full professional vehicle wrap — the entire van body is wrapped in deep navy blue (#0F2878). The Insta Monteur logo is displayed very large in white on the side, taking up most of the panel space. Small orange accent lines frame the logo. Wheels and glass stay unchanged. Premium fleet vehicle look.`,
  },
  {
    label: "5 — Sportief tweekleurig",
    description: "Navy voorkant, witte achterkant, oranje accenten",
    prompt: `${BASE}
Style: Dynamic two-tone wrap. The front half of the van (cab area) is navy blue (#0F2878), transitioning to white on the rear cargo area with a sharp angled cut. Orange (#F97316) accent stripes run along the full length of the van. The Insta Monteur logo sits on the white rear panel. Modern and sporty look.`,
  },
];

type Result = { data: string; mimeType: string } | { error: string } | null;

export default function Busbranding() {
  const [results, setResults] = useState<Result[]>(Array(5).fill(null));
  const [loading, setLoading] = useState<boolean[]>(Array(5).fill(false));
  const [applying, setApplying] = useState<number | null>(null);
  const [applied, setApplied] = useState<number | null>(null);

  async function generate(index: number) {
    setLoading((prev) => { const n = [...prev]; n[index] = true; return n; });
    setResults((prev) => { const n = [...prev]; n[index] = null; return n; });

    try {
      const res = await fetch("/api/brand-van", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: styles[index].prompt }),
      });
      const json = await res.json();
      setResults((prev) => { const n = [...prev]; n[index] = json; return n; });
    } catch {
      setResults((prev) => { const n = [...prev]; n[index] = { error: "Mislukt" }; return n; });
    } finally {
      setLoading((prev) => { const n = [...prev]; n[index] = false; return n; });
    }
  }

  async function generateAll() {
    styles.forEach((_, i) => generate(i));
  }

  async function applyAsHero(index: number) {
    const result = results[index];
    if (!result || "error" in result) return;

    setApplying(index);
    try {
      const res = await fetch("/api/save-hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: result.data, mimeType: result.mimeType }),
      });
      const json = await res.json();
      if (json.ok) setApplied(index);
    } finally {
      setApplying(null);
    }
  }

  return (
    <main className="min-h-screen bg-muted/30 pt-[116px] pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em]">AI Tool</span>
          <h1 className="text-3xl md:text-4xl font-black text-brand mt-2">Bus branding kiezer</h1>
          <p className="text-muted-foreground mt-2">Genereer 5 bestickering-stijlen en kies de mooiste voor de hero.</p>
        </div>

        <button
          onClick={generateAll}
          disabled={loading.some(Boolean)}
          className="mb-10 inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-3.5 rounded-full hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading.some(Boolean) ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Genereren... ({loading.filter(Boolean).length} bezig)
            </>
          ) : "Genereer alle 5 stijlen"}
        </button>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {styles.map((style, i) => {
            const result = results[i];
            const isLoading = loading[i];
            const isApplied = applied === i;

            return (
              <div key={i} className={`bg-white rounded-2xl border-2 transition-colors overflow-hidden ${isApplied ? "border-green-500" : "border-border"}`}>
                <div className="p-4 border-b border-border">
                  <div className="font-bold text-brand text-sm">{style.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{style.description}</div>
                </div>

                <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                  {isLoading && (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <span className="w-8 h-8 border-2 border-muted-foreground/30 border-t-brand rounded-full animate-spin" />
                      <span className="text-xs">Genereren...</span>
                    </div>
                  )}
                  {!isLoading && result && "error" in result && (
                    <span className="text-xs text-red-500">{result.error}</span>
                  )}
                  {!isLoading && result && "data" in result && (
                    <img
                      src={`data:${result.mimeType};base64,${result.data}`}
                      alt={style.label}
                      className="w-full h-full object-contain"
                    />
                  )}
                  {!isLoading && !result && (
                    <span className="text-xs text-muted-foreground">Nog niet gegenereerd</span>
                  )}
                </div>

                <div className="p-4 flex gap-2">
                  <button
                    onClick={() => generate(i)}
                    disabled={isLoading}
                    className="flex-1 text-xs font-semibold border-2 border-brand text-brand px-4 py-2 rounded-full hover:bg-brand hover:text-white transition-colors disabled:opacity-40"
                  >
                    {isLoading ? "Bezig..." : "Opnieuw genereren"}
                  </button>
                  {result && "data" in result && (
                    <button
                      onClick={() => applyAsHero(i)}
                      disabled={applying === i}
                      className={`flex-1 text-xs font-bold px-4 py-2 rounded-full transition-colors ${isApplied ? "bg-green-500 text-white" : "bg-brand text-white hover:bg-orange-500"} disabled:opacity-40`}
                    >
                      {isApplied ? "✓ Toegepast!" : applying === i ? "Bezig..." : "Gebruik als hero"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
