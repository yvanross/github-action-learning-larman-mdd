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
title: 'LOG210-C06-00-seance'
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

<!-- .slide: class="codeslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[7.26m](https://youtu.be/scVEOHnTiDU)
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="codeslide"  -->
## Pourquoi une approche OO?
- Objets logiciels sont proche des objets de la vraie vie
    - Structure du programme peut être plus clair
- OO: technologie utilisée en industrie
    - Outils, langages, modèles, etc.
- Objets peuvent être réutilisés dans plusieurs programmes
- Liaison dynamique : modules peuvent être spécifiés à l'exécution

--

<!-- .slide: class="codeslide"  -->

## Comment développer en OO?
::: block {style=font-size:1em}
- Il existe beaucoup de conseils, d'approches
- Approche méthodique (ingénierie)
    - Conception par responsabilité: la modularité
    - GRASP (General Responsibility Assignment Software Pattern)
    - Patterns GoF (Gang of Four)
    - UML (Unified Modeling Language) 
    - UP (Unified Process) 
:::

--

<!-- .slide: class="codeslide"  -->
## UML
- «&nbsp;Langage visuel dédié à la spécification, la construction et la documentation des artefacts d'un système&nbsp;» -- OMG
- Trois façons d'appliquer UML
    - Mode esquisse – diagrammes informels et incomplets, tracés à la main
    - Mode en plan – diagrammes détaillés
    - Comme langage de programmation – spécification complète et exécutable d'un système logiciel en UML

--

<!-- .slide: class="codeslide"  -->
## Perspectives UML
- Conceptuel (monde réel)
- Spécifications (logicielles)
- Implémentation (logicielle)
![image](assets/01-chp1_OO_14.pptx/perspectives_uml.png){.plain width=100%}

--

<!-- .slide: class="codeslide"  -->
## Spécification de «&nbsp;classe&nbsp;»
1. **Classe conceptuelle**: concept ou entité du monde réel.
1. **Classe logicielle**: composant logiciel du point de vue des spécifications ou de l'implémentation, indépendamment du processus ou de la méthode.
1. **Classe d'implémentation**: Classe implémentée dans un langage OO spécifique tel que Java.

--

<!-- .slide: class="codeslide"  -->
## Validation de la compréhension
Quels sont les genres des classes dans l'exemple suivant?

![Socrative](assets/01-chp1_OO_14.pptx/perspectives.png){width=75% .plain}

1. Conceptuelle, Spécification, Spécification
2. Implémentation, Conceptuelle, Spécification
3. Implémentation, Spécification, Conceptuelle

---

<!-- .slide: id="equipe" class="equipeslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[7.17m](https://youtu.be/UYwIfODjHPI)
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: id="equipe" class="equipeslide"  -->

## Rencontres efficaces

1. N'inviter que ceux qui doivent absolument être présents.
2. Préparer et distribuer l'ordre du jour bien avant que ça commence.
3. Terminer tôt si les objectifs ont été atteints.
4. Respecter l'ordre du jour.
5. Planifier autour des pauses habituelles (p.ex., à midi, à la fin de la journée).

[TeamGeek]

---

<!-- .slide: id='pu' class="puslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[15.20m](https://youtu.be/-HdeYp9Qr5I)
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="puslide"  -->
## Processus unifié?

- Quelle est une durée typique d'une itération dans le processus unifié?

--

<!-- .slide: class="puslide"  -->

### Approche évolutive vs approche en cascade

![larman/F5.1](assets/larman/F5.1.png){.plain width=75%}

--

<!-- .slide: class="puslide"  -->

## Processus Unifié

- Souple et ouvert – peut accommoder l'Extreme Programming (XP), Scrum, etc.
 - Développement piloté par les tests
    - intégration continue «&nbsp;war room&nbsp;»
    - réunions quotidiennes
    - etc.
- Processus *itératif* et *évolutif*

--

<!-- .slide: class="puslide"  -->
## Itératif et évolutif

![Itératif et évolutif](assets/02-chp2_UP_24.pptx/iteratif-evolutif.png){.plain}

--

<!-- .slide: class="puslide"  -->

## Résumé

::: block {style=font-size:0.8em}
- Avantages du processus unifié
    - courtes itérations produisant un système partiel
    - rétroaction du client permet d'ajuster la prochaine itération
    - meilleure gestion du risque
- Inconvénients
    - Clients veulent les «&nbsp;promesses&nbsp;» de coûts au début
    - Contrat traditionnel (!) n'est pas adapté pour un processus itératif (orienté modèle en cascade)
:::

<!-- .slide: data-fullscreen data-background-image="http://ecx.images-amazon.com/images/I/51pmCeDUXmL._SS500_.jpg" 

data-background-size="20%" data-background-position="top 5% right 5%" data-background-opacity="0.5" -->

--

#### Relation entre artefacts — Conception

![figure F16.1, A17.1](assets/larman/F16.1.png){.plain width=50%}

---

<!-- .slide: id="furps" class="furpslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
2. **[FURPS](#furps)** - FURPS![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[39.44m](https://youtu.be/YEZUVE8tJfw)
3. **[CU](#cu)** - Cas d'utilisation
4. **[MDD](#mdd)** - Modèle du domaine
5. **[DSS](#dss)** - Diagramme de séquence système
6. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
7. **[DCL](#dcc)** - Diagramme de classes de logicielles
8. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
9. **[TDD](#tdd)**  - Développement piloté par les test
10. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="furpslide"  -->

## FURPS - Exigences du client
- FURPS+
    1. **F**onctionnalité (Use case)
    1. **U**sability (Aptitude à l'utilisation, facteurs humains, aide et documentation)
    1. **R**eliability (Fiabilité)
    1. **P**erformance
    1. **S**upportability  (Possibilités de prise en charge, adaptabilité, maintenabilité, etc.)

--

<!-- .slide: class="furpslide"  -->

## FURPS et Patrons

L'application d'un patron doit être motivée par des exigences: 
- *Façade* favorise la modifiabilité du code (**S**)
- *Memento* favorise l'implémentation de «&nbsp;Undo&nbsp;» (**F** et **U**)
- *Stratégie* favorise des «&nbsp;plug-in&nbsp;» (**S**)
- *Stratégie* peut faciliter la mise en place de la redondance de l'information (**R** et **P**)
- *Flyweight* favorise une meilleure performance (**P**)

--

<!-- .slide: class="furpslide"  -->

## Définition des besoins
- Cas d'utilisation
    - Descriptions des besoins fonctionnels
    - Le «&nbsp;F&nbsp;» dans FURPS

--

<!-- .slide: class="furpslide"  -->

## Énoncé laboratoire

Le modèle FURPS est utilisé.

Plus d'exemples.

--

<!-- .slide: class="furpslide"  -->

### Comment organiser les besoins dans le PU?

- Plusieurs artefacts décrivent les besoins
![artefacts](assets/03-chp5_exigences_6.pptx/artefacts.png){.plain width=90%}

--

<!-- .slide: class="furpslide"  -->

## Exigences FURPS+
::: block {style=font-size:0.7em}
- Une messagerie en nuage
- Calendriers et contacts partagés
- Messagerie instantanée, appels de PC à PC et conférence en ligne
- Site Intranet pour le partage de fichiers
- Site Web destiné au public
- Installation et administration simples
- Antivirus et filtrage antispam
- Support de la communauté Microsoft
- Disponibilité à 99,9&nbsp;% garantie financièrement
- Office Web Apps (Word, Excel, PowerPoint, et OneNote)
- Support en direct par téléphone 24h/24 et 7j/7
- Synchronisation Active Directory
- Prise en charge de la messagerie vocale hébergée
- Stockage du courrier électronique et archivage illimités
:::

--

<!-- .slide: class="furpslide"  -->

## Résumé

- Les besoins ne sont pas juste les fonctionnalités
    - Besoins non fonctionnels (qualités) sont souvent ignorés: convivialité, fiabilité, extensibilité, etc.
    - FURPS+ facilite la classification des besoins
- Définition des besoins est itérative dans le processus unifié

---


<!-- .slide:  id='cu' class="cuslide"  -->

### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--


<!-- .slide: class="cuslide"  -->
### Cas d'utilisation
::: block {style=font-size:0.8em}
- Que fait le système et non comment
- Trois types:
    - Abrégé
        - Un paragraphe décrivant le scénario principal
    - Informel (casual)
        - Plusieurs paragraphes décrivant plusieurs scénarios
    - Détaillé
        - Toutes les étapes et les variantes sont indiquées en détail, de même que les préconditions et les garanties en cas de succès
:::

--

<!-- .slide: class="cuslide"  -->

## Définitions
::: block {style=font-size:0.8em}
- Acteur
    - Entité qui a un comportement, comme une personne (identifiée par un rôle)
- Scénario
    - Suite spécifique d'actions et d'interactions entre un ou plusieurs acteurs et le système. C'est une histoire particulière de la façon dont on utilise un système
- Cas d'utilisation
    - Collection de scénarios de réussite ou d'échec.
:::

--

<!-- .slide: class="cuslide"  -->
## Acteur

- Quelque chose ayant un comportement
    - un usager, identifié par un rôle
    - un système informatique
    - une organisation
    - par exemple : un cassier

![acteur](assets/04-chp6-Cas-utilisation_21.pptx/acteur.jpeg){width=20% .plain}


---

<!-- .slide: id='mdd' class="mddslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[24.12m](https://youtu.be/y8AZDw_Z41I)
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="mddslide"  -->

### Réduire le décalage des représentations
![larman/F9.6](assets/larman/F9.6.png){width=80% .plain}


--

<!-- .slide: class="mddslide"  -->
## Chap 9
1. Qu'est-ce qu'un modèle du domaine?
1. Que veut dire symbole, intension et extension quand on parle d'un MDD? {.fragment .shade-up}
1. Qu'est-ce que le décalage des représentations? {.fragment .shade-up}
1. Qu'est-ce qu'une classe de description? {.fragment .shade-up}
1. Quand doit-on représenter une association? {.fragment .shade-up}
1. Décrivez la notation UML d'un MDD {.fragment .shade-up}
1. Qu'est-ce qu'un exemple des associations multiples? {.fragment .shade-up}
1. Qu'est-ce qu'un attribut dérivé? Notation ?{.fragment .shade-up}

--

<!-- .slide: class="mddslide"  -->
## Chp9 complexité
1. Qu'est-ce que la complexité inhérente?
2. Donnez un synonyme de inhérente.{.fragment .shade-up}
3. Qu'est-ce que la complexité accidentelle?{.fragment .shade-up}
4. La complexité inhérente est-elle due au problème ou à la solution?{.fragment .shade-up}
5. Est-il plus facile de gérer la complexité inhérente ou accidentelle? Pourquoi?{.fragment .shade-up}
6. Comment peut-on gérer la complexité inhérente?{.fragment .shade-up}


--

<!-- .slide: class="mddslide"  -->
## Validation de la compréhension

En UML on modélise les classes conceptuelles et les classes logicielles dans la même perspective.{align=left}
 
 - Vrai 
 - Faux

--

<!-- .slide: class="mddslide"  -->
## Chp26 Affinement du MDD

1. Qu'est-ce que la généralisation?
1. Quelle est la relation entre la sous classe et la super classe?{.fragment .shade-up}
1. Qu'est-ce qu'une classe d'association?{.fragment .shade-up}
1. Est-il préférable d'utiliser une agrégation ou une composition? Pourquoi?{.fragment .shade-up}
1. Qu'est-ce qu'un attribut dérivé?{.fragment .shade-up}

---

<!-- .slide: id='dss' class="dssslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[18.28m](https://youtu.be/h_cKLbxI-zw)
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="dssslide"  -->
## Chp10 DSS
1. Quels sont les artéfacts qui influencent ou sont influencés par le DSS?
2. Qu'est-ce qu'un DSS?{.fragment .shade-up}
3. Pourquoi tracer un DSS?{.fragment .shade-up}

--

<!-- .slide: class="dssslide"  -->

### Influence entre artefacts du PU

![Influence entre arteface](assets/01-chp10-Diagrammes_de_sequence_systeme_9.pptx/influence.png){.plain width=55%}


Note: Domain diagrams represent static relationships. Why?
What about modeling dynamic behavior?
Interaction diagrams model how groups of objects collaborate to perform some behavior
Typically captures the behavior of a single use case

---

<!-- .slide: id='contrat' class="contratslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--



# Chp11 Contrats
1. Quels sont les éléments d'un contrat?
1. Quelle est la relation entre le DSS et les contrats?{.fragment .shade-up}
1. Que décrivent les postconditions?{.fragment .shade-up}

--

<!-- .slide: class="contratslide"  -->
### Influence d'artefacts du Processus Unifié

![artefacts](assets/02-chp11_Contrats_28.pptx/artefacts.png){.plain width=60%}

--

<!-- .slide: class="contratslide"  -->

### Contrats - Erreurs fréquents

::: block {style=font-size:0.9em}
- Ne pas mettre les paramètres de l'opération
- Inventer de nouveaux paramètres
- Ne pas utiliser un paramètre pour trouver une instance d'un objet lorsque le contrat spécifie que la relation est faite sur la base de correspondance avec une clé.
- Les postconditions ne sont pas écrites au passé.
- Les postconditions ne sont pas cohérentes avec le MDD
:::

---

<!-- .slide: id='dcc' class="dclslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

## Chp15 Diagramme  de classe
1. Quelle est la différence entre un diagramme de classes conceptuelles et logicielles?
1. Quelles sont les deux façons de noter les attributs?{.fragment .fade-up}
1. Pourquoi fait-on un DCC?{.fragment .fade-up}

--

<!-- .slide: class="dclslide"  -->

## Validation de la compréhension

![register-sale](assets/07-chp15F-16A_DiagrammesDeClasses_17.pptx/register-sale.png){.plain}

- Combien d'attributs pour Register et Sale ?
    - A. 1, 1
    - B. 2, 1
    - C. 1, 2
    - D. 2, 2

Note: B: 2, 1 puisque Register connaît sa Vente et doit stocker sa référence `currentSale`


---

<!-- .slide: id='rdcu' class="rdcuslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[9.42m](https://youtu.be/_sR9pej9l_8)
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra
:::

--

## Chp17 Conception avec les GRASP
1. Qu'est-ce qu'une RDCU?
1. Quelle est l'utilité des contrats d'opérations dans une RDCU? {.fragment .shade-up}
1. Est-ce que le retour d'information dans une opération du DSS est important pour la création d'une RDCU? {.fragment .shade-up}
   - Pourquoi? {.fragment .shade-up}

--

<!-- .slide: id='visibilite' class="rdcuslide"  -->


## Chp18 Visibilité

1. Nommez les 4 types de visibilités.
2. Comment déterminer l'ordre d'implémentation des classes?{.fragment .shade-up}
    - Pourquoi?{.fragment .shade-up}

--

<!-- .slide: id='devoir' class="rdcuslide"  -->

# Exercice RDCU
Correction

https://github.com/yvanross/LOG210-exercices

--

<!-- .slide:  class="rdcuslide"  -->
### RDCU - Aide mémoire

Voir la figure 8.1 des notes de cours.

---

<!-- .slide: id="tdd" class="codeslide"  -->

### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[15.01m](https://youtu.be/eZ5gtgSq1f0)
2. **Problème test étudiant** - [44.08m](https://youtu.be/rq4_77MVeCc)
3. **[Intra](#intra)** - modalités intra
:::

--

<!-- .slide: class="codeslide"  -->

# Kata TDD
- [Kata TDD avec TypeScript](https://github.com/profcfuhrmanets/typescript-tdd-kata)
- Expérimenté avec SGB
  - npm run test
  - npm run watch
  - npm run test -- -g "nom ou partie du nom"
    - https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts

Note: Donnez le lien aux étudiants mais ne pas faire l'exercice.  Laisser leur le temps d'expérimenter.

--

<!-- .slide: class="codeslide"  -->
# TDD Laboratoire

## TDD 3 laws
1. You are not allowed to write any production code at all until you have written a failing unit test.
1. You are not allowed to write more of a unit test than is sufficient to fail and not compiling is failing.{.fragment .fade-up}
1. You are not allowed to write more production code than is sufficient to pass the currently failing test. These three last gives us the perfect low-level documentation for a system code examples. {.fragment .fade-up}


---

<!-- .slide: id='intra' class="evalslide"  -->
### LOG210  Séance #06
### Analyse et conception de logiciels
::: block {style=font-size:0.7em}
1. **[AOO](#aoo)** - Approche orienté objet
1. **[Equipe](#equipe)** - Travail d'équipe - Rencontres
1. **[PU](#pu)** - Phases du Processus Unifié
1. **[FURPS](#furps)** - FURPS
1. **[CU](#cu)** - Cas d'utilisation
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[DCL](#dcc)** - Diagramme de classes de logicielles
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[TDD](#tdd)**  - Développement piloté par les test
1. **[Intra](#intra)** - modalités intra![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
:::

--

<!-- .slide: class="evalslide"  -->
## Examen intra

- Toute la matière du cours et du laboratoire
- Exercices sur Google Classroom

--

<!-- .slide: class="evalslide"  -->

## Déroulement 1/2

- Examen sur Moodle
  - Examen de pratique - numériser des dessins de diagrammes
  - Toute documentation permise (!)
  - Préparez feuilles de notes

--

<!-- .slide: class="evalslide"  -->

## Déroulement 2/2

- Lien Zoom différent (annoncé sur Google Classrooms)
  - Salles Zoom de <=18 personnes
  - Surveillants
  - Activez votre webcam
  - Vous connecter sur Zoom avec votre courriel de l'ÉTS `@ens.etsmtl.ca` pour faciliter les choses

---

<!-- .slide: class="feedbackslide"  -->
## Séance #06
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs