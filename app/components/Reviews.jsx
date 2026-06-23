"use client";
import { useEffect, useRef, useState } from "react";
import { REVIEWS } from "../data.js";

const PER_PAGE = 3;
const INTERVAL_MS = 6000;

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-primary" aria-label={`${n} din 5 stele`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
      <Stars n={r.rating} />
      <blockquote className="mt-4 line-clamp-6 text-sm text-muted-foreground">&ldquo;{r.text}&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-xs">
        <span className="font-semibold text-foreground">{r.name}</span>
        <span className="text-muted-foreground">{r.when}</span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const pages = [];
  for (let i = 0; i < REVIEWS.items.length; i += PER_PAGE) {
    pages.push(REVIEWS.items.slice(i, i + PER_PAGE));
  }

  const [page, setPage] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setPage((p) => (p + 1) % pages.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [pages.length]);

  return (
    <section id="recenzii" className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Recenzii Google</div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Ce spun clienții</h2>
            <p className="mt-4 text-muted-foreground">
              Firmă din 2024, cu experiență solidă în domeniu și sute de clienți mulțumiți — de la șoferi prinși pe traseu, până la flote și transportatori care ne sună la orice oră. Fiecare intervenție e tratată cu seriozitate, iar mesajele lor vorbesc pentru noi.
            </p>
          </div>
          <a
            href={REVIEWS.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm hover:border-primary/60"
          >
            <span className="font-display text-2xl text-primary">{REVIEWS.rating.toFixed(1)}</span>
            <Stars n={Math.round(REVIEWS.rating)} />
            <span className="text-muted-foreground">pe Google · 100+ recenzii</span>
          </a>
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="grid gap-5 md:grid-cols-3" key={page}>
            {pages[page].map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + pages.length) % pages.length)}
              aria-label="Recenzia anterioară"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/60 hover:bg-card/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Pagini recenzii">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Pagina ${i + 1}`}
                  aria-current={i === page}
                  className={`h-2.5 w-2.5 rounded-full border border-border transition ${
                    i === page ? "bg-primary border-primary" : "bg-card hover:bg-primary/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % pages.length)}
              aria-label="Recenzia următoare"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary/60 hover:bg-card/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
