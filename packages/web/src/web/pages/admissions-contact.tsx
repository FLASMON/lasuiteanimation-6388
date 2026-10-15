import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Phone, Mail, MapPin, Clock, ChevronDown, Send } from "lucide-react";
import { PageHero, PageHeading, DemoNotice } from "../components/page-ui";
import { Reveal } from "../components/reveal";
import { formations, image } from "../data/content";
export function AdmissionsPage() {
  const [sent, setSent] = useState(false);
  const selected = new URLSearchParams(window.location.search).get("formation") ?? "";
  return (
    <main>
      <PageHero
        title="Préparez Votre Admission"
        label="CHAQUE GRAND PARCOURS COMMENCE PAR UN PAS"
        description="Clarifiez votre projet et choisissez une formation qui vous ressemble."
      />
      <section className="section container">
        <PageHeading label="UN PARCOURS SIMPLE" title="Trois Étapes Vers Votre" accent="Avenir" />
        <div className="admission-steps">
          {[
            ["Explorer", "Découvrez nos parcours et identifiez celui qui répond à vos envies."],
            [
              "Échanger",
              "Présentez votre projet et préparez vos questions pour un échange d’orientation.",
            ],
            [
              "Se préparer",
              "Vérifiez les prérequis et réunissez les informations utiles à votre inscription.",
            ],
          ].map(([t, text], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <article>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="demande" className="section pale">
        <div className="container admission-layout">
          <Reveal>
            <span className="eyebrow">PARLONS DE VOTRE PROJET</span>
            <h2>
              Votre Ambition,
              <br />
              Notre <em>Point De Départ.</em>
            </h2>
            <p>
              Présentez votre projet en quelques mots. Ce formulaire montre le parcours d’une
              demande d’informations sans transmettre vos données.
            </p>
            <img
              className="admission-photo"
              src={image("about/02.jpg")}
              alt="Échange autour d’un projet d’études"
            />
            <div className="info-note">
              <Check size={20} />
              <p>
                Aucun paiement et aucun engagement. Les conditions d’admission de cette
                démonstration sont indicatives.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <form
              className="request-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h3>Votre Demande D’Informations</h3>
              <p>Les champs marqués * sont nécessaires.</p>
              <div className="form-row">
                <label>
                  Prénom *
                  <input required name="firstName" aria-label="Prénom" placeholder="Votre prénom" />
                </label>
                <label>
                  Nom *
                  <input required name="lastName" aria-label="Nom" placeholder="Votre nom" />
                </label>
              </div>
              <label>
                Adresse e-mail *
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-label="Adresse e-mail"
                  placeholder="vous@exemple.fr"
                />
              </label>
              <label>
                Téléphone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  aria-label="Téléphone"
                  placeholder="Votre numéro"
                />
              </label>
              <label>
                Formation souhaitée *
                <select
                  required
                  name="formation"
                  aria-label="Formation souhaitée"
                  defaultValue={selected}
                >
                  <option value="">Choisissez une formation</option>
                  {formations.map((f) => (
                    <option key={f.slug} value={f.slug}>
                      {f.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Votre projet
                <textarea
                  name="project"
                  aria-label="Votre projet"
                  rows={4}
                  placeholder="Vos objectifs, vos questions, vos envies…"
                />
              </label>
              <label className="checkbox-label">
                <input
                  required
                  type="checkbox"
                  aria-label="Je comprends que ce formulaire est une démonstration"
                />
                Je comprends que ce formulaire est une démonstration et qu’aucune demande n’est
                envoyée. *
              </label>
              <button type="submit" className="button">
                Valider ma demande démo
                <ArrowRight size={16} />
              </button>
              {sent && (
                <output className="form-confirmation">
                  <Check size={21} />
                  <span>
                    <strong>Votre formulaire est validé.</strong>Mode démonstration : aucune
                    information n’a été transmise à un établissement.
                  </span>
                </output>
              )}
            </form>
          </Reveal>
        </div>
      </section>
      <section className="section container faq-section">
        <PageHeading label="VOS QUESTIONS" title="Tout Simplement," accent="Des Réponses" />
        <div className="faq-list">
          {[
            [
              "Comment choisir ma formation ?",
              "Comparez les descriptions et les programmes dans le catalogue. La page de chaque parcours présente ses objectifs et ses prérequis indicatifs.",
            ],
            [
              "Faut-il avoir une expérience préalable ?",
              "Les parcours de cette démonstration sont des exemples d’initiation. Les conditions réelles doivent être validées et renseignées par l’établissement.",
            ],
            [
              "Puis-je visiter le campus ?",
              "Consultez la page Campus et utilisez le formulaire Contact pour tester une demande de visite. Aucun rendez-vous réel n’est enregistré.",
            ],
            [
              "Le formulaire envoie-t-il mes informations ?",
              "Non. Il valide les champs uniquement dans votre navigateur. Aucun envoi, paiement ou inscription réelle n’est effectué.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <ChevronDown size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <div className="center-button">
          <Link className="text-link" to="/contact">
            Une autre question ? Contactez-nous
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
export function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main>
      <PageHero
        title="Restons En Contact"
        label="UNE QUESTION ? UNE ENVIE ? UN PROJET ?"
        description="Le début d’une belle conversation se trouve souvent dans une simple question."
      />
      <section className="section container">
        <div className="contact-cards">
          {[
            [Phone, "Appelez-nous", "+1 212 345 6789", "Lundi – vendredi · 9h – 17h"],
            [Mail, "Écrivez-nous", "info@example.com", "Coordonnées de démonstration"],
            [
              MapPin,
              "Venez nous rencontrer",
              "25/B Milford Road, New York",
              "Adresse illustrative de la maquette",
            ],
          ].map(([Icon, t, info, note], i) => {
            const I = Icon as typeof Phone;
            return (
              <Reveal key={String(t)} delay={i * 0.08}>
                <article>
                  <span className="contact-icon">
                    <I size={27} />
                  </span>
                  <h3>{String(t)}</h3>
                  <strong>{String(info)}</strong>
                  <p>{String(note)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <DemoNotice>
          Les coordonnées et les horaires sont des exemples issus de la maquette. Ils ne doivent pas
          être utilisés pour contacter un établissement réel.
        </DemoNotice>
      </section>
      <section className="section pale">
        <div className="container contact-layout">
          <Reveal>
            <span className="eyebrow">À VOTRE ÉCOUTE</span>
            <h2>
              Ensemble, Trouvons
              <br />
              La Bonne <em>Direction.</em>
            </h2>
            <p>
              Une question sur un programme, le campus ou les admissions ? Découvrez le
              fonctionnement d’une prise de contact avec notre formulaire de démonstration.
            </p>
            <img
              className="contact-photo"
              src={image("gallery/04.jpg")}
              alt="Étudiants échangeant sur le campus"
            />
            <div className="contact-hours">
              <Clock size={20} />
              <div>
                <strong>Un échange à votre rythme</strong>
                <p>Choisissez le sujet qui correspond à votre projet.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              className="request-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h3>Écrivez-nous Un Message</h3>
              <p>Les champs marqués * sont nécessaires.</p>
              <label>
                Nom complet *
                <input
                  required
                  name="name"
                  autoComplete="name"
                  aria-label="Nom complet"
                  placeholder="Votre nom"
                />
              </label>
              <label>
                Adresse e-mail *
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  aria-label="Adresse e-mail"
                  placeholder="vous@exemple.fr"
                />
              </label>
              <label>
                Sujet *
                <select required name="subject" aria-label="Sujet" defaultValue="">
                  <option value="" disabled>
                    Choisissez un sujet
                  </option>
                  {[
                    "Une formation",
                    "Les admissions",
                    "Une visite du campus",
                    "Autre question",
                  ].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label>
                Votre message *
                <textarea
                  required
                  rows={5}
                  name="message"
                  aria-label="Votre message"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  required
                  aria-label="Je comprends que mon message ne sera pas envoyé"
                />
                Je comprends que ce formulaire est une démonstration et que mon message ne sera pas
                envoyé. *
              </label>
              <button type="submit" className="button">
                Valider mon message démo
                <Send size={16} />
              </button>
              {sent && (
                <output className="form-confirmation">
                  <Check size={21} />
                  <span>
                    <strong>Votre message est validé.</strong>Aucun e-mail n’a été envoyé. Les
                    données restent dans cette page de démonstration.
                  </span>
                </output>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
