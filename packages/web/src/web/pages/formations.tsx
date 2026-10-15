import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, Check, Clock, BookOpen, Users, ChevronDown } from "lucide-react";
import { formations, image } from "../data/content";
import { PageHero, PageHeading, CourseCard, CallToAction, DemoNotice } from "../components/page-ui";
import { Reveal } from "../components/reveal";
export function FormationsPage() {
  const [q, setQ] = useState(""),
    [category, setCategory] = useState("Toutes");
  const list = formations.filter(
    (f) =>
      (category === "Toutes" || f.category === category) &&
      (f.title + " " + f.desc).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <main>
      <PageHero
        label="APPRENDRE. EXPLORER. PROGRESSER."
        title="Nos Formations"
        description="Choisissez le parcours qui donne du sens à vos ambitions."
      />
      <section className="section container">
        <PageHeading
          label="TROUVEZ VOTRE PARCOURS"
          title="Un Talent, Mille"
          accent="Possibilités"
          text="Des programmes concrets, des enseignants passionnés et de nouvelles perspectives."
        />
        <div className="catalog-toolbar">
          <label className="catalog-search">
            <Search size={20} />
            <input
              aria-label="Rechercher une formation"
              placeholder="Rechercher une formation…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
          <label className="category-select">
            Domaine
            <select
              aria-label="Filtrer par domaine"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Toutes</option>
              {formations.map((f) => (
                <option key={f.category}>{f.category}</option>
              ))}
            </select>
          </label>
        </div>
        <p className="results-count" aria-live="polite">
          {list.length} formation{list.length !== 1 ? "s" : ""} disponible
          {list.length !== 1 ? "s" : ""}
        </p>
        <div className="courses-grid">
          {list.map((f, i) => (
            <CourseCard key={f.slug} course={f} index={i} />
          ))}
        </div>
        {!list.length && (
          <div className="empty-state">
            <Search size={36} />
            <h3>Aucun parcours trouvé</h3>
            <p>Essayez un autre mot-clé ou explorez tous les domaines.</p>
            <button
              className="button"
              onClick={() => {
                setQ("");
                setCategory("Toutes");
              }}
            >
              Réinitialiser la recherche
              <ArrowRight size={16} />
            </button>
          </div>
        )}
        <DemoNotice />
      </section>
      <CallToAction />
    </main>
  );
}
export function FormationDetail({ slug }: { slug: string }) {
  const f = formations.find((c) => c.slug === slug);
  const [tab, setTab] = useState("Présentation");
  useEffect(() => setTab("Présentation"), [slug]);
  if (!f) return <NotFound />;
  return (
    <main>
      <PageHero
        label={f.category}
        title={f.title}
        description={f.desc}
        parent={{ title: "Formations", href: "/formations" }}
      />
      <section className="section container detail-grid">
        <div>
          <Reveal>
            <img className="detail-cover" src={image(`course/${f.img}.jpg`)} alt={f.title} />
          </Reveal>
          <div className="detail-tabs" role="tablist" aria-label="Informations sur la formation">
            {["Présentation", "Programme", "Prérequis"].map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                aria-selected={tab === t}
                aria-controls="course-panel"
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div
            className="course-panel editorial"
            id="course-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
          >
            {tab === "Présentation" ? (
              <>
                <h2>
                  Donnez Vie À Votre <em>Potentiel</em>
                </h2>
                <p>
                  {f.desc} Ce parcours d’initiation associe apports théoriques, exercices guidés et
                  projet de groupe.
                </p>
                <h3>Ce que vous allez apprendre</h3>
                <p>
                  {f.outcome} Vous apprendrez aussi à documenter vos choix et à présenter le
                  résultat de votre travail.
                </p>
                <ul>
                  {[
                    "Un accompagnement étape par étape",
                    "Des exercices et des mises en situation",
                    "Un projet final pour mettre vos acquis en pratique",
                  ].map((t) => (
                    <li key={t}>
                      <Check size={18} />
                      {t}
                    </li>
                  ))}
                </ul>
                <h3>À qui s’adresse ce parcours ?</h3>
                <p>
                  Aux personnes curieuses de découvrir ce domaine ou de consolider leurs bases dans
                  un cadre accompagné. Le programme et les modalités ci-dessous sont des exemples de
                  démonstration.
                </p>
              </>
            ) : tab === "Programme" ? (
              <>
                <h2>
                  Votre Parcours <em>Pas À Pas</em>
                </h2>
                <p>Quatre grands axes pour passer de la découverte à la pratique.</p>
                <div className="module-list">
                  {f.modules.map((m, i) => (
                    <details key={m} open={i === 0}>
                      <summary>
                        <span>0{i + 1}</span>
                        {m}
                        <ChevronDown size={18} />
                      </summary>
                      <p>
                        Apports essentiels, exercices guidés et échanges avec le groupe. Une
                        activité de mise en pratique vous permet de vérifier votre compréhension et
                        de préparer l’étape suivante.
                      </p>
                    </details>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2>
                  Préparez Votre <em>Départ</em>
                </h2>
                <p>
                  Ce programme d’initiation ne suppose pas d’expérience préalable spécialisée. Un
                  entretien d’orientation permettrait, dans un établissement réel, de vérifier
                  l’adéquation du parcours à votre projet.
                </p>
                <ul>
                  {[
                    "Être motivé et disponible pour participer aux ateliers",
                    "Disposer d’un ordinateur pour les activités numériques",
                    "Pouvoir suivre les échanges et supports en français",
                  ].map((t) => (
                    <li key={t}>
                      <Check size={18} />
                      {t}
                    </li>
                  ))}
                </ul>
                <DemoNotice>
                  Prérequis indicatifs de démonstration, à remplacer par les conditions réelles de
                  l’établissement.
                </DemoNotice>
              </>
            )}
          </div>
        </div>
        <aside className="course-sidebar">
          <div className="side-card">
            <span className="eyebrow">VOTRE PROCHAIN PARCOURS</span>
            <strong className="course-price">
              {f.price} € <small>/ parcours démo</small>
            </strong>
            <p>Un premier pas vers de nouvelles compétences.</p>
            <ul>
              <li>
                <Clock size={18} />
                Durée<span>3 mois</span>
              </li>
              <li>
                <BookOpen size={18} />
                Programme<span>4 grands axes</span>
              </li>
              <li>
                <Users size={18} />
                Format<span>Petit groupe</span>
              </li>
              <li>
                <Check size={18} />
                Niveau<span>Initiation</span>
              </li>
            </ul>
            <Link className="button" to={`/admissions?formation=${f.slug}`}>
              Choisir ce parcours
              <ArrowRight size={16} />
            </Link>
            <Link className="text-link" to="/contact">
              Une question ? Contactez-nous
            </Link>
            <DemoNotice>Tarif et programme de démonstration. Aucun paiement en ligne.</DemoNotice>
          </div>
          <div className="side-support">
            <h3>Un Projet À Clarifier ?</h3>
            <p>Notre page admissions vous aide à préparer les premières étapes.</p>
            <Link to="/admissions">
              Découvrir les admissions
              <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </section>
      <section className="section pale">
        <div className="container">
          <PageHeading label="CONTINUEZ À EXPLORER" title="D’autres" accent="Possibilités" />
          <div className="courses-grid">
            {formations
              .filter((c) => c.slug !== slug)
              .slice(0, 3)
              .map((c, i) => (
                <CourseCard key={c.slug} course={c} index={i} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export function NotFound() {
  return (
    <main>
      <PageHero
        label="UN AUTRE CHEMIN VOUS ATTEND"
        title="Page Introuvable"
        description="Cette page n’existe pas ou n’est plus disponible."
      />
      <section className="section container empty-state">
        <strong className="error-number">404</strong>
        <h2>
          Retrouvons Le Bon <em>Chemin</em>
        </h2>
        <p>Explorez nos formations ou revenez à l’accueil.</p>
        <Link className="button" to="/">
          Retour à l’accueil
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
