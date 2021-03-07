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
title: 'LOG210-C13-00-seance'
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

---

<!-- .slide: id='examen13' -->
## LOG210 Séance #13
### Analyse  et  conception  de logiciels

1. [Examen final](#examen13)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}{.plain}[57.43m](https://youtu.be/1xdFdYo9PLc)

Note: video 88m


--

# Examen final

::: block {style=text-align:left}
- Durée: 3 heures

- Nombre de questions: 90

- Documentation permise: Tout documentation écrite
:::

--

### Analyse et conception orientées object
- Développement itératif, évolutif et agile


- Processus unifié: 
    - Phases
      - Inception
      - Élaboration
      - Construction
      - Transition
    - Disciplines

--

## Analyse
  - Exigences
    - Cas d’utilisation
    - FURPS


  - Diagramme de cas d'utilisation
  - MDD
  - Diagramme de séquence système
  - Diagramme d'activité
  - Contrats

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
- Paramètres 
- Relation avec les RDCU
- Retour d’opération <=> RDCU


--

<!-- .slide: class="dssslide" -->

## Chp14 Diagramme d’intéraction
- Nommez moi les deux diagramme d'intéraction? 
    - Avantages/désavantages?{.fragment shade-up} 
- Un diagramme d’intéraction est composé de classe ou d’instance de classe? {.fragment shade-up} 
- Comment représente t-on un résultat de message en UML.{.fragment shade-up} 
- Comment représente t-on une création d’instance en UML?{.fragment shade-up} 
- Pourquoi utilise t’on des cadres dans le diagramme d’intéraction?{.fragment shade-up} 

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
    - Communication
  - Diagramme d'état
  - Diagramme de package
  - Diagramme de déploiement
  - Diagramme de composant

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
  - Réaliser les postconditions du contrat en créant les méthodes...
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
:::

--

<!-- .slide: class="rdcuslide" -->

#### Maitriser la méthodologie pour construire les RDCU...
- Être en mesure d'identifier les patrons GRASP dans un design
- De faire un design avec les patrons GRASP
- De critiquer un design par rapport à l’application des patrons
- De justifier correctement un patron GRASP

--

<!-- .slide: class="rdcuslide" -->

## Chp22 Grasp suite
1. Quel sont les 4 derniers patrons GRASP?
1. Quel patron correspond à une invention de la part du concepteur?{.fragment .shade-up}
1. Quel patron permet de réduire le couplage?{.fragment .shade-up}
1. Quel patron permet d’éliminer les effets indésirable des composants instable?{.fragment .shade-up}
1. Quel patron permet le concept d’ouverture à l’extensibilité et fermeture aux modifications?{.fragment .shade-up}


--

<!-- .slide: class="packageslide" -->
## Chp12 Diagramme de package
1. Quels artéfacts influence le diagramme de package?
1. Qu’est ce que l’architecture logicielle?
1. Quel sont les couche typiques en OO?
1. Avantages de la modélisation en couche?

--

<!-- .slide: class="packageslide" -->
### Architecture en couches
- Patrons architecturaux en couche
- Organisation en package
- Couplage entre package
- dépendances « ascendantes » interdites
- couches basses sont plus stables
- Comprendre MVC dans le contexte du patron architectural « layers »
- Séparation MVC

--

<!-- .slide: class="packageslide" -->
## Chp29 Conception de packages
1. Quels principes utilise t-on pour organiser les packages?

--

<!-- .slide: class="packageslide" -->

## Chp31 Déploiement/Composantes
1. Quel est l’utilité du diagramme de déploiement?
1. Quel sont les type de nœuds dans un diagramme de déploiement?

--


<!-- .slide: class="toolslide" -->
## Chp20 Outils UML
1. Qu’est ce que la pro-ingénierie?
1. Qu’est ce que la rétro-ingénierie?
1. Qu’est ce que l’ingénierie cycle?
1. Comment choisi t’on un outils UML?

--


<!-- .slide: class="gofslide" -->
## GOF
::: block {style=font-size:0.8em}
- Adaptateur
- Commande
- Composite
- Template method
- Décorateur
- Fabrique Abstraite
- Fabrique concrète
- Itérateur
- Proxy
- Observateur
- Singleton
- Stratégie
- Visiteur
:::

--

<!-- .slide: class="gofslide" -->

## Chp23 Application des GoF
1. Quels patrons GRASP retrouve t’on dans plusieurs patrons GOF.
2. Faire la mise en correspondance entre les patrons GOF et les patrons GRASP.

--

<!-- .slide: class="gofslide" -->
## Chp30 Application Gof
1. Qu’est ce qui motive l’utilisation d’un patron GOF?
1. Donnez moi un exemple de faute, erreur et échec.
1. Qu’est ce que la paternite?


--

# Autres
- Test et réfactorisation
- TDD
- Notation UML
- Dette techniques
- Laboratoire

---


ps://github.com/97-things/97-things-every-software-architect-should-know


---

---


<!-- .slide: class="dssslide" -->

## Exercices diagramme d’activité
::: block {style=text-align:left}
Par ordre de complexité
1. [Retour de voiture louée](https://docs.google.com/document/d/1u46J7q2Ddx_a9DmZcubZQgBxo0IG_TqlzN-ADX2bXzM/edit?usp=sharing)
1. [Processus d'achat sur le Web](https://docs.google.com/document/d/1S-RPphojGUECpL_c86J85cygnlu_OztB_oST0lTsX_A/edit?usp=sharing)
1. [Recette de cuisine](https://drive.google.com/open?id=0B1nFsP0-88qudEFxaVUyVFhOdlk)
1. [Ordinateur de plongée](https://drive.google.com/open?id=1TuQvODQlD4rfFub54gqMk4Sl34Fg_WjQ)

Sans solution:
1. [Demander un remplacement](https://drive.google.com/open?id=0B1nFsP0-88qubU42YmZlb1Q2SUE)
:::

--

<!-- .slide: class="stateslide" -->

## Exercices diagramme d'état
::: block {style=text-align:left;font-size:0.8em}
Par ordre de complexité
1. [Téléphone intelligent](https://docs.google.com/document/d/1q4lxM57nNkflYTwNAD2D8ytHzk-1McsT7QJNK9WWUE8/edit?usp=sharing)
1. [Guichet automatique](https://docs.google.com/document/d/1TwktdMLWQ6NIS-7GF88fmsKbsitungXv_Ban_52ayhc/edit?usp=sharing)
1. [Vidéo projecteur](https://drive.google.com/file/d/17QHRAjmdIm0paFwLidhHs4v3R1NtvpOD/view?usp=sharing)

Autres exercices sans solution
1. [CU29-Annuler un service](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
1. [CU30-Confirmer une visite supervisée](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
1. [CU31-Confirmer des échanges de garde](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.571qr0tmgkvv)
1. [CU32-Rédiger une note d’observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.1u1pach8bqyv)
1. [CU33-Corriger une note d’observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.8rnjn3p0d663)
:::

--

<!-- .slide: class="packageslide" -->
## Exercices diagramme de déploiement

1. [Application web](https://docs.google.com/document/d/1KdTyAWF27UavHbx1uLpxswOpJbw56A1oNnEUoZi45KM/edit?usp=sharing)
1. [Tutorial online](http://www.peter-lo.com/Teaching/U08182/Tut_04_ans.pdf)
1. [UML deployment diagram - Apple iTunes](https://www.conceptdraw.com/examples/uml-deployment-diagram)
1. [UML Deployment Diagrams Examples
](https://www.uml-diagrams.org/deployment-diagrams-examples.html)


---


<!-- .slide: class="feedbackslide" data-background-color="skyblue" -->
## Séance #13
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs


---

