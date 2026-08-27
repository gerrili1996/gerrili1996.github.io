import { Fragment, type ReactNode } from "react";

import homeSource from "../content/home.md?raw";
import mathematicalOptimizationInterestSource from "../content/interests/01-mathematical-optimization.md?raw";
import algorithmDesignInterestSource from "../content/interests/02-algorithm-design.md?raw";
import llmTrainingInterestSource from "../content/interests/03-llm-training.md?raw";
import aiForOptimizationAndMathematicsInterestSource from "../content/interests/04-ai-for-optimization-and-mathematics.md?raw";
import publicationSource from "../content/publications.md?raw";
import minimaxSource from "../content/research/01-minimax.md?raw";
import robustnessSource from "../content/research/02-robustness.md?raw";
import transportSource from "../content/research/03-transport.md?raw";
import learningSource from "../content/research/04-learning.md?raw";
import talksSource from "../content/talks.md?raw";
import teachingSource from "../content/teaching.md?raw";
import reversePerspectiveResponseSource from "../content/blog/the-proof-is-objective-the-path-is-not.md?raw";

type Document<T> = T & { body: string };

function parseDocument<T>(source: string): Document<T> {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Markdown file needs JSON front matter between --- lines.");
  }

  return {
    ...(JSON.parse(match[1]) as T),
    body: match[2].trim(),
  };
}

function parseTable(source: string): string[][] {
  return source
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|") && line.endsWith("|"))
    .slice(2)
    .map((line) => line.slice(1, -1).split("|").map((cell) => cell.trim()));
}

function markdownLinkTarget(source: string): string {
  const match = source.match(/^\[[^\]]+\]\(([^)]+)\)$/);
  return match?.[1] ?? source;
}

function inlineMarkdown(source: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const token = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = token.exec(source)) !== null) {
    if (match.index > cursor) nodes.push(source.slice(cursor, match.index));
    if (match[2] && match[3]) {
      nodes.push(
        <a href={match[3]} key={`${match.index}-${match[3]}`}>
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(<strong key={`${match.index}-strong`}>{match[4]}</strong>);
    }
    cursor = token.lastIndex;
  }

  if (cursor < source.length) nodes.push(source.slice(cursor));
  return nodes;
}

export function MarkdownText({ source }: { source: string }) {
  return source
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((paragraph, index) => <p key={index}>{inlineMarkdown(paragraph)}</p>);
}

export function MarkdownArticle({ source }: { source: string }) {
  return source
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((block, index) => {
      if (block.startsWith("## ")) {
        return <h2 key={index}>{inlineMarkdown(block.slice(3))}</h2>;
      }
      if (block.startsWith("> ")) {
        return <blockquote key={index}>{inlineMarkdown(block.slice(2))}</blockquote>;
      }
      if (block.startsWith("```flow") && block.endsWith("```")) {
        const steps = block.slice(7, -3).trim().split("\n").filter(Boolean);
        return (
          <div className="article-flow" key={index} aria-label={steps.join(" to ")}>
            {steps.map((step, stepIndex) => (
              <Fragment key={step}>
                <span>{step}</span>
                {stepIndex < steps.length - 1 && <b aria-hidden="true">↔</b>}
              </Fragment>
            ))}
          </div>
        );
      }
      if (block.startsWith("```") && block.endsWith("```")) {
        return <pre key={index}>{block.slice(3, -3).trim()}</pre>;
      }
      return <p key={index}>{inlineMarkdown(block)}</p>;
    });
}

export type TopicId = "minimax" | "robustness" | "transport" | "learning";

export type PublicationTopicId =
  | "mathematical-optimization"
  | "algorithm-design"
  | "llm-training"
  | "ai-for-optimization-mathematics";

export type PublicationKind = "preprint" | "journal" | "conference";

type HomeMeta = {
  name: string;
  initials: string;
  role: string;
  affiliation: string;
  university: string;
  locationCode: string;
  photo: string;
  email: string;
  scholar: string;
  github: string;
  copyrightYear: string;
};

export type ResearchDirection = {
  id: TopicId;
  short: string;
  title: string;
  question: string;
  focus: string[];
  order: number;
  body: string;
};

export type ResearchInterest = {
  short: string;
  title: string;
  order: number;
  body: string;
};

export type Publication = {
  year: string;
  kind: PublicationKind;
  topics: PublicationTopicId[];
  title: string;
  authors: string;
  alphabetical: boolean;
  venue: string;
  status: string;
  link: string;
};

type PageMeta = { title: string; intro: string };
type TeachingMeta = PageMeta;
type BlogMeta = {
  kind: string;
  title: string;
  topic: string;
  date: string;
  slug: string;
  excerpt: string;
  sourceLabel: string;
  sourceUrl: string;
  order: number;
};

export const home = parseDocument<HomeMeta>(homeSource);

export const researchInterests = [
  parseDocument<Omit<ResearchInterest, "body">>(mathematicalOptimizationInterestSource),
  parseDocument<Omit<ResearchInterest, "body">>(algorithmDesignInterestSource),
  parseDocument<Omit<ResearchInterest, "body">>(llmTrainingInterestSource),
  parseDocument<Omit<ResearchInterest, "body">>(aiForOptimizationAndMathematicsInterestSource),
].sort((a, b) => a.order - b.order);

export const researchDirections = [
  parseDocument<Omit<ResearchDirection, "body">>(minimaxSource),
  parseDocument<Omit<ResearchDirection, "body">>(robustnessSource),
  parseDocument<Omit<ResearchDirection, "body">>(transportSource),
  parseDocument<Omit<ResearchDirection, "body">>(learningSource),
].sort((a, b) => a.order - b.order);

const publicationDocument = parseDocument<PageMeta>(publicationSource);
export const publicationPage = {
  title: publicationDocument.title,
  intro: publicationDocument.intro,
};

export const publicationTopics: {
  id: PublicationTopicId;
  label: string;
  short: string;
}[] = [
  {
    id: "mathematical-optimization",
    label: "Mathematical Optimization",
    short: "Optimization",
  },
  {
    id: "algorithm-design",
    label: "Algorithm Design",
    short: "Algorithms",
  },
  {
    id: "llm-training",
    label: "LLM Training",
    short: "LLM Training",
  },
  {
    id: "ai-for-optimization-mathematics",
    label: "AI for Optimization & Mathematics",
    short: "AI for Math",
  },
];

export const publications: Publication[] = parseTable(publicationDocument.body).map(
  ([year, kind, topics, title, authors, authorOrder, venue, status, link]) => ({
    year,
    kind: kind as PublicationKind,
    topics: topics
      .split(";")
      .map((topic) => topic.trim())
      .filter(Boolean) as PublicationTopicId[],
    title,
    authors,
    alphabetical: authorOrder.toLowerCase() === "alphabetical",
    venue,
    status,
    link: markdownLinkTarget(link),
  }),
);

const talksDocument = parseDocument<PageMeta>(talksSource);
export const talksPage = { title: talksDocument.title, intro: talksDocument.intro };
export const talks = parseTable(talksDocument.body).map(
  ([year, title, places, links]) => ({
    year,
    title,
    places: places.split(";").map((place) => place.trim()),
    links: links
      ? links.split(";").map((link) => link.trim()).filter(Boolean)
      : [],
  }),
);

const teachingDocument = parseDocument<TeachingMeta>(teachingSource);
export const teaching = {
  ...teachingDocument,
  courses: parseTable(teachingDocument.body).map(([term, course, title, sections, link]) => ({
    term,
    course,
    title,
    sections,
    link,
  })),
};

export const blogNotes = [
  parseDocument<BlogMeta>(reversePerspectiveResponseSource),
].sort((a, b) => a.order - b.order);
