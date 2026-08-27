import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { blogNotes, MarkdownArticle } from "../../content";

const essay = blogNotes[0];

export const metadata: Metadata = {
  title: `${essay.title} — Jiajin Li`,
  description: essay.excerpt,
};

export default function ReversePerspectiveEssayPage() {
  return (
    <PageShell>
      <header className="article-hero">
        <a className="article-back" href="/blog">← Blog</a>
        <div className="article-kicker">
          <span>{essay.kind}</span>
          <span>{essay.topic}</span>
          <time>{essay.date}</time>
        </div>
        <h1>{essay.title}</h1>
        <p>{essay.excerpt}</p>
        <div className="article-credit">
          <span className="article-author">Jiajin Li</span>
          <a
            className="article-source"
            href={essay.sourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Read the original essay by Christopher Thomas Ryan ↗
          </a>
        </div>
      </header>
      <article className="article-body">
        <MarkdownArticle source={essay.body} />
      </article>
    </PageShell>
  );
}
