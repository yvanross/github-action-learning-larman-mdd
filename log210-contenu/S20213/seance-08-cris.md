---

history: true
progress: true
controls: true
controlsTutorial: false
controlsBackArrows: faded
center: false
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: "github"
logoImg: assets/logo_ets.svg
slideNumber: true
title: 'LOG210-seance-08'
margin: 0
minScale: 1
maxScale: 1
viewDistance: 3
display: block
navigationMode: 'linear'
notesSeparator: "Note:"
customTheme : "slide_themes"
chalkboard: false

---

# LOG210 Analyse et conception de logiciels: Séance 08

--

<!-- https://www.fastemoji.com/Search/?order=newest&q=bureaucrat -->
## ┌(▀Ĺ̯ ▀-͠ )┐

1. Se connecter à Socrative  
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

--

## Schéma des outils

![OutilsLOG210g01](assets/OutilsLOG210g01.png){.plain}

---

## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

--

# Survol

- Travail en équipe
- Rappel méthodologie
- Rétroaction mini-test
- Passer des diagrammes au code
- Conférencier (Rackspace)
- Dette technique (7.x) et Réusinage (ndc 11.x)
- Architecture logique (en couches) F12.1-12.8/A13.1-13.8
- Conception de packages (ndc 18)

---

<!-- .slide: class="equipeslide center" -->
# Travail en équipe

## Développement de logiciels

--

<!-- .slide: class="equipeslide center" -->

## Travail d'équipe

- Quels sont les problèmes HRC rencontrés par votre équipe?
- Quelles solutions avez-vous apportées?

---

<!-- .slide: class="methodologieslide center" -->
# Méthodologie

--

<!-- .slide: class="methodologieslide center" -->

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

Note:
"Passer des diagrammes au code"

---

<!-- .slide: class="retroquizslide center" -->
# Rétroaction<br>mini-test

--

<!-- .slide: class="retroquizslide center" -->
# Questions difficiles 😕

Selon les statistiques de la première tentative.
(à vérifier avant le cours)

Note: Quadrant de la dette technique

---

<!-- .slide: class="rdcuslide center" id='rdcu' -->
# RDCU
## Réalisation d'un cas d'utilisation

--

<!-- .slide: class="rdcuslide center" -->
## RDCU

Prendre les bonnes décisions pour une solution facile à comprendre et modulaire... {align=left}

![Swing et JeuDeDés](assets/cohesion_RDCU.png){width="65%" .plain}

--

<!-- .slide: class="rdcuslide center" -->
## Décalage des représentations

Facile? Les classes logicielles devraient ressembler à des classes conceptuelles (concepts du monde réel).

![Décalage des représentations](assets/Fig9.6-français.svg){.plain width="50%"}

Qui fait quoi? Qui a quelle responsabilité?

--

<!-- .slide: class="rdcuslide center" -->
# RDCU

Approche: conception orientée-responsabilités

## GRASP

**G**eneral **R**esponsability **A**ssignment **S**oftware **P**atterns

Pour décider où mettre les méthodes...

--

<!-- .slide: class="rdcuslide center" -->
# Retour sur l'exercice RDCU<br/>🦗

Note: 0 soumissions...

--

<!-- .slide: class="rdcuslide center" -->
## GRASP

- Contrôleur (séparation des couches){style="color:green"}
- Créateur{style="color:green"}
- Expert en information{style="color:green"}
- Faible couplage{style="color:green"}
- Forte cohésion{style="color:green"}
- Polymorphisme{style="color:green"}
- Fabrication pure{style="color:green"}
- Indirection{style="color:green"}
- Protection de variation{style="color:green"}

--

<!-- .slide: class="rdcuslide center" -->
#### RDCU (Survol)

![Schéma pour la méthodologie avec RDCU](assets/FigA.1-avec-contrats.svg){.plain width=50%}

Note: expliquer encore le contexte de la RDCU

---

<!-- .slide: class='methodologieslide center' -->
# Passer des diagrammes au code

Ne pas oublier la ***Visibilité*** des objets (ndc 9.3)

--

<!-- .slide: class='methodologieslide center' -->
## Qu'est-ce qui est plus important?

![savoir-faire](/assets/05-chp13F-14A-premiere-etude-conception-objet_9.pptx/UML-statique-dynamique.png){.plain width=80%}

Note: les deux ont des avantages et inconvénients

--

<!-- .slide: class='methodologieslide center' -->
## Outils pour automatiser le passage

![Modèles et code](assets/Forward-reverse-round-trip-engineering.png){.plain}

--

<!-- .slide: class='methodologieslide center' -->
# Exercice sur Google Classroom

[LOG210: Créer des méthodes à partir des diagrammes d'interaction](https://docs.google.com/document/d/11jUkKYpYbUdTHipNbg2DJ6PjAj0QkQcTcK9mVOafTQU/edit?usp=sharing)

---

<!-- .slide: class='feedbackslide center' -->
# Conférencier

## Beatriz Kanzki  
Big Data Architect - Machine Learning and AI
![Rackspace logo](https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/newsroom/2020/logos/png/Rackspace_Technology_Logo_RGB_BLK.png){.plain width=50%}

---

<!-- .slide: class='methodologieslide center' -->
# Dette technique (7.x)<br>Réusinage (ndc 11.x)

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Qu'est-ce qui **n'est pas** un exemple de dette technique?

::: block {.socrative}
1. Il faut que ça marche en 48 heures.
1. On a raté un peu ce cas d'utilisation, mais nous avons obtenu du financement.
1. Nos développeurs coûtent cher, mais ils valent l'argent.
1. Les singletons partout, ça ne fait pas de mal.
1. L'importateur du format XML est robuste mais difficile à comprendre. Le format n'est pas censé évoluer.
:::

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Une conséquence d'un réusinage est que le code s'exécute plus rapidemnt?

**Vrai ou faux?**

---

<!-- .slide: class='methodologieslide center' -->
# Architecture logique (en couches)<br>F12.1-12.8/A13.1-13.8

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Quel concept de LOG121 est proche de la notion d'architecture logique (en couches)?

::: block {.socrative}
1. Polymorphisme
2. Patron itérateur
3. MVC
4. Compilateur Java
5. Patron méthode fabrique
:::

---

<!-- .slide: class='methodologieslide center' -->
# Conception de packages (ndc 18)

---

<!-- .slide: class='feedbackslide center' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.
