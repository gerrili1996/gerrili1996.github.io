import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PublicationsView } from "./PublicationsView";

export const metadata: Metadata = {
  title: "Publications — Jiajin Li",
  description:
    "Selected publications in mathematical optimization, algorithm design, LLM training, and AI for mathematics.",
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <section className="publication-browser">
        <PublicationsView />
      </section>
    </PageShell>
  );
}
