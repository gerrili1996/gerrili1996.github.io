import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { researchDirections } from "../content";

export const metadata: Metadata = {
  title: "Research — Jiajin Li",
  description: "Research themes in mathematical optimization and data-driven decision-making.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <p className="eyebrow">Research</p>
        <h1>Optimization as a language for uncertainty.</h1>
        <p>
          I study the theoretical and computational foundations of optimization
          methods that remain useful when problems are nonsmooth, nonconvex, or
          distributionally uncertain.
        </p>
      </section>

      <section className="research-topics">
        {researchDirections.map((topic, index) => (
          <article className="research-topic" key={topic.id}>
            <div className="research-topic-title">
              <span>0{index + 1}</span>
              <h2>{topic.title}</h2>
            </div>
            <div className="research-topic-copy">
              <p className="research-question">{topic.question}</p>
              <p>{topic.body}</p>
              <div className="focus-list">
                {topic.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a href="/publications">Related publications ↗</a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
