# Eduka — Landing page

Landing page web en français fidèle à la maquette fournie. Identité d'origine, sans nouvelle direction créative.

## Identité
- Vert #116e63, orange #fda31b, bleu nuit #09203e, blanc et vert très pâle.
- Yantramanav pour les titres, Roboto pour le corps, comme la référence.
- Conteneur desktop de 1140 px. Bandeau contacts, menu blanc, grande photo sombre avec titre blanc/orange.
- Cartes avantages superposées au hero, coins organiques, icônes dessinées, chiffres en contour.
- Présentation en deux colonnes avec trois photos aux arrondis distinctifs et badge d'expérience orange.
- Sections : chiffres, cours, campus, équipe, atouts, galerie, offre, événements, inscription, départements, témoignages, actualités, partenaires, footer.
- Photos et logo du site de démonstration correspondant à la référence. Ne pas reproduire le filigrane du site de téléchargement.
- Mobile : navigation repliable, grilles empilées, titres ajustés, zéro débordement horizontal.

## Plan approuvé
Une page React dans packages/web, composants et styles dédiés. Assets dans public/images. Aucun nouveau schéma de données ni API. Conservation de l'analytics géré. Validation par build et tests navigateur desktop/mobile.

## Interactions
Navigation par ancres, carrousel hero, recherche des formations, détails et galerie en modal. Formulaire d'admission local : confirmation précisant qu'aucune demande n'est envoyée. Newsletter démonstrative sans abonnement réel.

## Extension validée — site multipage et motion
Conserver strictement l'identité Eduka. Pages /, /formations, /formations/:slug, /ecole, /campus, /admissions, /blog, /blog/:slug, /contact et page 404. Header/footer partagés, état actif du menu, fil d'Ariane, CTA cohérents. Blog avec recherche, filtres, pagination, articles de démonstration signalés, sommaire, auteur et articles associés. Motion React : révélations progressives, transitions de page, barre de progression et micro-interactions, respect de prefers-reduced-motion. Formulaires de démonstration explicites. Aucun backend ni base supplémentaire.
