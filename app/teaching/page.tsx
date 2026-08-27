import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { teaching } from "../content";

export const metadata: Metadata = {
  title: "Teaching — Jiajin Li",
  description: "Courses taught by Jiajin Li at UBC Sauder.",
};

export default function TeachingPage() {
  return (
    <PageShell>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Teaching</p>
        <h1>{teaching.title}</h1>
        <p>{teaching.intro}</p>
      </section>
      <section className="teaching-list">
        {teaching.courses.map((course) => (
          <article key={`${course.term}-${course.course}`}>
            <time>{course.term}</time>
            <div>
              <span className="teaching-code">{course.course}</span>
              <h2>
                {course.link ? (
                  <a href={course.link} target="_blank" rel="noreferrer">
                    {course.title} ↗
                  </a>
                ) : (
                  course.title
                )}
              </h2>
              {course.sections && <p>{course.sections}</p>}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
