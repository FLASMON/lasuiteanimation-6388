import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, ChevronDown, Search, Menu, X, Phone, Mail, MapPin, Send } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
const image = (path: string) => `/images/${path}`;
function Button({ children }: { children: React.ReactNode }) {
  return (
    <Link className="button" to="/admissions">
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [path, navigate] = useLocation();
  const [menu, setMenu] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    setMenu(false);
    if (window.location.hash) {
      requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [path]);
  return (
    <>
      <motion.div
        className="reading-progress"
        style={{ scaleX: reduced ? scrollYProgress : progress }}
      />
      <header id="accueil">
        <div className="topbar">
          <div className="container topbar-inner">
            <div className="socials">
              <span>Suivez-nous</span>
              {["f", "◎", "▶", "in"].map((s, i) => (
                <button
                  key={s}
                  aria-label={["Facebook", "Instagram", "YouTube", "LinkedIn"][i]}
                  onClick={() => navigate("/contact")}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="top-contacts">
              <span>
                <MapPin />
                25/B Milford Road, New York
              </span>
              <Link to="mailto:info@example.com">
                <Mail />
                info@example.com
              </Link>
              <Link to="tel:+12123456789">
                <Phone />
                +1 212 345 6789
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container nav-inner">
            <Link to="/" className="logo">
              <img src={image("logo/logo.png")} alt="Eduka — Accueil" />
            </Link>
            <nav className={menu ? "open" : ""} aria-label="Navigation principale">
              {[
                ["Accueil", "/"],
                ["Formations", "/formations"],
                ["L’école", "/ecole"],
                ["Campus", "/campus"],
                ["Admissions", "/admissions"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href], i) => (
                <Link
                  key={label}
                  to={href}
                  className={
                    path === href || (href !== "/" && path.startsWith(href)) ? "active" : ""
                  }
                  aria-current={path === href ? "page" : undefined}
                  onClick={() => setMenu(false)}
                >
                  {label}
                  {i < 6 && <ChevronDown size={12} />}
                </Link>
              ))}
            </nav>
            <button
              className="search-toggle"
              aria-label="Rechercher une formation"
              onClick={() => navigate("/formations?recherche=1")}
            >
              <Search size={21} />
            </button>
            <Button>Postuler</Button>
            <button
              className="mobile-toggle"
              aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <motion.div
        key={path}
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-about">
            <img className="footer-logo" src={image("logo/logo-light.png")} alt="Eduka" />
            <p>
              Ensemble, cultivons les talents et construisons un avenir meilleur grâce à une
              éducation qui fait la différence.
            </p>
            <Link to="tel:+12123456789">
              <Phone size={16} />
              +1 212 345 6789
            </Link>
            <span>
              <MapPin size={16} />
              25/B Milford Road, New York
            </span>
            <Link to="mailto:info@example.com">
              <Mail size={16} />
              info@example.com
            </Link>
          </div>
          <div>
            <h3>Liens utiles</h3>
            {[
              ["À propos", "/ecole"],
              ["Nos formations", "/formations"],
              ["Nos enseignants", "/ecole#equipe"],
              ["Nos événements", "/campus#evenements"],
              ["Nous contacter", "/contact"],
            ].map(([t, h]) => (
              <Link key={t} to={h}>
                <ArrowRight size={12} />
                {t}
              </Link>
            ))}
          </div>
          <div>
            <h3>Notre campus</h3>
            {[
              ["La vie étudiante", "/campus"],
              ["Nos départements", "/formations"],
              ["Admission", "/admissions"],
              ["La bibliothèque", "/ecole"],
              ["Actualités", "/blog"],
            ].map(([t, h]) => (
              <Link key={t} to={h}>
                <ArrowRight size={12} />
                {t}
              </Link>
            ))}
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Recevez nos actualités et découvrez les prochaines opportunités.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletter(true);
              }}
            >
              <input
                required
                type="email"
                aria-label="Votre e-mail pour la newsletter"
                placeholder="Votre adresse e-mail"
              />
              <button className="button">
                S’abonner
                <Send size={16} />
              </button>
              {newsletter && (
                <output className="newsletter-status">
                  Mode démonstration : aucun abonnement n’a été enregistré.
                </output>
              )}
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              © {new Date().getFullYear()} <em>Eduka.</em> Tous droits réservés.
            </p>
            <span>Apprendre. Grandir. Réussir.</span>
            <Link to="/" aria-label="Retour en haut">
              <ArrowRight className="up-arrow" size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
