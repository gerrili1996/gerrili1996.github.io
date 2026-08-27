import { home } from "../content";

const navItems = [
  ["Publications", "/publications"],
  ["Talks", "/talks"],
  ["Teaching", "/teaching"],
  ["Blog", "/blog"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label={`${home.name} — home`}>
        <span className="brand-mark">{home.initials}</span>
        <span>{home.name}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <details className="mobile-nav">
        <summary aria-label="Open navigation">Menu</summary>
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </details>
    </header>
  );
}
