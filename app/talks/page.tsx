import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { talks } from "../content";

export const metadata: Metadata = {
  title: "Talks — Jiajin Li",
  description: "Selected invited talks and conference presentations by Jiajin Li.",
};

export default function TalksPage() {
  return (
    <PageShell>
      <section className="talk-list">
        {talks.map((talk) => (
          <article key={talk.title}>
            <time>{talk.year}</time>
            <div>
              <h2>{talk.title}</h2>
              <ul>
                {talk.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
            {talk.links.length > 0 && (
              <div className="talk-actions">
                {talk.links.map((link, index) => (
                  <a href={link} key={link}>
                    {talk.links.length > 1 ? `Slides ${index + 1}` : "Slides"} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </section>
    </PageShell>
  );
}
