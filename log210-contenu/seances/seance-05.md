---
history: true
progress: true
controls: true
controlsTutorial: true
controlsBackArrows: fadedù
center: false
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: monokai
logoImg: ./assets/logo_ets.svg
slideNumber: true
title: 'LOG210-C05-00-seance'
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

<!-- .slide: id='equipe' class="equipeslide" -->
### LOG210 Séance #05

### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[20.46m](https://youtu.be/0RN7ZoaIAEM)
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice

--

<!-- .slide: class="equipeslide"  -->
## Culture d'équipe
::: block {style=font-size:0.70em}
- Qu'est-ce qu'une culture d'équipe?
  - Ensemble de valeurs, d'objectifs, d'expériences qui est unique à chaque équipe.
  - Éléments «&nbsp;codage&nbsp;» : revues de code, développement piloté par les tests, documentation de la conception, etc.
  - Éléments sociaux: sushi à midi, ou un 5 à 7 le vendredi, etc.
- Qu'elle soit bonne ou mauvaise, la culture existera
- Le leader ne décide pas la culture; il s'en occupe.
:::
![Picture 2](http://farm3.staticflickr.com/2289/2137737248_e9f3e429d1.jpg){width=20%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Culture forte d'équipe

- Culture ouverte au changement qui l'améliore, mais résistant à un changement radical qui lui fait mal.
- Celle qui concentre l'effort sur **la livraison de logiciel génial** est la mieux réussite.
- Efforts pour souder une équipe ne mènent pas toujours à la productivité:
  - faire la fête, surenchère de programmation, faire des rencontres

--

<!-- .slide: class="equipeslide"  -->
## Culture forte d'équipe
- Une culture forte sera une culture d'auto-sélection
- Culture de code propre et facile à maintenir attirera des développeurs appréciant ces valeurs…
- Culture d'agressivité, d'initiation, de dérapages verbaux, etc. attirera des développeurs appréciant ces valeurs…

--

<!-- .slide: class="equipeslide"  -->
### Éléments pour les cultures d'équipe réussites
::: block {style=font-size:0.8em}
- Énoncé de mission d'équipe
- Culture de HRC
- favorise une participation des coéquipiers extrovertis et introvertis
- team.égo > coéquipier[i].égo
- La critique constructive
  - facile à recevoir
  - difficile à donner : ne pas oublier «&nbsp;respect&nbsp;»
- Bonne communication est essentielle
- Moyens de communication diversifiés
- Listes de diffusion
- Documentation de design
- Communication synchrone (rencontres) vs asynchrone (courriel)
:::

--

<!-- .slide: class="equipeslide"  -->
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

<!-- .slide: class="equipeslide"  -->
### Comment agir face à ces comportements
::: block {style=font-size:0.85em}
- Chercher des faits dans le drame
- Si quelqu'un se plaint, même avec trop d'émotion, lui donner le bénéfice du doute et chercher les causes (malgré le manque de respect, etc.)
- Amener la discussion sur un plan technique si possible.
- Souvent il y a des choses à améliorer dans la situation.
- La gentillesse peut chasser les trolls en fin de compte…

![http://www.flickr.com/photos/lumaxart/2136954235/](http://farm3.staticflickr.com/2260/2136954235_35424aa0bc.jpg){.plain width=25%}

--

<!-- .slide: class="equipeslide"  -->
### Comment agir face à ces comportements

::: block {style=font-size:0.85em}

- Se concentrer sur l'objectif à long terme
- Un témoin de comportement délétère se demande:
  - Malgré la perte de concentration de l'équipe à court terme, une résolution du drame sera-t-elle bénéfique à l'équipe à long terme?
  - Est-ce que la situation se résoudra d'elle-même?
- Si la réponse est «&nbsp;non&nbsp;» à une de ces questions, mettre fin au comportement immédiatement (sans résolution).
:::
![image](assets/TeamGeek.pptx/image30.png){.plain width=25%}

--

<!-- .slide: class="equipeslide"  -->
### Comment agir face à ces comportements
- Savoir quand abandonner
- Parfois le comportement d'un coéquipier ne s'améliore pas malgré beaucoup d'efforts. Il faut dans ce cas l'isoler de l'équipe.

> Avant de demander un changement d'équipe, il faudra avoir essayé une approche HRC et être en mesure de l'expliquer à l'enseignant.

--

<!-- .slide: class="equipeslide"  -->
## Culture d'équipe

- La plupart des gens ne sont pas des imbéciles!
- Cependant, il est naïf de penser aux gens comme «&nbsp;**bons**» ou «&nbsp;**mauvais**&nbsp;».
- La malice qui menace une bonne culture d'équipe est souvent expliquée par **l'ignorance**, **le besoin d'être reconnu**, ou **un manque d'empathie**…
- Il faut toujours être tolérant *envers les gens*, mais *ne pas tolérer les comportements* qui nuisent à une bonne culture d'équipe (selon la norme HRC).

---

<!-- .slide: id='mdd' class="mddslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[6.05m](https://youtu.be/sL4QTfu6ld4)
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice


--

<!-- .slide: class="mddslide"  -->
# MDD?

- Agrégation vs composition?
- Comment interpréter une multiplicité de plusieurs

--

<!-- .slide: class="mddslide"  -->
## Symbole, intension, extension
![larman/F9.5](assets/larman/F9.5.png){.plain width=55%}

---

<!-- .slide: id='exemplests' class="codeslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[24.55m](https://youtu.be/QZI41p5E8aU)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice


--

<!-- .slide: class="codeslide"  -->
# Exemples TypeScript

[Dépôt github](https://github.com/profcfuhrmanets/exemples-ts/)
https://github.com/profcfuhrmanets/exemples-ts/

--

<!-- .slide: class="codeslide"  -->
# Arrow Function (JavaScript)

src/arrow_function.ts

--

<!-- .slide: class="codeslide"  -->

# Array.prototype.map() (JavaScript)

src/array_map_arrow.ts

--

<!-- .slide: class="codeslide"  -->

# Tableau associatif Map() (JavaScript)

src/tableau_associatif.ts

--

<!-- .slide: class="codeslide"  -->

# Accès SGB

src/get_students_fetch.ts

--

<!-- .slide: class="codeslide"  -->

# ⚠️Deux "Map"

Le sens est différent:

- Tableau associatif `Map<>()`
  - https://howtodoinjava.com/typescript/maps/
- `Array.prototype.map()`
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

<!-- .slide: id='complexite' class="complexiteslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[23.04m](https://youtu.be/afZsZ26j0k8)
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice


--

<!-- .slide: class="complexiteslide"  -->

# Complexités inhérente et accidentelle

--

<!-- .slide: class="complexiteslide"  -->
## Objectif

Vous sensibiliser aux conséquences de vos choix en conception sur le plan de la complexité.

![kiss](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/kiss.png){.plain}

--

<!-- .slide: class="complexiteslide"  -->
### Défis posés par la complexité

- La complexité est l'adversaire de tout développeur logiciel
- On peut distinguer entre deux sources de complexité (F. Brooks)
- Le domaine du problème
  - «&nbsp;complexité inhérente (essentielle)&nbsp;»
- La solution (logicielle)
  - «&nbsp;complexité accidentelle&nbsp;»

--

<!-- .slide: class="complexiteslide"  -->
## Complexités
::: block {style=font-size:0.85em}
- Inhérente (essentielle)
    - «&nbsp;Essentielle&nbsp;» selon Aristote
    - Pour «&nbsp;être&nbsp;» une voiture, une voiture a un moteur, des roues, des portes, etc.
- Accidentelle (due à des choix)
:::

![accidentelle](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/accidentelle.png){.plain width=40%}

--

<!-- .slide: class="complexiteslide"  -->
## Complexité inhérente

- Le domaine du problème concernant le logiciel peut être complexe
  - Exemple : système d'exploitation pour ordinateur
- La complexité inhérente est due au «&nbsp;problème&nbsp;» et non à la solution
  - Linux est complexe parce qu'il doit supporter plein de fonctionnalités…
- Synonyme : «&nbsp;complexité essentielle&nbsp;»

--

<!-- .slide: class="complexiteslide"  -->
## Complexité inhérente

![linux](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/linux.png){.plain width=70%}

--

<!-- .slide: class="complexiteslide"  -->
## Complexité accidentelle

- Les choix proposés pour la solution peuvent introduire une complexité «&nbsp;accidentelle&nbsp;»
  - Langage de développement à bas niveau (p. ex. C ou assembleur)
  - Outils de débogage limités
- La complexité accidentelle peut être plus facilement gérée
  - Meilleurs outils (IDE), meilleurs techniques, langage plus haut niveau, solution plus simple (si possible)

--

<!-- .slide: class="complexiteslide"  -->
##### Exemple : gestion de complexité accidentelle en Java

- Compilation en ligne de commande
- Utilisation de IDE (Eclipse)
![ligne_commande](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/ligne_commande.png)
![image](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/ide.png)

--

<!-- .slide: class="complexiteslide"  -->
#### Distinction n'est pas toujours facile
::: block {style=font-size:0.85em}

- Dans une conception logicielle, les éléments sont souvent complexes.
- La source de la complexité n'est pas toujours facile à identifier.
    - Exemple: logiciels de réseau
        - Difficultés rencontrées: délais, pertes d'informations, timeout, communication asynchrone , etc.
    - Sont-elles dues aux complexités inhérentes ou accidentelles?
- Communication asynchrone vs complexité inhérente
- Pertes d'informations vs complexité accidentelle (p.ex. avec protocole UDP)
:::
Note: todo remplacer les deux carré

--

<!-- .slide: class="complexiteslide"  -->
## Gérer la complexité
::: block {style=font-size:0.85em}
- Réduire l'effort cognitif en gérant la complexité inhérente
    - Abstractions (OO)
    - Encapsulation (OO)
    - Masquage de l'information (OO)
:::
![effort_cognitif](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/effort_cognitif.png){.plain width=40%}

--

<!-- .slide: class="complexiteslide"  -->
# Abstraction et encapsulation

--

<!-- .slide: class="complexiteslide"  -->
## Abstraction 

Vue plus simple{: .left}

![Abstraction](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/abstraction.png){.plain width=55%}

--

<!-- .slide: class="complexiteslide"  -->
## Encapsulation

Accès limité{: .left}

![Abstraction](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/encapsulation.png){.plain width=40%}

--

<!-- .slide: class="complexiteslide"  -->
## Patterns pour gérer la complexité
- Proposer des solutions aux problèmes récurrents dans un contexte particulier

![Échangeur turcot local](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/turcot.jpeg){style=border:none}{width=45%}
![Échangeur japon local](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/image27.png){style=border:none}{width=45%}

--

<!-- .slide: class="complexiteslide"  -->
### Design Patterns sont une partie de la solution
- Proposer des solutions aux problèmes récurrents dans un **contexte particulier**

![DesignPattern](assets/02-chp09-Compexites_inherente_et_accidentelle_18.pptx/DesignPattern.png){style=border:none}

--

<!-- .slide: class="complexiteslide"  -->
# Socrative ou Zoom

Nom de la salle de class: **ETSDESIGN**

![Socrative login](assets/SocrativeLoginAnimated.gif){style="width:300px" .plain}

Note: 
https://b.socrative.com/teacher/

--

<!-- .slide: class="complexiteslide"  -->
## Validation de la compréhension
- En développement logiciel, la complexité inhérente est due au domaine du problème et cause des complexités dans la solution.
    - Vrai?
    - Faux?

--

<!-- .slide: class="complexiteslide"  -->
## Validation de la compréhension

- La complexité inhérente est de mieux en mieux gérée grâce aux innovations technologiques.
    - Vrai?
    - Faux?

--

<!-- .slide: class="complexiteslide"  -->
## Validation de la compréhension

- Le déverminage d'un algorithme de parcours d'arbre représentant une expression mathématique est difficile à cause de la complexité accidentelle
    - Vrai?
    - Faux?

--

<!-- .slide: class="complexiteslide"  -->
## Validation de la compréhension
- Les outils de développement comme Eclipse répondent principalement aux difficultés dues à la complexité inhérente.
    - Vrai?
    - Faux?

--

<!-- .slide: class="complexiteslide"  -->
## Validation de la compréhension

- Qu'est-ce qui n'est pas une technique pour gérer la complexité inhérente?
  1. Masquage de l'information
  1. Encapsulation
  1. Ramasse-miettes (récupérateur de mémoire)
  1. Abstraction
  1. Généralisation

--

<!-- .slide: class="complexiteslide"  -->
## Résumé

::: block {style=font-size:0.75em}

- Soyez attentif aux sources de complexité dans les logiciels que vous développez
- La complexité inhérente ne peut pas être éliminée si votre problème est complexe
- Cependant, elle peut être gérée avec un bon choix d'abstractions.
- Patrons utilisent des abstractions et de l'encapsulation pour gérer la complexité
- Cependant, ils amènent aussi de la complexité accidentelle
- Vérifier:
  - Le problème récurrent que le patron est censé résoudre existe-t-il? (facile)
  - Le coût de la complexité due au patron est acceptable par rapport aux bénéfices (moins facile)
:::

---

<!-- .slide: id='dss' class="dssslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[4.45m](https://youtu.be/Aqab8iOmcPM)
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice


--

<!-- .slide: class="dssslide"  -->
## Retour d'une opération système (DSS)

- Du cas d'utilisation…
  - Le système présente le total incluant les taxes calculées.
- L'affichage du total => couche présentation
- Mais le calcul du total?
  - Aucune classe n'en a la responsabilité
  - Affectez-la avec «&nbsp;Expert&nbsp;»
  - (il y a un attribut dérivé `/total` dans le MDD)

![responsibilité pour total](https://www.plantuml.com/plantuml/svg/PP2nQiD038RtUmhXiU2XguVW52-13eL0rg2UXIjobXsT336b3zJdw8lbNBjrJMyGtEdxfOyhew7Qq0QmpZ2SbMBVISHN3coZYnUM7XLRY3O6IbNPJxZp0ME44uaHl3j89-Uw01QRBpKQ5L2bwZuM-9aReRqQ-_2RkGuenlRrEKT_q8gYL-wDEtdHhXxO_YxvVl9sg9PLAmm579EYD7EdLxuLyCHDHPvR36d-R9mzPf0hDs-Mxo1xo3PkRYCwTLSqvVwxkPAaJfzo1m00){.plain}

--

<!-- .slide: class="dssslide"  -->
## Expert pour calculer le total
:::block {style=font-size:0.75em}
1. Énoncer la responsabilité
    - Qui doit connaître le montant total de la vente?
2. Récapituler les informations nécessaires
    - total est la somme de tous les sous-totaux des lignes
    - sous-total de ligne := quantité * prix
3. Dresser la liste des informations nécessaires et des classes qui les possèdent.

Informations nécessaires au total de la vente |  Expert
--|--
Produit.prix | Produit
LigneArticles.quantité | LigneArticles
Toutes les LigneArticles de la vente en cours | Vente

Analyse détaillée: p.F337
:::

--

<!-- .slide: class="dssslide"  -->
## Conception

`Vente.getTotal()`

![larman/F17.10](assets/larman/F17.10.png){.plain}

(diagramme de communication)

---

<!-- .slide: id='contrat' class="contratslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[1.26m](https://youtu.be/eSlbIfteQ_M)
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice


--

<!-- .slide: class="contratslide"  -->
# Contrats
- sur la base de  correspondance avec "Clé"
    - implique l'utilisation d'un tableau associatif (`Map<>`)

---

<!-- .slide: id='rdcu' class="rdcuslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[30.33m](https://youtu.be/1YJWRgnO3Ns)
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice

--

<!-- .slide: class="rdcuslide"  -->
## RDCU-GRASP

1. **Contrôleur**
1. **Créateur**
1. **Expert en information**
1. **Faible couplage**
1. **Forte cohésion**
- Polymorphisme
- Indirection
- Protection de variation
- Fabrication pure

--


<!-- .slide: class="rdcuslide"  -->
## Visibilité
::: block {style=font-size:0.75em}
- Avant qu'un objet puisse envoyer un message à un autre objet, il doit «&nbsp;voir&nbsp;» ce dernier
- Avoir une visibilité = posséder une référence (en Java) F18.1

![larman/F18.1](assets/larman/F18.1.png){.plain width=50%}
:::

--

<!-- .slide: class="rdcuslide"  -->
## Types de visibilité
- Attribut
- Paramètre
- Locale
- Globale

--

<!-- .slide: class="rdcuslide"  -->

## Visibilité d'attribut
- Relativement permanente
- Très commune

![larman/F18.2](assets/larman/F18.2.png){width=150%}{style=border:none}

--

<!-- .slide: class="rdcuslide"  -->

## Visibilité de paramètre
- Durée de vie relativement courte
- Paramètre peut devenir attribut

![larman/F18.3](assets/larman/F18.3.png){style=border:none}

--

<!-- .slide: class="rdcuslide"  -->

## Visibilité locale

- Durée de vie relativement courte
- Peut être définie via
    - Instance créée localement
    - Instance retournée par une méthode

![larman/F18.5](assets/larman/F18.5.png){style=border:none}

--

<!-- .slide: class="rdcuslide"  -->

## Visibilité globale
::: block {style=font-size:0.6em}
- Relativement permanente
- Moins commune
- Meilleure définition via un singleton (GoF)
```java 
public class LogManager  {    
    private java.io.PrintStream sout ;    
    private static LogManager lmInstance ; 
    private LogManager ( java.io.PrintStream  out ) 
    {
         sout  = out; 
    }    
    public void log( String msg  ) 
    { 
      sout.println ( msg  ); 
    }    
    public static LogManager getInstance () {      
        if ( lmInstance  == null ) { 
            lmInstance  = new LogManager ( System.out );
        }      
        return lmInstance ;      
    } 
 }
```

Usage:

```java
LogManager.getInstance().log( "haaaaaaah haaaaaahhaa");
```
:::

--

<!-- .slide: class="rdcuslide"  -->

### Créativité et changements pendant le codage

- Les artefacts de conception affectent l'implémentation
- Pendant la programmation et les tests
    - multitudes de changements peuvent surgir
- S'attendre à des déviations et les prévoir
    - Favoriser le changement
- Le codage n'est pas une activité triviale
    - Pourquoi?

Note: Un bon design facilite l'implémentation et vice versa
Q : est-ce que le codage est trivial? 
non
efficacité
optimisation
clarté
gestion des imprévus
réusinage
...

--

<!-- .slide: class="rdcuslide"  -->

## Méthodes à partir des diagrammes d'interaction
![larman/F18.7](assets/larman/F18.7.png){style=border:none}{.stretch}

--

<!-- .slide: class="rdcuslide"  -->

## SalesLineItem
- SalesLineItem en Java
  
![larman/F18.6](assets/larman/F18.6.png){style=border:none}{width=70%}

--

<!-- .slide: class="rdcuslide"  -->
## Résumé

- Nous avons vu des processus de traduction entre:
    - les diagrammes de classes UML et les définitions de classes
    - les diagrammes d'interaction UML et les corps des méthodes
- Mais le travail de programmation laisse encore beaucoup de place à l'exploration

--

<!-- .slide: class="rdcuslide"  -->
### Validation de la compréhension
- Quelle est la motivation principale du principe GRASP Créateur?
    1. Pour avoir une création rapide (performante) d'instances
    1. Pour obtenir une conception plus facile à comprendre
    1. Pour avoir une conception qui prend moins de mémoire
    1. Pour identifier des occasions d'appliquer le patron Fabrique

--

<!-- .slide: class="rdcuslide"  -->
## Validation de la compréhension
- Le pattern Contrôleur GRASP sert à trouver la bonne classe…
    1. de la couche présentation pour réaliser une opération système
    1. de la couche domaine pour réaliser une opération système
    1.  de l'IHM pour implémenter une logique applicative
    1. de l'IHM pour contrôler le système

--

<!-- .slide: class="rdcuslide"  -->
## Validation de la compréhension
- Quel genre de contrôleur GRASP est JeuDeMonopoly dans l'exemple?

    1. Contrôleur de jeu
    1. Contrôleur MVC
    1. Contrôleur de session
    1. Contrôleur de façade

--

<!-- .slide: class="rdcuslide"  -->
### Validation de la compréhension
::: block {style=font-size:0.8em}
- Selon la figure A17.3/F16.3, qui connaît un objet Joueur, étant donné le nom du joueur?
:::
![F16.3, A17.3](assets/larman/F16.3.png){style=border:none}{width=50%}
::: block {size=font-size:0.8em}
Quel est ce patron GRASP? {.fragment .shade-up}
:::

--

<!-- .slide: class="rdcuslide"  -->
### Réalisation de cas d'utilisation NextGen
::: block {style=font-size:0.7em}
- La zone non-magie
    - Création de diagrammes d'interaction bien conçus n'est pas magique!
    - Tout s'appuie sur des principes de bonne conception justifiables.
        - GRASP (General Responsibility Assignment Software Pattern)
- L'examen final est aussi une zone non-magie!
    - Il faut y faire preuve d'utilisation des principes justifiables (GRASP)

![no_magic_red](assets/03-chp17F-18A-Conception_objet_avec_les_GRASP-42.pptx/no_magic_red.png){style=border:none}{width=20%}
:::

--

<!-- .slide: class="rdcuslide"  -->
## Processus de haut niveau
![processus.png](assets/03-chp17F-18A-Conception_objet_avec_les_GRASP-42.pptx/processus.png){style=border:none}

--

<!-- .slide: class="rdcuslide"  -->
## Réalisation de cas d'utilisation
- Cela «&nbsp;décrit la façon dont les cas d'utilisation sont réalisés dans le Modèle de Conception, en termes d'objets qui collaborent&nbsp;» [RUP]
    - Réalisation de scénario
- Cela fait le lien entre exigences et conception
- C'est un diagramme d'interaction
- C'est une documentation des décisions de COO
    - annotations GRASP
  

---

<!-- .slide: id='dcl' class="dclslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[15.11m](https://youtu.be/9n-sh3DnZx8)
1. **[Exercice](#exercice)** - Exercice

--

<!-- .slide: class="dclslide"  -->
## Deux façons de noter les attributs
![larman/F15.5, A16.5](assets/larman/F15.5.png)

```java
public class Register {
  private int id;
  private Sale currentSale;
  private Store location;
  // …
}
```

--

<!-- .slide: class="dclslide"  -->
## Classes collection
- Multiplicités des associations
- Besoin d'un groupe d'objets similaires
- Choix du type de collection
    -  influencé par le besoin
```java
public class Sale{
  private List<SalesLineItem> lineItems =
        new ArrayList<SalesLineItems>();
  // …
}
```

--

<!-- .slide: class="dclslide"  -->
## Ajouter une classe de collection
![larman/F18.10](assets/larman/F18.10.png){style=border:none}{width=100%}

--

<!-- .slide: class="dclslide"  -->
### Opération vs Méthode
::: block {style=font-size:0.8em}

- UML DCC : signature des opérations
    - Déclaration (décision de conception)
    - Opérations sont quasiment «&nbsp;vides&nbsp;» en UML
- Java : implémentation des méthodes
    - Implémentation (décision de codage)
- Déclaration d'**opération** (UML) est différente de l'implémentation de **méthode** (langage OO)
    - P.ex. un contrat d'opération définit les contraintes sur une opération et non une méthode
    - La différence est subtile mais importante
:::

--

<!-- .slide: class="dclslide"  -->
## Mots clés, stéréotypes, profils, étiquettes
::: block {style=font-size:0.8em}
- Voir les sections A16.7/F15.7, A16.8/F15.8
    - ```Stéréotype <create> , <destroy>, <metaclass>, <Actor>, <Interface>, …```
    - Le stéréotype déclare un ensemble d'étiquettes
- Etiquette: @login_required
    - Fonctionnalitées et attributs que l'on veux donner à une classe ou une méthode.
:::

--

<!-- .slide: class="dclslide"  -->
## Notation de dépendance
![larman/F15.9, A16.9](assets/larman/F15.9.png){style=border:none}{width=50%%}
::: block {style=font-size:0.6em}
fig F15.9

```java
public class Sale{
  public void updatePriceFor(

ProductDescription
description) {
    Money basePrice = description.getPrice();
    // …
  }
  // …
}
```
:::

--

<!-- .slide: class="dclslide"  -->

- Interfaces et réalisation d'interface
![larman/F15.12, A16.12](assets/larman/F15.12.png){style=border:none}

---


<!-- .slide: id='exercice' class="exerciceslide"  -->
### LOG210 Séance #05
### Analyse et conception de logiciels
1. **[Equipe](#equipe)** - Culture d'équipe
1. **[MDD](#mdd)** - Modèle du domaine - Révision
1. **[TypeScript](#exemplests)** - Exemples TypeScript (SGB)
1. **[Complexité](#complexite)** - Inhérente et accidentelle
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats pour réaliser les RDCU
1. **[RDCU](#rdcu)** - Exercice avancé
1. **[DCL](#dcl)** - Diagramme de classes logiciel
1. **[Exercice](#exercice)** - Exercice![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[55.43m](https://youtu.be/pcBHIMMowrc)

--

# Révision exercice 
## système d'échange de livre
https://github.com/yvanross/LOG210-exercices



---

<!-- .slide: class="feedbackslide"  -->
## Séance #05
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs