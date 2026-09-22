import { useEffect, useState } from "react";
import logo from "../images/bg-logo.png";

const HOLD_MS = 1800;
const EXIT_MS = 700;

export default function PageLoader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 400 : HOLD_MS;
    const exit = reduce ? 200 : EXIT_MS;

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    html.classList.add("is-booting");
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setLeaving(true), hold);
    const doneTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("is-booting");
      setGone(true);
    }, hold + exit);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      html.classList.remove("is-booting");
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, []);

  useEffect(() => {
    if (!gone) return;
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, [gone]);

  if (gone) return null;

  return (
    <div
      className={`page-loader${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Sahifa yuklanmoqda"
    >
      <div className="page-loader__orb page-loader__orb--purple" />
      <div className="page-loader__orb page-loader__orb--gold" />
      <div className="page-loader__orb page-loader__orb--green" />

      <div className="page-loader__center">
        <div className="page-loader__stage">
          <span className="page-loader__ring page-loader__ring--a" />
          <span className="page-loader__ring page-loader__ring--b" />
          <span className="page-loader__ring page-loader__ring--c" />

          <span className="page-loader__spark page-loader__spark--a">
            <i />
          </span>
          <span className="page-loader__spark page-loader__spark--b">
            <i />
          </span>
          <span className="page-loader__spark page-loader__spark--c">
            <i />
          </span>

          <div className="page-loader__logo-wrap">
            <img
              src={logo}
              alt="To'lqinbek Math Academy"
              className="page-loader__logo"
              draggable={false}
            />
          </div>
        </div>

        <div className="page-loader__track" aria-hidden="true">
          <span className="page-loader__track-fill" />
        </div>
      </div>
    </div>
  );
}
