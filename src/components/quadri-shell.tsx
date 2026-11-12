import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/quadri-logo.webp";
import { collections, consultationUrl } from "@/lib/quadri";

export function QuadriHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const links = [
    ...collections.map(({ name, path }) => ({ name, path })),
    { name: "Diamond Guide", path: "/diamond-guide" as const },
    { name: "Contact", path: "/contact" as const },
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Quadri & Co home" onClick={() => setOpen(false)}>
          <img src={logo} width="54" height="54" alt="" />
          <span>Quadri & Co</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button asChild variant="consultation" className="header-consultation">
          <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
            Book a Consultation
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)}>
              {link.name}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Button asChild variant="consultation">
            <a href={consultationUrl} target="_blank" rel="noopener noreferrer">
              Book a Consultation
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function QuadriFooter() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand">
        Quadri & Co
      </Link>
      <span>Bedford · Pieces with a personal meaning.</span>
      <Link to="/contact">
        Get in touch <ArrowUpRight size={14} />
      </Link>
    </footer>
  );
}
