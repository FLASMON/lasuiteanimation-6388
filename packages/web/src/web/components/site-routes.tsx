import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Landing from "../pages/landing";
import SiteLayout from "./site-layout";
import { FormationsPage, FormationDetail, NotFound } from "../pages/formations";
import { SchoolPage, CampusPage } from "../pages/institution";
import { AdmissionsPage, ContactPage } from "../pages/admissions-contact";
import { BlogPage, ArticlePage } from "../pages/blog";
import { articles, formations } from "../data/content";
export default function SiteRoutes() {
  const [path] = useLocation();
  useEffect(() => {
    const labels: Record<string, string> = {
      "/": "Construisez votre avenir",
      "/formations": "Nos formations",
      "/ecole": "Notre école",
      "/campus": "La vie du campus",
      "/admissions": "Admissions",
      "/blog": "Le blog",
      "/contact": "Contact",
    };
    const slug = path.split("/").pop();
    const title =
      labels[path] ??
      (path.startsWith("/blog/")
        ? articles.find((a) => a.slug === slug)?.title
        : formations.find((f) => f.slug === slug)?.title) ??
      "Page introuvable";
    document.title = `${title} — Eduka`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        `${title}. Découvrez les parcours, la pédagogie et la vie du campus dans cette démonstration Eduka.`,
      );
  }, [path]);
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/formations" component={FormationsPage} />
        <Route path="/formations/:slug">
          {(p) => <FormationDetail key={p.slug} slug={p.slug} />}
        </Route>
        <Route path="/ecole" component={SchoolPage} />
        <Route path="/campus" component={CampusPage} />
        <Route path="/admissions" component={AdmissionsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug">{(p) => <ArticlePage key={p.slug} slug={p.slug} />}</Route>
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}
