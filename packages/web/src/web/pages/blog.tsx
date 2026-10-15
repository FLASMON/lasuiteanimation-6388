import { useState } from "react";
import { Link } from "wouter";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  Clock,
  CalendarDays,
  Quote,
  Copy,
  Check,
} from "lucide-react";
import { articles, image } from "../data/content";
import { PageHero, PageHeading, BlogCard, CallToAction, DemoNotice } from "../components/page-ui";
import { NotFound } from "./formations";
import { Reveal } from "../components/reveal";
export function BlogPage() {
  const [category, setCategory] = useState("Tous"),
    [q, setQ] = useState(""),
    [page, setPage] = useState(1);
  const filtered = articles.filter(
    (a) =>
      (category === "Tous" || a.category === category) &&
      (a.title + " " + a.excerpt).toLowerCase().includes(q.toLowerCase()),
  );
  const pages = Math.ceil(filtered.length / 3);
  const featured = articles[0];
  return (
    <main>
      <PageHero
        title="Le Blog Eduka"
        label="DES IDÉES POUR ALLER PLUS LOIN"
        description="Conseils, inspirations et vie du campus : nourrissez votre curiosité."
      />
      <section className="section container">
        <Reveal>
          <article className="featured-article">
            <Link to={`/blog/${featured.slug}`} className="featured-image">
              <img src={image("blog/01.jpg")} alt={featured.title} />
              <span className="category-pill">À la une · {featured.category}</span>
            </Link>
            <div className="featured-copy">
              <span className="eyebrow">REGARDS SUR L’APPRENTISSAGE</span>
              <h2>
                <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p>{featured.excerpt}</p>
              <div className="blog-meta">
                <time>{featured.date}</time>
                <span>{featured.minutes} min de lecture</span>
              </div>
              <span className="demo-label">Article de démonstration</span>
              <Link className="button" to={`/blog/${featured.slug}`}>
                Découvrir l’article
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </Reveal>
        <div className="blog-toolbar">
          <div className="filter-chips" aria-label="Catégories du blog">
            {["Tous", "Pédagogie", "Vie du campus", "Orientation"].map((c) => (
              <button
                key={c}
                className={category === c ? "selected" : ""}
                aria-pressed={category === c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="catalog-search">
            <Search size={18} />
            <input
              aria-label="Rechercher un article"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Rechercher un article…"
            />
          </label>
        </div>
        <p className="results-count" aria-live="polite">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""} · Contenus de démonstration
        </p>
        <div className="blog-grid" id="articles">
          {filtered.slice((page - 1) * 3, page * 3).map((a, i) => (
            <BlogCard key={a.slug} article={a} index={i} />
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <Search size={32} />
            <h3>Aucun article trouvé</h3>
            <p>Essayez une autre recherche.</p>
            <button
              className="button"
              onClick={() => {
                setQ("");
                setCategory("Tous");
                setPage(1);
              }}
            >
              Voir tous les articles
              <ArrowRight size={16} />
            </button>
          </div>
        )}
        {pages > 1 && (
          <nav className="pagination" aria-label="Pagination des articles">
            <button
              disabled={page === 1}
              aria-label="Page précédente"
              onClick={() => setPage(page - 1)}
            >
              <ArrowLeft size={18} />
            </button>
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                className={page === i + 1 ? "selected" : ""}
                aria-current={page === i + 1 ? "page" : undefined}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === pages}
              aria-label="Page suivante"
              onClick={() => setPage(page + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </nav>
        )}
        <DemoNotice>
          Ces articles sont des exemples éditoriaux créés pour la démonstration du site, et non des
          actualités réelles d’un établissement.
        </DemoNotice>
      </section>
      <CallToAction />
    </main>
  );
}
export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  const [copied, setCopied] = useState(false);
  if (!article) return <NotFound />;
  const related = articles
    .filter((a) => a.slug !== slug)
    .sort(
      (a, b) => Number(b.category === article.category) - Number(a.category === article.category),
    )
    .slice(0, 3);
  return (
    <main>
      <PageHero
        title={article.title}
        label={article.category}
        description={article.excerpt}
        parent={{ title: "Blog", href: "/blog" }}
      />
      <section className="section container article-layout">
        <article className="article-body">
          <Reveal>
            <img
              className="detail-cover"
              src={image(`blog/${article.img}.jpg`)}
              alt={article.title}
            />
          </Reveal>
          <div className="article-byline">
            <img src={image("team/01.jpg")} alt="Portrait illustratif de la rédaction" />
            <div>
              <strong>La rédaction Eduka</strong>
              <span>Équipe éditoriale · démonstration</span>
            </div>
            <span>
              <CalendarDays size={15} />
              <time>{article.date}</time>
            </span>
            <span>
              <Clock size={15} />
              {article.minutes} min
            </span>
          </div>
          <DemoNotice>
            Article de démonstration. Le contenu, la date et l’auteur sont illustratifs.
          </DemoNotice>
          <div className="editorial">
            <p className="article-lead">{article.intro}</p>
            {article.sections.map((s, i) => (
              <section id={`section-${i + 1}`} key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                {i === 0 && (
                  <blockquote>
                    <Quote size={32} />
                    <p>
                      Progresser, c’est prendre le temps de comprendre, d’essayer et d’échanger.
                    </p>
                    <cite>Le fil conducteur de notre approche pédagogique</cite>
                  </blockquote>
                )}
              </section>
            ))}
            <section id="a-retenir">
              <h2>À retenir</h2>
              <p>
                Choisissez une première action simple, prenez le temps d’observer ce qu’elle vous
                apporte et ajustez votre démarche. Vous n’avez pas besoin d’un plan parfait pour
                commencer à apprendre.
              </p>
            </section>
          </div>
          <div className="article-share">
            <span>Partager cet article</span>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
              {copied ? "Lien copié" : "Copier le lien"}
            </button>
            <Link to="/blog">
              <ArrowLeft size={16} />
              Tous les articles
            </Link>
          </div>
          <div className="author-box">
            <img src={image("team/01.jpg")} alt="Portrait illustratif" />
            <div>
              <span className="eyebrow">À PROPOS DE L’AUTEUR</span>
              <h3>La rédaction Eduka</h3>
              <p>
                Des contenus d’exemple pour partager des pistes de réflexion sur l’apprentissage,
                l’orientation et la vie étudiante.
              </p>
            </div>
          </div>
        </article>
        <aside className="article-sidebar">
          <div className="side-card">
            <span className="eyebrow">DANS CET ARTICLE</span>
            <nav className="table-of-contents" aria-label="Sommaire de l’article">
              {article.sections.map((s, i) => (
                <a href={`#section-${i + 1}`} key={s.title}>
                  <span>0{i + 1}</span>
                  {s.title}
                </a>
              ))}
              <a href="#a-retenir">
                <span>04</span>À retenir
              </a>
            </nav>
          </div>
          <div className="side-support">
            <h3>Et Votre Prochain Parcours ?</h3>
            <p>Découvrez une formation qui répond à vos envies.</p>
            <Link to="/formations">
              Explorer les formations
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="side-card">
            <h3>À lire aussi</h3>
            {related.slice(0, 2).map((a) => (
              <Link className="related-mini" key={a.slug} to={`/blog/${a.slug}`}>
                <img src={image(`blog/${a.img}.jpg`)} alt="" />
                <span>
                  {a.title}
                  <small>{a.minutes} min de lecture</small>
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </section>
      <section className="section pale">
        <div className="container">
          <PageHeading label="POUR PROLONGER LA RÉFLEXION" title="Continuez À" accent="Explorer" />
          <div className="blog-grid">
            {related.map((a, i) => (
              <BlogCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
