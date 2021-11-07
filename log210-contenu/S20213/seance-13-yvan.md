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
title: 'LOG210-seance-13'
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

<!-- .slide: id='examen13' -->
## LOG210 Séance #13
### Analyse  et  conception  de logiciels
1. Correction TP12
2. Grasp dans les GOF (suite...)
3. Diagramme de déploiement (nc 19)
4. Examen final
5. Exercices (au choix)
6. 30-Things Every Agile Developer Should Know





Note: video 88m

:::block {style=font-size:0.5em}
[whiteboard](#whiteboard) | [Supplément au cours en HTML](https://cc-yvanross.github.io/14f3178688ff2d131977e55d7002b1fc3b09e3ad/export/index.html)
:::

--

## Correction T12
- [Adaptateur pour Maps](https://drive.google.com/file/d/1i4RXG-2nPKOMMVatIFc-IPaPW7orEs7i/view)
- [GRASP dans les GoF](https://drive.google.com/file/d/1i3qg0cumNhl_VmsLHqAf04n2_ANfq5Lc/view)


--


<!-- .slide: id='grasp11' class="rdcuslide" -->
## GRASP dans les GoF

[Rapport technique (pas à l'examen)](https://espace2.etsmtl.ca/id/eprint/3766/)

--

<!-- .slide: class="rdcuslide" -->
### Table 7: GRASP dans les GoF

| Pattern GoF  | Indir. | Poly. | Fab. Pure | P. V. |
| ----------------------- | ----------- | ------------ | ---------------- | ------------------- |
| Abstract factory        | ✓           | ✓            | ✓                | ✓                   |
| Builder                 | ✓           | ✓            | ✓                | ✓                   |
| Factory method          | ✓           | ✓            |                  | ✓                   |
| Prototype               | ✓           | ✓            |                  | ✓                   |
| Singleton               |             |              |                  |                     |
| Adapter                 | ✓           | ✓            | ✓                | ✓                   |
| Bridge                  | ✓           | ✓            | ✓                | ✓                   |

Note: Fabrication pure nécessite la création d'une classe concrète. Donc si c'est une interface (PV). Toute les classes qui implémente cette interface ne comptes pas.

--

<!-- .slide: class="rdcuslide" -->
### Table 7: GRASP dans les GoF

| Pattern GoF  | Indir. | Poly. | Fab. Pure | P. V. |
| ----------------------- | ----------- | ------------ | ---------------- | ------------------- |
| Composite               | ✓           | ✓            |                  | ✓                   |
| Decorator               | ✓           | ✓            |                  | ✓                   |
| Facade                  | ✓           |              | ✓                | ✓                   |
| Flyweight               | ✓           | ✓            | ✓                | ✓                   |
| Proxy                   | ✓           | ✓            | ✓                | ✓                   |
| Chain of responsibility | ✓           | ✓            | ✓                | ✓                   |

--

<!-- .slide: class="rdcuslide" -->
### Table 7: GRASP dans les GoF

| Pattern GoF  | Indir. | Poly. | Fab. Pure | P. V. |
| ----------------------- | ----------- | ------------ | ---------------- | ------------------- |
| Command                 | ✓           | ✓            | ✓                | ✓                   |
| Interpreter             | ✓           | ✓            | ✓                | ✓                   |
| Iterator                | ✓           | ✓            | ✓                | ✓                   |
| Mediator                | ✓           | ✓            | ✓                | ✓                   |
| Memento                 | ✓           |              | ✓                | ✓                   |
| Observer                | ✓           | ✓            | ✓                | ✓                   |
| State                   | ✓           | ✓            |                  | ✓                   |

--

<!-- .slide: class="rdcuslide" -->
### Table 7: GRASP dans les GoF

| Pattern GoF  | Indir. | Poly. | Fab. Pure | P. V. |
| ----------------------- | ----------- | ------------ | ---------------- | ------------------- |
| Strategy                | ✓           | ✓            |                  | ✓                   |
| Template method         | ✓           | ✓            |                  | ✓                   |
| Visitor                 | ✓           | ✓            | ✓                | ✓                   |



---

## Diagramme de déploiement

<a href="ssh://rossypro@localhost/open \/Users\/rossypro\/sources\/ets\/log210\/log210-contenu\/S20212\/2021-07-13-LOG210-seance13.pdf">Déploiement ndc 19</a>

--

<!-- .slide: class="packageslide" -->
## Exercices diagramme de déploiement

[TP13 Diagramme de déploiement](https://docs.google.com/document/d/1NI8g2sui90eZB-fkxfh0s3FkUvr0CRqjQnH_owQ8fcE/edit?usp=sharing)

1. [Tutorial online](http://www.peter-lo.com/Teaching/U08182/Tut_04_ans.pdf)
2. [UML deployment diagram - Apple iTunes](https://www.conceptdraw.com/examples/uml-deployment-diagram)
3. [UML Deployment Diagrams Examples
](https://www.uml-diagrams.org/deployment-diagrams-examples.html)


---


# Examen final

::: block {style=text-align:left}
- Durée: 3 heures
- Documentation permise: 2 feuilles manuscrites recto-verso. 
  - Aucune photocopie permise.{style="color:red"}
- <b>Vous devez remettre vos feuilles de notes manuscrites avec l'examen sinon vous obtiendrez une note de 0%</b>{style="color:red"}
:::

--

## Analyse
  - Exigences
    - Cas d’utilisation
    - FURPS
  - Diagramme de cas d'utilisation
  - MDD
  - Diagramme de séquence système
  - Contrats
  - Diagramme d'activité
  - Diagramme d'état

--

<!-- .slide: class="mddslide" -->

#### Maîtriser la méthodologie pour construire le modèle du domaine
- Utilité du MDD
- Concepts
  - identification par les noms
  - identification par listes de catégories
- Associations
  - critères pour des associations utiles
  - identification par listes de catégories
  - Noms, cardinalités, rôles
- Attributs
  - Simple vs complexe
  - Données primitives vs non primitives

--

<!-- .slide: class="dssslide" -->

#### Maitriser la méthodologie pour construire les DSS
- Raison d’être des opération systèmes 
- Relation avec le contrat
- Paramètres (type primitif)
- Retour d’opération (type primitif) <=> RDCU
- Cadres 
  - Opération dans les cadres


--

<!-- .slide: class="contratslide" -->

#### Maitriser la méthodologie pour construire les contrats

- Raison d’être
- Postconditions et leur relation avec le modèle du domaine
- Création d’instance et destruction
- Modification d’attribut
- Création et destruction d’associations
- Utiliser le langage du modèle du domaine!!!

--

<!-- .slide: class="rdcuslide" -->

### Conception
  - RDCU: Diagramme d'intéraction + GRASP

  - Intéraction: 
    - Séquence 
    - <s>Communication</s>
  - Diagramme de package
  - Diagramme de déploiement

--

<!-- .slide: class="rdcuslide" -->
#### Maitriser la méthodologie pour construire les RDCU...
::: block {style=font-size:0.7em}
- Raison d'être de la réalisation de cas d’utilisation
- Faire le design à partir d’un contrat
- Création d’instance != Création d’association
- Traçabilité (lien avec les postconditions)
- Étapes à suivre
  - Choisir le contrôleur
  - Réaliser les postconditions du contrat en **créant les méthodes**
  - Réaliser les retours d'information de l'opération système
  

--

<!-- .slide: class="rdcuslide" -->
#### Maitriser la méthodologie pour construire les RDCU...

- Où mettre les méthodes? Justifier avec les patrons GRASP
  - Contrôleur
  - Créateur
  - Expert en information
  - Faible couplage
  - Forte cohésion
  - Polymorphisme
  - Protection de variation
  - Fabrication pure
  - Indirection

--

<!-- .slide: class="rdcuslide" -->

#### Maitriser la méthodologie pour construire les RDCU...
- Être en mesure d'identifier les patrons GRASP dans un design
- De faire un design avec les patrons GRASP
- De critiquer un design par rapport à l’application des patrons
- De justifier correctement un patron GRASP

--

<!-- .slide: class="packageslide" -->
### Architecture en couches
- Patrons architecturaux en couche
- Organisation en package
- Couplage entre package
- dépendances « ascendantes » interdites
- couches basses sont plus stables
- Comprendre MVC dans le contexte du patron architectural « Couches »


--

<!-- .slide: class="packageslide" -->
## Chp29 Conception de packages
1. Quels principes utilise t-on pour organiser les packages?
   1. Cohésion fonctionnelle
   2. Cohésion relationnelle

--

<!-- .slide: class="packageslide" -->

## Chp31 Déploiement
1. Quel est l’utilité du diagramme de déploiement?
1. Quel sont les type de nœuds dans un diagramme de déploiement?

--


<!-- .slide: class="gofslide" -->
## GOF
::: block {style=font-size:0.8em}
- Adaptateur
- Proxy
- Fabrique methode
- Singleton
- Observateur
:::

--

<!-- .slide: class="gofslide" -->

## Chp23 Application des GoF
1. Quels patrons GRASP retrouve t’on dans plusieurs patrons GOF.
2. Faire la mise en correspondance entre les patrons GOF et les patrons GRASP.
1. Qu’est ce qui motive l’utilisation d’un patron GOF?

--

<!-- .slide: class="gofslide" -->
## Chp30 Application Gof
1. Donnez moi un exemple de faute, erreur et échec.
   1. Quel service voulez vous offrir?{.fragment .shade-up}


--

# Laboratoire
- HRC
- Typescript
- Réusinage
  - Dette techniques  
  - Code smell
- TDD

---

## Exercices au choix
- [Correction des travaux pratiques](https://drive.google.com/open?id=1lB2MVoLuHMyGI_HKa7gB9EMDqsCV_b1z&authuser=cc-yvan.ross%40etsmtl.net&usp=drive_fs)
- [LOG210 Exercices](https://github.com/yvanross/LOG210-exercices)


--

## 30-Things Every Agile Developer Should Know
https://docs.google.com/document/d/1biz7N7QCOPp-0E00Ljj2D8IqHJk1DudTXPAm7KmNF-E/edit?usp=sharing

---

## Bonne préparation

Utiliser Discord pour poser vos questions

:::block {style=font-size:0.5em}
[whiteboard](#whiteboard)
:::


---

<!-- .slide id="whiteboard" --->
