import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — ilm Smart Academy" },
      {
        name: "description",
        content: "Hear from students and parents about their experience at ilm Smart Academy.",
      },
      { property: "og:title", content: "Student & parent reviews" },
      { property: "og:description", content: "Real feedback from our ilm Smart Academy families." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const avg = (REVIEWS.reduce((a, r) => a + r.rating, 0) / REVIEWS.length).toFixed(1);
  return (
    <>
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Reviews & ratings</h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Star className="h-5 w-5 fill-current text-brand-yellow" />
            <span className="font-bold text-brand-yellow">{avg}</span>
            <span className="text-white/80">· {REVIEWS.length}+ reviews</span>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex gap-0.5 text-brand-yellow">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">“{r.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
