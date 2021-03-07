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
title: 'LOG210-C11-00-seance'
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


<!-- .slide: id="dette" -->

# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[51.06m](https://youtu.be/VFKkGz9sx8o)
1. [Rappel architecture en couches](#couche)
1. [Diagrammes d'état](#etat) 
1. [Diagrammes d'activité](#activite)
1. [Processus Unifié (développement itératif et incrémental)](#pu)
1. [GRASP dans les GoF](#grasp)

Note: video 89m

--

## Dette technique

Rappel : Spectre de la conception de Neal Ford.


![](https://www.plantuml.com/plantuml/svg/VLJRRjf047stb7yOvIK95LNIlbK81KWlQQEgAg5zW3oiTmTxvVMkjHTHyaTHFw5loOzrriR4X0Z9CjAPCsTcpW4kdMVMXr8bhf2wOfQLuFnQ8RsjvB5or2cbZ1UPDK4BRfInu2tJZage_L5o0ZwN3kXXa3CjLbPwZngMHdkG6dvBBSpA4V5PKE2I1UKZHRCIuPkLBlPStqw8TvkZGp0-H-j06LD0Pf7LOjDVd-6qP0Kj6YpIP5oVqAVKT91IA6YgXT7D3Soc7tzEE-FXuloiUzBB3HpBuaiVtlDQ5_3L1AkPEiZxKt01KsvbvG_oVY1PPLrtiQw5tWPC76UKoyNRTnqILyoviR42xQHE99T2eDvZR7Cxn1fPQrOD8LNKaH0jVX7Gel7h2bq3O5dvDPHOfhHnKdV2yS39U_pm_dnuTmpCmOfHrvAIQEkFVs72w0Bghs9WZ_zgtdTUjOnUxqslLuEf24iO34fQKk5ms1B6o08teIBp5feRpR7oqkY5PW74qqCQ_4AVZgzcdyuQwIYpB_wwzan3XII3z3YPlH2T6eheMVXLNPP9IcTVUHJnfe-rsDLcnjD3YJQZ7yz65_VSdDULdCAGEkju-QL1W9jLQjPRD_CasJeFVOLBFq-D4dVzsjEaDdO7ZkWUM9-ID0Vj5DezEaC6_J0NpEKOwp7D9ho-wA1fEsMN7D6DQpjqWLkuIsV9PlmBUfvSeXRqH_KV"){.plain}

--

## Dette technique : Risque

La dette est une forme de risque.

Elle apporte des *bénéfices* ou des *pertes*, selon la quantité d'intérêt à payer.

[Chapitre 18 des notes de cours](https://classroom.google.com/u/0/c/MTQ4OTkyMTQ0OTg5)

--

## Dette technique: métaphore

Le "Hacking Cowboy" 🤠 (s'endetter)
- Bénéfice: obtenir une solution rapidement
- Perte: utiliser ce code à long terme

Pour *rembourser* la dette, on doit  
réécrire le code (faire un meilleur design, écrire des tests, "refactor", etc.)

--

### Dette technique: Exemple

::: block {style=font-size:0.8em}
Accumulation de décision dans le temps qui donne un code de mauvaise qualité et contraint la solution architecturale

- Conséquences
  - Taux élevé de défaut
  - Retard du projet
  - Complication d'entretien
  - La productivité de developpement très faible

- Proxy pour dette techniques
  - Combien de temps faut t’il pour mettre à jour le système
  - Combien coute la mise à jour du système.
  - Combien de fois les choses sont cassées.
:::


--

### Classification de la dette technique
Fowler, 2009

| Dette        | Imprudente                                 | Prudente                                                    |
| ------------ | ------------------------------------------ | ----------------------------------------------------------- |
| Délibérée    | "On n'a pas le temps pour la conception" | "Faut livrer maintenant puis en assumer les conséquences" |
| Involontaire | "C'est quoi la séparation en couches?"   | "Maintenant on sait comment on aurait dû le faire"        | 

--

### Dettes technique: autre exemples
- Ne pas migrer à la dernière version du framework de développement
- Ne pas faire d'analyse
- Ne pas faire de conception
- Ne pas faire de test
- Ne pas avoir de tracabilité entre les différents documents

--

#### 5 arguments pour que les managers se soucient de la dette technique
::: block {style=font-size:0.8em}
1. Le réusinage réduira la volatilité du coût marginal des caractéristiques»
2. Au cours des 3 derniers mois, nous avons dépensé 63% du budget de développement pour régler des questions de qualité
3. Nous avons pris des prêts techniques pour expédier plus rapidement, nous devons rembourser une dette pour garder un délai de marché faible"
4. Nous pouvons réduire nos dépense d'affaires en investissant 10% de notre temps dans la qualité de notre code"
5. Investir 20% du budget dans le réusinage coupera le temps de première réponse de moitié avec un ROI positif sur la productivité de développeurs

réf.: https://understandlegacycode.com/blog/5-arguments-to-make-managers-care-about-technical-debt/
:::

--

## Dettes technique: Tests
::: block {style=font-size:0.7em}
- Essentiellement, il est dans votre intérêt, en tant que développeur, en tant qu'équipe, d'encourager de nombreux tests plus bas dans les piles présentées ici. Cela commence par des tests unitaires complets et vérifiés. Cela continue avec une discipline de test solide et reproductible (pour laquelle je recommande l'automatisation des tests).

- Pourquoi? Parce que - lorsque vous vous déplacez plus haut dans la pile, ce fichu bug que quelqu'un a enregistré est caché derrière couche après couche de code. Plus le bogue est éloigné du niveau d'unité, plus les composants et les variables d'environnement sont impliqués. Plus ceux-ci sont impliqués, plus il est difficile d'identifier et de réparer, et plus le coût est élevé.


http://jessenoller.com/blog/2008/09/17/the-cost-of-not-testing-software
:::


--

## Dettes technique: Tests
![jess_test](assets/test/jess_tests.png){style=border:none}{width=40%}
![jess_test](assets/test/jessenoller-not-test-cost.png){style=border:none}{width=40%}

--

## Dettes technique: Tests
### a 75$/heure

![](assets/test/cost-to-fix-bug.png)


--


#### Test manuel vs test automatisé

![](assets/test/manual-automation-ratio-min.jpg)

::: block {style=font-size:0.8em}
https://abstracta.us/blog/test-automation/true-roi-test-automation/
:::

--

#### Avantages
::: block {style=font-size:0.6em}
- Un testeur manuel exécute des tests 8 heures par jour et rentre chez lui. À ce moment, les tests s'arrêtent. Avec l'automatisation des tests, nous pouvons exécuter des tests 16 heures de plus par jour (dans le meilleur des cas… bien sûr) pour le même coût, ce qui réduit le coût moyen des heures de test.

![](assets/test/cost-tester.png)

- Coût total : 101250$/mois
- 3 developpeurs x 21 jours/mois * 16h/jour de test * 5 fois plus rapide = 5040h equivalent

- 7 developpeurs x 135h/mois = 945h
:::

--

## Avantages

- Dans ce scénario, nous avons  considérablement réduit le coût de chaque heure de test de 78 $ à 17,54 $,  ce qui est un avantage que le directeur financier comprendra clairement. Ou vous pouvez le voir de cette façon; nous avons  augmenté les tests de 1 350 heures à 5 985 heures équivalentes et gagné 315 000 $ de tests par mois  pour le même coût (5 040 fois le coût horaire moyen d'un testeur).

--

## Valeur commerciale
- Améliorez la qualité des logiciels
- Évitez les problèmes de fonctionnement
- Maintenir une bonne image client
- Évitez les problèmes juridiques
- Diminuer le coût de la correction des bogues de 5 fois

--

## Valeur informatique
- Simplifie les tâches de routine
- Exécutez plus de tests sans augmenter les coûts dans le même temps
- Augmentez l'étendue de la couverture
- Trouvez les défauts difficiles à détecter plus tôt, lorsqu'ils sont plus faciles à corriger
- Améliorez la qualité du logiciel

::: block {.fragment .shade-up}
Êtes-vous d'accord pour dire que le retour sur investissement de l'automatisation des tests est important?
:::

--

## Visual studio code

- voir plugin Tech Debt Metrics 
 

---

<!-- .slide: id='couche' class="packageslide" -->
# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) 
1. [Rappel architecture en couches](#couche)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[10.19m](https://youtu.be/MBMqj8eG68k)
2. Dette technique vscode [4.09m](https://youtu.be/eLKutSXOPMk)
3. [Diagrammes d'état](#etat) 
4. [Diagrammes d'activité](#activite)
5. [Processus Unifié (développement itératif et incrémental)](#pu)
6. [GRASP dans les GoF](#grasp)

--


# Architecture logique

[Valider l'architecture en couches (des laboratoires)](https://log210-cfuhrman.github.io/log210-valider-architecture-couches/#/)



---


<!-- .slide: id='etat' class="stateslide" -->
# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) 
1. [Rappel architecture en couches](#couche)
1. [Diagrammes d'état](#etat)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow} [2.54m](https://youtu.be/w-nttVt9Xb4)
1. [Diagrammes d'activité](#activite)
1. [Processus Unifié (développement itératif et incrémental)](#pu)
1. [GRASP dans les GoF](#grasp)

--

<!-- .slide: class="stateslide" -->
# Diagramme d'état

Comment implémenter?

1. [StackOverflow: Is there a typical state machine implementation pattern?](https://stackoverflow.com/q/133214/1168342)
1. [Derek Banas, State pattern](https://www.youtube.com/watch?v=MGEx35FjBuo)

--

# Diagramme d'état
## Exercice Vidéo projecteur

- En équipe de 4, réaliser le diagramme d'état en suivant les étapes identifées dans l'exercice suivant:

[https://github.com/yvanross/LOG210-exercices/blob/master/etat/etat-videoprojecteur.md](https://github.com/yvanross/LOG210-exercices/blob/master/etat/etat-videoprojecteur.md)

Note: https://github.com/yvanross/LOG210-exercices/blob/master/etat/etat-videoprojecteur-avec-solution.md

---


<!-- .slide: id='activite' class="dssslide" -->
# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) 
1. [Rappel architecture en couches](#couche)
1. [Diagrammes d'état](#etat)
1. [Diagrammes d'activité](#activite)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow} [1.18m](https://youtu.be/wBLchMHDKCM)
1. [Processus Unifié (développement itératif et incrémental)](#pu)
1. [GRASP dans les GoF](#grasp)

--

<!-- .slide: class="dssslide" -->
# Diagramme d'activité

Comment implémenter?

Business Process Modeling Notation (BPMN)

1. [BPMN Demo](https://modeling-languages.com/modelling-bpmn-2-0-with-bpmn-io/)
1. [UML](https://plantuml.com/activity-diagram-beta)
1. [Derek Banas, Activity Diagram](https://www.youtube.com/watch?v=XFTAIj2N2Lc)

--

<!-- .slide: class="dssslide" -->
# Diagramme d'activité

## Exercice Recette de cuisine
- En équipe de 4, réaliser le diagramme d'activité en suivant les étapes identifées dans l'exercice suivant:

https://github.com/yvanross/LOG210-exercices/blob/master/activite/activite-recette-de-cuisine.md

Note: https://github.com/yvanross/LOG210-exercices/blob/master/activite/activite-recette-de-cuisine-solution.md


---

<!-- .slide: id='pu' class="puslide" -->
# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) 
1. [Rappel architecture en couches](#couche)
1. [Diagrammes d'état](#etat) 
1. [Diagrammes d'activité](#activite)
1. [Processus Unifié (développement itératif et incrémental)](#pu)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[13.23m](https://youtu.be/HQnMJE7H1x0)
1. [GRASP dans les GoF](#grasp)

--

<!-- .slide: class="puslide" -->
# Processus Unifié

- Souple et ouvert – peut accommoder l'Extreme Programming (XP), Scrum, etc.
- Développement piloté par les tests
- Processus *itératif* et *évolutif*

--

<!-- .slide: class="puslide" -->
## Itératif et évolutif

![Itératif et évolutif](assets/larman/A2.1.svg "Figure A2.1 de Larman"){.plain}

--

<!-- .slide: class="puslide" -->
## Stabilisation

![Itératif et évolutif](assets/larman/F2.2.svg){.plain}


--

<!-- .slide: class="puslide" -->
## Itératif et évolutif

![Itératif et évolutif](assets/02-chp2_UP_24.pptx/iteratif-evolutif.png){.plain width=80%}

--

<!-- .slide: class="puslide" -->
#### Gestion des exigences  (Humour)
::: block {style=font-size:0.6em}
Écrire des spécifications correctes et complètes n'est pas facile.
:::

<iframe width="932" height="500" src="https://www.youtube.com/embed/cDA3_5982h8?start=36" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<!-- .slide: id='grasp' class="rdcuslide" -->

# LOG210 Séance #11
### Objectif de la séance

1. [Dette technique](#dette) 
1. [Rappel architecture en couches](#couche)
1. [Diagrammes d'état](#etat) 
1. [Diagrammes d'activité](#activite)
1. [Processus Unifié (développement itératif et incrémental)](#pu)
1. [GRASP dans les GoF](#grasp)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[7.27m](https://youtu.be/NC5zjxnwoTQ)

--

<!-- .slide: class="rdcuslide" -->

# GRASP dans les GoF

[Rapport technique](https://espace2.etsmtl.ca/id/eprint/3766/)

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

<!-- .slide: class="feedbackslide" data-background-color="skyblue" -->
## Séance #11
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs