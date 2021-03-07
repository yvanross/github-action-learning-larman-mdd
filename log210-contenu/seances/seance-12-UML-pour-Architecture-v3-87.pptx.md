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
title: 'Séance #12-UML'
height: 100%
width: 100%
margin: 0
minScale: 1
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'

---


# LOG210
## Séance #12
### Utilisation d’UML pour
### l’analyse et la conception
### de logiciels
### Hiver 2019 - F. Bordeleau
note: A refaire complètement. N'utilise pas la même terminologie que Larman

---

# Vue d'ensemble 
# d'UML

---

## Diagrammes UML
![uml](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/uml.png){style=border:none}{width=100%}

---

### Méthodologie  de développement  UML (2)
::: block {style=font-size:0.9em}
- UML est  un langage  de modélisation général  qui inclut  un large éventail  de concepts, notations et diagrammes.


- Avant d’intégrer  UML dans  un processus  de développement , il est fondamental  de définir correctement une méthodologie  pour prendre en  charge son utilisation.
    - La définition d’une méthodologie  de développement facilitera l’intégration  et l’adoption d’UML , augmentera  la qualité  des modèles  et augmentera  la productivité  des développeurs.
:::

---

### Méthodologie  de développement  UML (2)
::: block {style=font-size:0.7em}

- Pour chaque  phase de développement , vous devez définir
    - Ensemble de diagrammes  UML utilisés dans  la phase 
    - Rôle  de chaque diagramme
    - Sous-ensemble de la notation UML utilisée
    - Remarque: certains diagrammes peuvent jouer   différents rôles dans différentes  phases du processus  de développement .
        - Par exemple . Les diagrammes  de séquence peuvent être utilisés  pour décrire  les interactions entre le système  et les acteurs lors  de la phase de modélisation  de cas d'utilisation , fournir  des détails  sur l'exécution  de scénarios lors  de la phase de conception et capturer des traces d'exécution lors  de la phase de test.
- Définir  un ensemble de règles  et de directives pour développer  des éléments  de modèle  aux différentes  phases de développement
:::

---

## Personnaliser / Customiser  UML
::: block {style=font-size:0.8em}
- UML fournit  un ensemble de concepts, notations et diagrammes pouvant être utilisés dans  un large éventail  de contextes  de développement.

- Cependant, seul  un sous-ensemble de ces éléments est requis dans  tout contexte  de développement

- Le mécanisme  de profil  UML peut être utilisé  pour personnaliser  le langage  UML pour des domaines  de développement spécifiques.

- Mais  la plupart  des outils  UML n'ont  pas réussi à fournir  un support de premier ordre  pour la personnalisation  et la modélisation spécifique à  un domaine.
:::

---

## UML pour l’architecture
###  Exigences et modélisation
### de cas d'utilisation

---

## Section Objectifs
- Discuter  du rôle  de la modélisation  de cas d'utilisation dans  le processus  de développement  global
- Discuter  des meilleures pratiques
- Discussions et  sujets  avancés

---

## Exigences

---

## Étapes de modélisation
![exigences](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/exigences.png){style=border:none}

---

## Étude de cas  
### Système d’achats en ligne  
#### (Online Shopping)

---

### Online Shopping System
::: block {style=font-size:0.7em}
- Le système d’achats en ligne  (OSS) est  un système  Web permettant  aux clients de
    - Parcourir  le catalogue de produits
    - Rechercher  et afficher  des éléments à l'aide  de différents mécanismes  de recherche (par catégorie , nom de produit  et numéro  de produit)
    - Acheter  des produits en ligne


- Le système  propose différents  modes de paiement  ( crédit  et PayPal) et d'expédition .
- Le système fournit également  des fonctionnalités  pour
    - Administrateur  de système  pour gérer  la base de données d'utilisateurs
    - Chef de produit  pour gérer  la base de données  de produits
:::

---

## Cas d'utilisation

---

## Étapes de modélisation
![usecase](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/usecase.png){style=border:none}

---

## Définition  de cas d'utilisation
::: block {style=font-size:0.7em}

- **Ivar Jacobson** - Un cas d'utilisation est une manière spécifique d'utiliser  le système en utilisant une partie  de la fonctionnalité.

- **OMG UML2** - Un cas d'utilisation est  la spécification  d'un ensemble d'actions effectuées  par un système , ce  qui permet d'obtenir  un résultat  observable qui est généralement  utile pour un ou plusieurs acteurs ou autres acteurs  du système  (UML 2).

- **IBM** - Un cas d'utilisation est une liste d'étapes  qui spécifie  comment un utilisateur interagit  avec l'entreprise ou  le système  tout en  gardant à l'esprit  la valeur  que cette  interaction procure à l'utilisateur ou à d'autres  parties prenantes .
:::

---

## Liste  des acteurs  de OSS
::: block {style=font-size:0.8em}
- **Client** 
    - Personne utilisant  le système  pour parcourir  le catalogue de produits , rechercher  et afficher  des articles et acheter  des produits en ligne
- **Fonctionnalités**
    - Parcourir  le catalogue de produits
    - S'inscrire en tant  que nouveau client
    - Modifier les informations  client
    - Ajouter  le produit  au panier
    - Regardez  le contenu  du panier
    - Check-out
    - Etc…
:::

---

## Liste  des acteurs  de OSS...
- **Chef de produit**
    - Personne responsable  de la gestion  du catalogue de produits  / de la base de données
    - **Fonctionnalitées**
      - Ajouter  un nouveau produit
      - Modifier les informations  sur le produit
      - Supprimer  le produit existant
      - Etc …

---

## Liste  des acteurs  de OSS...
- **Gestionnaire  des utilisateurs**
    - Personne responsable  de la gestion  de la base de données d'utilisateurs
    - **Fonctionnalités**
        - Ajouter  un nouvel utilisateur
        - Modifier les informations utilisateur
        - Supprimer  un utilisateur existant
        - Etc…

---

## Liste  des acteurs  de OSS
- **Service de paiement**
    - Système  chargé de fournir  des services de paiement
    - Fonctionnalité
        - Exécuter  la transaction de paiement
        - Valider  les informations  de paiement
        - Etc ...


---

### Liste  des cas d’utilisation  OSS..
::: block {style=font-size:0.7em}
- **Client** 
    - Parcourir  le catalogue de produits
    - Voir les articles
    - Ajouter au panier
    - Voir  le contenu  du panier
    - Créer  un compte
    - Supprimer  le compte
    - Compte  mis à  jour
    - Obtenir  des informations  sur le compte
    - Check-out

- **Service de paiement**
    - Exécuter la transaction depaiement
    - Confirmer la transaction de paiement
:::

---

## Liste  des cas d’utilisation  OSS
::: block {style=font-size:0.7em}

- **Chef de produit**
    - Ajouter  un nouveau produit
    - Supprimer  le produit existant
    - Mettre à  jour les informations  sur le produit
    - Obtenir  des informations  sur le produit
    - Liste  des produits existants


- **Gestionnaire d'utilisateurs**
    - Créer  un nouvel utilisateur
    - Supprimer  un utilisateur existant
    - Mettre à  jour les informations utilisateur
    - Obtenir  des informations  sur l'utilisateur
:::

---

#### Concepts de base du  diagramme   de  cas  d'utilisation...
::: block {style=font-size:0.7em}
- **Sujet (subject)** 
    -  Le sujet est utilisé  pour délimiter  le système  de son environnement
- **Acteur** 
    - Entité externe  qui interagit  avec le système
    - Peut représenter  des personnes  / utilisateurs  et d'autres systèmes externes  avec lesquels  le système interagit
- **Cas d'utilisation**
    - Fonctionnalité fournie  par le système 
    - Décrit comme une séquence d'étapes  / actions
- **Relations**
    - L’interaction  entre les acteurs  et un cas d’utilisation est spécifiée à l’aide d’une  association.
    - Différents  types de relations entre les cas d'utilization: include, extend, generalization/inheritance
:::

---

#### Concepts de base du  diagramme   de  cas  d'utilisation

![image](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/checkout-usercase.png){style=border:none}{width=65%}

---

#### Ensemble des cas d’utilisation
![image](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/customer-usecase.png){style=border:none}{width=65%}

---

#### Use Case Description
::: block {style=font-size:0.5em}

1. **Brief Description**
    \<brief description of use-case\>
2. **Actor Brief Descriptions**
    1. \<Actor 1 Name\>
    1. \<Actor 2 Name\>
3. **Preconditions**
    1.  \<pre-condition 1\>
4.  **Basic Flow of Events**
    1. The use case begins when >actor<, >does something<…
    1. \<basic flow step 1\>
    1. …
    1. \<basic flow step n\>
    1. The use case ends.
1. **Alternative Flows**
    1.   \<alternate flow 1\>
1. **Subflows**
    1. \<subflow\>
1. **Post-conditions**
    1.  \<post-condition 1\>
1. **Special Requirements**
    1.  \<special requirement 1\>

:::

---

#### De la description du cas d'utilisation au diagramme  de cas d'utilisation
![cu2dcu](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/cu2dcu.png){style=border:none}{width=100%}



---

#### Structuration de cas d'utilisation - Client
![imagCustomer use cases](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/oss-customer-usercase.png){width=20%}{style=border:none}
![customer-usecase](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/customer-usecase.png){width=75%}{style=border:none}

---

#### Structuration de cas d'utilisation - Gestionnaire d'utilisateurs
![oss-user-management-usecase.png](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/oss-user-management-usecase.png){style=border:none}{width=20%}
![oss-user-management-use-cases](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/user-management-usecase.png){style=border:none}{width=75%}

---

#### Structuration de cas d'utilisation - Chef de produit
![image](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/oss-product-management-use-case.png){style=border:none}{width=25%}
![image](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/product-manager-usecase.png){style=border:none}{width=70%}


---

### Use Case Decomposition and Packaging...
::: block {style=font-size:0.8em}
- **Décomposition**
    - La décomposition n'est  pas un objectif en soi
    - Soyez pragmatique , créez  un cas d'utilisation  ( ou  sous- cas d'utilisation ) uniquement lorsque cela est nécessaire
    - Évitez  les cas d'utilisation  trop nombreux  / trop peu nombreux
        - Aucune règle magique , mais soyez pragmatique
    - Utilisez  la décomposition  pour créer  des cas d'utilisation indépendants lorsque 
        - Une séquence d’étapes est  commune à plusieurs cas d’utilisation - réutilisation
:::

---


### Use Case Decomposition and Packaging
::: block {style=font-size:0.9em}

- **Packaging** 
    - Les systèmes sont composés  de plusieurs  aspects différents
    - Par exemple : fonctionnalité  client, gestion  des utilisateurs , gestion  des produits , etc. 
    - Ceux-ci constituent différents  aspects ( souvent indépendants ) du système
    - Une bonne pratique consiste à créer différents  packages pour gérer  les différents  aspects
    - Encore une fois , évitez  trop / trop peu !
:::

---

#### Les meilleures pratiques  – “Best Practices”
::: block {style=font-size:0.7em}
- Développer Itérativement
- Utilisez  la décomposition  et le packaging pour structurer votre modèle  de cas d'utilisation
- Définir l'ensemble  des acteurs
- Définir  / adopter un ensemble de guidelines et une  convention de nommage
- Utiliser  un modèle  de description de cas d'utilisation  «standard»
- Éloignez-vous  de trop de détails , vous en parlerez  plus tard
- **Remarques:**
    - Rappelez-vous  que l'un  des objectifs principaux  des cas d'utilisation est  de communiquer  avec les parties prenantes , qui incluent  des personnes  de divers horizons.

**Pas de solution magique , écrire  des cas d'utilisation est  un art!**
:::
note: verify next pages


---

## UML pour l’architecture 
### Réalisation  de cas d'utilisation (2)

---

## Étapes de modélisation
![usecase](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/usecase.png){style=border:none}

note: todo from here

---

### Réalisation  de cas d'utilisation (2)
::: block {style=text-align:left}
Cette opération est également appelée analyse de cas d'utilisation, dont le but est de:

![rdcu](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/rdcu.png){style=border:none}
:::

---

### Diagrammes d'activité  et de séquence
::: block {style=font-size:0.8em}
- Au niveau  de la modélisation  de cas d'utilisation , les diagrammes d'activité  et de séquence sont utilisés  pour fournir  les détails permettant  de créer  un pont  entre le modèle  de cas d'utilisation  et la conception du système.

- Les diagrammes  de séquence  et les diagrammes d'activité fournissent deux vues graphiques complémentaires  de cas d'utilisation
    - Les diagrammes  de séquence  se concentrent  sur la description des cas d'utilisation en tant  que séquences d'interactions  (échange  de messages) entre le système  et les acteurs .
:::

---

## Diagramme  de séquence  Système

---

### Rôle  des diagrammes  de séquence  système 
::: block {style=font-size:0.8em}
- Au niveau  des cas d'utilization  (UC), le rôle  des diagrammes  de séquence est  de décrire  les cas d'utilisation en tant  que séquence d'interactions  entre le système  et les différents acteurs.
    - Les diagrammes  de séquence incluent également  la spécification  des principales  actions internes exécutées  par le système lors  de l'exécution  des cas d'utilisation.


- Alors  que UML fournit  un riche ensemble de concepts / notations pour les diagrammes  de séquence, au niveau  du cas d'utilisation, nous n'utilisons qu'un  sous-ensemble de la notation.
:::

---

#### De la description de cas d'utilisation  au diagramme  de sequence système

![4-flow-dss-1](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-1.png){style=border:none}

---

#### De la description de cas d'utilisation  au diagramme  de sequence système(2)

![4-flow-dss-2](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-2.png){style=border:none}

---

#### De la description de cas d'utilisation  au diagramme  de sequence système(3)

![4-flow-dss-3](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-3.png){style=border:none}

---

#### De la description de cas d'utilisation  au diagramme  de sequence système(4)

![4-flow-dss-4](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-4.png){style=border:none}

---

#### De la description de cas d'utilisation  au diagramme  de sequence système(5)

![4-flow-dss-5](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-5.png){style=border:none}


---

#### De la description de cas d'utilisation  au diagramme  de sequence système(6)

![4-flow-dss-6](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-dss-6.png){style=border:none}

---

### Les meilleures pratiques  – “Best Practices”
::: block {style=font-size:0.8em}
- Se concentrer  sur le comportement  global du système  et la communication entre le système  et l'ensemble  des acteurs
    - Ne commencez  pas à prendre  des décisions  de    conception à ce stade


- Concentrez-vous  sur les principaux scénarios , n'essayez  pas d'être exhaustif


- Décomposer  les diagrammes  de séquences  longs en  fragments plus petits, le cas échéant
    - Définir  des interactions séparées  et utiliser  « InteractionUse » pour faire référence à  des interactions définies séparément
:::

---

## Diagramme d'activité

---

### Rôle  des diagrammes d'activité
::: block {style=font-size:0.8em}
- Au niveau  des cas d'utilisation , le rôle  des diagrammes d'activité est  de décrire  les cas d'utilisation  sous la forme d'une séquence d'actions effectuées  par le système  et les différents acteurs.
- UML inclut  un riche ensemble de concepts / notations pour le diagramme d'activité 
    - Incluant  un ensemble "complet" de concepts pour une  description détaillée  du comportement
        - Peut être utilisé  pour décrire  un comportement algorithmique détaillé
    - Lors  de la phase de modélisation  de cas d'utilisation , nous n'utilisons qu'un  petit sous-ensemble des concepts / notations du diagramme d'activité
:::

---

#### Représentation  de cas d'utilization de Diagramm d'activité
![4-flow-activity](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/4-flow-activity.png){style=border:none}

---

### Allocation aux partitions d'activité
![allocation-activity](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/allocation-activity.png){style=border:none}

---

### Les meilleures pratiques  – diagramme activité
- Choisissez  le «bon» niveau d'abstraction  / détails
    - Évitez  le piège  de spécifier  les détails  de conception,… vous  le ferez  plus tard!


- Maintenir  la cohérence  avec les descriptions de cas d'utilisation 
    - Ne signifie  pas une traçabilité individuelle


- Concentrez-vous  sur la clarification et la compréhension  du modèle

---

#### Résumé - diagramme d'activité
::: block {style=font-size:0.9em}
- Cette  section, nous
    - A appris à développer  des modèles  de cas d'utilisation
    - Discuté  du rôle  de la modélisation  de cas d'utilisation dans  le processus  de développement  global
    - Introduit  les différents diagrammes  UML utilisés  pour la modélisation  de cas d'utilisation
    - Discuté  du rôle  de chaque diagramme dans  le processus  de développement  global
    - Discuté  des meilleures pratiques
:::

---

## UML pour la conception

---

## Objectifs
::: block {style=text-align:left}
Présenter les différents diagrammes  UML utilisés  pour la modélisation  de conception


- Diagramme  de classes
- Diagramme  de séquences
- Diagramme  de machines à états
- Discuter   des  meilleures  pratiques

---


## Étapes de modélisation
![conception-detaille](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/conception-detaille.png){style=border:none}

---


## Diagramme de classes

---

### Rôle des diagrammes  de classes
::: block {style=font-size:0.7em}
- Au niveau  de l’architecture  et de la conception de haut niveau , le rôle  des diagrammes  de classes est d'identifier  / définir l'ensemble  des concepts extraits  des exigences et du modèle  de cas d'utilisation. 


- Pour chaque classe , définissez  les éléments suivants
    - Rôle  de la classe  (ou  des instances de la classe) dans  le système 
    - Propriétés  / attributs  de la classe
    - Des opérations
    - Relations que la classe  a avec d'autres  classes
- Au fur et à mesure  que nous progressons dans  le processus  de conception, le diagramme  de classes est raffiné  (de nouvelles  classes, attributs , opérations  et relations de classes sont ajoutés ) jusqu'à atteindre  le niveau  de détails requis.
:::

---

### Classes du Système...
::: block {style=font-size:0.7em}
- **Customer UI**
    - La classe CustomerUI est définie  pour gérer toutes  les interactions avec le client
    - Responsable  de l’affichage  des messages au client et de l’envoi  des entrées du client à OSSController
- **OSSController**
    - Responsable  du contrôle  de l'exécution  de  toutes  les fonctionnalités  du système
- **CustomerDatabaseAccess, ProductDatabaseAccess, PaymentDevice**
    - Classes responsables  de la gestion  de l'accès  avec leurs  services respectifs
- **ShoppingCart**
    - Classe contenant toutes  les informations  du panier

note:  voir diagramme page suivante
:::

---

#### Classes du Système
![oss-class](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/oss-class.png){style=border:none}

---

##### Relations entre les classes de haut niveau  et les cas d’utilisation  – acteurs
![classVSActors](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/classVSActors.png){style=border:none}

---

##### Relations entre les classes de  haut  niveau   et les  cas  d’utilisation   –  OSSController
![classVSSystem](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/classVSSystem.png){style=border:none}

---

#### Relations entre les classes de haut niveau  et les cas d’utilisation
#### ShoppingCart
![classVsShoppingCart](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/classVSShoppingCard.png){style=border:none}

---

#### Les meilleures pratiques  – “Best Practices”
::: block {style=font-size:0.8em}
- Respecter le décalage  de représentation

- Commencez par définir  les classes directement dérivées  des exigences et du modèle du domaine. Ajoutez  de manière itérative  de nouvelles  classes et raffinez -les selon vos besoins  au fur et à mesure  de votre  progression dans  le processus  de conception
- Définissez  les principaux attributs  de la classe . Ajoutez  de manière itérative  de nouveaux attributs  au fur et à mesure ue vous avancez dans  le processus  de conception de manière itérative
- Utiliser une  convention de nommage cohérente  pour les classes et les attributs
:::

---

## Diagrammes  de séquences

---

## Rôle  des diagrammes  de séquences
::: block {style=font-size:0.8em}
- Commencez par affiner  les diagrammes  de séquences  au niveau  du système définis dans  le modèle  de cas d'utilisation afin  de les synchroniser  avec les éléments  des diagrammes  de classes.

- Du point de vue  de la notation UML, nous ajoutons  de nouveaux éléments  au sous-ensemble défini  au niveau  de la modélisation  de cas d'utilisation.
- Bien qu'il  ne soit  pas nécessaire  de maintenir une traçabilité explicite  avec les diagrammes  de séquences systèmes définis au niveau  du cas d'utilisation , la cohérence doit être maintenue.
- Un diagramme  de séquence  par contrat. 
:::

---

### Raffinement  des diagrammes  de séquence
![raffinement](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/raffinement.png){style=border:none}

---

##### Les meilleures pratiques  – “Best Practices”
::: block {style=font-size:0.8em}
- **Choisissez le «bon» niveau d'abstraction / details**
    - Évitez le piège de spécifier les détails de conception,… vous le ferez plus tard!


- **Maintenir la cohérence avec les diagrammes de séquences définis au niveau de la modélisation de cas d'utilisation**
    - Les diagrammes de séquences définis au niveau de l’architecture (conception de haut niveau) doivent être considérés comme une «implémentation» des diagrammes de séquence définis au niveau de la modélisation de cas d'utilisation.
- **L'accent est mis sur la description de la communication entre les éléments internes (classes) du système**
:::

---

## Diagrammes de machine d’états

---

#### Rôle  de machine d'états
::: block {style=font-size:0.8em}
- **Au stade de l’architecture et de la conception de haut niveau, les machines d’états sont utilisées pour modéliser le comportement de haut niveau des principales classes du système.**
    - A ce stade, nous utilisons des machines d’états pour spécifier le comportement de manière informelle
    - La description textuelle est utilisée pour spécifier les différents éléments (transitions, conditions de garde)
    - Aucune spécification formelle de l'événement déclencheur et des contraintes


- **Ensuite, si le but est de générer du code à partir des machines à états, puis des détails, tous les détails requis devront être ajoutés aux modèles de machines d’états.**
:::

---

#### Relation entre les cas d'utilisation  et la machine d’états
::: block {style=font-size:0.8em}

- **Relation entre les cas d'utilisation  et la machine d’états**
    - Un cas d'utilisation définit une unité  de comportement système impliquant  un ensemble d'entités collaboratrices  - une unité  de comportement , plusieurs entités .
    - Une machine d’états définit  le comportement d'une entité impliquée dans  de nombreux cas d'utilisation  - une entité , plusieurs unités  de comportement

- **La conception de la machine d’états a pour objectif  de concevoir une  machine à états pouvant prendre en  charge l'exécution  de tous  les cas d'utilisation dans lesquels l'entité propriétaire  de la machine à états est impliquée.**
:::

---

### Concepts de base de la machine d'états
![state1](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/state1.png){style=border:none}
::: block {style=text-align:left;font-size:0.8em}
Remarque
- Seules  les classes actives peuvent contenir  des machines d'état
- La propriété  "Est actif " de la classe doit être définie  sur "true"
:::

---


### Concepts de base de la machine d'états
![state2](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/state2.png){style=border:none}

---

#### Design de la machine d'états
::: block {style=font-size:0.6em}
- **Commencez à construire votre  machine d'état avec un cas d'utilisation  et ajoutez progressivement  des cas d'utilisation**

- **Pour chaque cas d'utilisation**
    - Commencez  par créer  les états  de départ  et final correspondant  aux pré -condition et post-condition du cas d'utilisation
    - Ensuite, définissez  les états requis  pour l'exécution  du cas d'utilisation
    - Définir  les transitions d'état requises  pour l'exécution  du cas d'utilisation , à  la fois  pour le flux principal et les flux alternatifs 
    - Ajoutez  des actions de transition et d'état le cas échéant  - au stade del’architecture  et de la conception de haut niveau , fournissez uniquement une  description textuelle 

- **Les  deux   sources  principales  d’information  pour la conception de machines ’état sont : les descriptions de cas d’utilisation  et les diagrammes  de séquence  – voir  diapositives suivantes.**
:::

---

#### Utilisation  des informations  des cas d'utilisation
::: block {style=font-size:0.7em}
Trois principaux aspects des cas d'utilisation peuvent être utilisés dans la conception d'une machine à états


1. Les conditions préalables et postérieures aux cas d'utilisation spécifiées dans les descriptions de cas d'utilisation correspondent aux états initial et final de la machine à états (pour un cas d'utilisation donné)


2. Les points de ramification des «flux alternatifs» d’un cas d’utilisation correspondent aux alternatives de la machine à états.
    - Les alternatives de la machine d’états peuvent être basées sur un message ou sur une contrainte (utilisant des points de choix)
3. Les différents cas d'utilisation peuvent être associés à des machines d'état distinctes pouvant être composées en une seule machine d'état hiérarchique.
:::

---

#### Les meilleures pratiques  – “Best Practices”
::: block {style=font-size:0.7em}
- Choisissez  le «bon» niveau d'abstraction  / détails
    - Évitez  le piège  de spécifier  les détails  de conception,… vous  le ferez  plus tard dans  le processus  de conception!
- Maintenir  la cohérence  avec le modèle  de cas d'utilisation
    - Ne signifie  pas une traçabilité formelle individuelle
- Définir une  convention de dénomination  pour les différents  types d'élément  de machine d’états ( état , transition et pseudo- état )
- Exploiter les relations de cas d'utilisation  (et de scénarios) pour structurer les machines d’états
- Définir  / utiliser  un catalogue de modèles  (meilleures pratiques) pour améliorer  la qualité  et l'uniformité  des modèles  de machines d’états
- Ne définissez  pas une  machine d’états pour chaque classe , mais uniquement  pour les classes actives
:::

---

## UML pour l’architecture
### Modélisation des composants

---

## Objectifs
- Discuter  du rôle  des diagrammes  de composants dans l’architecture  et dans  le processus  de développement  global
- Présenter  les différents  concepts des diagrammes  de composants  UML
- Discuter  des meilleures pratiques

---

## Étapes  de modélisation
![processus-composants](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/processus-composants.png){style=border:none}

---

## Concurrence
- Le logiciel peut avoir besoin  de répondre à  des événements apparemment aléatoires générés  de l'extérieur


- Effectuer  des tâches en parallèle peut améliorer  les performances si plusieurs processeurs  (ou cœurs) sont disponibles.

---

## Diagramme de composant UML
![Diagramme de composants](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/diagramme-de-composants.png){style=border:none}

---

## Concurrence et composants
- Les composants sont  des unités réutilisables , modulaires  et autonomes  d'un système ayant  des interfaces bien définies


- Les composants peuvent facilement être réutilisés
- Les composants peuvent être utilisés  pour prendre  en charge la concurrence (par exemple , multi-threading)

---

## Analyse  de concurrence
- Dans  le cadre de l'analyse  de notre  système, nous devons prendre  en compte  la concurremce / simultanéité.


- Lorsque cela est nécessaire , nous pouvons créer  des composantes  pour modéliser  des fonctionnalités pouvant être affectées à  un thread.


- Nous pouvons ensuite distribuer d'autres éléments  de modèle à ces composantes .

---


### Comment trouver  les conditions de concurrence
- **Les besoins en  concurrence sont déterminés par:**
    - Le degré auquel  le système doit être distribué
    - Le degré  de gestion  du système  par les événements
    - L'intensité  de calcul  des algorithmes clés
    - Le degré d'exécution parallèle pris en  charge    par l'environnement


- **Les besoins  de concurrence sont classés  par ordre d'importance  pour la résolution  des conflits**

---

### Modélisation  des processus
- Les processus peuvent être modélisés en utilisant
    - Classes actives * (diagrammes de classes) et objets (diagrammes d'interaction)
    - Composantes  ( diagrammes  de composantes )


- Les classes actives ont leur propre  thread logique  de contrôle

---

## Règles  de concurrence
- Classe , les composants  (sous-systèmes) doivent s'exécuter dans  au moins  un processus  et peuvent s'exécuter dans plusieurs


- **Les attributions sont basées  sur:**
    - Exigences de performances et de concurrence
    - Conditions de distribution et support pour l'exécution parallèle
    - Redondance  et exigences de disponibilité

---

## Modélisation de déploiement

---

## Objectifs
- Discuter  du rôle  de la modélisation  de déploiement dans l’architecture  et dans  le processus  de développement  global


- Présenter  les différents  concepts des diagrammes  de déploiement  UML


- Discuter  des meilleures pratiques

---

## Étapes  de modélisation
![processus-depoiement](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/processus-deploiement.png){style=border:none}

---

## Deploiement
::: block {style=text-align:justify}
Le déploiement consiste à  affecter des composantes logicielles  (composantes, classes actives) au différents éléments matériels  du système.
:::

---

## Pourquoi distribuer?
- Réduire  la charge du processeur
- Conditions de traitement spéciales
- Préoccupations d'échelle
- Préoccupations économiques
- Accès distribué  au système
- Sécurité

---


## Patron de distribution
::: block {style=font-size:0.8em}
- Client/Serveur
- 3-tier
- Fat client
- Fat server
- Distributed Client/Server
- Peer-to-peer
- In-house
- Outsourced
- Web-based
- Cloud
- Service oriented 
- [Fog](https://en.wikipedia.org/wiki/Fog_computing)
:::

---


## Éléments  de déploiement
- **Nodes**
    - Ressource  de calcul d'exécution  physique
    - Fondamentalement , un processeur
- **Connections**
    - Communication mechanism
    - Physical medium
    - Software protocol

---

#### Notation UML pour le deploiement

![deployement-classes](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/deployement-classes.png){style=border:none}{width=60%}
::: block {style=font-size:0.5em}
https://www.uml-diagrams.org/deployment-diagrams.html
:::

---

## Diagramme  de deploiement  UML
![deployement](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/deployement.png){style=border:none}
https://www.uml-diagrams.org/web-application-uml-deployment-diagram-example.html

---

## Exemples  de considérations
- Modèles  de distribution
- Temps de réponse  et débit
- Capacité  de nœud
- Bande passante
- La disponibilité  du matériel
- Exigences de réacheminement


---


## Exercices diagramme d'état
::: block {style=text-align:left;font-size:0.8em}
Par ordre de complexité
- [Téléphone intelligent](https://docs.google.com/document/d/1q4lxM57nNkflYTwNAD2D8ytHzk-1McsT7QJNK9WWUE8/edit?usp=sharing)
- [Guichet automatique](https://docs.google.com/document/d/1TwktdMLWQ6NIS-7GF88fmsKbsitungXv_Ban_52ayhc/edit?usp=sharing)
- [Vidéo projecteur](https://drive.google.com/file/d/17QHRAjmdIm0paFwLidhHs4v3R1NtvpOD/view?usp=sharing)

Autres exercices sans solution
- [CU29-Annuler un service](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
- [CU30-Confirmer une visite supervisée](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.woe7hjrtreze)
- [CU31-Confirmer des échanges de garde](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.571qr0tmgkvv)
- [CU32-Rédiger une note d’observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.1u1pach8bqyv)
- [CU33-Corriger une note d’observation](https://docs.google.com/document/d/18s-eN0QoqREblJUihUaEC2L7f1hZF82_Jm9PjfL6BuY/edit?pli=1#heading=h.8rnjn3p0d663)
:::

---

## Exercices diagramme d’activité
::: block {style=text-align:left}
Par ordre de complexité
- [Retour de voiture louée](https://docs.google.com/document/d/1u46J7q2Ddx_a9DmZcubZQgBxo0IG_TqlzN-ADX2bXzM/edit?usp=sharing)
- [Processus d'achat sur le Web](https://docs.google.com/document/d/1S-RPphojGUECpL_c86J85cygnlu_OztB_oST0lTsX_A/edit?usp=sharing)
- [Recette de cuisine](https://drive.google.com/open?id=0B1nFsP0-88qudEFxaVUyVFhOdlk)
- [Ordinateur de plongée](https://drive.google.com/open?id=1TuQvODQlD4rfFub54gqMk4Sl34Fg_WjQ)

Sans solution:
- [Demander un remplacement](https://drive.google.com/open?id=0B1nFsP0-88qubU42YmZlb1Q2SUE)
:::





