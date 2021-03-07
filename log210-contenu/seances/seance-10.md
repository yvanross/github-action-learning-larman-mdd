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
title: 'LOG210-C10-00-seance'
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

<!-- .slide: id='affinementMDD' class="mddslide" -->
## LOG210 Séance #10
## Analyse et conception de logiciels

1. **[Affinement du MDD](#affinementMDD)** ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[25.42m](https://youtu.be/oIjKVwf1Wps)
1. **[Diagramme d'intéraction](#interaction)**
1. **[Diagramme d'état](#etat)** 
1. **[Diagramme d'activité](#activite)** 

Note: Video 77m


--

<!-- .slide:  class="mddslide" -->

###  Affinement du modèle du domaine
::: block {style=font-size:0.8em}
Catégorie | Exemples 
------------|-----
 Objets physiques ou tangibles | CarteDeCrédit, Chèque
Transactions |PaiementEnEspèces, PaiementACrédit, PaiementParChèque
Systèmes externes | ServiceDAutorisationDesCrédits, ServiceDAutorisationDesChèques

Organisations |ServiceDAutorisationDesCrédit, ServiceDAutorisationDesChèques,       Documents de travail comptables, contractuels, juridiques | EffetsARecevoir

Tableau F26.1/A32.1
:::

Note: todo arranger la table

--

<!-- .slide: class="mddslide" -->

## Extensions au UC1: Traiter vente
- 7b. Payer par carte de crédit
    - … information de crédit … demande d'autorisation … autorisation de paiement …
- 7c. Payer par chèque
    - …
    - chèque … pièce d'identité …
    - autorisation de paiement par chèque … paiement par chèque …

--

<!-- .slide: class="mddslide" -->

## Systèmes d'autorisation de paiement

- RequêtePaiementACrédit et AccordCrédit
    - Abstractions des éléments dans l'activité d'autorisation de paiement
    - Pas nécessairement des informations (en termes de données transactionnelles) transmises sur le fil du réseau
    - **Classes conceptuelles toujours**

![image](assets/02-chp26F-31A_Affinement_du_modele_du_domaine-46.pptx/image7.png){.plain width=10%}

Note: todo refaire lien entre les images

--

<!-- .slide: class="mddslide" -->

## Exemple dans POS
Généralisation/spécialisation
 ![larman/F26.7, A32.7](assets/larman/F26.7.png){.plain}

--

<!-- .slide: class="mddslide" -->
### Exemple dans POS
Hiérarchie des services d'autorisation

 ![larman/F26.8, A32.8](assets/larman/F26.8.png){.plain width=80%}

--

<!-- .slide: class="mddslide" -->
### Transactions d'autorisation
- Est-ce utile?

![larman/F26.9](assets/larman/F26.9.png){.plain width=70%}
::: block {style=font-size:0.5em}
figure: F26.9, A32.9
:::

--

<!-- .slide: class="mddslide" -->
### Transactions d'autorisation

 ![larman/F26.10, A32.10](assets/larman/F26.10.png){.plain width=90%}

::: block {style=font-size:0.7em;text-align:left}
Le modèle du domaine n'est pas jugé en fonction de sa précision (justesse, correcte ou non) mais en terme de son utilité. Il n'est pas un but en soi
:::

--

<!-- .slide: class="mddslide" -->
### Modélisation de changement d'état
::: block {style=font-size:0.7em}
- Ne modélisez pas les différents états possibles d'un concept comme des sous classes
- Deux solutions
    - définir une hiérarchie d'états et les associés à X ;
    - ignorer la représentation des états dans le MDD et faire un diagramme d'états

 ![larman/F26.13](assets/larman/F26.13.png "figure: F26.13, A32.13"){width=60% .plain}

:::

--

<!-- .slide: class="mddslide" -->
## Hiérarchies et héritage dans l'implémentation
::: block {style=font-size:0.8em}
- Les hiérarchies de classes conceptuelles peuvent êtres reflétées ou non dans le modèle de conception
    - Par exemple, les classes paramétrées (templates) en C++/Java/C# permettre de réduire le nombre de classes dans l'implémentation
    - [www.tutorialspoint.com/cplusplus/cpp_templates](https://www.tutorialspoint.com/cplusplus/cpp_templates.htm)

--

<!-- .slide: class="mddslide" -->
## Intervalles de temps et prix des produits
Correction d'une «&nbsp;erreur&nbsp;» de l'itération 1

![larman/F26.19, A32.19](assets/larman/F26.19.png){.plain}

--

<!-- .slide: class="mddslide" -->
## Nom de rôles

- Extrémité d'une association peut avoir un rôle
- Rôle possède plusieurs propriétés: nom et multiplicité

![larman/F26.20,A32.20](assets/larman/F26.20.png){.plain width=40%}


--

<!-- .slide: class="mddslide" -->
## Concepts vs associations

![larman/F26.21, A32.21](assets/larman/A32.21.svg "Fig. A32.21/F26.21"){.plain width=80%}


Note: Les deux approches sont avantageuses
Note: Q : Quand est-ce important de présenter le nom d'un rôle?
Quand le rôle de l'objet n'est pas clair

Note: Q : Avantage de la première approche?
Montre une personne qui peut jouer plusieurs rôles
 Rôle peut changer dynamiquement

Note: Q : Avantage de la deuxième?
Permet d'avoir des associations et attributs spécifiques


--

<!-- .slide: class="mddslide" -->
## Éléments dérivés
::: block {style=font-size:0.8em; text-align: left}
Évitez de faire apparaître les éléments dérivés dans les diagrammes, sauf si leur omission peut nuire à la compréhension



![larman/ F26.22, A32.22, F26.23, A32.23](assets/larman/F26.23.png){.plain width=80%}


--

<!-- .slide: class="mddslide" -->
## Packages pour organiser le MDD

- Un élément peut être référencé dans un autre package
    - nom augmenté du nom du package
![larman/F26.26, A32.26](assets/larman/F26.26.png){.plain width=80%}

--

<!-- .slide: class="mddslide" -->
## Dépendance entre package 
::: block {style=font-size:0.8em}
- Package qui dépend d'un autre
    - indicateur de couplage
    - entre certains éléments du premier et du deuxième
:::
![larman/F26.28, A32.28](assets/larman/F26.28.png){.plain width=70%}

--

<!-- .slide: class="mddslide" -->
## Partitionner le modèle du domaine

- Placer en package les éléments
    - Cohésion relationelle
      - qui sont fortement associés
      - situés dans la même hiérarchie de classes
    - Cohésion fonctionnelle
      - situés dans le même domaine
      - participant au même cas d'utilisation
      

--

<!-- .slide: class="mddslide" -->
## Modèle du domaine (1)

![larman/9.17](assets/larman/F9.17.png){.plain width=75%}

--

<!-- .slide: class="mddslide" -->
## Modèle du domaine (2)

![mdd2](assets/02-chp26F-31A_Affinement_du_modele_du_domaine-46.pptx/mdd2.png){.plain width=60%}

--

<!-- .slide: class="mddslide" -->
## Affinements  du MDD Monopoly

![larman/F26.28, A32.28](assets/larman/f26.68.png){.plain width=50%}



---

<!-- .slide: id='interaction'  class="dssslide" -->

## LOG210 Séance #10
## Analyse et conception de logiciels

1. **[Affinement du MDD](#affinementMDD)** 
1. **[Diagramme d'intéraction](#interaction)** ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[9.33m](https://youtu.be/oVFNLrN5OYQ)
1. **[Diagramme d'état](#etat)** 
1. **[Diagramme d'activité](#activite)** 

--



<!-- .slide: class="dssslide" -->
### Diagrammes d'interaction modélisent l'action
Diagrammes de séquence
  
![larman/F14.1](assets/larman/Fig.A15.1.svg){.plain width=40%}

Diagrammes de communication
  
![larman/F14.2](assets/larman/Fig.A15.2.svg){.plain width=40%}


--

<!-- .slide: class="dssslide" -->
## Diagramme d'interaction
- Pour détailler les opérations
- Annoté avec les GRASP

--

<!-- .slide: class="dssslide" -->
## Comparaison
::: block {style=font-size:0.7em}
Type |  Forces (+) | Faiblesses (-)
--|--|--
Séquence | Indique clairement la séquence et l'ordonnancement des messages. Grande richesse de la notation | Ajout de nouveaux objets doit être vers la droite: consomme l'espace horizontal
Communication | Économique en termes d'espace, permet d'ajouter des objets dans les deux dimensions | Rend plus difficile la lecture des séquences de messages. Moins d'options de notation
:::

--

<!-- .slide: class="dssslide" -->

# Rappel de LOG121
## Classe vs. instance

![Class vs. Instance](https://www.plantuml.com/plantuml/svg/RSyz3eCm30NWFQUmE40Fm8JKgHVer2K42o9Y1za6YIFr75oiwJ-LkdZm-oG_DsfURAO4n-HLOT43dBWiEQ3JCVBanHEehGdBb1ZkU9UqFeozv9cxa5CMCF6i9K8sDyGE0Mco5GYfHL4N7bUgSucn0gyG76T3aDWF1lMp1RvP_NNnrtqwlkIoe_oVNfWpqNP5ro1tvOiR "Class vs. Instance"){.plain width=100%}

--

<!-- .slide: class="dssslide" -->

## Notation: Diagrammes de séquence
![larman/F14.7, A15.7](assets/larman/Fig.F14.7.svg){.plain width=80%}

Note: montrez la Fin des contextes d'exécution

--

<!-- .slide: class="dssslide" -->
## Résultat d'un message
![larman/F14.8, A15.8](assets/larman/Fig.A15.8.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Message d'un objet à lui-même
![larman/F14.9, A15.9](assets/larman/Fig.A15.9.svg){.plain width=60%}

--

<!-- .slide: class="dssslide" -->
## Destruction d'un objet
![larman/F14.11, A15.11](assets/larman/Fig.A15.11.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Itération sur une collection (notation explicite)

![F14.16](assets/larman/Fig.A15.16.svg){.plain width=100%}

fig F14.16, A15.16


--

<!-- .slide: class="dssslide" -->
## Itération sur une collection (notation implicite)
![larman/F14.17. A15.17](assets/larman/Fig.A15.17.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Imbrication de cadres
![larman/F14.18, A15.18](assets/larman/Fig.A15.18.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Appels asynchrones et objets actifs


![larman/F14.22, A15.22](assets/larman/Fig.A15.22.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Diagramme de communication
- Liens et messages
  
![larman/F14.23,A15.23](assets/larman/Fig.A15.23.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Diagramme de communication
- Liens et messages
  
![larman/F14.24, a15.24](assets/larman/F14.24.png){.plain width=100%}
Note: Voir solution dans la section exercice plus bas.

--


<!-- .slide: class="dssslide" -->
## Message pour une classe
![Invocation de méthode de classe](https://www.plantuml.com/plantuml/svg/TL1BQWCn3Dth52Ah5j8BX7H8oQhG0tIhQCJKn9OdjZoGstIRSyp5gac_MHICPUlPUfzTDIhMKiHddJAJXQpO2wRvOc_P3xuuKgq2zHXqf489gvsZ-5u2Br__80VYur1oqvvpp0Mja5Q7H0syME0maXgkDliLKaM-xUufYlPKhbXYt6wJ65tvkmuUEcJSO99QQP1N8BOmaRb0qEmbJrAGrudXwmcAUphF5vpViUctaJKqHHf7YJT6FGWBfoPmzsFv7bmDBhE1qTdJGXyzfIWL7t4GUveeH3f4UVdi_cfo5RtySsFO-M1FxWC0 "Invocation de méthode de classe"){.plain width=80%}

--

<!-- .slide: class="dssslide" -->
## Message d'un objet à lui-même
![larman/F14.25, A15.25](assets/larman/Fig.A15.25.svg){.plain width=40%}

--

<!-- .slide: class="dssslide" -->
<!-- .slide: class="dssslide" -->
## Création d'instance
![larman/F14.26,A15.26](assets/larman/Fig.A15.26.svg){.plain width=90%}

--

<!-- .slide: class="dssslide" -->
## Affectation de numéros d'ordre
![larman F14.27,A15.27](assets/larman/Fig.A15.27.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Affectation de numéros d'ordre
![larman/F14.28, A15.28](assets/larman/Fig.A15.28.svg){.plain width=90%}

--

<!-- .slide: class="dssslide" -->
## Itération sur une collection
![larman/F14.32, A15.32](assets/larman/Fig.A15.32.svg){.plain width=80%}

[collection en java](http://docs.oracle.com/javase/6/docs/api/java/util/Collection.html)

--

<!-- .slide: class="dssslide" -->
## Message vers une classe
![larman/F14.33, A15.34](assets/larman/Fig.A15.33.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
## Messages polymorphes
![larman/F14.34, A15.34](assets/larman/Fig.A15.34.svg){.plain width=100%}

--

<!-- .slide: class="dssslide" -->
##### *Exercice - Transformer en diagramme de séquence, de classes

![macallan.jpeg](assets/02-chp14F-15A-DiagrammesIteraction_36.pptx/macallan.png){.plain width=60%}

::: block {style=font-size:0.3em}
ref: UML Distilled, 2nd ed., Fowler, Scott, Addison Wesley, 2000.
:::

Note: Solution séquence ![Exercice Solution Séquence de Communication](https://www.plantuml.com/plantuml/svg/RLBDIiD04BxdAGPFUl052af1Un0KmGeUZ8TrCzWbczauksdj8_aSlfWpcpHDImB9pdu_yqUMCHbENUDXzODidKLO1zyb5mZMVx_V7P905S9TQ9gEd3LA5R5sr1es3SIqzoXVTbRJJ9XFO-il3XrLDlZ0aDXG50ef5N8aPrrhAC75ufahv1KbtfVqvgWAkmim4NOvdDDcEcXqoZuPQxmtzEW8I-gr6h-xZspn4iyxrYdOMYpvV4ZOP7qytCwQUC5SlAHHoJqoexr7xxQeeutY2dqMzWF2zMq_2ooWPTGDNLuLFeIsw67XjV5JMW4XnWw5tPYOsvVGRj3M8ZC-ZN01yipv69kmrQGgE19dAaAiuZ0ut9IazzSm08DP7oqvrOw4PJG9JpPre2P5fUf4eQDasoX5gef9jiCgZxD9WW4ycjKaB-IbBYMIF_KV "Exercice Solution Séquence de Communication")  
Solution classe ![Exercice Solution Classe de Communication](https://www.plantuml.com/plantuml/svg/TL7DIWCn4BxdAOQUTWlj0qXP2hK7GH2iu3bD1WsRp9H9jhg8xsxIhcuec4CWtzzyGxOnQKb3yB3_H37E81pO3yanmSxh614imev36CWPNN0LUqSdBJf0JAF7V8ip9QDYZjhqRy83MSEU1P9eYfb2IigKN7WIYxAd9EEh8yiVDGnV2l8v2HPBqwhlcdrqXFyg3ebD_v0mJ0hpZgPlMhY38xD7JHTKCF2vsCg34EqBFoENyAQTbR-P4rLI9-GUlJkZZ1VeTXDOTTUYLmQMgmmibekvlPhtADnVPpMtNw-xUcxklzaOGPqmTbtbBxgwpOrmYsJpp_m0 "Exercice Solution Classe de Communication")



Note: https://github.com/yvanross/LOG210-exercices/blob/master/out/communication/Macallan-communication-sequence/Macallan%20order.png

Note: https://github.com/yvanross/LOG210-exercices/blob/master/out/communication/Macallan-DCC/Diagramme%20de%20classe%20logiciel%20Macallan%20Stock.png


--

<!-- .slide: class="dssslide" -->
## *Exercice
### Transformer en diagramme de séquence

![larman/F14.24, A15.24](assets/larman/F14.24.png){.plain width=100%}

Note: ![Transformer-en-diagramme-de-sequence-Register-sale](https://www.plantuml.com/plantuml/png/NOyn3eD030Hxls95do8XD1GHRx1VO865JWA4E2VlvxY277JsxAwrxgBhvjzv8bhJ4FgmwkAeMhOnHBUjWaOmRgheP5aHqEC3RZ77yKdQU_Yf6vWOYKlchtAf_oOXmHbkRk4ZG8CLK39CLGegvUdtrK-TBKFwR0S0 "Transformer-en-diagramme-de-sequence-Register-sale")

--

<!-- .slide: class="dssslide" -->
### Parallélisme: Diagramme de communication

![parallelisme](assets/02-chp14F-15A-DiagrammesIteraction_36.pptx/communication-message-concurrent.png){.plain width=40%}
::: block {style=font-size:0.6em}

- For example,
    - messages 2.3a and 2.3b are concurrent within  activation 2.3,
    - Name represents  a concurrent thread of control.
    - Instance of A sends draw () messages concurrently to instance of B and to instance of C

- Réf: https://www.uml-diagrams.org/communication-diagrams.html
:::

--

<!-- .slide: class="dssslide" -->
<!-- .slide: class="dssslide" -->
## Diagramme de collaboration UML

![collaboration](assets/02-chp14F-15A-DiagrammesIteraction_36.pptx/collaboration.png){.plain width=50%}

::: block {style=font-size:0.5em}
Réf: Documenting Software Architectures: Views and Beyond, 2e édition, Felix Bachmann, Len Bass, Paul C. Clements, David Garlan, James Ivers, Reed Little, Paulo Merson, Robert Nord, Judith A. Stafford
:::

--

<!-- .slide: class="dssslide" -->
## Résumé
::: block {style=font-size:80%}
- Deux types de diagrammes d'interaction
    - de séquence et de communication
- Agilité est importante dans la modélisation
    - Habileté de faire rapidement des modèles en UML
:::   
![iteration](assets/02-chp14F-15A-DiagrammesIteraction_36.pptx/iteration.png){.plain width=80%}


---

<!-- .slide: id="etat" class="stateslide" -->
## LOG210 Séance #10
## Analyse et conception de logiciels

1. **[Affinement du MDD](#affinementMDD)** 
1. **[Diagramme d'intéraction](#interaction)**
1. **[Diagramme d'état](#etat)**  ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[26.34m](https://youtu.be/RrFpwLGIxIs)
1. **[Diagramme d'activité](#activite)** 

--


<!-- .slide: class="stateslide" -->
## Diagramme d'état

Pour modéliser les comportements.

Notion préalable: [Automate fini](https://fr.wikipedia.org/wiki/Automate_fini#Automates_UML)

--

<!-- .slide: class="stateslide" -->
## Exemple d'automate fini

![larman/F25.8, A29.1](assets/larman/Fig.F25.8.svg){.plain width=90%}

--

<!-- .slide: class="stateslide" -->
## Événement, état et transition

- Événement
    - occurrence d'un fait significatif ou remarquable
- État
    - la condition d'un objet à un moment donné, jusqu'à l'arrivée d'un nouvel événement
- Transition
    - relation état-événement-état
    - indique que l'objet change d'état

Note: Q : différences entre événement et transition?
selon l'état, un même événement peut mener à différentes transitions

Note: Il s'agit de la modélisation (un état est une simplification de la réalité). Ça dépend de ce qu'on veut capturer comme information dans l'état.

--

<!-- .slide: class="stateslide" -->
## Objets état-dépendants et état-indépendants

- Un objet répondant de la même manière à un événement donné
  - état-indépendant  (par rapport à l'événement )
- Un objet répondant différemment, selon son état, à un événement donné
  - état-dépendant

--

<!-- .slide: class="stateslide" -->
## Modélisation d'objet état-dépendants
- Équipement physiques contrôlés par des logiciels

![auto](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/auto.png){.plain width=30%}
![telephone](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/telephone.png){.plain width=30%}
![microonde](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/microonde.png){.plain width=30%}

--

<!-- .slide: class="stateslide" -->
## Modélisation d'objet état-dépendants
::: block {style=font-size:0.9em}
Transactions et objets métier apparentés
  - Vente, Commande, Paiement, etc.
  - Exemple: annuler l'envoi d'un colis après son ramassage? Cela dépend de son «&nbsp;état&nbsp;» probablement…
:::
![image11](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/image11.jpeg){.plain width=20%}
![image12](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/image12.jpeg){.plain width=30%}
![image13](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/image13.jpeg){.plain width=30%}

--

<!-- .slide: class="stateslide" -->
## Modélisation d'objet état-dépendants

Objets qui changent de rôle, comme une personne...
- état de civil ou de militaire
- résident temporaire, résident permanent, citoyen
  
![passport](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/passport.jpeg){.plain width=40%}

--

<!-- .slide: class="stateslide" -->
## Modélisation d'objet état-dépendants
::: block {style=font-size:0.7em}
- Protocoles de communication
    - p.ex. en TCP, si le gestionnaire du protocole est dans l'état «&nbsp;fermé&nbsp;», un message «&nbsp;close&nbsp;» sera ignoré
- Flot page/fenêtre IHM
    - séquence légale des pages Web ou des fenêtres, souvent complexe
- Contrôleurs de flot ou de sessions
    - objets «&nbsp;session&nbsp;» p.ex. application Web
- Ordre des opérations système d'un cas d'utilisation 
    - créerNouvelleVente , saisirArticle , terminerVente , etc.
- Gestion d'un événement individuel dans une fenêtre d'une IHM
    - séquences légales d'une fenêtre ou d'un formulaire (coller n'est pas valide si presse-papiers est nul)
:::

--

<!-- .slide: class="stateslide" -->
## Notation additionnelle
Transitions peuvent avoir des actions et des conditions de guard{style=text-align:left}

![larman/F25.9, A29.9](assets/larman/F25.9.png){.plain width=100%}

--

<!-- .slide: class="stateslide" -->
### Notation additionnelle
États imbriqués

![larman/F25.10, A29.3](assets/larman/Fig.F25.10.svg){.plain width=90%}
::: block {style=font-size:0.8em}
- Pouvez vous réaliser le diagramme de classe correspondant?
:::

--

<!-- .slide: class="stateslide" -->
#### *Automate fini et cas d'utilisation 1/2

![DSS Traiter Vente Système externe](https://www.plantuml.com/plantuml/svg/ZLFDRk903BxdAQoUg0JQUvH5HMoFkqAYsXENsOa5LYUUTEoWSklRB7sElDXwKg10grKlqSIVlnzxaZjHbxHh0lnOBk4XEL9Cy1jP4POxqNxV8E2p5HaBUIHkNN8DYEu2sZEHp-Gpv8_pZ-iKEwvz33619iTYa2cUTItngKFs-1D5t1fdWTOCFhkcGabDEyUfQ7gHgFf6qy9vDTcRSkv8X33TW1FmXUagUMeTgu77w0Cero2chITSyQmpAHAd57d5yzI_rgHl5EUXgWQhwVIBz4s_jw6EzCqPtq-c0YLuCy3qAtPR3067YOeGOmi9nTOzc0IK0WxzOXDIchsLLppoiSOoxvpNOtZgB0tfhYJMMwDKrMIIIJMAJzJcJ6FGg2uKo3LadsCEssT3Z6b8CBejJjoX7TmMFQXxjYGkABIEiB7EUxwNjjzxAr_Ci_Y0Zvh8QkaEMSyC361hBp08deJxbyFcFzSzmLUoOwhdyvE56DNkh0JNwIRVIlyAt_DBFjj7TU6uSEbmMvzRlkCVFHTvUJAFN7UKyCf_yvy0NB_l8M7_jolkh6O_ppy0 "DSS Traiter Vente Système externe"){.plain width=70%}

::: block {style=font-size:0.7em}
- Diagramme d'état correspondant?
:::

Note: Est ce que vous savez comment passer du diagramme d'état vers le code?

Note: Déterminer les états à partir d'un diagramme de séquence système.  Question aux étudiants: Quel est l'intérêt?

Note: Les nom des opérations correspondent aux nom des transitions.

Note: Convertissez ce diagramme d'état en diagramme de séquence



--

<!-- .slide: class="stateslide" -->
## *Automate fini et cas d'utilisation 2/2

![etats](assets/03-chp25F-28A-Diagrammes-etats-13.pptx/etats.png){.plain width=100%}

::: block {style=font-size:0.7em}
- Diagramme de classes logiciels correspondant?
:::

Note: Convertissez ce diagramme d'état en diagramme de classe.
Note: Diagramme de classe ![etat-caisse-enregistruse->classe](https://www.plantuml.com/plantuml/png/vPMnJiCm48PtFyMfKokHWRLYe8ewiA1AHKminhcsbbAxFPy10NaV-XnzCUoKWDEcekg4HAQJ__kJkyzdvzgn9FRBKWYXIkaSv58xX_0c527IhVLFM9PuZuQnFn0kg9f6n5ejiAziWNLSuWMilJIi6GU2aPRQ83Mc-aqJgN4P5ypOhL2Xwo-juM0PEYPjvdjfevomqBoNT06woFDknqHIli2rnmxF95RaSckKruJVVkdPadP8eSWvyfHbh7S8D-CGxK08rwmdYmCXAY5qQ8PcKc6Q_--uHHBoCIXICUn6w8T66AEtHgoWaqoYdmGfoT_ZzNhmhT_P7NESXF6O-GoYoQjIkDNNeHmnnpRgHY50XV1qqgoWESVJ2BC162ndJM0bsWKq7JRNmrySpf-QTo0bQskImYExDcFnDQozonvafESBpkeulGQI6AxUiy8-comPTD6MizQE7HEReWxqrjuTkZlw4iQ6oIXnnc1dILr3kBEUqK7O6x2hxOPgctimy-t6R3yeCl460LyKhgBqO5QIeDXkPjANBAxH5E7ty0a0 
"etat-caisse-enregistruse->classe")
Note: Diagramme de séquence ![etat-caisse-enregistruse->classe-1](https://www.plantuml.com/plantuml/png/hLF1JiCm3BtdAwoUraczS2nZMbJji0iWLQfsuE9rXaLqRPLu1VuU9soY0OQOn2LARB_tx2TduHWj7_QDSi-cxT7Y7af-QmWSMrE7Z98mczhqs3AierUI5sYSemJGGH6dSCWrCxLCbJyIy3MwYeiSvgKm6D8-s90BJAK6TH_9B1bv9BKgOJRJ6-aHQvxFbO8rPDaSYkaqXzeICarI1P8qWzobjIBaTHKLI50mEJZYadq8XrIDG5iwzr17lK16zhOx3DGq7vDE8ewJ1Wvm0qydeVJwh4u0w2g7rUVGu53G3-qFOhmpRYGe1klgVnXA7ParQb9A2fXbcR_4uU-MEZnlwJgG5F35MnNilSZTCDsVtIrrx0qELx-R8mifCDcw2t62y6koVAsfPzErtb3UsUvbajprPD77eErOE710q-16VjvZPy73vGjApqbwj4cuub4Mr6xbVxu3 "etat-caisse-enregistruse->classe-1")



--

<!-- .slide: class="stateslide" -->
## État d'une commande
![larman/F25.12, A29.5](assets/larman/F25.12.png){.plain width=80%}

Réf:Applying Domain-Driven Design and Patterns: With Examples in C# and .NET

--

<!-- .slide: class="stateslide" -->
## Exercices diagramme d'état

- Téléphone intelligent
- Vidéo projecteur
- Guichet automatique
- [CU29-Annuler un service](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
- [CU30-Confirmer une visite supervisée](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
- [CU31-Confirmer des échanges de garde](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.571qr0tmgkvv)
- [CU32-Rédiger une note d'observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.1u1pach8bqyv)
- [CU33-Corriger une note d'observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.8rnjn3p0d663)


---


<!-- .slide: id="activite" class="dssslide" -->
## LOG210 Séance #10
## Analyse et conception de logiciels

1. **[Affinement du MDD](#affinementMDD)** 
1. **[Diagramme d'intéraction](#interaction)** 
1. **[Diagramme d'état](#etat)** 
1. **[Diagramme d'activité](#activite)** ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[16.01m](https://youtu.be/baWGzdegw5Q)


--

<!-- .slide: class="dssslide" -->
## Diagrammes d'activités
- Exposer les activités séquentielles et parallèles d'un processus.

![Représentation d'activités séquentielles et parallèles](assets/03-chp25F-28A-Diagrammes_activites-10.pptx/EngrenagesVisages.svg){.plain width=40%}

--

<!-- .slide: class="dssslide" -->
### Diagrammes d'activités
![larman/F25.1, A28.1](assets/larman/F25.1.svg){.plain width=50%}

Note: Pouvez vous réaliser le diagramme de classe correspondant?

--

<!-- .slide: class="dssslide" -->
### Compléments sur la notation
![larman/F25.4, A28.4](assets/larman/F25.4.svg){.plain width=40%}

![larman/F25.5, A28.5](assets/larman/F25.5.svg){.plain width=60%}

--

<!-- .slide: class="dssslide" -->
## Signaux

![larman/F25.6, A28.6](assets/larman/F25.6.svg){.plain width=70%}

--

<!-- .slide: class="dssslide" -->
### Lignes directrices – modélisation d'activités
::: block {style=font-size:0.8em}
- Utile pour les processus très complexes 
  - impliquant **plusieurs parties**
  - impliquant des **activités séquentielles**
- - impliquant des **processus en parallèles**
- Utilisez les niveaux d'abstraction («rateau» et sous-activité) afin de gérer la complexité
    - Niveaux 0, 1, 2, etc.
    - Dans un diagramme, veillez à ce que les nœuds d'action soient à peu près équivalents en ce qui concerne leur propre niveau d'abstraction.
    - p.ex. au niveau 0, «&nbsp;Livrer Commande&nbsp;» et «&nbsp;Calculer TVA&nbsp;» ne sont pas cohérents
            - «&nbsp;Livrer Commande&nbsp;» et «&nbsp;Envoyer Facture&nbsp;» le sont
:::

--


<!-- .slide: class="dssslide" -->
#### Modélisation de Traiter une vente

![larman/F25.7, A28.7](assets/larman/F25.7.svg){.plain width=60%}


--

<!-- .slide: class="dssslide" -->
#### D'autres exemples
![exemple](assets/03-chp25F-28A-Diagrammes_activites-10.pptx/exemple.jpeg){.plain width=60%}
::: block {style=font-size:0.5em}
- Applying  Use Cases, 2nd ed., Schneider &amp; Winters, Addison Wesley, 2001.
:::

--

<!-- .slide: class="toolslide" -->
## outils PlantUML

<div class="container">

![Diagramme activité](https://www.plantuml.com/plantuml/svg/JOuz2iCm38LtdyBGMoHB81qxcEuTL4Uu8lu9iX88v48zHozMfQMXYmJlVKzFNHLWcLEqPuB0a5922rve8NazJHqfJw2ohR96rCdaT_pFkOCV0vSv3xx4mbOOSbKBivYjZwHxCvyQq_Gb9SW3ifqYI6ksKwJmaC28URkYKhEcbJ_8csaSutxko5neOQ1Qic9E9KLsIG7t1NwbZOCLkTNoCfaEyw2Flm40 "Diagramme activité"){.col .plain  width=80%}

::: block {.col}
```plantuml
|Client|
start
:Commander plat;
|#lightgreen|Restaurant|
:Commande]
:Preparer plat;
|Livraison|
:Plat]
:Livrer Plat;
|Client|
:Payer;
stop
```
:::
</div>

[Exemple : Dynamique GitHub Classroom](https://education.github.community/t/what-do-students-see/57848/4?u=fuhrmanator)

--

<!-- .slide: class="toolslide" -->

#### Exercice: Retour de voiture loué
::: block {style=font-size:0.5em}


Esquissez le diagramme d'activités lors de la réception de voitures
louées (après la location) dans une compagnie. Pour le diagramme, faites
att ention à la **notation UML**: cela comprend les objets (pour la
voiture et pour la facture), le début et la fin de l'activité, les
débranchements, les jointures, les décisions et les fusions.

Scénario

-   Le client rend la voiture et les clés.
-   Le réceptionniste note le kilométrage et le niveau d'essence pour calculer la facture.
-   Le client paye sa location, selon le montant sur la facture et part après.
-   L'agent inspect la voiture pour la proprété. Si elle n'est pas assez propre, alors l'agent doit laver, rincer et sécher l'extérieur et nettoyer l'intérieur. Ce travail devrait commencer le plus vite possible, après que le réceptionniste ait finit de noter les informations pour la facture.
-   Les rôles sont le \_\_\_\_\_\_ le \_\_\_\_\_\_\_\_ (qui gère la documentation et le paiement de la location) et \_\_\_\_\_\_ (qui gère le traitement des voitures avant la prochaine location).
:::
Note: ![](http://www.plantuml.com/plantuml/img/PP31IWD138RlUOhSR4_Unr8HGH6ab1MyzJ3iPjlGQMR9P2g5VI3tEVR5dArIBLx2aFpvvykVzYoTLt_0PAT0fIhNbWy1qcMoyz9yA9kHe6acCBOYNUHbHHQpOaDuZ6nP2KFCuq2Bsxo4_Z4mYVMGpAk1gqWQlIZleA_6eQREE8fmCkh1lV-ua64TnY5jmAsYaUAUGpoCdwP-Eqr1-4W-OtD3AP7KnQsDkWVtF0uo3besMbz_V-EUlb-RNo2tzgShoRe0iXQaX-rPC9cXtteMS2-IEgedY0ivjpZhD7PAztEqNObb5ZFFWK8Yd4cKEQ1xzSU_E-WgBg1NdRSImEwwjIApEC6nM3c4AHUi4XotKyNpbV-3InQxBm00)

--

<!-- .slide: class="dssslide" -->

#### *Exercices - Modéliser d'une dynamique de stationnement
- Client arrive, entre sa carte de crédit, le système enregistre la carte et la remet au client, le clientl reprend sa carte, le système ouvre la barrière, le client entre pour se stationner, le système ferme la barrière. Le client se présente à la sortie, présente sa carte de crédit, le système imprime le recu, le client reprend sa carte de crédit, prend le recu, le système ouvre la barrière, le client peut alors sortir, le système détecte la sortie et ferme la barrière.

Note: ![Entrer dans le stationnement](https://www.plantuml.com/plantuml/png/TK-x4S8m3EqrXJUWTveSFYPW0XC_xdpdo3b5fl90xC5YA2a855Jwl9yqhXf5srn8inQu2wj0N8gyEXiDrLoPCOELUYZPQgTTHDvwumRhuO8WPHsedwimhj-wJhvWqYPmqyOToE-Q4tanWke1V18CMGIS3kYFSsqFoU9kKII_dhAP9wZ5sMNOde6BJQkjxv0PFynLwqAZfTZ_Rm00 "Entrer dans le stationnement")
Note: ![Sortir du stationnement](https://www.plantuml.com/plantuml/png/RL4xRiCm3Drr2exErDq1Yg16vmvPkwZoKqj0bWoAAbB01yezSh7I3efuw2JgYNmVwbJLYxOfEMLDe7CHPQ6naJqebvmn8QjRXiHsBcxhTxtL41gi1Ws2aVNebfSY6UVztEBwXA1DG67jFRh-FlFMzCbnf6w32HUkYWFf5p9rFwW7rmUVGakcOeeSttFq6v5GsAmO5K-py6I883IxYscgFhIGAgZBnSW-aI5UyNf1c5T_pvQap0vvvFX8PnIp6BRp-tU_Q_oViRHliQrzU16-NMKT6w4MtBpLTQCWtxGO726huLtdPkDa6lO9lm00 "Sortir du stationnement")



--



<!-- .slide: class="dssslide" -->
## Exercices diagramme d'activité

- Retour de voiture louée
- Recette de cuisine
- Retrait au guichet automatique
- Ordinateur de plongée
- Demander un remplacement
- Processus d'achat sur le web
- Vendre au comptoir

https://github.com/yvanross/LOG210-exercices

---

# Résumé

1. **[Affinement du MDD](#affinementMDD)**
1. **[Diagramme d'intéraction](#interaction)** 
1. **[Diagramme d'état](#etat)** 
1. **[Diagramme d'activité](#activite)** 

--

<!-- .slide: class="feedbackslide" data-background-color="skyblue" -->
## Séance #10
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs