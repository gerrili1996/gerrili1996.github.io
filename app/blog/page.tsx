import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { blogNotes } from "../content";

export const metadata: Metadata = {
  title: "Research Notes — Jiajin Li",
  description: "Research notes, explainers, and teaching material by Jiajin Li.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Ideas &amp; reflections</p>
        <h1>Ideas beyond the papers.</h1>
        <p>
          Occasional notes on research, mathematical practice, optimization,
          and AI.
        </p>
      </section>
      <section className="blog-grid">
        {blogNotes.map((note) => (
          <article key={note.title}>
            <div className="blog-meta">
              <span>{note.kind}</span>
              <span>{note.topic}</span>
            </div>
            <h2><a href={`/blog/${note.slug}`}>{note.title}</a></h2>
            <p>{note.excerpt}</p>
            <div className="blog-card-footer">
              <span>{note.date}</span>
              <a href={`/blog/${note.slug}`}>Read essay →</a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
