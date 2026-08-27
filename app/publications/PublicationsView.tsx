"use client";

import { useState } from "react";
import {
  publicationTopics,
  publications,
  type PublicationKind,
  type PublicationTopicId,
} from "../content";

type Filter = "all" | PublicationTopicId;

const publicationGroups: { id: PublicationKind; title: string }[] = [
  { id: "preprint", title: "Preprints & Working Papers" },
  { id: "journal", title: "Journal Articles" },
  { id: "conference", title: "Conference Papers" },
];

function highlightAuthor(authors: string) {
  return authors.split(/(Jiajin Li)/g).map((part, index) =>
    part === "Jiajin Li" ? <strong key={index}>{part}</strong> : part,
  );
}

export function PublicationsView() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all"
      ? publications
      : publications.filter((paper) => paper.topics.includes(filter));

  return (
    <>
      <div className="topic-filter" role="group" aria-label="Filter publications by topic">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
          type="button"
        >
          All topics <span>{publications.length}</span>
        </button>
        {publicationTopics.map((topic) => (
          <button
            className={filter === topic.id ? "active" : ""}
            key={topic.id}
            onClick={() => setFilter(topic.id)}
            type="button"
          >
            {topic.label}
            <span>
              {publications.filter((paper) => paper.topics.includes(topic.id)).length}
            </span>
          </button>
        ))}
      </div>

      <div className="publication-groups">
        {publicationGroups.map((group) => {
          const papers = visible.filter((paper) => paper.kind === group.id);
          if (papers.length === 0) return null;

          return (
            <section className="publication-group" key={group.id}>
              <div className="publication-group-heading">
                <h2>{group.title}</h2>
                <span>{papers.length}</span>
              </div>

              <div className="publication-list">
                {papers.map((paper, index) => (
                  <article className="publication-item" key={paper.title}>
                    <div className="publication-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="publication-copy">
                      <div className="publication-meta">
                        <span>{paper.year}</span>
                        {paper.topics.map((topicId) => (
                          <span key={topicId}>
                            {publicationTopics.find((topic) => topic.id === topicId)?.short}
                          </span>
                        ))}
                      </div>
                      <h2>{paper.title}</h2>
                      <p className="publication-authors">
                        {paper.alphabetical && (
                          <span className="publication-author-order">
                            (α–β order){" "}
                          </span>
                        )}
                        {highlightAuthor(paper.authors)}
                      </p>
                      <strong className="publication-venue">{paper.venue}</strong>
                      {paper.status && (
                        <strong className="publication-status">{paper.status}</strong>
                      )}
                    </div>
                    {paper.link && (
                      <a
                        className="publication-action"
                        href={paper.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View publication details for ${paper.title}`}
                      >
                        Details ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
