import { useEffect, useState } from "react";
import { Link } from "wouter";
import { RevealSection } from "../components/reveal";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Search,
  X,
  Phone,
  MapPin,
  Clock,
  Users,
  Play,
  Quote,
  GraduationCap,
  Check,
  CalendarDays,
} from "lucide-react";

import { courseSlug, articleSlugs } from "../data/content";

const image = (path: string) => `/images/${path}`;
const courses = [
  { title: "Art dramatique et théâtre", category: "Théâtre", img: "01", price: 250 },
  { title: "Art et design", category: "Design", img: "02", price: 320 },
  { title: "Sciences et ingénierie", category: "Sciences", img: "03", price: 350 },
  { title: "Communication et médias", category: "Médias", img: "04", price: 280 },
  { title: "Finance et comptabilité", category: "Finance", img: "05", price: 300 },
  { title: "Informatique et technologie", category: "Informatique", img: "06", price: 380 },
];
const features = [
  ["scholarship", "Bourses d’études", "Des opportunités pour rendre votre ambition accessible."],
  [
    "teacher",
    "Enseignants qualifiés",
    "Des experts passionnés qui vous accompagnent au quotidien.",
  ],
  ["library", "Bibliothèque moderne", "Toutes les ressources pour apprendre et aller plus loin."],
  ["money", "Tarifs accessibles", "Une éducation de qualité à la portée de chacun."],
];
type Detail = { title: string; text?: string; img?: string };
function Button({
  children,
  href = "#inscription",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <a className={`button ${light ? "light" : ""}`} href={href}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
function Heading({
  label,
  title,
  accent,
  description = true,
}: {
  label: string;
  title: string;
  accent: string;
  description?: boolean;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <GraduationCap size={20} />
        {label}
      </span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
      {description && (
        <p>
          Un environnement inspirant, des formations de qualité et un accompagnement
          <br className="desktop-break" /> personnalisé pour construire votre avenir.
        </p>
      )}
    </div>
  );
}
function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`drawn-icon ${className}`}>
      <img src={image(`icon/${name}.svg`)} alt="" />
    </span>
  );
}

export default function Landing() {
  const [slide, setSlide] = useState(0),
    [search, setSearch] = useState(false),
    [query, setQuery] = useState(""),
    [detail, setDetail] = useState<Detail | null>(null),
    [sent, setSent] = useState(false);
  useEffect(() => {
    if (!detail && !search) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDetail(null);
        setSearch(false);
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [detail, search]);
  const filtered = courses.filter((c) =>
    (c.title + " " + c.category).toLowerCase().includes(query.toLowerCase()),
  );
  const more = (title: string, img?: string) =>
    setDetail({
      title,
      img,
      text: "Chez Eduka, nous vous proposons un apprentissage concret, des ressources de qualité et un accompagnement personnalisé. Découvrez notre campus, échangez avec nos enseignants et choisissez le parcours qui vous ressemble. Pour préparer votre projet, remplissez le formulaire de demande d’informations ci-dessous.",
    });
  return (
    <>
      <main>
        <RevealSection
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(11,28,57,.77),rgba(11,28,57,.63)),url(${image(`slider/slider-${slide + 1}.jpg`)})`,
          }}
        >
          <button
            className="slide-arrow prev"
            aria-label="Bannière précédente"
            onClick={() => setSlide((slide + 2) % 3)}
          >
            <ArrowLeft />
          </button>
          <div className="container hero-inner">
            <div className="hero-copy" key={slide}>
              <span className="hero-eyebrow">
                <GraduationCap size={22} />
                BIENVENUE CHEZ EDUKA !
              </span>
              <h1>
                {slide === 0 ? (
                  <>
                    Construisez Votre
                    <br />
                    Avenir <em>Brillant</em>
                  </>
                ) : slide === 1 ? (
                  <>
                    Votre Réussite
                    <br />
                    Commence <em>Ici</em>
                  </>
                ) : (
                  <>
                    Apprenez Aujourd’hui,
                    <br />
                    <em>Inspirez</em> Demain
                  </>
                )}
              </h1>
              <p>
                Donnez vie à vos ambitions grâce à une éducation d’excellence.
                <br className="desktop-break" /> Ensemble, ouvrons les portes d’un avenir riche en
                possibilités.
              </p>
              <div className="hero-buttons">
                <Button href="#apropos">À propos de nous</Button>
                <Button href="#cours" light>
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
          <button
            className="slide-arrow next"
            aria-label="Bannière suivante"
            onClick={() => setSlide((slide + 1) % 3)}
          >
            <ArrowRight />
          </button>
        </RevealSection>
        <RevealSection className="features container" aria-label="Nos avantages">
          {features.map(([name, title, text], i) => (
            <article className="feature" key={name}>
              <span className="feature-number">0{i + 1}</span>
              <Icon name={name} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </RevealSection>
        <RevealSection id="apropos" className="about container section">
          <div className="about-photos">
            <div className="photo-left">
              <img
                className="about-one"
                src={image("about/01.jpg")}
                alt="Étudiante travaillant à la bibliothèque"
              />
              <div className="experience">
                <Icon name="exchange-idea" />
                <strong>
                  30 ans
                  <br />
                  <span>Au service de l’éducation</span>
                </strong>
              </div>
            </div>
            <div className="photo-right">
              <img
                className="about-two"
                src={image("about/02.jpg")}
                alt="Étudiantes échangeant autour d’un livre"
              />
              <img
                className="about-three"
                src={image("about/03.jpg")}
                alt="Apprentissage et travail en équipe"
              />
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">
              <GraduationCap size={20} />À PROPOS DE NOUS
            </span>
            <h2>
              Une Éducation Qui
              <br />
              <em>Inspire</em> Votre Avenir.
            </h2>
            <p>
              Nous croyons au potentiel de chacun. Notre mission : vous donner les connaissances,
              les compétences et la confiance nécessaires pour transformer vos ambitions en
              réussites.
            </p>
            <div className="about-values">
              <div>
                {[
                  ["open-book", "Un enseignement de qualité"],
                  ["global-education", "Une ouverture internationale"],
                ].map(([icon, t]) => (
                  <div className="about-value" key={icon}>
                    <Icon name={icon} />
                    <div>
                      <h3>{t}</h3>
                      <p>Des expériences enrichissantes pour révéler tous vos talents.</p>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote>
                « L’éducation est le plus beau chemin pour construire le monde de demain. »<Quote />
              </blockquote>
            </div>
            <div className="about-bottom">
              <Button href="#campus">Découvrir notre école</Button>
              <a className="phone-link" href="tel:+12123456789">
                <span>
                  <Phone size={22} />
                </span>
                <div>
                  <small>Appelez-nous</small>
                  <strong>+1 212 345 6789</strong>
                </div>
              </a>
            </div>
          </div>
        </RevealSection>
        <RevealSection className="stats">
          <div className="container stats-grid">
            {[
              ["course", "500", "Formations disponibles"],
              ["graduation", "1 900", "Étudiants"],
              ["teacher-2", "750", "Enseignants qualifiés"],
              ["award", "30", "Prix et distinctions"],
            ].map(([icon, n, label]) => (
              <div key={icon}>
                <Icon name={icon} />
                <strong>{n}</strong>
                <p>+ {label}</p>
              </div>
            ))}
          </div>
        </RevealSection>
        <RevealSection id="cours" className="section container">
          <Heading label="NOS FORMATIONS" title="Découvrez Nos" accent="Formations" />
          <div className="courses-grid">
            {filtered.map((c, i) => (
              <article className="course-card" key={c.img}>
                <div className="course-image">
                  <img src={image(`course/${c.img}.jpg`)} alt={c.title} loading="lazy" />
                  <span>{c.category}</span>
                </div>
                <div className="course-meta">
                  <span>
                    <BookOpen size={14} /> {10 + i * 2} modules
                  </span>
                  <span className="stars">
                    ★★★★★ <small>(4,9)</small>
                  </span>
                </div>
                <h3>
                  <Link to={`/formations/${courseSlug(c.img)}`}>{c.title}</Link>
                </h3>
                <p>
                  Développez vos compétences avec nos experts et donnez une nouvelle dimension à
                  votre avenir.
                </p>
                <div className="course-bottom">
                  <span>
                    <Users size={14} /> {60 + i * 10} étudiants
                  </span>
                  <span>
                    <Clock size={14} /> 3 mois
                  </span>
                  <strong>{c.price} €</strong>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="empty">Aucune formation ne correspond à votre recherche.</p>
          )}
          <div className="center-button">
            <button className="button" onClick={() => setSearch(true)}>
              Toutes les formations
              <ArrowRight size={16} />
            </button>
          </div>
        </RevealSection>
        <RevealSection id="campus" className="campus-section container">
          <div className="campus-copy">
            <span className="eyebrow">
              <GraduationCap size={20} />
              NOTRE CAMPUS
            </span>
            <h2>
              Découvrez La Vie
              <br />
              Sur Notre <em>Campus</em>
            </h2>
            <p>
              Un lieu pour apprendre, partager et s’épanouir. Entrez dans un univers où chaque
              journée est une nouvelle occasion de grandir.
            </p>
            <Button href="#galerie">En savoir plus</Button>
          </div>
          <div
            className="campus-photo"
            style={{ backgroundImage: `url(${image("video/01.jpg")})` }}
          >
            <button
              className="play-button"
              aria-label="Découvrir le campus"
              onClick={() =>
                setDetail({
                  title: "Bienvenue sur notre campus",
                  img: "video/01.jpg",
                  text: "Bibliothèque, salles de travail collaboratif et espaces de vie : notre campus réunit tout ce dont vous avez besoin pour apprendre et vous épanouir. Explorez notre galerie pour découvrir la vie à Eduka.",
                })
              }
            >
              <Play fill="currentColor" />
            </button>
          </div>
        </RevealSection>
        <RevealSection className="section container" id="equipe">
          <Heading label="NOS ENSEIGNANTS" title="Rencontrez Notre" accent="Équipe" />
          <div className="team-grid">
            {["Angela T. Vigil", "Frank A. Mitchell", "Susan D. Lunsford", "Dennis A. Pruitt"].map(
              (name, i) => (
                <article className="team-card" key={name}>
                  <div>
                    <img src={image(`team/0${i + 1}.jpg`)} alt={name} loading="lazy" />
                    <button
                      aria-label={`En savoir plus sur ${name}`}
                      onClick={() => more(name, `team/0${i + 1}.jpg`)}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <h3>{name}</h3>
                  <p>{i === 2 ? "Directrice et fondatrice" : "Professeur associé"}</p>
                </article>
              ),
            )}
          </div>
        </RevealSection>
        <RevealSection className="choose">
          <div className="container choose-inner">
            <div>
              <span className="eyebrow">
                <GraduationCap size={20} />
                POURQUOI NOUS CHOISIR
              </span>
              <h2>
                Votre Ambition,
                <br />
                Notre <em>Engagement</em>
              </h2>
              <p>
                Nous mettons notre expertise et notre passion au service de vos objectifs. Ici,
                votre réussite est notre priorité.
              </p>
              <div className="choose-grid">
                {[
                  ["teacher-2", "Des experts passionnés"],
                  ["course-material", "Des ressources de qualité"],
                  ["online-course", "Un apprentissage flexible"],
                  ["money", "Des tarifs accessibles"],
                ].map(([icon, t]) => (
                  <div key={icon}>
                    <Icon name={icon} />
                    <h3>{t}</h3>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="choose-photo"
              src={image("choose/01.jpg")}
              alt="Étudiants sur le campus"
              loading="lazy"
            />
          </div>
        </RevealSection>
        <RevealSection id="galerie" className="section container">
          <Heading label="NOTRE GALERIE" title="La Vie En" accent="Images" />
          <div className="gallery-grid">
            {Array.from({ length: 6 }, (_, i) => (
              <button
                key={i}
                aria-label={`Agrandir la photo du campus ${i + 1}`}
                onClick={() => setDetail({ title: "La vie à Eduka", img: `gallery/0${i + 1}.jpg` })}
              >
                <img
                  src={image(`gallery/0${i + 1}.jpg`)}
                  alt={
                    [
                      "Travail en groupe",
                      "Vie étudiante",
                      "Notre bibliothèque",
                      "Échanges sur le campus",
                      "Étudiants en formation",
                      "Moments de partage",
                    ][i]
                  }
                  loading="lazy"
                />
                <span>
                  <Search />
                </span>
              </button>
            ))}
          </div>
        </RevealSection>
        <RevealSection className="offer">
          <div className="container">
            <div>
              <h2>
                Votre Avenir Commence Ici.
                <br />
                Profitez De <em>20 % De Réduction</em>
              </h2>
              <p>
                Faites le premier pas vers votre prochaine réussite. Rejoignez nos formations et
                bénéficiez de notre offre de bienvenue.
              </p>
              <Button>Postuler maintenant</Button>
            </div>
          </div>
        </RevealSection>
        <RevealSection id="evenements" className="section pale">
          <div className="container">
            <Heading label="NOS ÉVÉNEMENTS" title="Nos Prochains" accent="Rendez-vous" />
            <div className="event-grid">
              {[
                "Journée portes ouvertes",
                "Rencontre avec nos enseignants",
                "Forum des métiers",
              ].map((title, i) => (
                <article className="event-card" key={title}>
                  <img src={image(`event/0${i + 1}.jpg`)} alt={title} loading="lazy" />
                  <span className="event-location">
                    <MapPin size={14} /> Campus Eduka
                  </span>
                  <div className="event-meta">
                    <span>
                      <CalendarDays size={14} />
                      {["24 oct. 2026", "7 nov. 2026", "21 nov. 2026"][i]}
                    </span>
                    <span>
                      <Clock size={14} />
                      10h – 16h
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>Venez échanger, découvrir et préparer la prochaine étape de votre parcours.</p>
                  <button className="button" onClick={() => more(title, `event/0${i + 1}.jpg`)}>
                    Découvrir
                    <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
        <RevealSection id="inscription" className="enroll">
          <div className="container enroll-inner">
            <form
              className="enroll-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="form-heading">
                <h3>Préparez Votre Inscription</h3>
                <p>Parlons ensemble de votre projet.</p>
              </div>
              <div className="form-body">
                <label>
                  Votre nom
                  <input aria-label="Votre nom" required name="name" placeholder="Nom complet" />
                </label>
                <label>
                  Votre adresse e-mail
                  <input
                    aria-label="Votre adresse e-mail"
                    required
                    name="email"
                    type="email"
                    placeholder="Adresse e-mail"
                  />
                </label>
                <label>
                  Votre téléphone
                  <input
                    aria-label="Votre téléphone"
                    name="phone"
                    type="tel"
                    placeholder="Numéro de téléphone"
                  />
                </label>
                <label>
                  Votre formation
                  <select aria-label="Votre formation" required name="course" defaultValue="">
                    <option value="" disabled>
                      Choisir une formation
                    </option>
                    {courses.map((c) => (
                      <option key={c.title}>{c.title}</option>
                    ))}
                  </select>
                </label>
                <button className="button" type="submit">
                  Demander des informations
                  <ArrowRight size={15} />
                </button>
                {sent && (
                  <output className="form-success">
                    <Check size={18} /> Votre formulaire est validé. Ceci est une démonstration :
                    aucune demande n’a été envoyée.
                  </output>
                )}
              </div>
            </form>
            <div className="enroll-copy">
              <span className="eyebrow">
                <GraduationCap size={20} />
                RÉVÉLEZ VOTRE POTENTIEL
              </span>
              <h2>
                Explorez Votre Créativité
                <br />
                Et Vos <em>Talents</em> Avec Nous
              </h2>
              <p>
                Chaque talent mérite de s’exprimer. Nos formations allient théorie et pratique pour
                vous permettre de progresser, d’innover et de trouver votre voie.
              </p>
              {[
                ["Réussite de nos étudiants", 85],
                ["Satisfaction des apprenants", 95],
                ["Enseignement de qualité", 90],
              ].map(([label, n]) => (
                <div className="skill" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{n} %</strong>
                  </div>
                  <div className="skill-track">
                    <span style={{ width: `${n}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
        <RevealSection className="section pale">
          <div className="container">
            <Heading label="NOS DÉPARTEMENTS" title="Trouvez Votre" accent="Voie" />
            <div className="departments">
              {[
                ["monitor", "Commerce et finance"],
                ["law", "Droit et sciences sociales"],
                ["data", "Sciences et technologie"],
                ["health", "Santé et bien-être"],
              ].map(([icon, title]) => (
                <article key={icon}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>Une expertise reconnue et des parcours adaptés aux défis de demain.</p>
                  <button onClick={() => more(title)}>
                    En savoir plus <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
        <RevealSection className="testimonials">
          <div className="container">
            <Heading label="TÉMOIGNAGES" title="Nos Étudiants" accent="En Parlent" />
            <div className="testimonial-grid">
              {["Anthony P. Morris", "Elisa M. Laurent", "Marie L. Dubois"].map((name, i) => (
                <article key={name}>
                  <div className="stars">★★★★★</div>
                  <p>
                    « Une expérience enrichissante, des enseignants à l’écoute et un cadre
                    inspirant. Eduka m’a donné les clés pour avancer avec confiance dans mon projet.
                    »
                  </p>
                  <div className="testimonial-person">
                    <img src={image(`testimonial/0${i + 1}.jpg`)} alt={name} loading="lazy" />
                    <div>
                      <h3>{name}</h3>
                      <span>Étudiant chez Eduka</span>
                    </div>
                    <Quote />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>
        <RevealSection id="actualites" className="section container">
          <Heading label="NOS ACTUALITÉS" title="Les Dernières" accent="Nouvelles" />
          <div className="blog-grid">
            {[
              "Apprendre ensemble, réussir ensemble",
              "Un campus tourné vers l’avenir",
              "Donnez une nouvelle vie à vos ambitions",
            ].map((title, i) => (
              <article className="blog-card" key={title}>
                <img src={image(`blog/0${i + 1}.jpg`)} alt={title} loading="lazy" />
                <div className="blog-meta">
                  <span>
                    <CalendarDays size={14} />
                    15 octobre 2026
                  </span>
                  <span>Par l’équipe Eduka</span>
                </div>
                <h3>{title}</h3>
                <span className="demo-label">Article de démonstration</span>
                <Link className="button" to={`/blog/${articleSlugs[i]}`}>
                  Lire la suite
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </RevealSection>
        <RevealSection className="partners pale">
          <div className="container">
            {[1, 2, 3, 4, 1, 2].map((n, i) => (
              <img
                key={i}
                src={image(`partner/0${n}.png`)}
                alt={`Partenaire éducatif ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </RevealSection>
      </main>
      {search && (
        <div className="modal-backdrop">
          <button
            className="backdrop-close"
            aria-label="Fermer la recherche"
            onClick={() => setSearch(false)}
          />
          <dialog
            open
            aria-modal="true"
            aria-label="Rechercher une formation"
            className="modal search-modal"
          >
            <button className="modal-close" aria-label="Fermer" onClick={() => setSearch(false)}>
              <X />
            </button>
            <span className="eyebrow">VOTRE PROCHAIN PARCOURS</span>
            <h2>
              Trouvez Votre <em>Formation</em>
            </h2>
            <label className="search-input">
              <Search />
              <input
                autoFocus
                aria-label="Rechercher une formation"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Design, sciences, finance…"
              />
            </label>
            <div className="search-results">
              {filtered.map((c) => (
                <button
                  key={c.title}
                  onClick={() => {
                    setSearch(false);
                    document.getElementById("cours")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img src={image(`course/${c.img}.jpg`)} alt="" />
                  <span>
                    {c.title}
                    <small>
                      {c.category} · {c.price} €
                    </small>
                  </span>
                  <ArrowRight size={18} />
                </button>
              ))}
              {filtered.length === 0 && <p>Aucun résultat. Essayez un autre mot-clé.</p>}
            </div>
          </dialog>
        </div>
      )}
      {detail && (
        <div className="modal-backdrop">
          <button
            className="backdrop-close"
            aria-label="Fermer les détails"
            onClick={() => setDetail(null)}
          />
          <dialog open aria-modal="true" aria-label={detail.title} className="modal detail-modal">
            <button
              className="modal-close"
              aria-label="Fermer"
              onClick={() => setDetail(null)}
              autoFocus
            >
              <X />
            </button>
            {detail.img && (
              <img className="modal-photo" src={image(detail.img)} alt={detail.title} />
            )}
            <div className="modal-content">
              <span className="eyebrow">DÉCOUVREZ EDUKA</span>
              <h2>{detail.title}</h2>
              {detail.text && <p>{detail.text}</p>}
              <a className="button" href="#inscription" onClick={() => setDetail(null)}>
                Parlons de votre projet
                <ArrowRight size={16} />
              </a>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
