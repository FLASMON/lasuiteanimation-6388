import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  GraduationCap,
  BookOpen,
  Globe,
  Heart,
  X,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { PageHero, PageHeading, CallToAction, DemoNotice } from "../components/page-ui";
import { Reveal } from "../components/reveal";
import { image } from "../data/content";
export function SchoolPage() {
  return (
    <main>
      <PageHero
        title="L’École Eduka"
        label="UNE ÉDUCATION QUI VOUS RESSEMBLE"
        description="Apprendre avec exigence, grandir avec confiance, construire ensemble."
      />
      <section className="section container school-intro">
        <Reveal>
          <div className="school-photo">
            <img src={image("about/01.jpg")} alt="Étudiante à la bibliothèque" />
            <span>
              <strong>30</strong> ans d’inspiration
              <br />
              <small>Chiffre illustratif</small>
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="eyebrow">NOTRE CONVICTION</span>
          <h2>
            Chaque Talent Mérite
            <br />
            De <em>S’Exprimer.</em>
          </h2>
          <p>
            Nous imaginons une école où la curiosité devient un moteur, où les connaissances
            prennent vie dans la pratique et où chacun peut avancer à son rythme.
          </p>
          <p>
            La maquette Eduka présente un cadre d’apprentissage ouvert : des enseignants engagés,
            des espaces de travail adaptés et des parcours pour explorer ses capacités.
          </p>
          <ul className="check-list">
            {[
              "Un apprentissage concret et progressif",
              "Une communauté ouverte et bienveillante",
              "Des parcours guidés par votre projet",
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <Link className="button" to="/formations">
            Découvrir nos formations
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
      <section className="section pale">
        <div className="container">
          <PageHeading
            label="CE QUI NOUS ANIME"
            title="Des Valeurs Qui Font La"
            accent="Différence"
          />
          <div className="value-grid">
            {[
              [
                BookOpen,
                "Transmettre",
                "Partager des connaissances solides, accessibles et ancrées dans la pratique.",
              ],
              [
                Globe,
                "Ouvrir les horizons",
                "Encourager la curiosité et le dialogue entre les disciplines et les cultures.",
              ],
              [
                Heart,
                "Accompagner",
                "Créer un cadre respectueux où les questions trouvent leur place.",
              ],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof BookOpen;
              return (
                <Reveal key={String(title)} delay={i * 0.08}>
                  <article>
                    <I size={35} />
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section id="equipe" className="section container">
        <PageHeading label="LE SAVOIR SE PARTAGE" title="Rencontrez Notre" accent="Équipe" />
        <div className="team-grid">
          {["Angela T. Vigil", "Frank A. Mitchell", "Susan D. Lunsford", "Dennis A. Pruitt"].map(
            (name, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <article className="team-card">
                  <img src={image(`team/0${i + 1}.jpg`)} alt={name} />
                  <h3>{name}</h3>
                  <p>{i === 2 ? "Direction pédagogique" : "Enseignement et accompagnement"}</p>
                  <small className="demo-label">Profil illustratif</small>
                </article>
              </Reveal>
            ),
          )}
        </div>
        <DemoNotice>
          L’histoire, l’équipe et les chiffres présentés illustrent la maquette. Ils ne constituent
          pas des informations vérifiées sur un établissement réel.
        </DemoNotice>
      </section>
      <CallToAction />
    </main>
  );
}
const gallery = [
  { img: "01", category: "Apprentissage", title: "Apprendre ensemble" },
  { img: "02", category: "Vie étudiante", title: "Des rencontres inspirantes" },
  { img: "03", category: "Apprentissage", title: "Un espace pour se concentrer" },
  { img: "04", category: "Vie étudiante", title: "Partager au quotidien" },
  { img: "05", category: "Apprentissage", title: "La théorie devient pratique" },
  { img: "06", category: "Vie étudiante", title: "Créer des souvenirs" },
];
export function CampusPage() {
  const [category, setCategory] = useState("Tout"),
    [photo, setPhoto] = useState<(typeof gallery)[number] | null>(null);
  return (
    <main>
      <PageHero
        title="La Vie Sur Le Campus"
        label="BIEN PLUS QU’UN LIEU D’ÉTUDE"
        description="Un cadre pour apprendre, des rencontres pour grandir, des expériences à partager."
      />
      <section className="section container">
        <div className="campus-intro">
          <Reveal>
            <span className="eyebrow">VOTRE NOUVEAU QUOTIDIEN</span>
            <h2>
              Un Lieu Pour Apprendre.
              <br />
              Un Lieu Pour <em>Grandir.</em>
            </h2>
            <p>
              De la bibliothèque aux espaces collaboratifs, découvrez un environnement imaginé pour
              équilibrer concentration, créativité et échanges.
            </p>
            <Link className="button" to="/contact">
              Préparer une visite
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              className="detail-cover"
              src={image("video/01.jpg")}
              alt="Étudiants sur le campus"
            />
          </Reveal>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <PageHeading label="CHACUN SON RYTHME" title="Des Espaces Pour" accent="S’Épanouir" />
          <div className="value-grid">
            {[
              [
                BookOpen,
                "Bibliothèque et ressources",
                "Des supports pour approfondir les cours et nourrir sa curiosité.",
              ],
              [
                GraduationCap,
                "Ateliers et salles de travail",
                "Un cadre propice aux projets pratiques et à la collaboration.",
              ],
              [
                Heart,
                "Vie étudiante",
                "Des moments de partage pour se sentir membre d’une communauté.",
              ],
            ].map(([Icon, t, text], i) => {
              const I = Icon as typeof BookOpen;
              return (
                <Reveal key={String(t)} delay={i * 0.08}>
                  <article>
                    <I size={34} />
                    <h3>{String(t)}</h3>
                    <p>{String(text)}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section container">
        <PageHeading label="DÉCOUVRIR EN IMAGES" title="Un Aperçu De Notre" accent="Quotidien" />
        <div className="filter-chips gallery-filters">
          {["Tout", "Apprentissage", "Vie étudiante"].map((c) => (
            <button
              key={c}
              className={category === c ? "selected" : ""}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="campus-gallery">
          {gallery
            .filter((p) => category === "Tout" || p.category === category)
            .map((p, i) => (
              <Reveal key={p.img} delay={i * 0.05}>
                <button onClick={() => setPhoto(p)} aria-label={`Agrandir : ${p.title}`}>
                  <img src={image(`gallery/${p.img}.jpg`)} alt={p.title} />
                  <span>
                    <small>{p.category}</small>
                    <strong>{p.title}</strong>
                    <ArrowRight size={20} />
                  </span>
                </button>
              </Reveal>
            ))}
        </div>
      </section>
      <section id="evenements" className="section pale">
        <div className="container">
          <PageHeading label="ON SE RENCONTRE ?" title="Les Prochains" accent="Rendez-vous" />
          <div className="event-grid">
            {["Journée portes ouvertes", "Rencontre avec nos enseignants", "Forum des métiers"].map(
              (t, i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <article className="event-card">
                    <img src={image(`event/0${i + 1}.jpg`)} alt={t} />
                    <span className="event-location">
                      <MapPin size={15} /> Campus Eduka · exemple
                    </span>
                    <div className="event-meta">
                      <span>
                        <CalendarDays size={14} />
                        {["24 octobre 2026", "7 novembre 2026", "21 novembre 2026"][i]}
                      </span>
                    </div>
                    <h3>{t}</h3>
                    <p>
                      Un rendez-vous illustratif pour découvrir les parcours et poser vos questions.
                    </p>
                    <Link className="button" to="/contact">
                      Me renseigner
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                </Reveal>
              ),
            )}
          </div>
          <DemoNotice>
            Photos illustratives et événements de démonstration : aucune réservation réelle.
          </DemoNotice>
        </div>
      </section>
      <CallToAction />
      {photo && (
        <div className="modal-backdrop">
          <button
            className="backdrop-close"
            aria-label="Fermer la photo"
            onClick={() => setPhoto(null)}
          />
          <dialog
            open
            className="modal gallery-dialog"
            aria-label={photo.title}
            onKeyDown={(e) => {
              if (e.key === "Escape") setPhoto(null);
            }}
          >
            <button
              autoFocus
              className="modal-close"
              aria-label="Fermer"
              onClick={() => setPhoto(null)}
            >
              <X />
            </button>
            <img
              className="modal-photo"
              src={image(`gallery/${photo.img}.jpg`)}
              alt={photo.title}
            />
            <div className="modal-content">
              <span className="eyebrow">{photo.category}</span>
              <h2>{photo.title}</h2>
            </div>
          </dialog>
        </div>
      )}
    </main>
  );
}
