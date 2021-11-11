---

history: true
progress: true
controls: true
controlsTutorial: true
controlsBackArrows: faded
center: false
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: monokai
logoImg: assets/logo_ets.svg
slideNumber: true
title: 'LOG210-seance-02'
margin: 0
minScale: 1
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'
height: 50%
width: 100%
autoPlayMedia: true
notesSeparator: "Note:"
customTheme : "slide_themes"
date: '`r format(Sys.time(), "%d %B, %Y")`'

---


## LOG210 Séance #02

:::block {style=font-size:0.8em}

- Analyse vs Conception (ndc sec 1.2)
- Décalage des représentations (ndc sec 1.3, fig1.1 et 1.2) 
- Complexités inhérentes, circonstancielle, environnementale (ndc sec 1.4) 
- le Modèle du domaine et les classes conceptuelles (ndc sec. 4, 4.1.x) 
  - Catègories pour identifier les classes conceptuelle
- <a onclick="window.open('https://github.com/profcfuhrmanets/exemples-ts/','_blank')">exemple Typescript</a>
:::
Note: https://docs.google.com/document/d/1Q2ggxHZaDxVKG11zxcJdKd0sTiuasi_aWEtZZsSnt94/edit

Note: Exercice (GC): à partir d’un CU, faire un DSS.
<br/>Exercice (GC): à partir d’un CU, identifier les classes conceptuelles avec des catégories.
<br/>Exercice (GC): à partir d’un ensemble de CC candidates, faire un MDD avec attributs et associations.

:::block {style=font-size:0.5em}
[whiteboard](#whiteboard) | [Supplément au cours en HTML](https://cc-yvanross.github.io/14f3178688ff2d131977e55d7002b1fc3b09e3ad/export/index.html)
:::

---


## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

--

# Survol Séance 02

- Rétroaction Mini-test
- Rappel méthodologie (MDD, DSS, Contrats, RDCU)
- MDD: Catégories (exercice)
- DSS: Introduction
- Architecture en couches

---

# Rétroaction
# mini-test  

![](assets/Moodle_Circle_M_RGB.png){width=20% .plain}

--

# Questions difficiles

Selon les statistiques de la première tentative.

--

![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN 

Pourquoi fait-on un modèle du domaine (MDD)?{align=left}

::: block {style=font-size:0.8em .socrative}

1. Si on commence avec un modèle du problème en termes de classes et d'objets, cela favorise une solution claire en termes de classes et d'objets logiciels.
1. Un MDD comprend tous les concepts importants dans le contexte du problème que le logiciel va résoudre. Il est primordial d'avoir une compréhension presque parfaite du problème au début d'un projet.
1. Un MDD est fait pour respecter le processus unifié.
1. Un MDD est la base de toutes les classes logicielles qui vont exister dans la solution.
:::

Note: https://b.socrative.com/teacher/#launch -> Multiple choice

--

![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN 

Selon Larman, laquelle des réponses ne fait-elle pas partie des moyens pour trouver des classes conceptuelles?{align=left}

::: block {style=font-size:0.8em .socrative}

1. Identifier les noms dans les cas d'utilisation.
1. Trouver des classes conceptuelles à partir des catégories typiques.
1. Réutiliser les noms des classes logicielles, s'il existe une version antérieure du logiciel.
1. Réutiliser un modèle du domaine existant.
:::

Note: https://b.socrative.com/teacher/#launch -> Multiple choice

---

# Méthodologie

--

### Survol Visuel{align=right}

<!-- .slide: data-fullscreen data-background-image="assets/Fig6.1.svg" data-background-size="40%" data-background-opacity="1" -->

Note:
On dessine MDD, DSS, Contrat, RDCU sur cette image...

---

# MDD
## Identifier classes conceptuelles

1. Réutiliser modèle existant
2. Catégories de classes
3. Groupes nominaux

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Méthode 1: Modèle existant

![cartographe](assets/05b-chp09-Modele-du-domaine_51.pptx/mdd-existant.jpeg){height=80% .plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### Méthode 1: Modèle existant

[![MDD pour CMS Accident Auto](assets/CarCrashCMSDomainModel.png)](https://www.researchgate.net/figure/Car-Crash-CMS-Domain-Model-Part-1_fig2_220116635)

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### Méthode 2: Chercher par catégorie

Section 9.5 du livre.

![categories](assets/categories.drawio.svg){width="85%" .plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Catégorie de classe

Cas d'utilisation « S'inscrire à un groupe-cours »

1. L'Étudiant commence une inscription.
2. L'Étudiant entre le sigle du cours.
3. Le Système affiche la liste des groupes-cours ainsi que l'horaire de chaque groupe-cours.
4. L'Étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

>Catégories dans les [Notes de cours](https://tinyurl.com/log210ndc)

Note: Faire une liste de classes du MDD avec **Transaction métier**, **Rôle**, **Évènement notable**

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Méthode 3: identifier les groupes nominaux

- Analyse linguistique du texte des spécifications (Cas d'utilisation, Récit utilisateur, etc.)
- Noms $\rightarrow$ Classes conceptuelles ou attributs possibles
- Approche *simple*, mais *imprécise*

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Identifier les groupes nominaux(...)

Cas d'utilisation « S'inscrire à un groupe-cours »

1. L'Étudiant commence une inscription.
2. L'Étudiant entre le sigle du cours.
3. Le Système affiche la liste des groupes-cours ainsi que l'horaire de chaque groupe-cours.
4. L'Étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

Note: Faire la liste des classes au tableau

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Identifier les groupes nominaux(...)

Cas d'utilisation « S'inscrire à un <ins>groupe-cours</ins> »

1. L'<ins>Étudiant</ins>  commence une <ins>inscription</ins>.
2. L'Étudiant entre le <ins>sigle</ins>  du <ins>cours</ins>.
3. Le <ins>Système</ins>  affiche la <ins>liste</ins>  des groupes-cours ainsi que l'<ins>horaire</ins>  de chaque groupe-cours.
4. L'Étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_mapping_2763502.svg" data-background-color="#CCFFCC" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Identifier les groupes nominaux(...)

**Résultat:** *Classes candidates*

- Beaucoup de directives (Chapitre 9)
- Classe vs Attribut?
- Attribut vs Association?

C'est l'analyse (pas la conception)
> L'étude du problème


---

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Diagramme Séquence Système (DSS)

![Exemple DSS](assets/Fig10.5.png){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

# DSS

- Créé à partir d'un cas d'utilisation
- Modélise l'interaction
  - Opérations système
  - Messages de retour (au besoin)
- Notation UML
- But : définir l'API (haut niveau){style=color:red}
- Système est objet sans détails

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

# Tracer un DSS

- Identifier l'acteur principal
- Modéliser le système comme objet sans détails
- Identifier les évènements système
  - *Évènements externes en entrée*
  - Décrits dans cas d'utilisation
- Proposer une **opération système** pour chaque **évènement système**
  - Types primitifs pour arguments
  - Messages de retour si nécessaire

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### DSS: CU01 - Ajouter un livre à échanger

1. Le Client démarre un nouvel ajout de livre.
2. Le Client entre le code ISBN du livre, ainsi que le code de sa
condition.
3. Le Système enregistre le livre et présente sa description. 
> Le Client répète les étapes 2 à 3 jusqu'à ce qu'il ait saisi tous les livres à échanger.
4. Le Système présente la liste de livres que possède le Client.

Note: 
faire le DSS 
![CU01 - Ajouter un livre à échanger](https://www.plantuml.com/plantuml/svg/0/NP2nJiGm38RtF8Lr4oTH2TOErQ6Jc112gjXOGcgA8N4gsqMwjs7adgClHjeWXbio-FV__vzpKFDYSufEFuadBpw1sYbYUON2XJBWcv-ZtMUsHvyGUXmpmfCGcpEouZe-tzn20tSVUJOKc1aYVGd2yWtBERnx7b6S3vO5Tkqn4hBjm2i4LngC0asUhKZzIMtvIRY9waBJARGmBEVaHL2s_8Sr-MhlNCnv0a4rB8HQ6_yzlgBKPT9NBhE-tCRZzGj3o3oGKUQsplPEcwRhmbg66eIcLNJ80wmjRajjeGGcuWkEwcnBVoNv0u5XXh1TwWubf_peBm00 "CU01 - Ajouter un livre à échanger")

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### DSS: « Attaquer un pays »

1. Le Joueur attaquant choisit d'attaquer un pays voisin du Joueur défenseur.
2. Le Joueur attaquant annonce combien de régiments il va utiliser pour son attaque.
3. Le Joueur défenseur annonce combien de régiments il va utiliser pour sa défense.
4. Les deux Joueurs jettent le nombre de dés selon leur stratégie choisie aux étapes précédentes.
5. Le Système compare les dés et élimine les régiments de l'attaquant ou du défenseur selon les règles et affiche le résultat.

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### DSS: « Attaquer un pays »

> Les Joueurs répètent les étapes 2 à 5 jusqu'à ce que l'attaquant ne puisse plus attaquer ou ne veuille plus attaquer.

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### DSS: « Attaquer un pays »

![DSS pour Attaquer un pays](https://www.plantuml.com/plantuml/svg/0/NL4nRiCm3Dpz2Y9B6o16zy084Y1JWIxrcaMLMLUeJBiY1JG_gjwXZvLAuZJf847IyOvtr9R518c3h_ZJqMI26O3nAo9PV45cq-FEkvx08Wc6soevUjGzE7lYYnEzxziMfZ46QDnc9s9KAK0acCoHcoUtgOoLCS1Y_Jn6Z641Xi5MgYZEkicGADGUMVBFW2UGArjl6DRGvJIO431SP1-BvFbSQ6jerGhrgmCLO9_JEn9hYokohFmuJkg4GPCCZdAQjGtHg86lqlJscbFl1iryryAHBFzpvavtfFDZTyjgchekl90JHoz663eiAtw3DqM9LmMyAC24eOiC1-eG_8Evka21BfPfpFbqwbOpvMG_SjAAIXj3YJexFQVzIxUijbgYV_OB "DSS pour Attaquer un pays"){style="width:70%" .plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_user interaction_2209214.svg" data-background-color="#CCCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN

Vrai/Faux: Il y a 5 opérations système dans ce DSS

![DSS pour  i Attaquer un pays  i](https://www.plantuml.com/plantuml/svg/0/NL4nRiCm3Dpz2Y9B6o16zy084Y1JWIxrcaMLMLUeJBiY1JG_gjwXZvLAuZJf847IyOvtr9R518c3h_ZJqMI26O3nAo9PV45cq-FEkvx08Wc6soevUjGzE7lYYnEzxziMfZ46QDnc9s9KAK0acCoHcoUtgOoLCS1Y_Jn6Z641Xi5MgYZEkicGADGUMVBFW2UGArjl6DRGvJIO431SP1-BvFbSQ6jerGhrgmCLO9_JEn9hYokohFmuJkg4GPCCZdAQjGtHg86lqlJscbFl1iryryAHBFzpvavtfFDZTyjgchekl90JHoz663eiAtw3DqM9LmMyAC24eOiC1-eG_8Evka21BfPfpFbqwbOpvMG_SjAAIXj3YJexFQVzIxUijbgYV_OB "DSS pour  i Attaquer un pays  i"){style="width:50%" .plain}

Note: https://b.socrative.com/teacher/#launch -> True/False

---

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

# Réalisations de cas d'utilisation (RDCU)

## Contrôleur GRASP

--

## Qu'est-ce qu'une RDCU

- C'est la conception des opérations système.
- Diagrammes d'interaction (de séquence)

--

## Exemple DSS

![DSS-jouer](assets/dss-jouer.drawio.svg){.plain}

--

#### Exemple DSS + RDCU

![DSS-jouer](assets/dss-jouer-rdcu.drawio.svg){.plain width=80%}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## 🤠:Pourquoi faire une RDCU?

Pour apprendre à faire une solution  
**modulaire** et **intuitive**

--

Spectre de la conception

![Rappel spectre](https://www.plantuml.com/plantuml/svg/XLJRRjf047tVhnZbXOIAAcdVAeG2f9UqKLMLq3v07iQxWxrYlMljHPJyKTHFw5loOrtRc1X8gMJPqfapPsRFiNtfF5eVSiKSHqLmyVeDSqkf2xIOW_FhY3bl9Qyvsqg2V9bQ4xJWHXaBtg9siKJQimxuJ3g85qA6Mgoiz9uqB8ps83Nyb5gObMETPpb12mpAbmoDES4NArtPSdqxPftRZ1o1yHbP1ygO9QIMi9AQ_FW8fpakuvB1KfnBwqvyIXsFfHI9EDF2yEO6ffFttoUjuN1nViR-FTzXMjxqqIMlzH8-cs0rgcEqNqikOCAjBFmnsZUA9bdNMghjdRU1MYMkqBcHiOBi-C3_VTesglzIXzQQLSrAL6nZcHHb_cJ9-7L1hWOeB_mQSigJSk6g4qxwJjxJkxVdWxiJG0ShZ5sB649JV_mDOumlMUmlogmU_rIyhxne6Dtkgswt0XCH5j3lvr88HOD1GnWH1cv24RsRQsuqfy9Be-SQ0uYdXoJukJuTNKq_dDNIfSoX-ClQKmq5HHcAbvFfdkZ4n8IUXL_KnLJ6Z-LGULZYTHyssDLcnjD3JZQDIMnqwS3DMLN9OXXIfoqlFzK8SBDAp7hhPiROrddeALhuMMAKkEjLdhBAs1suH0_0wYYiFj1EeTcZDQJV2pE1BgEoNgPPXzSJBJHffkoIItJZsWvTq1Pkqv5jnk_HCtP9MiJ_qry0){.plain width=80%}

Note:
Les stagiaires n'ont souvent pas la mission de faire une solution modulaire/intuitive. Les compagnies paient pour quelque chose qui fonctionne d'abord. Mais dans LOG210 on s'intéresse à la modularité et à la facilité de maintenance!

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU: aspects

- Proposer des **classes logicielles** correspondant aux **classes conceptuelles**
  - Inspirées du MDD
  - Pour réduire le *décalage des représentations*
- Utiliser les principes GRASP
  - **Faible Couplage** et **Forte cohésion** (LOG121!)
  - **Contrôleur** (architecture en couches)

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU - Jeu de dés

Opérations système du DSS

![DSS pour un scénario adapté de  i Jouer aux dés  i (Ch. 1 de Larman)](https://www.plantuml.com/plantuml/svg/0/NP71QiCm38RlVWhHKmlfngubb8xjLBPJOATUD4VDl2Lo9ikmClO-otFanQQq5BhwOB3-Nz8dUPCKHNFNklGHk4V13f8UMh9RWhzIQjfZRdKVMHaxWXUI6XalS-ap4tk2RmTsdYabREY-3Gs39rOIz-Cqg3Luh2heOnR83CcF0wE425XZh-DWhQ0CwstC983v2-fnIELjMEzu_l1s0tUJuGcbGruuz1e5Pgl9dMK6cC0xuz7WGu-i9bM7fEDlHqSnERzS9rXDHJiK8TbIddFiB5JPsDmiN1jZ3xsP3RaBF0xddFS9wShiotAvd4GB5w1HiOKwGuks2Ia0nE1jRwWmRx2nOX0pzBQyl2XspA_JC4TUIWNyUyB9JyaHrp11dJbEN1VePvYDEUtR_W00 "DSS pour un scénario adapté de  i Jouer aux dés  i (Ch. 1 de Larman)"){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU - Jeu de dés

Première opération système:

![dss_jouer_aux_dés](https://www.plantuml.com/plantuml/svg/0/NOyz2a9138JxFKMmqi8BM8W_dM0bs8VTlCVYRbQJR27YVVGSxs86Ap55Ydmp4sQZXcAzbg2Np5SKhA1sB-HRSlmZYGRinOR6nbW9pYG96NyKEuoNKLhdj6-b2PWWgoDY-_r0jquS2Hu1V8waYYDjInuPeaj9mZDWD0-OhGwjKvSPe48CxhSSynNP79tkQjEhqXTgYCkrmWhIzAueGdAWFkTM_NJoCZmkmeOuUQKF "dss_jouer_aux_dés"){.plain width="60%"}

Qui envoie l'opération? Qui la reçoit?

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU (solution Java Swing)

Opération `démarrerJeu` - qui **envoie** cette opération?

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU (solution Java Swing)

Opération `démarrerJeu` - qui **reçoit** cette opération?

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## Principe Contrôleur GRASP

**Problème:** Quel est le premier objet en dehors de la couche présentation **qui reçoit** et coordonne («&nbsp;contrôle&nbsp;») les opérations système ?

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

### Principe Contrôleur GRASP

**Solution:** Affectez une responsabilité à la classe qui correspond à l'une de ces définitions:
1. <u>Contrôleur de facade:</u> Elle représente le **système global,** un « **objet racine** », un **équipement** ou un
**sous-système**.
1. <u>Controleur de session:</u> Elle correspond au cas d'utilisation.

![MDD JeuDeDés](https://www.plantuml.com/plantuml/svg/NL7DIWCn4BxdAOQzL8KAzTY355mGYWL1y3xTp7QZoMH9PeKYle_x7FjYJafjgvSay_tD35bbmIH3yB2fQvFV7VUOC42MlISzasiAUy5OQd7mqaOMna3mIiaYe_7K2aY4v7QTW7M96d6HJUSi0OLUzX0eR2bbCpkdUSSa-vuW9kcY4IVQTXFjzAst7S36W2g1AxJOopGMR4sAApkDkPGFtIqi2l24AI1VcyPZph2E0mq9FWq0nm1BUD5bU5VAxRFkx2Whw5WkaKVSyJIUcAzZLgsDIz07-fBvbzHnQb95DkRqX6fHmNmErLrrC1T7umU1Up37mQeRLVZvGNdsBU5DwIAR_Uh-9tdavg1O4Llzcny0){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

# RDCU - Contrôleur

`JeuDeDés` est le contrôleur GRASP de type objet racine (inspiré du MDD)

![Swing et JeuDeDés](assets/SwingJeuDeDesControleur.png){.plain}

--

<!-- .slide: data-fullscreen data-background-image="assets/noun_Prototyping_2017211.svg" data-background-color="#FFCCFF" data-background-size="15%" data-background-position="top 5% right 5%" data-background-opacity="0.3" -->

## RDCU - détaillé 

Faire un design modulaire et facile à comprendre. Affecter les responsabilités aux bonnes classes.

![Swing et JeuDeDés](assets/cohesion_RDCU.png){width="65%" .plain}

---

<!-- .slide: data-fullscreen data-background-color="bisque" -->

# Architecture logique

Solution avec Java/Swing:

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: data-fullscreen data-background-color="bisque" -->

## Architecture logique

Solution avec Navigateur/HTTP/ExpressJS/TypeScript:

![ExpressJS et JeuDeDés](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/modeles/dss-details-demarrerJeu.puml){.plain}

--

<!-- .slide: data-fullscreen data-background-color="bisque" -->

## Comprendre et respecter l'architecture en couches du laboratoire

https://log210-cfuhrman.github.io/log210-valider-architecture-couches/

---

## Exemple Typescript
- <a onclick="window.open('https://github.com/profcfuhrmanets/exemples-ts/','_blank')">https://github.com/profcfuhrmanets/exemples-ts</a>

---

<!-- .slide: data-fullscreen data-background-color="skyblue" -->

# Feuille d'une minute

SVP m'écrire un message discord pour dire ce qu'étaient les points les moins clairs de la séance.

---

# Références et images

1. mapping by Vectors Point from the Noun Project
2. user interaction by mynamepong from the Noun Project
3. Prototyping by ProSymbols from the Noun Project

<!-- .slide id="whiteboard" --->

---

