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
title: 'LOG210-C09-00-seance'
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

<!-- .slide: id="decouverte" class="gofslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
1. [Découverte des patrons GOF](#decouverte)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[10.23m](https://youtu.be/AgnBD0y4FVA)
1. [GRASP sont une généralisation d'autres patterns](#grasp)
1. [Adaptateur, Fabrique concrète, Singleton](#afs)
1. [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
1. [Actualisation interface usager](#observateur)
1. [Recouvrement avec Proxy](#recouvrement)
1. [Faute, erreur, échec et exception](#faute)
1. [Patron faire soi-même](#soimeme)
1. [Attention à la patternite](#patternite)
:::
Note: vidéo: 91,43m

--

<!-- .slide: id="decouverte" class="gofslide" -->
### *Découvertes «&nbsp;d'analyse&nbsp;» lors de la conception
<table>
<tr>
<td>

![facture](assets/04-chp23F-26A-Application-des-GoF-45-16x9.pptx/facture.png){.plain width=90%}

</td>
<td>
   
![MDD LigneTaxes](https://www.plantuml.com/plantuml/png/NL3DJiCm3BxtAQnnGzeahZqDrYCxWRYRnEkiDKvnNC64U22UWnV3ROVKaOCLVN_-acqnL1jI1_kcWKTkXPxnWqfLJYmzAYOeTkx8ft8OXGlc0SEfrJn8tEKkAvYY5AT8h3fo9A3KsnaIfLVIKeKEIu4NPma-A_0JqQY6ncVrTQ6d2lTg73eg5zdRW69iFzyri4TVIQUsS1FZuH3ZNooLeDmRPu4Qdhovj1FHvq63xyUMOCuQqPGT4NDadqMG2Np5N7Drju9rpE-ozkjcSxlwrw-6dPjvVF32eDmUxTenrrp8joJHV_CN "MDD LigneTaxes"){.plain align=top} {.fragment .shade-up}


</td>
</tr>
</table>

Note: animation display Mdd 

--

<!-- .slide: class="gofslide" -->
### Découvertes «&nbsp;d'analyse&nbsp;» lors de la conception
- Calculateurs de taxes retournent `LigneTaxes`
  - pas envisagé lors de l'analyse initiale
- Concept dans le modèle du domaine
  - mettre à jour le modèle du domaine
  - mettre à jour le glossaire
- Avec l'expérience ceci devient un réflexe
  - travail d'un ingénieur (vs technicien ou codeur)
  - nécessaire dans un processus itératif

---

<!-- .slide: id='grasp' class="rdcuslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[16.43m](https://youtu.be/4LO-dzPAa7Y)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

<!-- .slide: class="rdcuslide" -->
## GRASP dans les GoF
- Adaptateur est une spécialisation de certains principes GRASP
![larman/F23.3, A26.3](assets/larman/F23.3.svg "Fig. F23.3/A26.3"){.plain width=75%}

fig. F23.3

--

<!-- .slide: class="rdcuslide" -->
## GRASP dans les GoF

Exercice Google Classrooms  
"Identification des GRASP dans les GoF"

Salles de travail Zoom

20 minutes, suivre le modèle



---

<!-- .slide: id='afs' class="rdcuslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[9.21m](https://youtu.be/INHD-GvPqtw)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

<!-- .slide: id='adaptateur' class="gofslide" -->
### Adaptateur (GoF){.fragment .shade-up}
### *Problème

- POS NextGen doit supporter: (1) calcul des taxes, (2) autorisation de crédit, (3) comptabilité, (4) gestion des stocks
- Services trop compliqués pour le périmètre du projet → Services tiers «&nbsp;externes&nbsp;»
- Plusieurs fournisseurs de service (comme *TaxMaster* et *GoodAsGoldTaxPro*)
- L'API de chaque service est **distincte** et **immuable** 

**Patron GOF?**

Note: animation ask for patron

--

<!-- .slide: class="gofslide" -->

## Adaptateur (GoF)
- Problème (suite)
    - On veut éviter ce genre de solution:

![adapteurGOF](assets/04-chp23F-26A-Application-des-GoF-45-16x9.pptx/adapterIfTransparent.png){.plain}{width=80%}

--

<!-- .slide: class="gofslide" -->

## Adaptateur pour le calcul des taxes

![larman/F14.21, A15.21](assets/larman/F14.21a.png){.plain}{width=100%}
fig. F14.21

--

<!-- .slide: class="gofslide" -->

## Adaptateur
![larman/F22.1, A25.1](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.1.svg "Figure A25.1"){.plain width=60%}

fig. F22.1/A25.1

--

<!-- .slide: class="gofslide" -->

## Adaptateur (GoF)

![larman/F23.1, A26.1](assets/larman/F23.1stars.svg){.plain}{width=65%}

fig. F23.1

--

<!-- .slide: class="gofslide" -->
## Comptabilité
![larman/F23.2, A26.2](assets/larman/F23.2.svg){.plain}{width=100%}
fig. F23.2

Note: L'API de chaque service est distincte et immuable.

--

<!-- .slide: class="gofslide" -->
## *GRASP dans le laboratoire

- SGB est un système externe alors avez vous utilisé un patron GOF pour que SGA se connecte a SGB.
- Si oui, quel patron et pourquoi
- Si non, pourquoi

- Adaptateur? -> cache mémoire accès information{.fragment .shade-up}
- Proxy? Persistance pour écrire lorsque SGB n'est pas disponible{.fragment .shade-up}


--

<!-- .slide: class="gofslide" -->
## Adaptateur - problèmes
- Qui instancie les adaptateurs?
- Comment déterminer la classe d'adaptateur à instancier?

AdaptateurTaxMaster  vs AdaptateurGoodAsGold

![adapteur-probleme](assets/04-chp23F-26A-Application-des-GoF-45-16x9.pptx/adapteur-probleme.png){.plain}{width=100%}

--

<!-- .slide: class="gofslide" -->
## Fabrique concrète (pas GoF){.fragment .shade-up}
<!-- .slide: id="fabrique" -->
- Contexte / Problème
  - Créer des objets
  - logique de création complexe, ou
  - séparer les responsabilités de créations (+ cohésion)
- Solution
  - Fabrication Pure nommé FabriqueConcrète pour gérer la création

--

<!-- .slide: class="gofslide" -->
## Fabrique concrète
![larman/F23.5, A26.5](assets/larman/F23.5.svg){.plain}{width=70%}

::: block {style=font-size:0.5em}
[Documentation `System.getProperty()`](http://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html)
:::


--

<!-- .slide: class="gofslide" -->
## *Problème suivant…
### Patron Singleton {.fragment .shade-up}

- Qui instancie la Fabrique elle-même?
- Comment y accéder?
- Indices
  - besoin de seulement une instance de chaque Fabrique
  - méthodes de la Fabrique appelées à partir d'endroits différents dans le code
  - problème de visibilité

Note: animation Patron singleton

--

<!-- .slide: class="gofslide" -->
## Singleton
- Contexte / Problème
    - Une seule instance est permise: le «&nbsp;singleton&nbsp;»
    - besoin d'un point d'accès global et unique
- Solution
    - méthode statique qui retourne le singleton

#### ⚠️il est difficile de tester un singleton{.fragment .shade-up}

--

<!-- .slide: class="gofslide" -->
## Singleton
![larman/F23.6, A26.6](assets/larman/A26.6.svg "Fig. A26.6/F23.6"){.plain width=70%}

--

<!-- .slide: class="gofslide" -->
## Singleton – implémentation Java
::: block {style=font-size:0.8em}
- Initialisation différée
- `getInstance()` est souvent fréquemment appelé
- Avec plusieurs fils d'exécution (threads), l'étape de création d'une logique d'initialisation différée (lazy initialization) est critique
  - nécessite un contrôle de la concurrence des threads (p.ex. une méthode atomique)
:::
```java
public static synchronized FabriqueDeServices getInstance () {  
    if (instance == null ) {
 // section critique pour une application multithread
    instance = new FabriqueDeServices();
   }
  return instance;
 }
 ```
 ::: block {style=font-size:0.5em}
 référence: [http://www.cs.wustl.edu/~schmidt/PDF/monitor.pdf](http://www.cs.wustl.edu/~schmidt/PDF/monitor.pdf)
:::

--

<!-- .slide: class="gofslide" -->
## Singleton – implémentation Java
```java
public class FabriqueDeServices  {  
    // initialisation immédiate 
    private static FabriqueDeServices instance = 
                        new FabriqueDeServices();   
    public static FabriqueDeServices getInstance () {
        return instance;   
    }  // autres méthodes... 
}
```
::: block {style=font-size:0.7em}
- Initialisation immédiate
- Quelle initialisation est préférée?
- Initialisation différée a plusieurs avantages:
    - si l'objet Singleton n'est jamais utilisé, on évite un travail de création inutile
    - getInstance() comprend parfois une logique de création complexe et conditionnelle (difficile à mettre dans une initialisation immédiate)
:::

--

<!-- .slide: class="gofslide" -->
## Singleton
- Message implicite «&nbsp;getInstance&nbsp;»
- Pas besoin de l'écrire dans la dynamique

![larman/F23.7, A26.7](assets/larman/F23.7.svg "Fig. F23.7/A26.7"){.plain width=100%}
fig. F23.7

--

<!-- .slide: class="gofslide" -->
## Singleton
#### Faire le DS de la solution précédente en incluant la dynamique de getInstance

![dynamiqueSingleton](https://www.plantuml.com/plantuml/png/RP5DJiD038NtEONL3MqaBX2rKQMYI4YiqcqsmzGJB2QUTCP1SADoZbmCf-6d1JOJJVpy_FdDDec9CdG-Iy_4lOccWoHl7lMCPCyL_IjagJSi08kYnfQqY0im2Ughwg8oZv6E0zxX7kCBsLbKmNfjlKcfB1jUh_V4hKS9N9PmtUwA_mrSna4GF3g1uA0kO1TOOl0uH3WWE6EDViRtuq0zTiYItPQJZ9Y4ZAU4SRcQJIArJryk-DfZ541MeGknCqA16tumwZXpW9q6ZITjRCTJH6ZOtn1hQcnn6kqlj7fDCtLMWm9KXIwkKbrmsjp11bgK-y_kvGgoq0jyksqsm8Ftlp3LP1VHYAxQC2ZQEKc4FqafMfxt8QNnTC0yXmlEdrml6Qk9qULv0VOyG1D2FcJPLazzzmy0 "dynamiqueSingleton"){.plain width=75%}


--

<!-- .slide: class="gofslide" -->
### *Conclusion sur les services externes…

![larman/F23.8, A26.8](assets/larman/F23.8.svg "fig. F23.8/A26.8"){.plain width=70%}

Quel message est polymorphe?{.fragment .shade-up}

Note: animation



---

<!-- .slide: id='tarif' class="gofslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[18.57m](https://youtu.be/_HyMJuBmZfc)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

<!-- .slide: class="gofslide" -->
## Strategie{.fragment .shade-up}
#### Logique de tarification élaborée
::: block {style=font-size:0.7em}
- Support pour la logique des promotions
    - Réductions, soldes, rabais, etc.
- «&nbsp;Stratégie de tarification&nbsp;» peut varier
    - Règle, algorithme, politique, etc.
- Exemples
    - réduction de 10% sur toute les ventes pour une période
    - réduction fixe de 10 dollars pour tout achat d'un montant supérieur à 200$
    - etc.
- Il ne faut pas reprogrammer le logiciel pour chaque nouvelle promotion
- Comment faire un bon design face à cette exigence?

**Patron GOF?**
:::

--

<!-- .slide: class="gofslide" -->
## Stratégie{.fragment .shade-up}
<!-- .slide: id="strategie" -->
- Contexte / Problème
    - algorithmes ou politiques sont variables mais se ressemblent (politiques de tarification)
    - ils doivent pouvoir évoluer
- Solution
    - définir les algorithmes/politiques/stratégies dans une classe séparée, avec une interface commune.

**Patron GOF?**

--

<!-- .slide: class="gofslide" -->
## Stratégies des prix
![larman/F23.9, A26.9](assets/larman/F23.9.svg "Fig. F23.9/A26.9"){.plain width=80%}

--

<!-- .slide: class="gofslide" -->
## Stratégie et objet context (Vente)
 ![larman/F23.10, A26.10](assets/larman/F23.10.svg "F23.10, A26.10"){.plain width=100%}


--

<!-- .slide: class="gofslide" -->
## L'objet contexte (Vente)
![larman/F23.11, A26.11](assets/larman/F23.11.svg "Fig. F23.11, A26.11"){.plain}{width=80%}

--

<!-- .slide: class="gofslide" -->
## Créer une stratégie
![larman/F23.12, A26.12](assets/larman/F23.12.svg "Fig. F23.12, A26.1"){.plain width=100%}

--

<!-- .slide: class="gofslide" -->
## Créer une stratégie
![larman/larman/F23.13, A26.13](assets/larman/F23.13.svg "Fig. F23.13, A26.13"){.plain width=100%}

--

<!-- .slide: class="gofslide" -->
## En résumé
- *Stratégie* et *Fabrique concrète* assurent la *Protection des variations* dues aux changements dynamiques de politique tarifaire
- *Stratégie* → *Polymorphisme* (GRASP)
- Fabriques sont souvent utilisées pour créer les stratégies pour autoriser des algorithmes insérables



--

<!-- .slide: class="gofslide" -->
## Composite{.fragment .shade-up}
### Conflits dus aux politiques tarifaires
::: block {style=font-size:0.75em}
- Politiques de prix pour aujourd'hui (lundi)
    - 20% de rabais pour les personnes du troisième âge
    - 15% de rabais sur un achat supérieur à 400$
    - 50 dollars de rabais pour sur un achat supérieur à 500$ (ce lundi seulement)
    - Si on achète un carton de thé Darjeeling, il y a un rabais de 15% sur tout
- Comment résoudre les cas conflictuels?
    - Une dame de 77 ans qui est aussi client privilégié achète une caisse de Darjeeling et dépense 600$

**Patron GOF?**
:::

--

<!-- .slide: class="gofslide" -->
## Facteurs des stratégies
- Période du temps (lundi)
- Type de client (personne du 3e âge){.fragment .shade-up}
- Un produit particulier (thé Darjeeling){.fragment .shade-up}
- Approche pour résoudre les conflits{.fragment .shade-up}
    - Prix le plus bas{.fragment .shade-up}
    - Prix le plus haut{.fragment .shade-up}
    - Etc.{.fragment .shade-up}

--

<!-- .slide: class="gofslide" -->
## Composite{.fragment .shade-up}
<!-- .slide: id="composite" -->
::: block {style=font-size:0.8em}
- Contexte / Problème
    - parfois on traite un seul objet
        - atomique
    - parfois on traite un groupe
        - composition d'objets
    - les traiter de la même façon
- Solution
    - définir des classes pour les objets
        - composites
        - atomiques
- implémentent la même interface

**Patron GOF?**
:::

--

<!-- .slide: class="gofslide" -->
### Composite POS

![larman/F23.14, A26.14](assets/larman/A26.14.svg "F23.14, A26.14"){.plain width=50%}

--

<!-- .slide: class="gofslide" -->
## Composite – collaboration
![larman/F23.15, A26.15](assets/larman/A26.15.svg "F23.15, A26.15"){.plain width=100%}

--

<!-- .slide: class="gofslide" -->
## Réalisation de cas d'utilisation
![larman/F23.18 p 458, A26.18](assets/larman/A26.18.svg "F23.18/A26.18"){.plain width=100%}

--

<!-- .slide: class="gofslide" -->
## Réalisation de cas d'utilisation
![larman/F23.19. A26.19](assets/larman/A26.19.svg "F23.19. A26.19"){.plain width=70%}

--

<!-- .slide: class="gofslide" -->
## Règles d'affaires
- Règles d'affaires personnalisables
- À certains points dans les scénarios
    - e.g., makeNewSale, enterItem
- Exemple : Paiement par bon de cadeau
    - limite l'utilisation d'un bon à un seul item
    - il n'y a pas de monnaie à rendre au client
    - etc.

--

<!-- .slide: class="gofslide" -->
## Implémentation des règles
- Implémentation des règles est inconnue
    - et peut être extensible
- Voudrait permettre
    - utilisation de plusieurs méthodes
    - patron stratégie/composite
    - interpréteurs de règles «&nbsp;open source&nbsp;»
    - interpréteurs de règles propriétaires (COTS)

---

<!-- .slide:  id='observateur' class="gofslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[6.21m](https://youtu.be/03I-fUhdIXg)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

<!-- .slide:  class="gofslide" -->
## Actualisation
![larman/F26.21 p 464, A26.21](assets/larman/f26.21.png){.plain}{width=100%}
fig. F26.21

--

<!-- .slide: class="gofslide" -->
## Solution possible…
::: block {style=font-size:0.9em}
- Total de Sale est changé
    - envoie un message à la fenêtre GUI
    - lui demande de se mettre à jour
- Cette solution n'est pas recommandée
    - Sale ne devrait pas connaître le GUI
        - c'est une dépendance vers une classe dont le code risque de changer (la GUI est peu stable)
- Par exemple
    - si la classe Sale dépend de Swing
    - alors il est difficile de changer l'interface
:::

--

<!-- .slide: class="gofslide" -->
## Observateur{.fragment .shade-up}
<!-- .slide: id="observateur" -->
- Contexte / Problème
    - objet observateur
        - réagit selon les changements du sujet
    - objet sujet
        - annonce un changement
- minimiser le couplage du sujet vers l'observeur

**Patron GOF?**

--

<!-- .slide: class="gofslide" -->
## Observateur
- Solution
    - interface observateur
    - les observateurs s'inscrivent au sujet
    - le sujet ne connaît pas les observateurs particuliers
        - seulement des objets implémentant l'interface
    - le sujet envoie un message aux observateurs
        - lorsqu'un certain changement (événement) survient

--

<!-- .slide: class="gofslide" -->
## Observateur
Plusieurs observateurs, un sujet

![observer](assets/04-chp20F-22A-Outils-UML-et-UML-en-mode-plan-7.pptx/observer.png){.plain width=70%}

::: block {style=font-size:0.5em}
ref: Design Patterns, Gamma, Helm, Johnson &amp; Vlissides, 1995
:::

--

<!-- .slide: class="gofslide" -->
## Observateur
Communication

![observer-ds](assets/04-chp20F-22A-Outils-UML-et-UML-en-mode-plan-7.pptx/observer-ds.png){.plain}{width=100%}

ref: Design Patterns, Gamma, Helm, Johnson &amp; Vlissides, 1995

--

<!-- .slide: class="gofslide" -->
## Solution : Observateur
![larman/F26.22 p 466](assets/larman/F26.22.png){.plain}{width=80%}
fig. F26.22


---

<!-- .slide: id="recouvrement" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[16.45m](https://youtu.be/7dH1fRtV-Xc)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

<!-- .slide: class="furpslide" -->
## Attributs de qualité
::: block {style=font-size:0.9em}
- Appliquer les GoF et GRASP dans les RDCU pour traiter les attributs de qualité (exigences URPS)
  - NextGen
    - basculement sur les services locaux,
    - gestion du terminal POS et
    - autorisations de crédit
  - Monopoly
    - différentes cases
    - achat de propriétés
    - paiement de loyers
:::

--

<!-- .slide: class="furpslide" -->

## Exigences NextGen
- En cas d'échec d'un service distant, le système doit continuer à fonctionner (tolérance aux pannes, **fiabilité**)
- Mise en cache locale (**performance**)
- Prise en charge d'équipements POS tiers, notamment différents scanners (**adaptabilité**)
- Gestion des paiements par carte de crédit, carte de débit ou chèque (**adaptabilité**)



--

<!-- .slide: class="furpslide" -->

### Problème : Fiabilité – reprise sur défaillance

- Tolérance à la panne de services distants
- Plusieurs scénarios de panne

![probleme-fiabilite](assets/PanneConnexionService.svg){.plain}{width=85%}

--

<!-- .slide: class="furpslide" -->

## Recouvrement – motivation

- Les propriétaires des magasin ne veulent pas manquer des ventes en cas de panne
- Le développeur NextGen POS sait que les concurrents n'offrent pas ce degré de fiabilité

![travailleur](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/travailleur.jpeg){.plain}{width=40%}

--

<!-- .slide: class="furpslide" -->

## Reprise sur défaillance
- Récupération robuste en cas de défaillance
  - d'un service distant (calculateur de taxes, gestion des stocks…)
  - de la BD des produits (descriptifs et prix)

![reprise-defaillance](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/reprise-defaillance.png){.plain}{width=70%}

--

<!-- .slide: class="furpslide" -->

## Principe de recouvrement
Exemple: Pneu de secours permet de continuer, après un délai, perte de performance (pneu plus petit){align=left}

![Pneu de secours](http://farm5.staticflickr.com/4015/4706467731_9179955d32_z.jpg){.plain}{width=50%}


<!-- --

### Analyse des tactiques  par l'architecte logiciel
Pas à l'examen
![tactiques](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/tactiques.png){.plain}{width=100%} -->

--

<!-- .slide: class="furpslide" -->

## Conseils de l'architecte : cache local
::: block {style=font-size:0.9em}
- Augmente performance (et permet récupération quand l'accès à BD échoue)
- Utilise un cache local (simple fichier sur disque) des objets DescriptionProduit
- Conséquence : toujours consulter le cache local pour chercher les informations avant d'accéder au service distant
- Principe informatique «&nbsp;Cache&nbsp;»
    - http://en.wikipedia.org/wiki/Cache_(computing)
    - http://fr.wikipedia.org/wiki/M%C3%A9moire_cache
:::


--

<!-- .slide: class="furpslide" -->

## Recouvrement - Product Specification
- Recherche d'une spécification d'article
    - informations locales
        - performance
        - recouvrement
    - puis requête au système distant

--

<!-- .slide: class="furpslide" -->

### Recouvrement - Product Specification
- Plusieurs niveaux de caches
    - mémoire vive (~1000)
        - performance
    - disque dur (~100 MB)
        - pannes de courant
    - serveur local au commerce
        - indépendance au réseau
    - web
    - etc.



--

<!-- .slide: class="gofslide" -->
### Rappel – adaptateurs
![larman/F23.1, A26.1](assets/larman/F23.1stars.svg){.plain width=70%}
fig. F23.1

--

<!-- .slide: class="gofslide" -->
### Rappel – adaptateurs
- FabriqueDeServices retourne un adaptateur pour accéder aux variantes de services BD Produits

![FabriqueService](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/FabriqueService.png){.plain}{width=80%}


--

<!-- .slide: class="gofslide" -->
## Rappel – adaptateurs
- FabriqueDeService retourne un adaptateur pour accéder à la BD Produits

![cache-local](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/cache-local.png){.plain}{width=100%}

--

<!-- .slide: class="furpslide" -->
## Design de recouvrement
![larman/F30.1, A35.1](assets/larman/F30.1.png "F30.1, A35.1"){.plain}{width=100%}

--

<!-- .slide: class="furpslide" -->
## Design de recouvrement
Initialisation
![F30.3, A35.2](assets/larman/F30.2.png "F30.3, A35.2"){.plain width=80%}

--

<!-- .slide: class="furpslide" -->
## Design de recouvrement
`enterItem`
![F30.3](assets/larman/F30.3.png){.plain}{width=100%}
fig. F30.3

--

<!-- .slide: class="furpslide" -->
## Design de recouvrement
`enterItem`…
![larman/F30.4, A35.4](assets/larman/F30.4.png){.plain}{width=100%}
fig. F30.4

--

<!-- .slide: class="furpslide" -->
## Mise en mémoire cache
- Approches pour initialiser les caches
    - Paresseuse
        - au fur et à mesure
    - Stricte
        - à l'initialisation

--

<!-- .slide: class="furpslide" -->
## Cohérence de cache

- Les prix peuvent changer
- Incohérence (niveaux de cache ↔ serveur externe)
- Mise-à-jour des caches
  - initiée par le serveur
  - initiée par le client




---


<!-- .slide: id='faute' class="furpslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[14.33m](https://youtu.be/SXRtswxk1ac)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)
:::

--

## Tolérance aux fautes
Définitions
<!-- .slide:  class="furpslide" -->
- Faute
    - source d'un mauvais comportement
- Erreur
    - manifestation de la faute dans le système en fonctionnement
- Échec (Défaillance)
    - service échoue à cause de l'erreur

--

<!-- .slide: class="furpslide" -->
## Faute vs. erreur (1)
Faute ne produit pas toujours une erreur

![fauteVSerreur](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/fauteVSerreur.png){.plain}{width=30%}
::: block {style=font-size:0.5em}
ref: «&nbsp;Object-Oriented Software Engineering&nbsp;» BerndBruegge, B.Bruegge, AllenDutoit
:::

--

<!-- .slide: class="furpslide" -->
## Faute vs. erreur (2)
L'erreur est la manifestation de la faute dans le système

![erreur](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/erreur.png){.plain}{width=30%}
::: block {style=font-size:0.5em}
ref: «&nbsp;Object-Oriented Software Engineering&nbsp;» BerndBruegge, B.Bruegge, AllenDutoit
:::

--

<!-- .slide: class="furpslide" -->
## Source d'une faute
Problème algorithmique

![source-faute](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/source-faute.png){.plain}{width=45%}
::: block {style=font-size:0.5em}
ref: «&nbsp;Object-Oriented Software Engineering&nbsp;» BerndBruegge, B.Bruegge, AllenDutoit
:::

--

<!-- .slide: class="furpslide" -->
## Source d'une faute
Problème environnemental

![source-faute-environnement](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/source-faute-environnement.png){.plain}{width=35%}

::: block {style=font-size:0.5em}
ref: «&nbsp;Object-Oriented Software Engineering&nbsp;» BerndBruegge, B.Bruegge, AllenDutoit
:::

--

<!-- .slide: class="furpslide" -->
## Enchaînement
- Une faute  peut provoquer une erreur,  qui peut provoquer une défaillance
- Vue d'un niveau plus haut, la défaillance  peut être aperçue comme une faute

![enchainement](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/enchainement.png){.plain}{width=100%}



--

<!-- .slide: class="codeslide" -->
## Traitement des défaillances

- Quand rien ne va plus: *article n'est pas dans la cache et service web n'est pas accessible*
- Intervenants résolvent le problème: *entrée à la main du prix et de la description*

--

<!-- .slide: class="codeslide" -->
## Traitement des erreurs
- Exceptions
- Utiles pour des ressources telles que
  - disque dur
  - mémoire
  - réseau
  - base de donnée
  - services externes

--

<!-- .slide: id="exception" class="codeslide" -->
## Exceptions: grandes lignes
- Patrons
  - «&nbsp;Donner le nom du problème et non celui de l'objet qui lance l'exception&nbsp;»
  - «&nbsp;Convertir exceptions&nbsp;»
  - «&nbsp;Journal centralisé d'erreurs&nbsp;»
  - «&nbsp;Dialogue d'erreur&nbsp;»

--

<!-- .slide: id="exception" class="codeslide" -->
## Convertir exceptions
- Comment présenter l'exception?
- Niveau d'abstraction
    - équivalent : faute -> erreur -> défaillance (faute)
- Exception de haut niveau
    - encapsule exception de bas niveau

Note: Convertir Exception suggère qu'une exception de haut niveau englobe une exception de bas niveau.  De plus l'exception peut contenir de l'information additionnelles selon le contexte. Cette règle n'est pas absolue. Exemple: si le système de persistance attrape une ”SQLException” et supposant qu'il la traite en lançant une DBUnavailbleException qui englobe l'exception précédente. «&nbsp;le DBProductAdaptar joue le rôle d'une façade ou sous-système pour l'information des produits et attrape cette exception et supposant qu'il la traite en lançant à nouveau une nouvelle exception à un autre niveau et qui englobe l'exception du niveau précèdent et lui donnant plus de sens dans son contexte spécifique

--

<!-- .slide: id="exception" class="codeslide" -->

## Journal centralisé d'erreurs
- Objet singleton global
  - lui acheminer toutes les exceptions
  - flexibilité des définitions de flux de sortie
- `java.util.logging` (depuis JDK 1.4)

--

<!-- .slide: id="exception" class="codeslide" -->
## Dialogue d'erreur
- Objet singleton
    - mécanisme centralisé de notification des erreurs
    - pour notifier l'utilisateur
    - protection contre les variations dans le mécanisme de sortie
    - pas un objet de l'IU
    - indépendant de l'application

--

<!-- .slide: id="exception" class="codeslide" -->
### Patron: Dialogue d'erreur
![patron-dialog-erreur](assets/05-chp30F-35A-Application-GoF-Fiabilité-Patternite-47.pptx/patron-dialog-erreur.png){.plain}{width=60%}

fig A35.11 p 592


--

<!-- .slide: class="furpslide" -->

## Problème - service non disponible
- Dans le cas ou on doit envoyer les ventes au services de comptabilité, il faut agir le plus rapidement possible, donc directement communiquer avec les services de comptabilité externes.
- Dans l'éventualité ou le service comptable est temporairement non disponible, comment peut-ont éviter que cette faute devienne une défaillance.

--

## Patron Proxy (GoF){.fragment .shade-up}
<!-- .slide: id="proxy" class="gofslide" -->
- Problème
    - l'accès direct à un objet est impossible (ou est indésirable). Que faire?
- Solution
    - Utiliser un objet proxy qui est un substitut à un objet
    - Le proxy implémente la même interface
    - Cela ajoute un niveau d'indirection

--

<!-- .slide: id="proxy" class="gofslide" -->

## Proxy
![proxy](assets/proxyUMLTransHFDP.png){.plain width=60%}

::: block {style=font-size:0.3em}
Freeman, Eric; Robson, Elisabeth; Bates, Bert; Sierra, Kathy. Head First Design Patterns.
:::

--

<!-- .slide: id="proxy" class="gofslide" -->
## Proxy
![proxy](assets/proxyBsaicDiagramTransHFDP.png){.plain width=80%}

::: block {style=font-size:0.3em}
Freeman, Eric; Robson, Elisabeth; Bates, Bert; Sierra, Kathy. Head First Design Patterns.
:::


--

<!-- .slide: id="proxy" class="gofslide" -->
## Patron Proxy (GoF)
![larman/F30.12, A35.12](assets/larman/A35.12.png){.plain}{width=100%}
fig. F30.12

--

<!-- .slide: id="proxy" class="gofslide" -->
## Les Proxy dans PoS
![larman/F30.13, A35.13](assets/larman/A35.13.png "fig. F30.13"){.plain width=70%}

--

<!-- .slide: id="proxy" class="gofslide" -->
## Proxy de redirection
Exercice
<!-- ![Proxy Redirection](https://www.plantuml.com/plantuml/svg/TL71QiCm3BtxAqHFxM7zW497irrt2Eqr5-5enSIHZQoCvUydkmn2sNoGZTvxqhDqAOgYonoXb_IzmfN68EGr97Pb2fnHS8QYQoIB4dpbRf0tzDDTqiBZUuf9G0Mv64IipYuDFcHaXTtfIlTGb6G7M42UmCvxgw61xmDlB0pSN3L9VfBSkdxWhQuRCV_MB_XC_qWUurRGUB5ctSih29nWnebwN6VplZyUZmSdO4Ws9AUYDuoqzulKhzNtmUKAMoSZ29KbAfnXuB-vQEY3TFx441tOQVhcuDyMbSP92T8NoODxiZqaeIPuPE8wi2OR_GeHRG9Lv8X7vouMRLy_ "Proxy Redirection") -->
![Proxy Redirection](https://www.plantuml.com/plantuml/svg/NL7DQiCm3BxxAKHFBMpPHjabXz6iK7ROeRJNNeGZWeaZ6raPxTvepx4Ncntsa-vYVURxiInjagBeE7ZOIpXVu42j4xBg0flKEuueE43IYwTyYhD5EsEUqVQTX97RRV11G0KvPOfOJIxgh8l82elwG9rBIh80J23N95gR8zHnLpU_yCIpPauyzJUPuxMPpZcLqVyvwsEpF_4ygMan_hoTy5-03_RA_LhkS_zacrJczWa4QXYmfprUXlpDPLLLAoFmpTWmH4zAH_JqWjpwx9z9OfR4aBJGIpjA6LJ1AyD12S8R2SIRqkAs17r-ABs39MWTTddUGzu2-S3W4NQk6uLWjxwl7jPtpVen5qFSGaaocupoghu0 "Proxy Redirection"){.plain width=100%}


---


<!-- .slide:  id="soimeme" class="rdcuslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
- [Attention à la patternite](#patternite)
:::

--


<!-- .slide:  class="rdcuslide" -->
## Traitement de paiements
- Multiple paiements
    - chèque
    - carte de crédit
    - carte de débit
    - comptant

--

<!-- .slide: id="proxy" class="rdcuslide" -->

## Patron «&nbsp;faire soi-même&nbsp;»
- Objet logiciel
    - abstraction d'un objet réel
    - fait ce qui est normalement fait à l'objet réel
    - avantage: réduire le décalage dés représentations
- Exemple
    - objet Texte qui vérifie sa propre orthographe

--

<!-- .slide: class="rdcuslide" -->
## Paiement et polymorphisme
![larman/F33.17](assets/larman/F33.17.png){.plain}{width=100%}
fig. F33.17

--

<!-- .slide: class="rdcuslide" -->

## Paiement par chèque
![larman/F30.19, A35.19](assets/larman/F30.19.png){.plain}{width=75%}
fig. F30.19

--

<!-- .slide: class="rdcuslide" -->
## Paiement par carte de crédit
![larman/F30.18, A35.18](assets/larman/F30.18.png){.plain}{width=75%}
fig. F30.18

--

<!-- .slide: class="rdcuslide" -->
## Autorisation
![larman/F30.20, A35.20](assets/larman/F30.20.png){.plain}{width=50%}
fig. F30.20

--

<!-- .slide: class="rdcuslide" -->
## Autorisation
![larman/F30.21, A35.21](assets/larman/F30.21.png){.plain}{width=75%}
fig. F30.21

--

<!-- .slide: class="rdcuslide" -->
## Paiement approuvé
![larman/F30.22, A35.22](assets/larman/F30.22.png){.plain}{width=100%}
fig. F30.22

--

<!-- .slide: class="rdcuslide" -->
### Version simple du paiement
![](assets/larman/F9.17.png){.plain}{width=70%}

--

<!-- .slide: class="rdcuslide" -->
### Package: Paiement
![](assets/02-chp26F-31A_Affinement_du_modele_du_domaine-46.pptx/payement-detail.png){.plain width=70%}


---

<!-- .slide: id="patternite" class="gofslide" -->
## LOG210 Séance #09
## Analyse et conception de logiciels
:::block {style="font-size:0.8em"}
- [Découverte des patrons GOF](#decouverte)
- [GRASP sont une généralisation d'autres patterns!](#grasp)
- [Adaptateur, Fabrique concrète, Singleton](#afs)
- [Logique de tarification élaborée avec patron Stratégie et Composite](#tarif)
- [Actualisation interface usager](#observateur)
- [Recouvrement avec Proxy](#recouvrement)
- [Faute, erreur, échec et exception](#faute)
- [Patron faire soi-même](#soimeme)
- [Attention à la patternite](#patternite)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
:::

--

<!-- .slide:  class="gofslide" -->

## Attention à la «&nbsp;patternite&nbsp;»
«&nbsp;Patternite&nbsp;» : tendance de rentrer de force dans les patterns GoF
![paternite](assets/05-chp30F-35A-Application-GoF-Fiabilite-Patternite-47.pptx/paternite.png){.plain width=100%}

--

<!-- .slide: class="gofslide" -->
## Attention à la «&nbsp;patternite&nbsp;»
- Tout pattern GoF amène une complexité
- Est-ce que les bénéfices du pattern justifient la complexité?
- La simplicité (KISS) est aussi une forme d'élégance.

![paternites](assets/05-chp30F-35A-Application-GoF-Fiabilite-Patternite-47.pptx/paternites.png){.plain width=80%}

--

## Attention à la «&nbsp;patternite&nbsp;»

[Connaître vos patrons de concpetion](http://fr.wikipedia.org/wiki/Patron_de_conception#Patrons_de_conception_du_GoF)


---

<!-- .slide: class="feedbackslide"  -->
## Séance #09
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs
