import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/biz-haqimizda", label: "Biz haqimizda" },
  { to: "/galereya", label: "Galereya" },
  { to: "/natijalar", label: "Natijalar" },
  { to: "/aloqa", label: "Aloqa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-brand-purple/8 border-b border-brand-purple/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <Logo size="md" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium font-display transition-colors duration-200 rounded-lg ${
                      isActive
                        ? "text-brand-purple"
                        : scrolled
                          ? "text-brand-dark/70 hover:text-brand-purple"
                          : "text-brand-dark/80 hover:text-brand-purple"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-purple" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/aloqa"
                className="hidden lg:inline-flex items-center gap-2 bg-brand-purple text-white px-5 py-2.5 rounded-xl text-sm font-display font-semibold hover:bg-brand-purple-dark transition-colors shadow-md shadow-brand-purple/30"
              >
                Bog&rsquo;lanish
              </Link>

              <button
                className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-brand-purple/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menyuni ochish"
              >
                <span
                  className={`block w-5.5 h-0.5 bg-brand-dark rounded-full transition-transform origin-center duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5.5 h-0.5 bg-brand-dark rounded-full transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5.5 h-0.5 bg-brand-dark rounded-full transition-transform origin-center duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 border-b border-gray-100">
            <Logo size="md" />
          </div>
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-display font-medium transition-colors ${
                    isActive
                      ? "bg-brand-purple text-white"
                      : "text-brand-dark/70 hover:bg-brand-purple/10 hover:text-brand-purple"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 mt-2">
            <Link
              to="/aloqa"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-brand-purple text-white px-5 py-3 rounded-xl text-sm font-display font-semibold hover:bg-brand-purple-dark transition-colors"
            >
              Bog&rsquo;lanish
            </Link>
          </div>
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <p className="text-xs text-brand-dark/30 text-center font-display">
              © 2026 To&rsquo;lqinbek Math Academy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
