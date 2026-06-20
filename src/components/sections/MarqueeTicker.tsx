const items = [
  "Spoed loodgieter",
  "CV-ketel installatie",
  "Lekkage reparatie",
  "Warmtepomp",
  "Sanitair montage",
  "Dakgoot reparatie",
  "Zonnepanelen",
  "Binnen 1 uur",
  "Snelle service",
  "Vaste tarieven",
];

export function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-bold uppercase tracking-widest text-white/90">
            <span className="text-orange-400">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
