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
title: 'LOG210-seance-05'
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

<!-- ```Typescript
let x = 5
```

-- -->

# LOG210 Analyse et conception de logiciels: Séance 05

--

<!-- https://www.fastemoji.com/Search/?order=newest&q=bureaucrat -->
## ┌(▀Ĺ̯ ▀-͠ )┐

1. Une itération du lab 1
2. Se connecter à Socrative  
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

--

## Schéma des outils

![OutilsLOG210g01](assets/OutilsLOG210g01.png){.plain}

--

## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

---

# Survol

- Travail en équipe
- Rappel méthodologie
- Rétroaction mini-test
- Retour Exercices
- RDCU: Faible couplage/Forte Cohésion
- Réalisation du laboratoire #1
- TDD

---

<!-- .slide: class="equipeslide center" -->
# Culture d'équipe

## Développement de logiciel

--

<!-- .slide: class="equipeslide center" -->

## Culture d'équipe

![Groupe de gens tenant cierges magiques](../assets/Office365_images/TeamSparkler.png){.plain width=80%}

--

<!-- .slide: class="equipeslide center" -->
# Qu'est-ce qu'une culture d'équipe?

- Ensemble de valeurs, d'objectifs, d'expériences
- Unique à chaque équipe

--

<!-- .slide: class="equipeslide center" -->
# Éléments techniques

- Revues de code
- Développement piloté par les tests
- Documentation de la conception
- etc.

--

<!-- .slide: class="equipeslide center" -->
# Éléments sociaux

- Sushi à midi
- 5 à 7 le vendredi
- etc.

--

<!-- .slide: class="equipeslide center" -->
## Qu'est-ce qu'une culture d'équipe?

- Qu'elle soit bonne ou mauvaise, la culture existera
- Le/La leader ne décide pas la culture; il/elle s'en occupe.

--

<!-- .slide: class="equipeslide center" -->
## Culture forte d'équipe

- Ouverte au changement qui l'améliore
- Résistante à un changement radical qui lui fait mal

--

<!-- .slide: class="equipeslide center" -->
## Culture forte d'équipe

- Celle qui concentre l'effort sur **la livraison de logiciel génial** est celle qui réussit la mieux.
- Efforts pour souder une équipe ne mènent pas toujours à la productivité:
  - faire la fête, surenchère de programmation, faire des rencontres

--

<!-- .slide: class="equipeslide" -->
## Une culture s'auto-sélectionne

<style>
.container{
    display: flex;
}
.col{
    flex: 1;
}
</style>

<div class="container">
<div style="flex:1.">

![yes](assets/drake_hotline_no.png){.plain width=200}  

</div>

<div class="col">
Ne faire que du hacking cowboy, initiation (bizutage), dérapages verbaux, agressivité
</div>
</div>

<div class="container">
<div style="flex:1.">

![no](assets/drake_hotline_yes.png){.plain width=200}

</div>

<div class="col">
Écrire des tests, réviser le design/le code, valoriser l'inclusivité
</div>
</div>

<!-- - Code propre et facile à maintenir attirera des développeurs appréciant ces valeurs…
- Agressivité, bizutage, dérapages verbaux, etc. attirera des développeurs appréciant ces valeurs… -->

--

<!-- .slide: class="equipeslide center" -->
## Cas de Basecamp (2021)

Basecamp proscrit les discussions politiques au sein de l'entreprise et 1/3 des employés démissionnent.
- https://www.valeursactuelles.com/clubvaleurs/societe/le-geant-de-la-technologie-basecamp-proscrit-les-discussions-politiques-au-sein-de-lentreprise/
- https://www.helloworkplace.fr/etats-unis-basecamp-interdiction-discussions-politiques/

--

<!-- .slide: class="equipeslide center" -->
### Éléments pour les cultures d'équipe réussites

::: block {style=font-size:0.8em}

- Énoncé de mission d'équipe
- Culture de HRC
- Favorise une participation des coéquipiers extrovertis et introvertis
- team.égo > coéquipier[i].égo
- La critique constructive
- Bonne communication
- Moyens de communication diversifiés (Slack, courriel, etc.)
- Documentation de design
- Communication synchrone (rencontres) vs asynchrone (courriel)

:::

--

<!-- .slide: class="equipeslide center" -->
### Comportements menaçant une bonne culture

- Ne pas respecter le temps des autres
- Ne pas respecter une décision prise par l'équipe
- Ne pas écouter ou respecter les autres
- Ne pas faire de compromis
- Être perfectionniste
- Être provocateur (troll) / Répondre aux provocateurs (trolls)
- Devenir trop affectif

*L'attention et la concentration sont primordiales.*

--

<!-- .slide: class="equipeslide center" -->
### Comment agir face à ces comportements

::: block {style=font-size:0.85em}

- Chercher des faits dans le drame
- Si quelqu'un se plaint, même avec trop d'émotion, lui donner le bénéfice du doute et chercher les causes (malgré le manque de respect, etc.)
- Amener la discussion sur un plan technique si possible.
- Souvent il y a des choses à améliorer dans la situation.
- La gentillesse peut chasser les trolls en fin de compte…

![team](assets/Office365_images/5handsteamicon.svg){.plain width=100px}

--

<!-- .slide: class="equipeslide center" -->
### Comment agir face à ces comportements

::: block {style=font-size:0.85em}

- Se concentrer sur l'objectif à long terme
- Un témoin de comportement délétère se demande:
  - Malgré la perte de concentration de l'équipe à court terme, une résolution du drame sera-t-elle bénéfique à l'équipe à long terme?
  - Est-ce que la situation se résoudra d'elle-même?
- Si la réponse est «&nbsp;non&nbsp;» à une de ces questions, mettre fin au comportement immédiatement (sans résolution).
:::
![image](/assets/TeamGeek.pptx/image30.png){.plain width=25%}

--

<!-- .slide: class="equipeslide center" -->
### Comment agir face à ces comportements

- Savoir quand abandonner
- Parfois le comportement d'un coéquipier ne s'améliore pas malgré beaucoup d'efforts. Il faut dans ce cas l'isoler de l'équipe.

> Avant de demander un changement d'équipe, il faudra avoir essayé une approche HRC et être en mesure de l'expliquer à l'enseignant.

--

<!-- .slide: class="equipeslide center" -->
## Culture d'équipe

- La plupart des gens ne sont pas des imbéciles!
- Cependant, il est naïf de penser aux gens comme «&nbsp;**bons**&nbsp;» ou «&nbsp;**mauvais**&nbsp;».
- La malice qui menace une bonne culture d'équipe est souvent expliquée par **l'ignorance**, **le besoin d'être reconnu**, ou **un manque d'empathie**
- Il faut toujours être tolérant *envers les gens*, mais *ne pas tolérer les comportements* qui nuisent à une bonne culture d'équipe (selon la norme HRC).

---

<!-- .slide: class="methodologieslide center" -->
# Méthodologie

--

<!-- .slide: class="methodologieslide center" -->

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

Note:
On dessine MDD, DSS, Contrat, RDCU sur cette image...

---

<!-- .slide: class="retroquizslide center" -->
# Rétroaction
# mini-test

--

<!-- .slide: class="retroquizslide center" -->
# Questions difficiles 😕

Selon les statistiques de la première tentative.

--

<!-- .slide: class="typescriptslide" -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN  
Qu'affiche le programme suivant?

::: block {.dynamic-width-code style="font-size:1.2em"}
```TypeScript
let maMap = new Map<number, string>();
maMap.set(77,'Poisson');
maMap.set(22,'Citron');
console.log(maMap.get(77));
console.log(maMap.has(22));
```
:::

::: block {.socrative}

1. true / Citron
2. Poisson / Citron
3. Poisson / undefined
4. Poisson / true

:::

Tableau associatif {.fragment .current-only data-code-focus=2-3}

`get` vs `has` {.fragment .current-only data-code-focus=4-6}

--

<!-- .slide: class="typescriptslide center" -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN  
Quelle est la valeur de retour de  
`typeof(new Voiture())`?

::: block {.socrative}
1. `"Voiture"`
2. `Voiture`
3. `"object"`

:::

--

<!-- .slide: class="typescriptslide" -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN  
Complétez le programme suivant pour qu'il produise le message `[ 67, 46, 14, 6 ]`:

::: block {.dynamic-width-code style="font-size:1.5em"}

```TypeScript
const valeurs = [65, 44, 12, 4];
console.log(valeurs.map( __________ ));
```

:::

::: block {.socrative}

1. `v => v + 2`
1. `v + 2`
1. `v => v - 2`
1. `v - 2`

:::

Voir [cet exemple](https://github.com/profcfuhrmanets/exemples-ts/blob/master/src/array_map_arrow.ts).{.fragment .current-only}

--

<!-- .slide: class="equipeslide center" -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN  
Qu'est-ce que le **facteur de bus**?

::: block {.socrative}

1. nombre de coéquipiers travaillant sur les tâches différentes
2. degré de redondance des compétences
3. probabilité de perdre un coéquipier

:::

--

<!-- .slide: class="graspslide center" -->
Q: Deux classes différentes pourraient créer (selon Créateur). Quel(s) principe(s) GRASP existe(nt) pour vous aider à décider laquelle est la *meilleure* des classes pour avoir cette responsabilité? (18 tentatives)
| Réponse | Crédit | Compte | Fréquence |
| --------------------- | -------: | --: | ------: |
| **Expert**{style="color:red"} | -50.00% | **8**{style="color:red"}  | 44.44% |
| Faible Couplage       | 50.00%  | 6  | 33.33% |
| Forte Cohésion        | 50.00%  | 14 | 77.78% |
| Contrôleur            | -50.00% | 2  | 11.11% |

--

<!-- .slide: class="graspslide center" -->
## «Évaluation»

- Faible couplage (évaluation)
- Forte cohésion (évaluation)

> On applique ces principes *après* un autre principe, pour évaluer s'il y a plusieurs choix de conception.

--

<!-- .slide: class="graspslide center" -->
## Qui crée un Paiement?

Selon GRASP Créateur:
1. un Registre «&nbsp;enregistre&nbsp;» un Paiement, alors **Registre** crée
2. une Vente «&nbsp;utilise étroitement&nbsp;» un Paiement, alors **Vente** crée

Comment décider? On évalue les deux possibilités sur le plan du couplage.

--

<!-- .slide: class="graspslide center" -->
![RegistreCréePaiement](https://www.plantuml.com/plantuml/svg/NOyn3i8m34NtdCBg10CNO410Lv0GIEnMiAhGDWsEKuaZSGukXXE92hfu-E__RtiR1LbIty6P6XU5gURtYqxeg2SlHfnq10UQCDZC8NcOFB5rFY1Z3tkqRSD3yhTww0O6OVHHqRyhobCxjSpPlFc7NEYHo5iwKepOqAvpZSyhmEeWDkeIPrr0bQhrT5C566560wod2miFy_GrTnOqcjK6M0FbD_x65ajZcL18imng2SMI5KL56LN1-v3a9nMMPal-ffzz0000 "RegistreCréePaiement"){.plain}

![VenteCréePaiement](https://www.plantuml.com/plantuml/svg/RT1B2i8m40RWVKunTAKBBz25LBjL40NtGpgKO9l6oRJWaJo75tFIKl6rp7m_yqWH1Ldwje4pUQ6I7tSweADMNqQSD0Gxd0niGkWzl0Bnudn0nXQsQ2yrTxslogxf68JHHwNFL9IRDep2pgQPRtAYQq_UqfvYn9esZQjz6W4sZMQZAN7M1THIbiEHQgTjA0ECyAFZkYCDtpIlFcemgpKmvDDbFDjYQHXKXdzYcL3_8fWXHS8OIHMbWdobLpq1 "VenteCréePaiement"){.plain}

Note: exercice - faire un diagramme de classe pour chaque solution pour évaluer

--

<!-- .slide: class="graspslide center" -->
## Le vrai problème du couplage

Ce n'est pas le couplage fort en tant que tel. C'est **le couplage fort vers les choses instables**:

- une classe dont sont API risque de changer
- les classes de la couche de présentation (vues, le patron Observeur résout ce problème)
- un module externe hors de notre contrôle (npm est un bel exemple)

---

<!-- .slide: class="contratslide center" -->
# Retour exercices 
- Contrats
- Flots et visibilité
- RDCU

--

<!-- .slide: class="contratslide center" -->
# Contrats - révision

1. Contrat pour chaque opération système
2. Regarder toujours le MDD
3. Rappeler les formes de postconditions
   1. créer/supprimer instance
   2. former/briser association
   3. modifier attributs
4. Ne rien oublier (marquer le MDD, faire un diagram d'objets)


---

# Révision GRASP
- GRASP [Controleur](#graspControleur) (Révision)
- GRASP [Créateur](#graspCreateur) (Révision)
- GRASP [Expert en information](graspExpert) (Révision)
- GRASP [Faible Couplage](#Couplage) F16.12/A17.12
- GRASP [Forte Cohésion](#forteCohesion) F16.14/A17.14
- GRASP visibilité (ndc 9.3)


:::block {style=font-size:0.5em}
[whiteboard](#whiteboard) | [Supplément au cours en HTML](https://cc-yvanross.github.io/14f3178688ff2d131977e55d7002b1fc3b09e3ad/export/index.html)
:::

--

<!-- .slide: id="graspControleur" class="rdcuslide" -->

### Principe GRASP Contrôleur 

Affectez une responsabilité à la classe qui correspond à l'une de ces définitions:{align=left}
1. Contrôleur de facade qui correspond à une classe du MDD et représente le
   1.  **système global,** 
   2.  un « **objet racine** », 
   3.  un **équipement** 
   4.  un **sous-système**.
2. Contrôleur de session

--

<!-- .slide: id="graspCreateur" class="rdcuslide"   -->
## GRASP: Créateur
:::block {style=font-size:0.8em}
- **Problème**: Qui crée? (postcondition d'un contrat)


- **Solution**: Affecter à la classe B la responsabilité de créer les objets d'une classe A si...
  - B <u>P</u>ossède les données d'initialisation des objets A
  - B <u>U</u>tilise étroitement des objets A
  - B <u>C</u>ontient ou agrège des objets A
  - B <u>E</u>nregistre des objets A

On s'inspire du MDD. On réutilise les liens existents.

Utiliser l'acronyme PUCE pour vous rappeller ce paton
:::


--

<!-- .slide:  id="graspExpert" class="rdcuslide"   -->
## GRASP: Expert en Information

- **Problème:** Quel est le principe général d'affectation des responsabilités aux objets?
- **Solution:** Affecter la responsabilité à la classe qui possède les informations nécessaires pour s'en acquitter
> <u>**En termes de paramètres, associations**</u>

--

<!-- .slide: id="faibleCouplage" class="rdcuslide" -->
## Faible Couplage
- Problème :
    - Comment réduire l'impact des modifications?
- Solution :
    - Assigner les responsabilités de sorte à **éviter tout couplage inutile**.
    - Appliquer ce principe pour **évaluer plusieurs solutions possibles**.

![solution-faible-couplage](assets/01-chp16F-17A_GRASP-46.pptx/solution-faible-couplage.png){width=60% .plain}


--

<!-- .slide: id="forteCohesion" class="rdcuslide" -->
## Forte Cohésion
:::block {style=font-size:0.8em}
1. **Problème** :
    - Comment s'assurer que les objets restent compréhensibles et faciles à gérer, et, bénéfice second, qu'ils contribuent au Faible Couplage?
1. **Solution** :
    - Assigner les responsabilités de sorte que la cohésion demeure élevée. Appliquer ce principe pour évaluer les solutions possibles.

Note: Erreur cohésion itérateur remove() ne fait pas partie du patron itérateur.
:::

--

## Qu'est-ce que la Cohésion
<!-- .slide: class="graspslide center" -->
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Vrai ou Faux?

![couteau simple](assets/PocketKnifeSimple.png){.plain width=25% style="vertical-align:middle"} a plus de cohésion que ![couteau suisse](assets/SwissArmyKnifeLots.png){.plain width=30% style="vertical-align:middle"}

--

## Considérer la cohésion

<!-- .slide: class="graspslide center" -->
![RegistreCréePaiement](https://www.plantuml.com/plantuml/svg/NOyn3i8m34NtdCBg10CNO410Lv0GIEnMiAhGDWsEKuaZSGukXXE92hfu-E__RtiR1LbIty6P6XU5gURtYqxeg2SlHfnq10UQCDZC8NcOFB5rFY1Z3tkqRSD3yhTww0O6OVHHqRyhobCxjSpPlFc7NEYHo5iwKepOqAvpZSyhmEeWDkeIPrr0bQhrT5C566560wod2miFy_GrTnOqcjK6M0FbD_x65ajZcL18imng2SMI5KL56LN1-v3a9nMMPal-ffzz0000 "RegistreCréePaiement"){.plain}

![VenteCréePaiement](https://www.plantuml.com/plantuml/svg/RT1B2i8m40RWVKunTAKBBz25LBjL40NtGpgKO9l6oRJWaJo75tFIKl6rp7m_yqWH1Ldwje4pUQ6I7tSweADMNqQSD0Gxd0niGkWzl0Bnudn0nXQsQ2yrTxslogxf68JHHwNFL9IRDep2pgQPRtAYQq_UqfvYn9esZQjz6W4sZMQZAN7M1THIbiEHQgTjA0ECyAFZkYCDtpIlFcemgpKmvDDbFDjYQHXKXdzYcL3_8fWXHS8OIHMbWdobLpq1 "VenteCréePaiement"){.plain}

--

<!-- .slide: class="rdcuslide"  -->
## RDCU: Types de visibilité
GRASP visibilité (ndc 9.3)
- Attribut
- Paramètre
- Locale
- Globale

Expliquer ou on trouve ces visibilité dans les artéfact d'analyse et de conception{align=left}

--

##### RDCU: Types de visibilité

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

---

## Réalisation du laboratoire
### Introduction code SGB
- Introduction SGB version **V3**
  - <a onclick="window.open('https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts','_blank')">https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts</a>


- Fetch students
  - <a onclick="window.open('https://github.com/profcfuhrmanets/exemples-ts/blob/master/src/SGB_fetch_students.ts','_blank')">https://github.com/profcfuhrmanets/exemples-ts/blob/master/src/SGB_fetch_students.ts</a>


--

## Réalisation du laboratoire

- JavaScript/TypeScript (ndc 20.1)

--

## Réalisation du laboratoire
### autres outils
- tplant
- madge
- debt metric
- package.json 
  - test
    - watch
    - coverage

---

<!-- .slide: class="tddslide center" -->
# TDD 
**Test-driven development**  
Développement piloté par les tests

(ndc 10.x)

--

<!-- .slide: id="exerciceKataTDD" class="evalslide" -->
## Exercice Kata TDD

Étant donné une liste de nombres de 1 à n.z {align=left}
- Si un nombre est divisible par 3, il doit être remplacé par Fizz.
- Si un nombre est divisible par 5, il doit être remplacé par Buzz.
- Si un nombre est divisible par 3 et par 5 doit être remplacé par FizzBuzz.

En appliquant ces règles, la liste résultante deviendrait: {align=left}

1, 2, Fizz, 4, Buzz … 13, 14, FizzBuzz, 16, 17 … 


--

## TP#5 - Typescript-tdd-kata
Pair programming avec fizzbuzz

  - Objectif: apprendre à faire des petits pas. nc: 10.1
    - 1 personne écrit le test
    - l’autre écrit le code

- <a onclick="window.open('https://github.com/profcfuhrmanets/typescript-tdd-kata','_blank')">typescript-td-kata</a>

--

## Étape 2 - nouvelles exigences
- Un nombre est Fizz s'il est divisible par 3 ou s'il contient un 3
- Un nombre est Buzz s'il est divisible par 5 ou s'il contient un 5

--

## Typescript-tdd-kata solution

- https://drive.google.com/file/d/1Su0F3mdMBRDwmPCuRSae0kT4DtklBxnl/view
- https://dev.to/st0ik/fizzbuzz-typescript-solid-principles-4e6f



---

<!-- .slide: class='feedbackslide center' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.
