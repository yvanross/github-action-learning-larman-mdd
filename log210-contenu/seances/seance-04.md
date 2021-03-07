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
title: 'LOG210-C04-00-seance'
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

<!-- .slide: id='admin' -->
## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité
1. **[MDD](#mdd)** - MDD - Composition
1. **[Contrats](#contrat)** - Contrats - list/map
1. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion
1. **[Exercice](#exercice)**

<!-- https://github.com/hakimel/reveal.js/issues/680#issuecomment-64530780 -->

--

# Administrivia

1. Invitation Lab 1+2+3 (GitHub Classroom)
   - ⚠️ lien différent pour chaque groupe!
   - ne pas partager
   - problèmes de création d'équipe GitHub classroom (à signaler aux chargés sur Discord)
2. Il y aura un MDD pour le système SGB que vous devez utiliser pour votre MDD


---

<!-- .slide: id='equipe' class="equipeslide"  -->

## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[10.05m](https://youtu.be/rNHYdNo5cjU)
2. **[MDD](#mdd)** - MDD - Composition
3. **[Contrats](#contrat)** - Contrats - list/map
4. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion
5. **[Exercice](#exercice)**

--

<!-- .slide: class="equipeslide"  -->
## Humilité
- Je ne suis pas le centre de l'univers.
- Je ne suis ni omniscient ni infaillible  
- Je suis ouvert à m'améliorer {.fragment .shade-up}

**Moi < Équipe** {.fragment .shade-up}
  
Note: 4 animations, omniscient -> qui sait tout

--

<!-- .slide: class="equipeslide"  -->
##  Humilité en pratique…
- Si quelqu'un travaille sans assez d'humilité
  - «Veux-tu descendre de ton piédestal?»
- Même si tu es le plus fort en JavaScript dans l'équipe, ne le mets pas en évidence constamment. C'est agaçant.
- Dans certaines cultures, l'humilité est très importante (p. ex. le confucianisme).


--

<!-- .slide: class="equipeslide"  -->
##  Humilité en pratique…
- Apprendre à donner et à accepter les critiques **CONSTRUCTIVES**
- Les donner avec respect, p.ex. « J'ai de la misère à comprendre le flot de contrôle ici dans ton code » plutôt que « Ton code est mal écrit. »
- Les accepter avec humilité, p.ex. « Je comprends ton point de vue. Je vais refactoriser ce code en fin de semaine. »
- Savoir que son estime de soi n'équivaut pas à sa qualité de code.


--

<!-- .slide: class="equipeslide"  -->
## Humilité en pratique…

- Apprendre à être patient
- Chacun a sa personnalité et donc sa façon de déboguer, de concevoir, d'écrire du code
- Rester susceptible à l'influence des autres…
- Plus on est ouvert à être influencé, plus on *peut* influencer
- Plus on est vulnérable, plus on a l'air fort
- Si on veut être entendu, on doit d'abord écouter

---

<!-- .slide: id='mdd' class="mddslide"  -->

## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité
1. **[MDD](#mdd)** - MDD - Composition![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[22.47](https://youtu.be/-GPYii8-ivk)
1. **[Contrats](#contrat)** - Contrats - list/map
1. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion
1. **[Exercice](#exercice)**

Note: Correction de l'exercice

--

<!-- .slide: class="mddslide" -->
# MDD

Correction de l'exercice

--

<!-- .slide: class="mddslide" -->

# MDD?
- Attributs dérivées?
- Généralisation/spécialisation?{.fragment .shade-up}
  - Règle « à 100% »?{.fragment .shade-up}
  - Règle « est un »?{.fragment .shade-up}
  - Création d'une sous-classe conceptuelle?{.fragment .shade-up}
  - Création d'une super-classe conceptuelle?{.fragment .shade-up}
- Classe d'association{.fragment .shade-up}

--

<!-- .slide: class="mddslide" -->
## Agrégation et Composition
- N'utilisez pas l'agrégation (c'est un placébo)
- Utilisez la composition lorsque c'est approprié.

![image](assets/02-chp26F-31A_Affinement_du_modele_du_domaine-46.pptx/agregationComposition.png){.plain width="70%"}

Note: 1 animation

--

<!-- .slide: class="mddslide" -->
### Composition?
Durée de vie du composant est limitée à celle du composite; {.fragment .shade-up}
- **dépendance de création-suppression** de la partie avec le tout. {.fragment .shade-up}
::: block {.fragment .shade-up}
- **Assemblage logique ou physique évident** entre le tout et les parties
::: 
::: block {.fragment .shade-up}
- **Propriétés** du composite (ex. son emplacement s'étendent aux composants)
:::
::: block {.fragment .shade-up}
- **Opérations** appliquées au composite (destruction, déplacement et enregistrement) se propagent aux composants
:::

Note: 3 animations

--

<!-- .slide: class="mddslide" -->
## Composition

#### Avantages

- Clarifie des contraintes du domaine
- Aide à identifier le **patron créateur**
- Opérations sont souvent propagées aux composants

#### Inconvénient

 - «Chicanerie» - laisser tomber la composition en cas de doute ou de conflit dans l'équipe (voir [Bikeshedding](https://exceptionnotfound.net/bikeshedding-the-daily-software-anti-pattern/))

--

<!-- .slide: class="mddslide" -->
## Modélisation des associations 

- La création d'une instance ne signifie pas la création d'une association
- Association un à plusieurs (⚠️dans la solution)
  - Avec  un attribut
  - Avec une map (tableau associatif)
  - Avec une liste

--

<!-- .slide: class="mddslide" -->
## Classe de «&nbsp;description&nbsp;»
![larman/F9.9](assets/larman/F9.9.png){.plain width="50%"}
- Article représente un article physique
- Attributs prix, numéro de série et code
- Chaque fois qu'un article est vendu, l'objet Article correspondant est «&nbsp;supprimé&nbsp;»

Note: A cause du numéro de série qui est unique

--

<!-- .slide: class="mddslide" -->
## Classe de «&nbsp;description&nbsp;»

- Il est nécessaire de disposer de la description d'un produit ou d'un service, indépendamment de l'existence actuelle de ces derniers
- La suppression d'instances d'une entité qu'elle décrit entraîne la perte d'information qui doit être mémorisée
- Elle réduit la redondance ou la duplication des informations

--

<!-- .slide: class="mddslide" -->
## Classes de description
- Souvent, les objets d'une classe de description sont stockés dans un Catalogue
- Lire en détail la section 9.13 du livre pour d'autres exemples

--

<!-- .slide: class="mddslide" -->
## Classes de description
- Attention : ne pas appliquer les classes de description n'importe comment:

![classe-description](assets/05b-chp09-Modele-du-domaine_51.pptx/classe-description.png){.plain width=70%}

---


## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité
1. **[MDD](#mdd)** - MDD - Composition
1. **[Contrats](#contrat)** - Contrats - list/map![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[4.39m](https://youtu.be/S8_grRXb3G4)
1. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion
1. **[Exercice](#exercice)**
<!-- .slide: id='contrat' class="contratslide" -->

--

<!-- .slide: class="contratslide" -->
# Contrats

Quel sont les trois type de postconditions?

--

<!-- .slide: class="contratslide" -->
# Contrats

- Postcondition:
  - « ... sur la base de correspondance avec *clé*.&nbsp;»
    - implique une multiplicité de 1 à plusieurs
    - implique l'utilisation d'une Map (tableau associatif)

---

<!-- .slide: id='rdcu' class="rdcuslide" -->

## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité
1. **[MDD](#mdd)** - MDD - Composition
1. **[Contrats](#contrat)** - Contrats - list/map
1. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[27.49m](https://youtu.be/6VbY6RFPnjc)
1. **[Exercice](#exercice)**

--


<!-- .slide: id='rdcu' class="rdcuslide" -->
## GRASP
- Contrôleur
- Créateur
- Expert en information
- **Faible couplage**
- **Forte cohésion**
- Polymorphisme
- Indirection
- Protection de variation
- Fabrication pure

--

<!-- .slide: class="rdcuslide" -->

## Faible Couplage
Question : Qui peut fournir la liste des cases
![F16.3,A17.3](assets/larman/F16.3-trans.png){.plain width=75%}

--

<!-- .slide: class="rdcuslide" -->
## Faible Couplage
- Si la classe Pion (chien) avait la responsabilité:

![F16.7, A17.7](assets/larman/F16.7F.png){.plain width=70%}

--

<!-- .slide: class="rdcuslide" -->
## Faible Couplage
- Problème :
    - Comment réduire l'impact des modifications?
- Solution :
    - Assigner les responsabilités de sorte à **éviter tout couplage inutile**.
    - Appliquer ce principe pour **évaluer plusieurs solutions possibles**.

![solution-faible-couplage](assets/01-chp16F-17A_GRASP-46.pptx/solution-faible-couplage.png){width=60% .plain}

--

<!-- .slide: class="rdcuslide" -->
## Faible Couplage
- Expert soutient Faible Couplage
- Expert évite de faire du couplage inutile, puisqu'un expert n'aura pas à demander à quelqu'un d'autre…

![solution-faible-couplage](assets/01-chp16F-17A_GRASP-46.pptx/solutions-faible-couplage.png){width=70% .plain}

--

<!-- .slide: class="rdcuslide" -->
## Faible Couplage
### Motivation
- Classes fortement couplées sont
    - difficiles à maintenir
    - difficiles à comprendre seules
    - difficiles à réutiliser

--

<!-- .slide: class="rdcuslide" -->
## Forte Cohésion
- Poursuivons la conception

![cohesion-lancer-partie](assets/01-chp16F-17A_GRASP-46.pptx/cohesion-lancer-partie-trans.png){.plain}

--

<!-- .slide: class="rdcuslide" -->
## Cohésion
- Mesure de combien une classe (ou module) supporte une seule responsabilité
![image7.jpeg](assets/02-chp16F-18A-Exercice_Cohesion.pptx/image7.jpeg){.plain}

--

<!-- .slide: class="rdcuslide" -->
## Cohésion
![cohesion](assets/02-chp16F-18A-Exercice_Cohesion.pptx/cohesion.png)

Faible | Forte
--|--
Beaucoup de fonctions | Peu de fonctions
Responsabilités écartées | Fonctions apparentées

--

<!-- .slide: class="rdcuslide" -->
## Forte Cohésion
- Plusieurs choix opposés de conception

![lancer-partie-1](assets/01-chp16F-17A_GRASP-46.pptx/lancer-partie-1-trans.png){width=40% .plain}

--

<!-- .slide: class="rdcuslide" -->
## Forte Cohésion
- JeuDeMonopoly délègue les responsabilités

![lancer-partie-2](assets/01-chp16F-17A_GRASP-46.pptx/lancer-partie-2-trans.png){width=80% .plain}

--

<!-- .slide: class="rdcuslide" -->
## Forte Cohésion
1. **Problème** :
    - Comment s'assurer que les objets restent compréhensibles et faciles à gérer, et, bénéfice second, qu'ils contribuent au Faible Couplage?
1. **Solution** :
    - Assigner les responsabilités de sorte que la cohésion demeure élevée. Appliquer ce principe pour évaluer les solutions possibles.{.fragment .shade-up}

--

<!-- .slide: class="rdcuslide" -->
## Forte Cohésion
- Comparaison des choix

![F16.8,A17.8](assets/larman/F16.8a-trans.png){.plain width=80%}

--

<!-- .slide: class="rdcuslide" -->
## Cohésion: Exercice

- Lesquelles des classes suivantes ont de multiples responsabilités?
  
![image9](assets/02-chp16F-18A-Exercice_Cohesion.pptx/image9-trans.png){.plain width="60%"}

--

<!-- .slide: class="rdcuslide" -->
## Cohésion: Exercice
- Déterminez si ces classes ont une cohésion forte ou faible:

![image10](assets/02-chp16F-18A-Exercice_Cohesion.pptx/image10.png){.plain width=75%}

--

<!-- .slide: class="rdcuslide" -->
### Validation de la compréhension
Les patrons GRASP Forte Cohésion et Faible Couplage servent principalement à{align=left}

1. concevoir des classes avec beaucoup de responsabilités
2. choisir les classes dans la couche applicative pour traiter une opération système
3. évaluer plusieurs possibilités lors de la réalisation d'une dynamique de conception
4. choisir une bonne classe pour créer des instances d'une autre classe

<!-- ## Décision 
### Faible couplage vs Forte cohésion
![poidDecision](assets/03-chp17F-18A-Conception_objet_avec_les_GRASP-42.pptx/poidDecision.png){style=border:none} -->

---

<!-- .slide: id="exercice" class="codeslide" -->
## LOG210 Séance #04
## Analyse et conception de logiciels
1. **[Administration](#admin)**
1. **[Equipe](#equipe)** - Travail d'équipe - Humilité
1. **[MDD](#mdd)** - MDD - Composition
1. **[Contrats](#contrat)** - Contrats - list/map
1. **[RDCU](#rdcu)** - GRASP Couplage et Cohésion
1. **[Exercice](#exercice)**![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}

--


<!-- .slide:  class="codeslide" -->
# Exercice

- En équipe de 4 personnes, réaliser les modèles suivant:
  - MDD(avec catégorie de classe et d'association), 
  - DSS, 
  - Contrats, 
  - RDCU 
  - DCL 
  
Pour les cas d'utilisations suivants:

--

<!-- .slide:  class="codeslide" -->
## Étude de cas 
### Système d'échange de livres universitaires
::: block {style=text-align:justify}
Le Bureau du Développement Durable (BDD) de l'Université a mis en place un système d'échange de livres aux fins de développement durable et pour réduire les coûts pour les étudiants (les clients du système). La version initiale est rudimentaire et ne permet que deux fonctionnalités :
:::

--

<!-- .slide:  class="codeslide" -->
### CU01 - Ajouter un livre à échanger

::: block {style=font-size:0.6em;text-align:left}
Acteur principal : Client (étudiant)

**Préconditions :**

Le Client est identifié (par son nom d'utilisateur) et authentifié par son mot de passe.

**Scénario principal (succès)**
1.	Le Client démarre un nouvel ajout de livre. 
2.	Le Client entre le code ISBN du livre, ainsi que le code de sa condition. 
3.	Le Système enregistre le livre et présente sa description (titre, nombre de pages, auteurs, maison d'édition, no d'édition ). Le Client répète les étapes 2 à 3 jusqu'à ce qu'il ait saisi tous les livres à échanger. 
4.	Le Système présente la liste de livres que possède le Client. 

**Cas alternatifs**

3a. Le système affiche un message d'erreur puisque le livre n'existe pas.
:::

--

<!-- .slide:  class="codeslide" -->
#### CU02 - Proposer un échange de livres 
::: block {style=font-size:0.5em;text-align:left}
Acteur principal : Client (étudiant)

**Préconditions :**
Le Client est identifié (par son nom d'utilisateur) et authentifié par son mot de passe.

Scénario principal (succès) 

1.	Le Client démarre une nouvelle proposition d'échange de livres. 
2.	Le Système présente une liste d'autres Clients dans le système ainsi que le(s) livre(s) qu'ils ont à échanger. 
3.	Le Client sélectionne un autre Client (le Client Proposé) à qui il veut proposer un échange. 
4.	Le Système présente la liste de livres que possède le Client Proposé et une liste de livres que possède le Client. 
5.	Le Client ajoute à la proposition d'échange un livre. Si c'est un de ses livres, alors c'est à offrir dans la proposition. Sinon c'est un livre du Client Proposé et c'est à recevoir dans la proposition. Le Client répète l'étape 5. jusqu'à ce qu'il soit satisfait de la proposition. 
6.	Le Système présente le nombre total de livres à offrir et à recevoir et demande au Client de confirmer la proposition. 
7.	Le Client confirme et le Système enregistre sa proposition d'échange avec la date et l'heure. 
8.	Le Système envoie un courriel au Client Proposé pour l'informer de la proposition d'échange. 
::: 



---

<!-- .slide: class="feedbackslide"  -->
## Séance #04
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs