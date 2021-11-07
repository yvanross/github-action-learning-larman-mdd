---

history: true
progress: true
controls: true
controlsTutorial: true
controlsBackArrows: faded
center: true
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: monokai
logoImg: assets/logo_ets.svg
slideNumber: true
title: 'LOG210-seance-04'
margin: 0
minScale: 1
maxScale: 1
viewDistance: 3
display: block
navigationMode: 'linear'
notesSeparator: "Note:"
customTheme : "slide_themes"

---

## LOG210 Analyse et conception de logiciels: Séance 04

--

## Consigne covid-19
Vous devez porter le masque en tout temps durant la séance de cours.

--

<!-- https://www.fastemoji.com/Search/?order=newest&q=bureaucrat -->
## ┌(▀Ĺ̯ ▀-͠ )┐

1. Invitation Lab 1 (GitHub Classroom)
   - Choisir (ou créer) son équipe
   - Suivre les [directives](https://ena.etsmtl.ca/course/view.php?id=14480)
1. Équipes (envoyées par courriel)
   - Équipe peut enlever le nom d'un coéquipier qui n'a rien fait pendant une itération (Lab0)
1. Se connecter à Socrative  
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

--

## Schéma des outils

![OutilsLOG210g01](assets/OutilsLOG210g01.png){.plain}

---

## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

--

# Survol
- Travail en équipe - humilité
- Rappel méthodologie
- Rétroaction mini-test
- RDCU: Créateur et Expert GRASP
- Retour exercice TP#3
- Début exercices TP#4

---


# Équipe - Humilité
## Développement de logiciel

<!-- .slide: id='equipe' data-fullscreen data-background-image="assets/TeamGeek.pptx/hrc.png" data-background-size="30%" data-background-opacity="0.7" data-background-position="top 5% right 5%" -->

--

## Humilité

- Je ne suis pas le centre de l'univers.
- Je ne suis ni omniscient ni infaillible  
![petal](/assets/TeamGeek.pptx/image19.jpeg){width="20%"} {.fragment .shade-up}
- Je suis ouvert à m'améliorer {.fragment .shade-up}
- **Moi < Équipe** {.fragment .shade-up}
  
<!-- .slide: data-fullscreen data-background-image="/assets/TeamGeek.pptx/image18.png" data-background-size="30%" data-background-opacity="0.7" data-background-position="top 5% right 5%" -->

Note: 4 animations, omniscient -> qui sait tout

--

## Humilité en pratique 1/3

- Si quelqu'un travaille sans assez d'humilité  
« Veux-tu descendre de ton piédestal?&nbsp;»
- Même si une personne est la plus forte en JavaScript dans l'équipe, si elle le met en évidence constamment, c'est agaçant. 😒
- Dans certaines cultures, l'humilité est très importante (p. ex. le confucianisme). 😶

<!-- .slide: data-fullscreen data-background-image="/assets/TeamGeek.pptx/image22.jpeg" data-background-size="30%" data-background-opacity="0.5" data-background-position="top 5% right 5%" -->

--

## Humilité en pratique 2/3

- Apprendre à donner et à accepter les critiques.
  - Donner avec Respect:  
<span style="color:red">« Ton code est mal écrit.&nbsp;»</span> vs  
<span style="color:green">« J'ai de la difficulté à comprendre le flot de contrôle ici dans ton code.&nbsp;»</span>
  - Accepter avec Humilité:  
<span style="color:green">« Je comprends ton point de vue. Je vais refactoriser ce code en fin de semaine.&nbsp;»</span>
- Savoir que son estime de soi n'équivaut pas à sa qualité de code.

<!-- .slide: data-fullscreen data-background-image="/assets/TeamGeek.pptx/image23.jpeg" data-background-size="20%" data-background-opacity="0.7" data-background-position="top 5% right 5%" -->

--

## Humilité en pratique 3/3

- Apprendre à être patient
- Chacun a sa personnalité et donc sa façon de déboguer, de concevoir, d'écrire du code
- Rester susceptible à l'influence des autres
- Plus on est ouvert à être influencé, plus on *peut* influencer
- Plus on est vulnérable, plus on a l'air fort
- Si on veut être entendu, on doit d'abord écouter
<!-- .slide: data-fullscreen data-background-image="/assets/TeamGeek.pptx/image24.png" data-background-size="20%" data-background-opacity="0.5" data-background-position="top 5% right 5%" -->

---

<!-- .slide: class="toolslide" -->
# Méthodologie

--

<!-- .slide: class="toolslide" -->

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

Note:
Poser des questions aux étudiants sur les caractéristiques de chacune des modèle de cette page.
On dessine MDD, DSS, Contrat, RDCU sur cette image...

---

# Rétroaction
# mini-test  

![](assets/Moodle_Circle_M_RGB.png){width=20% .plain}

--

# Questions difficiles 😕

Selon les statistiques de la première tentative.

--

<!-- .slide: class='contratslide' -->
😕 Quels artefacts du processus unifié sont directement liés aux contrats d'opération?

--

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

--

<!-- .slide: class='contratslide' -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN 

Quel artefact du processus unifié n'est pas *directement* lié aux contrats d'opération?

::: block {.socrative}

1. Cas d'utilisation
1. Diagramme de séquence système (DSS)
1. Modèle du domaine (MDD)

:::

Note: https://b.socrative.com/teacher/#launch -> mutliple

--

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

---

<!-- .slide: class='dssslide' -->
# Retour exercice TP#3

Google Classrooms ou Google Drive

---

<!-- .slide: class='rdcuslide' id='rdcu' -->
# RDCU
## Réalisation d'un cas d'utilisation

--

<!-- .slide: class='rdcuslide' -->
## RDCU

Prendre les bonnes décisions pour une solution facile à comprendre et modulaire... {align=left}


--

<!-- .slide: class='rdcuslide' -->
## Décalage des représentations

Facile? Les classes logicielles devraient ressembler à des classes conceptuelles.

![](assets/Fig9.6-français.svg){.plain width="50%"}

Qui fait quoi? Qui a quelle responsabilité?

--

<!-- .slide: class='rdcuslide' -->
## GRASP

**G**eneral **R**esponsability **A**ssignment **S**oftware **P**atterns

Pour décider où mettre les méthodes...

--

<!-- .slide: class='rdcuslide' -->
## GRASP

- Contrôleur (séparation des couches)
- **Créateur**
- **Expert en information**
- Faible couplage
- Forte cohésion
- Polymorphisme
- Indirection
- Protection de variation
- Fabrication pure

--

<!-- .slide: class='rdcuslide' -->
## RDCU: scénario Démarrer

- C'est l'initialisation du système.
- C'est implicite mais essentiel!
- On doit instancier les objets faisant partie de l'application.
- Exemple: Monopoly - instancier les objets Case

--

<!-- .slide: class='rdcuslide' -->

![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN 

Qui a la responsabilité de créer les objets de Case?

![F16.3,A17.3](/assets/FigF16.3.png){.plain width=65%}

Note: https://b.socrative.com/teacher/#launch

--

<!-- .slide: class='rdcuslide' -->
## Créateur (GRASP)

- Les «&nbsp;conteneurs&nbsp;» créent les objets «&nbsp;contenus&nbsp;»

![createur](/assets/01-chp16F-17A_GRASP-46.pptx/createur.png){width=70% .plain}

--

<!-- .slide: class='rdcuslide' -->
## Créateur

- **Problème**: Qui crée? (postcondition d'un contrat)
- **Solution**: Affecter à la classe B la responsabilité de créer les objets d'une classe A si...
  - B possède les données d'initialisation des objets A
  - B contient ou agrège des objets A
  - B utilise étroitement des objets A
  - B enregistre des objets A

On s'inspire du MDD. On réutilise les liens existants.

--

<!-- .slide: class='rdcuslide' -->
## Créateur (exemple)

- Qui crée les cases (Square)?

![F16.3,A17.3](/assets/FigF16.3.png){.plain width=65%}

Note: On préfère la classe qui agrège les objets à créer.

--

<!-- .slide: class='rdcuslide' -->
## Créateur (Annotation)

![F16.4, A17.4](/assets/FigF16.4.png){width=100%}{.plain}
Plateau -\- List\<Case\>:** create

Note: Ce n'est pas une classe `CaseRepertoire` (nom étrange, augmente l'écart des représentations)

--

<!-- .slide: class='rdcuslide' -->
## Expert en Information

- **Problème:** Quel est le principe général d'affectation des responsabilités aux objets?
- **Solution:** Affecter la responsabilité à la classe qui possède les informations nécessaires pour s'en acquitter
> En termes de paramètres, associations

--

<!-- .slide: class='rdcuslide' -->
### Expert (GRASP)

![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Où mettre la méthode `getCase(nom)`?

![get_cases](/assets/getCase_nom.png){width=30% .plain align=middle style="background:#DDFFDD"}
![F16.3](/assets/FigF16.3.png){align=middle width=50% .plain}

--

<!-- .slide: class='rdcuslide' -->
## Expert

- Application du patron Expert

![get_cases](/assets/getCase_nom.png){width=30%}{.plain align=top style="background:#DDFFDD"}![F16.6, A17.6](/assets/FigF16.6.png){.plain width=75%}

---

# Résumé GRASP

- Contrôleur - à qui envoyer l'opération système
- Créateur - qui fait `new X()`
- Expert - qui est le plus capable de faire `y()`

---

# Exercice

Réaliser les RDCU du TP#3

--

# Exercice
- Réaliser les exercices TP#4
  - Contrats
  - Visibilité
  - RDCU

---


## Introduction code SGB
- Introduction SGB
  - <a onclick="window.open('https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts','_blank')">https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts</a>
- tplant
- gitinspector
- madge
- debt metric
- package.json 
  - test
    - watch
    - coverage

:::block {style=font-size:0.5em}
[whiteboard](#whiteboard) | [Supplément au cours en HTML](https://cc-yvanross.github.io/14f3178688ff2d131977e55d7002b1fc3b09e3ad/export/index.html)
:::

---

<!-- .slide: class='feedbackslide' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.


---

<!-- .slide id="whiteboard" --->
