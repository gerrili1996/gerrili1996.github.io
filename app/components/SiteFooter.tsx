import { home } from "../content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{home.name}</strong>
        <span>{home.affiliation}</span>
      </div>
      <span>© {home.copyrightYear}</span>
    </footer>
  );
}
