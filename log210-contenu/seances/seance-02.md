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
logoImg: ./assets/logo_ets.svg
slideNumber: true
title: 'LOG210-C02-00-seance'
height: 100%
width: 100%
margin: 0
minScale: 1
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'
notesSeparator: "Note:"
customTheme : "slide_themes"

---

<!-- .slide: id="admin"  -->
## LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [MDD: Catégories](#mdd)
1. [DSS: Opérations système](#dss)
1. [RDCU: Contrôleur GRASP](#rdcu)
1. [Architecture en couches](#couche)
1. [Exercice](#exercice)

--


# Administrivia

1. Accès G Suite (ETSMTL.NET)
   - Google Classrooms
   - Google Drive
2. Invitation Lab 0 (GitHub Classroom)
   - ⚠️ lien différent pour chaque groupe!
   - ne pas partager 
3. Équipes (connaissez-vous vos coéquipiers?)
4. <del>Lien Zoom</del> <ins>Serveur Discord</ins> pour lab (Google Classrooms)


---

<!-- .slide: id="mdd" class="mddslide"  -->
### LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [MDD: Catégories](#mdd)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[30.27m](https://youtu.be/9ia0Mvdk4XY)
1. [DSS: Opérations système](#dss)
1. [RDCU: Contrôleur GRASP](#rdcu)
1. [Architecture en couches](#couche)
1. [Exercice](#exercice)

--

<!-- .slide: class="mddslide"  -->
# Survol Visuel


![](assets/Fig6.1.svg){.plain}

Note: 
On dessine MDD, DSS, Contrat, RDCU sur cette image...

--

<!-- .slide: class="mddslide"  -->

# MDD
## Identifier classes conceptuelles

1. Réutiliser modèle existant
2. Catégories de classes
3. Groupes nominaux


--

<!-- .slide: class="mddslide"  -->

## Méthode 1: Modèle existant

![cartographe](assets/05b-chp09-Modele-du-domaine_51.pptx/mdd-existant.jpeg){height=80% .plain}

--

<!-- .slide: class="mddslide"  -->

### Méthode 1: Modèle existant

[![MDD pour CMS Accident Auto](assets/CarCrashCMSDomainModel.png)](https://www.researchgate.net/figure/Car-Crash-CMS-Domain-Model-Part-1_fig2_220116635){.plain>}

--

<!-- .slide: class="mddslide"  -->

### Méthode 2: Chercher par catégorie

Section 9.5 du livre.

![categories](assets/05b-chp09-Modele-du-domaine_51.pptx/categories.png){width="85%" .plain}

--

<!-- .slide: class="mddslide"  -->

## Catégorie de classe

Cas d'utilisation « S'inscrire à un groupe-cours »

1. L'Étudiant commence une inscription.
2. L'Étudiant entre le sigle du cours.
3. Le Système affiche la liste des groupes-cours ainsi que l'horaire de chaque groupe-cours.
4. L'étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

>Catégories dans les [Notes de cours](https://drive.google.com/file/d/1__yjzv7vuqbX0ElxLj5AkVO0xEk7ubVO/view?usp=sharing)

Note: Faire une liste de classes du MDD avec **Transaction métier**, **Rôle**, **Évènement notable**

--

<!-- .slide: class="mddslide"  -->

## Méthode 3: identifier les groupes nominaux

- Analyse linguistique du texte des spécifications (Cas d'utilisation, Récit utilisateur, etc.)
- Noms $\rightarrow$ Classes conceptuelles ou attributs possibles
- Approche *simple*, mais *imprécise*

--

<!-- .slide: class="mddslide"  -->

## Identifier les groupes nominaux(...)

Cas d'utilisation « S'inscrire à un groupe-cours »

1. L'Étudiant commence une inscription.
2. L'Étudiant entre le sigle du cours.
3. Le Système affiche la liste des groupes-cours ainsi que l'horaire de chaque groupe-cours.
4. L'étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

Note: Faire la liste des classes au tableau

--

<!-- .slide: class="mddslide"  -->

## Identifier les groupes nominaux(...)

Cas d'utilisation «S'inscrire à un <ins>groupe-cours</ins>»

1. L'<ins>Étudiant</ins>  commence une <ins>inscription</ins>.
2. L'Étudiant entre le <ins>sigle</ins>  du <ins>cours</ins>.
3. Le <ins>Système</ins>  affiche la <ins>liste</ins>  des groupes-cours ainsi que l'<ins>horaire</ins>  de chaque groupe-cours.
4. L'étudiant sélectionne le groupe-cours auquel il veut s'inscrire.
5. …

--

<!-- .slide: class="mddslide"  -->

## Identifier les groupes nominaux(...)

**Résultat:** *Classes candidates*

- Beaucoup de directives (Chapitre 9)
- Classe vs Attribut?
- Attribut vs Association?

C'est de l'analyse (pas la conception)

--

<!-- .slide: class="mddslide"  -->

# Exercice: MDD Classes Conceptuelles

Google Classrooms

---

<!-- .slide: id="dss" class="dssslide"  -->
### LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [MDD: Catégories](#mdd)
1. [DSS: Opérations système](#dss)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[19.01m](https://youtu.be/y5fXCWYq6m4)
1. [RDCU: Contrôleur GRASP](#rdcu)
1. [Architecture en couches](#couche)
1. [Exercice](#exercice)

--

<!-- .slide: class="dssslide"  -->
# DSS
## Diagramme Séquence Système

![Exemple DSS](assets/Fig10.5.png){.plain width="400px"}

--

<!-- .slide: class="dssslide"  -->

# DSS

- Créé à partir d'un cas d'utilisation
- Modélise l'interaction
  - Opérations système
  - Messages de retour (au besoin)
- Notation UML
- But : définir l'API (haut niveau)
- Système est une « boîte noire »

--

<!-- .slide: class="dssslide"  -->

# Faire un DSS

- Identifier l'acteur principal
- Modéliser système comme boîte noire
- Proposer une opération système pour chaque évènement système
  - Types primitifs pour arguments
  - Messages de retour si nécessaire

--

<!-- .slide: class="dssslide"  -->

### DSS: CU01 - Ajouter un livre à échanger

1. Le Client démarre un nouvel ajout de livre.
2. Le Client entre le code ISBN du livre, ainsi que le code de sa
condition.
3. Le Système enregistre le livre et présente sa description. 
> Le Client
répète les étapes 2 à 3 jusqu'à ce qu'il ait saisi tous les livres à
échanger.
4. Le Système présente la liste de livres que possède le Client.

Note: 
faire le DSS 
![CU01 - Ajouter un livre à échanger](https://www.plantuml.com/plantuml/svg/0/NP2nJiGm38RtF8Lr4oTH2TOErQ6Jc112gjXOGcgA8N4gsqMwjs7adgClHjeWXbio-FV__vzpKFDYSufEFuadBpw1sYbYUON2XJBWcv-ZtMUsHvyGUXmpmfCGcpEouZe-tzn20tSVUJOKc1aYVGd2yWtBERnx7b6S3vO5Tkqn4hBjm2i4LngC0asUhKZzIMtvIRY9waBJARGmBEVaHL2s_8Sr-MhlNCnv0a4rB8HQ6_yzlgBKPT9NBhE-tCRZzGj3o3oGKUQsplPEcwRhmbg66eIcLNJ80wmjRajjeGGcuWkEwcnBVoNv0u5XXh1TwWubf_peBm00 "CU01 - Ajouter un livre à échanger")

--

<!-- .slide: class="dssslide"  -->

### DSS: «Attaquer un pays»

1. Le Joueur attaquant choisit d'attaquer un pays voisin du Joueur défenseur.
2. Le Joueur attaquant annonce combien de régiments il va utiliser pour son attaque.
3. Le Joueur défenseur annonce combien de régiments il va utiliser pour sa défense.
4. Les deux Joueurs jettent le nombre de dés selon leur stratégie choisie aux étapes précédentes.
5. Le Système compare les dés et élimine les régiments de l'attaquant ou du défenseur selon les règles et affiche le résultat.

Note: solution dans deux pages

--

<!-- .slide: class="dssslide"  -->

### DSS: «Attaquer un pays»

> Les Joueurs répètent l'étape 2 jusqu'à ce que l'attaquant ne puisse plus attaquer ou ne veuille plus attaquer.

--

<!-- .slide: class="dssslide"  -->

### DSS: «Attaquer un pays»

![DSS pour Attaquer un pays](https://www.plantuml.com/plantuml/svg/0/NL4nRiCm3Dpz2Y9B6o16zy084Y1JWIxrcaMLMLUeJBiY1JG_gjwXZvLAuZJf847IyOvtr9R518c3h_ZJqMI26O3nAo9PV45cq-FEkvx08Wc6soevUjGzE7lYYnEzxziMfZ46QDnc9s9KAK0acCoHcoUtgOoLCS1Y_Jn6Z641Xi5MgYZEkicGADGUMVBFW2UGArjl6DRGvJIO431SP1-BvFbSQ6jerGhrgmCLO9_JEn9hYokohFmuJkg4GPCCZdAQjGtHg86lqlJscbFl1iryryAHBFzpvavtfFDZTyjgchekl90JHoz663eiAtw3DqM9LmMyAC24eOiC1-eG_8Evka21BfPfpFbqwbOpvMG_SjAAIXj3YJexFQVzIxUijbgYV_OB "DSS pour Attaquer un pays"){style="width:70%" .plain}

--

<!-- .slide: class="dssslide"  -->

tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Vrai/Faux: Il y a 5 opérations système dans ce DSS

![DSS pour  i Attaquer un pays  i](https://www.plantuml.com/plantuml/svg/0/NL4nRiCm3Dpz2Y9B6o16zy084Y1JWIxrcaMLMLUeJBiY1JG_gjwXZvLAuZJf847IyOvtr9R518c3h_ZJqMI26O3nAo9PV45cq-FEkvx08Wc6soevUjGzE7lYYnEzxziMfZ46QDnc9s9KAK0acCoHcoUtgOoLCS1Y_Jn6Z641Xi5MgYZEkicGADGUMVBFW2UGArjl6DRGvJIO431SP1-BvFbSQ6jerGhrgmCLO9_JEn9hYokohFmuJkg4GPCCZdAQjGtHg86lqlJscbFl1iryryAHBFzpvavtfFDZTyjgchekl90JHoz663eiAtw3DqM9LmMyAC24eOiC1-eG_8Evka21BfPfpFbqwbOpvMG_SjAAIXj3YJexFQVzIxUijbgYV_OB "DSS pour  i Attaquer un pays  i"){style="width:60%" .plain}

Note: https://b.socrative.com/teacher/#launch -> True/False

---

<!-- .slide: id="rdcu" class="rdcuslide" -->
### LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [MDD: Catégories](#mdd)
1. [DSS: Opérations système](#dss)
1. [RDCU: Contrôleur GRASP](#rdcu)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[17.54m](https://youtu.be/gZ3Jir-mKDE)
1. [Architecture en couches](#couche)
1. [Exercice](#exercice)


--

<!-- .slide: class="rdcuslide" -->

## 🤠:Pourquoi faire une RDCU?

Pour apprendre à faire une solution  
**modulaire** et **intuitive**

![Rappel spectre](https://www.plantuml.com/plantuml/svg/XLJRRjf047tVhnZbXOIAAcdVAeG2f9UqKLMLq3v07iQxWxrYlMljHPJyKTHFw5loOrtRc1X8gMJPqfapPsRFiNtfF5eVSiKSHqLmyVeDSqkf2xIOW_FhY3bl9Qyvsqg2V9bQ4xJWHXaBtg9siKJQimxuJ3g85qA6Mgoiz9uqB8ps83Nyb5gObMETPpb12mpAbmoDES4NArtPSdqxPftRZ1o1yHbP1ygO9QIMi9AQ_FW8fpakuvB1KfnBwqvyIXsFfHI9EDF2yEO6ffFttoUjuN1nViR-FTzXMjxqqIMlzH8-cs0rgcEqNqikOCAjBFmnsZUA9bdNMghjdRU1MYMkqBcHiOBi-C3_VTesglzIXzQQLSrAL6nZcHHb_cJ9-7L1hWOeB_mQSigJSk6g4qxwJjxJkxVdWxiJG0ShZ5sB649JV_mDOumlMUmlogmU_rIyhxne6Dtkgswt0XCH5j3lvr88HOD1GnWH1cv24RsRQsuqfy9Be-SQ0uYdXoJukJuTNKq_dDNIfSoX-ClQKmq5HHcAbvFfdkZ4n8IUXL_KnLJ6Z-LGULZYTHyssDLcnjD3JZQDIMnqwS3DMLN9OXXIfoqlFzK8SBDAp7hhPiROrddeALhuMMAKkEjLdhBAs1suH0_0wYYiFj1EeTcZDQJV2pE1BgEoNgPPXzSJBJHffkoIItJZsWvTq1Pkqv5jnk_HCtP9MiJ_qry0){.plain width="60%"}

Note:
Les stagiaires n'ont souvent pas la mission de faire une solution modulaire/intuitive. Les compagnies paient pour quelque chose qui fonctionne d'abord. Mais dans LOG210 on s'intéresse à la modularité et la facilité de maintenance!

--

<!-- .slide: class="rdcuslide" -->

## RDCU: aspects

- Proposer des **classes logicielles** correspondant aux **classes conceptuelles**
  - Inspirées du MDD
  - Pour réduire le *décalage des représentations*
- Utiliser les principes GRASP
  - **Faible Couplage** et **Forte cohésion** (LOG121!)
  - **Contrôleur** ([architecture en couches](#couche))

--

<!-- .slide: class="rdcuslide" -->

## RDCU - Jeu de dés

Opérations système du DSS

![DSS pour un scénario adapté de  i Jouer aux dés  i (Ch. 1 de Larman)](https://www.plantuml.com/plantuml/svg/0/NP71QiCm38RlVWhHKmlfngubb8xjLBPJOATUD4VDl2Lo9ikmClO-otFanQQq5BhwOB3-Nz8dUPCKHNFNklGHk4V13f8UMh9RWhzIQjfZRdKVMHaxWXUI6XalS-ap4tk2RmTsdYabREY-3Gs39rOIz-Cqg3Luh2heOnR83CcF0wE425XZh-DWhQ0CwstC983v2-fnIELjMEzu_l1s0tUJuGcbGruuz1e5Pgl9dMK6cC0xuz7WGu-i9bM7fEDlHqSnERzS9rXDHJiK8TbIddFiB5JPsDmiN1jZ3xsP3RaBF0xddFS9wShiotAvd4GB5w1HiOKwGuks2Ia0nE1jRwWmRx2nOX0pzBQyl2XspA_JC4TUIWNyUyB9JyaHrp11dJbEN1VePvYDEUtR_W00 "DSS pour un scénario adapté de  i Jouer aux dés  i (Ch. 1 de Larman)"){.plain}

--

<!-- .slide: class="rdcuslide" -->

## RDCU - Jeu de dés

Première opération système:

![dss_jouer_aux_dés](https://www.plantuml.com/plantuml/svg/0/NOyz2a9138JxFKMmqi8BM8W_dM0bs8VTlCVYRbQJR27YVVGSxs86Ap55Ydmp4sQZXcAzbg2Np5SKhA1sB-HRSlmZYGRinOR6nbW9pYG96NyKEuoNKLhdj6-b2PWWgoDY-_r0jquS2Hu1V8waYYDjInuPeaj9mZDWD0-OhGwjKvSPe48CxhSSynNP79tkQjEhqXTgYCkrmWhIzAueGdAWFkTM_NJoCZmkmeOuUQKF "dss_jouer_aux_dés"){.plain width="60%"}

Qui envoie l'opération? Qui la reçoit?

--

<!-- .slide: class="rdcuslide" -->

## RDCU (solution Java Swing)

Opération `démarrerJeu` - qui **envoie** cette opération?

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: class="rdcuslide" -->

## RDCU (solution Java Swing)

Opération `démarrerJeu` - qui **reçoit** cette opération?

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: class="rdcuslide" -->

### Principe Contrôleur GRASP

**Problème:** Quel est le premier objet en dehors de la couche présentation **qui reçoit** et coordonne («&nbsp;contrôle&nbsp;») les opérations système ?

--

<!-- .slide: class="rdcuslide" -->

### Principe Contrôleur GRASP

**Solution:** Affectez une responsabilité à la classe qui correspond à l'une de ces définitions:
1. Elle représente le **système global,** un « **objet racine** », un **équipement** ou un
**sous-système**.
1. ...

![MDD JeuDeDés](https://www.plantuml.com/plantuml/svg/NL7DIWCn4BxdAOQzL8KAzTY355mGYWL1y3xTp7QZoMH9PeKYle_x7FjYJafjgvSay_tD35bbmIH3yB2fQvFV7VUOC42MlISzasiAUy5OQd7mqaOMna3mIiaYe_7K2aY4v7QTW7M96d6HJUSi0OLUzX0eR2bbCpkdUSSa-vuW9kcY4IVQTXFjzAst7S36W2g1AxJOopGMR4sAApkDkPGFtIqi2l24AI1VcyPZph2E0mq9FWq0nm1BUD5bU5VAxRFkx2Whw5WkaKVSyJIUcAzZLgsDIz07-fBvbzHnQb95DkRqX6fHmNmErLrrC1T7umU1Up37mQeRLVZvGNdsBU5DwIAR_Uh-9tdavg1O4Llzcny0){.plain}

--

<!-- .slide: class="rdcuslide" -->

# RDCU - Contrôleur

`JeuDeDés` est le contrôleur GRASP (inspiré du MDD)

![Swing et JeuDeDés](assets/SwingJeuDeDesControleur.png){.plain}

--

<!-- .slide: class="rdcuslide" -->

## RDCU - détaillé 

Faire un design modulaire et facile à comprendre. Affecter les responsabilités aux bonnes classes.

![Swing et JeuDeDés](assets/cohesion_RDCU.png){width="65%" .plain}

---

<!-- .slide: id="couche" class="packageslide" -->
### LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [MDD: Catégories](#mdd)
1. [DSS: Opérations système](#dss)
1. [RDCU: Contrôleur GRASP](#rdcu)
1. [Architecture en couches](#couche)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[21.45m](https://youtu.be/BNu7_aT4WwU)
1. [Exercice](#exercice)

--

<!-- .slide: class="packageslide" -->

## Architecture logique

Solution avec Java/Swing:

![Swing et JeuDeDés](assets/SwingJeuDeDes.png){.plain}

--

<!-- .slide: class="packageslide" -->

## Architecture logique

Solution avec Navigateur/HTTP/ExpressJS/TypeScript:

![ExpressJS et JeuDeDés](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dss-details-demarrerJeu.puml){.plain}

--

<!-- .slide: class="packageslide" -->

## Comprendre et respecter l'architecture en couches du laboratoire

https://log210-cfuhrman.github.io/log210-valider-architecture-couches/

---

<!-- .slide: id="exercice" class="codeslide" -->

### LOG210 Séance #02
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [MDD: Catégories](#mdd)
1. [DSS: Opérations système](#dss)
1. [RDCU: Contrôleur GRASP](#rdcu)
1. [Architecture en couches](#couche)
1. [Exercice![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}](#exercice)

--

<!-- .slide:  class="codeslide" -->
## Exercice Mise en plateau

https://docs.google.com/document/d/1nGiQOeRyrY-Tx-J82z3qa0vAoUsF1rvHMNjyPGXH2mY/edit?usp=sharing

---

<!-- .slide: class="feedbackslide" -->
## Séance #02
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs


---

# Références et images

1. mapping by Vectors Point from the Noun Project
2. user interaction by mynamepong from the Noun Project
3. Prototyping by ProSymbols from the Noun Project
