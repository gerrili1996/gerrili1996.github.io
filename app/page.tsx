import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { home, MarkdownText, researchInterests } from "./content";

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="home-canvas">
        <aside className="home-profile">
          <div className="portrait-wrap home-portrait">
            <img
              className="portrait"
              src={home.photo}
              alt={home.name}
            />
            <span className="status-dot">{home.locationCode}</span>
          </div>
          <p className="eyebrow">{home.university}</p>
          <h1>{home.name}</h1>
          <p className="home-role">{home.role}</p>
          <p className="home-affiliation">{home.affiliation}</p>
          <div className="profile-links">
            <a href={home.email}>{home.email.replace(/^mailto:/, "")}</a>
            <a href={home.scholar}>Google Scholar ↗</a>
            <a href={home.github}>GitHub ↗</a>
          </div>
        </aside>

        <div className="home-content">
          <section className="about-block">
            <h2>About me</h2>
            <div className="about-copy">
              <MarkdownText source={home.body} />
            </div>
          </section>

          <section className="direction-section">
            <div className="direction-heading">
              <h2>Recent research interests</h2>
            </div>
            <div className="direction-grid">
              {researchInterests.map((direction, index) => (
                <article className="direction-card" key={direction.title}>
                  <span className="module-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="module-accent">{direction.short}</span>
                  <h3>{direction.title}</h3>
                  <p>{direction.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
