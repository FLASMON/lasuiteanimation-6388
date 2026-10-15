import { Link } from "wouter";
import { ArrowRight, GraduationCap, BookOpen, Users, Clock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { formations, articles, image } from "../data/content";
export function PageHero({
  title,
  label,
  description,
  parent,
}: {
  title: string;
  label: string;
  description: string;
  parent?: { title: string; href: string };
}) {
  const reduced = useReducedMotion();
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <GraduationCap size={20} />
            {label}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
          <nav className="breadcrumbs" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <ArrowRight size={12} />
            {parent && (
              <>
                <Link to={parent.href}>{parent.title}</Link>
                <ArrowRight size={12} />
              </>
            )}
            <span aria-current="page">{title}</span>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
export function PageHeading({
  label,
  title,
  accent,
  text,
}: {
  label: string;
  title: string;
  accent: string;
  text?: string;
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
      {text && <p>{text}</p>}
    </div>
  );
}
export function CourseCard({
  course,
  index = 0,
}: {
  course: (typeof formations)[number];
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <article className="course-card">
        <Link className="course-image" to={`/formations/${course.slug}`}>
          <img src={image(`course/${course.img}.jpg`)} alt={course.title} loading="lazy" />
          <span>{course.category}</span>
        </Link>
        <div className="course-meta">
          <span>
            <BookOpen size={14} /> 4 grands axes
          </span>
          <span className="stars">
            ★★★★★ <small>Programme démo</small>
          </span>
        </div>
        <h3>
          <Link to={`/formations/${course.slug}`}>{course.title}</Link>
        </h3>
        <p>{course.desc}</p>
        <div className="course-bottom">
          <span>
            <Users size={14} /> En petit groupe
          </span>
          <span>
            <Clock size={14} /> 3 mois
          </span>
          <strong>{course.price} €</strong>
        </div>
        <Link className="course-link" to={`/formations/${course.slug}`}>
          Découvrir le programme
          <ArrowRight size={16} />
        </Link>
      </article>
    </Reveal>
  );
}
export function BlogCard({
  article,
  index = 0,
}: {
  article: (typeof articles)[number];
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.07}>
      <article className="blog-card">
        <Link className="blog-image" to={`/blog/${article.slug}`}>
          <img src={image(`blog/${article.img}.jpg`)} alt={article.title} loading="lazy" />
          <span className="category-pill">{article.category}</span>
        </Link>
        <div className="blog-meta">
          <time>{article.date}</time>
          <span>{article.minutes} min de lecture</span>
        </div>
        <h3>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <span className="demo-label">Article de démonstration</span>
        <Link className="text-link" to={`/blog/${article.slug}`}>
          Lire l’article
          <ArrowRight size={16} />
        </Link>
      </article>
    </Reveal>
  );
}
export function CallToAction() {
  return (
    <Reveal>
      <section className="page-cta">
        <div className="container">
          <div>
            <span className="eyebrow">ET SI TOUT COMMENÇAIT AUJOURD’HUI ?</span>
            <h2>
              Votre Prochaine Étape,
              <br />
              <em>Construisons-la Ensemble.</em>
            </h2>
            <p>Un projet, une question ou simplement l’envie d’en savoir plus ? Parlons-en.</p>
          </div>
          <Link className="button" to="/admissions">
            Préparer mon admission
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
export function DemoNotice({ children }: { children?: React.ReactNode }) {
  return (
    <p className="demo-notice">
      {children ??
        "Site de démonstration : les contenus, tarifs et informations de l’établissement sont présentés à titre d’exemple."}
    </p>
  );
}
