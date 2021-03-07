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
title: 'LOG210-C08-00-seance'
height: 100%
width: 100%
margin: 0
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'
notesSeparator: "Note:"
customTheme : "slide_themes"

---

<!-- .slide: id='administration' class="feedbackslide"  -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude) 
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp)
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::

Note: Video 82m + video tdd: 81m

--

<!-- .slide: class="feedbackslide"  -->

## Administrivia

- Statistiques Intra
- Consultation individuelle par Zoom/Discord selon [mes disponibilités](https://www.etsmtl.ca/Professeurs/cfuhrman/Accueil?lang=fr-ca#etsMCContentRight:~:text=Disponibilit%C3%A9s,-Si)

Élaborer: Outils/patron de réusinage

---

<!-- .slide: id="equipe" class="equipeslide"  -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Première étude de la conception](#etude) 
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp)
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::

--

<!-- .slide:  class="equipeslide"  -->
## Travail d'équipe
- Quels sont les problèmes HRC rencontré par votre équipe?
- Quels solutions avez vous apportées?


---


<!-- .slide: id='etude' class="mddslide"  -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude) ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp)
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::

--


<!-- .slide: class="mddslide"  -->

## Conception d'objet 1/2
- Comment les développeurs conçoivent-ils des objets?
  - Ils codent. On conçoit en codant (vous avez fait ça au CÉGEP, en INF111, en LOG121, en stage?)
  - Outils de réusinage (refactoring)

--

<!-- .slide: class="mddslide"  -->

## Conception d'objet 2/2

- Comment les développeurs conçoivent-ils des objets?
  - Ils tracent des diagrammes puis ils codent.
  - UML au tableau blanc, puis Java dans Eclipse
- Ils se contentent de tracer des diagrammes.
  - Les outils ne sont pas encore capables de faire le codage à partir des diagrammes… (est-ce vrai?)

--

<!-- .slide: class="mddslide"  -->

## Qu'est-ce qui est plus important?
![savoir-faire](assets/05-chp13F-14A-premiere-etude-conception-objet_9.pptx/UML-statique-dynamique.png){.plain width=80%}

Note: les deux ont des avantages et inconvénients

--

<!-- .slide: class="mddslide"  -->

## Cartes CRC

- Classe, Responsabilité, Collaborateurs
- Utilisées pour faire le design
1. [LOG121](https://horstmann.com/oodp3/slides/ch02/#(22)) (Cay Horstmann, chap: 2.12):
![crc.jpeg](https://horstmann.com/oodp3/slides/ch02/images/Ch2_02.jpg){.plain}

--

<!-- .slide: class="mddslide"  -->

## Exemple CRC
![ref-crc](assets/05-chp13F-14A-premiere-etude-conception-objet_9.pptx/ref-crc.jpeg){.plain}

ref: Object-Oriented Software Engineering, Bruegge &amp; Dutoit, Prentice-Hall, 2000.

--

<!-- .slide: class="mddslide"  -->

## Résumé
- Modélisation agile
  - Caméra pour numériser les esquisses
  - Habileté avec UML
- Modélisation dynamique est importante
- Pas beaucoup de temps pour modéliser
  - Une itération de 3 semaines (120 h) 
  - 2 à 8 heures de modélisation, pas plus
/

---

<!-- .slide: id="outilsUML" class="toolslide"  -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude)
1. [Outils UML](#outilsUML)  ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[14.44m](https://youtu.be/JU0bEcbhwa4)
1. [GRASP](#grasp)
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::

Note: vidéo 82.67m

--

<!-- .slide: class="toolslide"  -->

## Définitions
- Pro-ingénierie
    - Générer du code source à partir des diagrammes (UML) 
![pro-ingenierie](assets/ProIngenierieTransparent.png){.plain}
        
Note: Simulink

--

<!-- .slide: class="toolslide"  -->
## Définitions
- Rétro-ingénierie
    - Générer des diagrammes (UML) à partir du code 
![retro-ingenierie](assets/Retro-ingenierieTrans.png){.plain}

Note: railroady

--

<!-- .slide: class="toolslide"  -->
## Définitions
- Ingénierie cycle 
    - Fermer cette boucle
![ingenierie-cycle](assets/IngenierieCycleTransparent.png){.plain}

Note: Enterprise Architect

--

<!-- .slide: class="toolslide"  -->
### Que doit-on rechercher dans un outil?
- Essayez un outil gratuitement avant de l'acheter.
- Testez l'outil sur un projet réel.
- Choisissez un outil qui s'intègre à votre IDE préféré (VS, Eclipse, etc.)
- Rétro-ingénierie est important
- L'impression sur grande feuilles est importante (Larman)

--

<!-- .slide: class="toolslide"  -->
## Liste d'outils UML
1. [Wikipedia](http://en.wikipedia.org/wiki/List_of_Unified_Modeling_Language_tools)
- Suggestions: 
  - Papyrus
  - Modeliosoft
  - PlantUML

--

<!-- .slide: class="toolslide"  -->
## UML en mode esquisse
- Esquisses murales UML au début d'une itération
- Suivies par 3 semaines de codage et de tests
  - Les modèles évolueront avec le code
- Entamer de nouveau la modélisation de nouvelles esquisses
- Générer les diagrammes à partir du code existant le jours précédant cette modélisation

--

<!-- .slide: class="toolslide"  -->
## Exemple d'une itération
![iteration](assets/UML-en-iterationTransparent.png){.plain}


---

<!-- .slide: id="grasp" class="rdcuslide"  -->

## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude)
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp) ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[19.40m](https://youtu.be/DlufMFcGSSE)
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::

--

## autres patterns d'affectation des responsabilités

--

<!-- .slide: class="rdcuslide"  -->

## Les neuf patrons GRASP

1. [X] Expert
1. [X] Créateur
1. [X] Contrôleur
1. [X] Faible Couplage
1. [X] Forte Cohésion
1. [ ] Polymorphisme
1. [ ] Fabrication pure
1. [ ] Indirection
1. [ ] Protection des variations

--

<!-- .slide: class="rdcuslide"  -->

## Polymorphisme
- Principe de base pour la conception OO
- Cas qui varient mais qui sont similaires
- Dans une famille de classes
  - opération polymorphique
  - dans laquelle les cas sont différents
- Formes géométriques (carré, cercle, triangle, etc.)
  - se dessine avec une méthode draw()
  - chaque classe implémente sa méthode selon son cas…

--

<!-- .slide: class="rdcuslide"  -->

## Polymorphisme

![F25.1](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.1.svg){.plain width=65%}

Fig. 25.1 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Polymorphisme

![F25.2](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.2.png){.plain}

Fig. 25.2 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Polymorphisme
![F25.3](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.3.png){.plain width=80%}

Fig. 25.3 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Polymorphisme
Fig. 25.4, 25.5, 25.7 (3e édition)

![F25.4](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.4.png){width=30%}{.plain} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![F25.5](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.5.png){width=30%}{.plain}

![F25.7](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.7.png){.plain}{width=50%}

--

<!-- .slide: class="rdcuslide"  -->

## Fabrication pure
- Parfois en suivant un patron
    - assigne une responsabilité
    - mais il y a des conséquences non désirables
        - augmentation du couplage
        - diminution de la cohésion
- Solution
    - fabrique une classe «&nbsp;comportementale&nbsp;»
    - qui n'a pas d'équivalent dans le modèle du domaine
    - invention de la part du concepteur

--

<!-- .slide: class="rdcuslide"  -->

## Fabrication pure
![F25.8](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.8.png){.plain}

Fig. 25.8 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Fabrication pure
![F25.9](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.9.png){.plain width=80%}

Fig. 25.9 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Compréhension

Quel autre GRASP implique une fabrication pure? Autrement dit, on propose une classe «&nbsp;inventée&nbsp;» ne faisant pas partie du MDD. {align=left}

1. Créateur
2. Contrôleur
3. Expert
4. Forte cohésion
5. Faible couplage

--

<!-- .slide: class="rdcuslide"  -->

## Indirection
- Mécanisme souvent utilisé pour réduire le couplage
- Objet intermédiaire
    - découple deux composants

--

<!-- .slide: class="rdcuslide"  -->

## Indirection
![F25.10](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.10.svg){.plain}{width=130%}

Fig. 25.10 (3e édition)

--

<!-- .slide: class="rdcuslide"  -->

## Protection des variations
- Composants (classes, interfaces, ...)
  - variations (ou instabilités) de ces composants en affectent d'autres
- Éliminer ces effets indésirables
- Identifier des zones de variabilité

--

<!-- .slide: class="rdcuslide"  -->

## Protection des variations
- Créer une interface stable (API) autour des composants instables

![Iceberg](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/iceberg.png){.plain width=35%}

--

<!-- .slide: class="rdcuslide"  -->

## Protection des variations
![F25.10](assets/03-ChpF22-A25-GRASP-autres-patterns-affectation-des-responsabilites_17.pptx/F25.10.svg){.plain}{width=130%}

Note: Adaptateur permet d'utiliser d'autres systèmes externes qui se ressemblent mais qui ont un des API différents

--

<!-- .slide: class="rdcuslide"  -->

## Protection des variations
- Vieux principe du génie logiciel
- Principe de «&nbsp;Information hiding&nbsp;» (Parnas, 1972)
  - Encapsulation des données
  - Déterminer
    - choix difficiles du design
    - choix du design qui auront tendance à changer
  - Concevoir chaque module afin de cacher ces choix «&nbsp;variables&nbsp;»

--

<!-- .slide: class="rdcuslide"  -->

## Protection des variations
- Principe de «&nbsp;Open-closed&nbsp;» (Meyer, 1988)
- Composants devraient être
  - ouverts à l'extensibilité (Implémentations)
  - fermés à la modification (API)
- Ces contraintes paraissent contradictoires

--

<!-- .slide: class="rdcuslide"  -->

## Résumé
- D'autres patrons GRASP
    - Polymorphisme
    - Fabrication pure
    - Indirection
    - Protection des variations
- Vocabulaire
    - concepts de base pour les ingénieurs en logiciel
    - améliore la communication dans une équipe


---

<!-- .slide: id="gofrevision" class="gofslide"  -->

## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude)
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp) 
1. [GOF Révision](#gofrevision)  ![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[14.25m](https://youtu.be/eGIM9xIEGQE)
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)
:::


--

<!-- .slide: class="gofslide"  -->

## Qu'est ce qu'un design pattern?

- Solution à un problème récurrent dans un contexte particulier

--

<!-- .slide: class="gofslide"  -->

### Trois défis pour bien utiliser les Patterns
  1. (Re)connaître le problème
  2. Comprendre le patron (la solution)
  3. Appliquer la solution 

![cube-jouet](assets/06-chp23F-Design-Patterns-13-16x9.pptx/noun_Toy_1063841.svg){.plain width=30%}

--

<!-- .slide: class="gofslide"  -->

## 1.(Re)connaître le problème
- *Comprendre* le problème
- Exercice de «&nbsp;croyance&nbsp;» (on débute en OO)
- Certains problèmes sont plus «&nbsp;récurrents&nbsp;» que d'autres…
- Auteurs (GoF) avaient beaucoup d'expérience en OO
  
![auteurs](assets/06-chp23F-Design-Patterns-13-16x9.pptx/auteurs.png){.plain}

--

<!-- .slide: class="gofslide"  -->

# 2.Comprendre le patron 
### (la solution)
- abstractions
- notation UML est importante
- aspects statique et dynamique

![StaticObserver](https://www.plantuml.com/plantuml/svg/JOyz3i8m38NtdCBg10CtG1M20tJeokAcXeOcJcMxI1NYxWJ4dmVBqlVUq_DE3SNc5A4rjE2RJack94x7m1CA9b1R8fKjmJ-5VsIFVZnBdha_v9W5J92r869pG-W9A4ssGABKaQZp4LMXQkVkGjugG8KMRWxAe1dwORLsTnVOI4xe2QfFcPUqWUtso-hwRUHiuRIyZE_uGsOlP7JadpsaAL8gjKgCQs4ZuJpOfjmxuhxyz000 "StaticObserver"){.plain width=30%}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![DynamicObserver](https://www.plantuml.com/plantuml/svg/NOun3i8m34NtdCBg14ClK5Me4kmPihAumL13urQ9YvJRuoAni5ZwxpzzUIYAMRSqmwKA9ev-B9JVb5rviQoOCK7HEfFTp74tdL7bo2kAGjE5RNnIr0QmGFZhpel4J4fN-Sr-DUy2z2ruw01LCKw7esjF42mNqh0aqedbOJI0yTsJHVbUZGmaDtlY0m00 "DynamicObserver"){.plain width=50%}

--

<!-- .slide: class="gofslide"  -->

## 3. Appliquer la solution

- Étape concrète
- Mise en contexte particulier

--

<!-- .slide: class="gofslide"  -->

## 3. Appliquer la solution

| Nom dans le patron | Vrai nom (Bouton Swing) |
| ------------------ | ----------------------- |
|Subject | JButton |
|Observer | ActionListener |
|ConcreteObserver | la classe implémentant l'interface ActionListener |
|`attach()` | `addActionListener()` |
|`notify()` | `actionPerformed()` |

--

<!-- .slide: class="gofslide"  -->

### Patrons vus dans le livre de LOG121
::: block {style=font-size:0.9em}
- **Adaptateur**
- Commande
- Composite
- Décorateur
- Itérateur
- Méthode fabrique
- Observateur
- **Proxy**
- Singleton
- Stratégie
- Template
- Visiteur
:::

--

<!-- .slide: class="gofslide"  -->

## Perspective  Zen
![zen](assets/06-chp23F-Design-Patterns-13-16x9.pptx/zen.png){.plain}

--

<!-- .slide: class="gofslide"  -->

### Design Pattern Relationships
![relations-GOF](assets/06-chp23F-Design-Patterns-13-16x9.pptx/relations-GOF.png){.plain width=55%}

Ref: Design Patterns, Element of Reusable Object-oriented Software

--

<!-- .slide: class="gofslide"  -->

## Résumé


- Reconnaître des problèmes récurrents est difficile faute d'expérience adéquate
- Expérimenter avec les patterns (dans une version du projet qui n'est pas critique){.fragment .shape-up}
- Un patron ne s'enlève pas facilement!{.fragment .shape-up}
- Discuter de leurs avantages et leurs inconvénients avec des collègues{.fragment .shape-up}
- Vérifier après l'application du pattern que les bénéfices sont vraiment là{.fragment .shape-up}
  - p.ex. il est plus facile d'étendre le logiciel {.fragment .shape-up}

Note: Animations

--

<!-- .slide:  id="gof121" class="gofslide"  -->

## Patron GOF LOG121
- **[Décorateur](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch5/Ch5_fr.html#:~:text=Bars\)-,Patron%20D%C3%A9corateur,Contexte,-Objets%20composant%20peuvent%20avoir%20de%20la%20d%C3%A9coration%2C%20soit%20visuelle%2C%20soit%20comportementale)**
 - **[Itérateur](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch5/Ch5_fr.html#:~:text=mur.-,Patron%20It%C3%A9rateur)**
 - **[Commande](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch10/Ch10_fr.html#:~:text=Le%20patron%20COMMAND,-Le%20patron%20COMMAND)**
 - **[Façade](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch7/Ch7_fr.html#:~:text=Le%20pattern%20Fa%C3%A7ade)**
 - **[Singleton](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch10/Ch10_fr.html#:~:text=Le%20patron%20SINGLETON,-Contexte)**
 - **[Template method](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch6/Ch6_fr.html#:~:text=Ch6%2Fscene2%2FHouseShape.java-,Patron%20TEMPLATE%20METHOD,Contexte,-Un%20algorithme%20est%20applicable%20pour%20plusieurs%20types.)**
 - **[Factory method](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch10/Ch10_fr.html#:~:text=M%C3%A9thodes%20de%20fabrique%20(Factory%20methods))**
 - **[Proxy](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch10/Ch10_fr.html#:~:text=distante-,Le%20patron%20PROXY)**
 - **[Observateur](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch5/Ch5_fr.html#:~:text=sujet-,Patron%20Observateur,Contexte,-Un%20objet%2C%20nomm%C3%A9%20le%20sujet%2C%20est%20une%20source%20d'%C3%A9v%C3%A8nements)**
 - **[Visiteur](http://fuhrmanator.github.io/oodp-horstmann/htm/Ch10/Ch10_fr.html#:~:text=double-,Le%20patron%20VISITOR)**

--

<!-- .slide:  id="gof121" class="gofslide"  -->

# Patrons GOF

[Quiz patron GOF](http://www.vincehuston.org/dp/patterns_quiz.html)


---

<!-- .slide: id='package' class="packageslide" -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude)
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp) 
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[34.58m](https://youtu.be/ZyBbUEyZegY)
1. [TDD en pratique](#tdd)[81.46m](https://youtu.be/avpPyxjQpSk)
:::

--


<!-- .slide:  class="packageslide" -->
## Packaging?
::: block {.fragment .shade-up}
### Attribut de qualité
1. [ ] Performance 
1. [ ] Disponibilité 
1. [ ] Testabilité
1. [ ] Interopérabilité
1. [ ] Sécurité
1. [ ] Usabilité
1. [X] Modifiabilité
:::

--

<!-- .slide:  class="packageslide" -->

## Objectifs
- Organiser les packages pour réduire l'impact des **modifications**
- Apprendre d'autres notations des structures de packages UML

--

<!-- .slide:  class="packageslide" -->

## Principes

- Organiser les packages par **cohésion**
- Packager une **famille d'interface**
- Créer un package par **tâche** et par **goupe  de classes instables** (Branches)
- Les plus responsables sont les plus stables
- Factoriser les type indépendants
- Utiliser des **fabrications** pour limiter la dépendance aux packages concrets
- Pas de cycles dans les packages [DSM](https://www.ndepend.com/docs/dependency-structure-matrix-dsm)

--

<!-- .slide:  class="packageslide" -->

### Groupement par cohésion fonctionnelle
- On groupe les types qui sont fortement apparentés, parce qu'ils participent à une finalité, un service, des collaborations, une politique et une fonction qu'ils ont en commun.
- P.ex. le package "Tarification" contient des classes liées à la tarification des produits.
- C'est intuitif.

--


<!-- .slide:  class="packageslide" -->
### Groupement par cohésion relationnelle
::: block {style=font-size:0.6em}
- Mettre dans un package des classes qui se sont fortement couplées les unes aux autres.
- CR = (NombreDeRelationsInternes + 1) / NombreDeTypes
![cohesionRelationnelle](assets/03-chp29F-36A-Conception-de-packages-18.pptx/cohesionRelationnelle.png){.plain}{width=50%}

- GOF Facade  pour améliorer la cohésion relationnelle avec les packages externes

:::

--

<!-- .slide:  class="packageslide" -->

#### Cohésion relationnelle - exemple
![image6](assets/03-chp29F-36A-Conception-de-packages-18.pptx/image6.png){.plain}
![image5](assets/03-chp29F-36A-Conception-de-packages-18.pptx/image5.png){.plain}{width=50%}
::: block {style=font-size:0.7em}
[ndepend: métrique de cohésion](http://www.hanselman.com/blog/content/binary/NDepend%20metrics%20placemats%201.1.pdf){.plain}

:::

--

<!-- .slide:  class="packageslide" -->

### Packager une famille d'interfaces

- Placez une famille d'interfaces fonctionnellement liées dans un package à part
- Cela vaut pour les familles de trois interfaces ou plus
- Exemple: javax.ejb  comprend au moins douze 

::: block {style=font-size:0.5em}
```
- EJBContext
- EJBHome
- EJBLocalHome
- EJBLocalObject
- EJBMetaData
- EJBObject
- EnterpriseBean
- EntityBean
- EntityContext
- Handle
- HomeHandle
- MessageDrivenBean
- MessageDrivenContext
- SessionBean
- SessionContext
- SessionSynchronization
- TimedObject
- Timer
- TimerHandle
- TimerService
```
:::

Note: todo plusieurs colonnes

--

<!-- .slide:  class="packageslide" -->

## Créez un package par tâche de livraison

- Les packages sont l'unité de base de développement et de livraison (on ne développe rarement qu'une seule classe)
- Créer un package par tâche de livraison

![image7](assets/03-chp29F-36A-Conception-de-packages-18.pptx/image7.png){.plain}

--

<!-- .slide:  class="packageslide" -->

### ... et par groupe de classes instables [2/]
::: block {style=font-size:0.8em}
- Si un ensemble de classes dans un package a une tendance à évoluer ensemble, p.ex. on remarque qu'à chaque itération, c'est toujours les mêmes 5 ou 10 classes dans un package qui ont été modifiées.
- Exemple concret – chaque fois que l'on change le schéma de la BD il y a des changements dans plusieurs classes, surtout les appels à la méthode “sqlquery()”
    - Créez un package dans le package (sous package) pour isoler les classes ayant une tendance à changer ensemble
    - Notez que la tendance de ce genre de changement n'est pas visible dans les premières itérations.

Note: Sujets de recherche en génie logiciel: “co-change” – “couplage logique” et “couplage évolutionnaire” - liens de couplage déterminés par l'historique des versions.
:::

--

<!-- .slide:  class="packageslide" -->

### Les plus responsables sont les plus stables
Les packages «&nbsp;les plus responsables&nbsp;» engendrent le **plus de dépendances** et devraient être plus stables.

![larman/F29.1](assets/larman/F29.1.png){.plain}{width=65%}

Quel GRASP pour rendre un package plus stable? {.fragment .shape-up}

Note: Protections de variations propose de créer une interface stable

--

<!-- .slide:  class="packageslide" -->

## Factoriser les types

Organiser les types qui peuvent être utilisés indépendamment ou dans des contextes différents en packages distincts.

![larman/F29.2](assets/larman/F29.2.png){.plain}

--

<!-- .slide:  class="packageslide" -->

#### Fabriques pour découpler 
####  des classes concrètes

Renforcer la stabilité des packages consiste à réduire leur dépendance à des classes concrètes qui **appartiennent à d'autres packages**

![larman/F29.4](assets/larman/F29.4.png){.plain}

--

<!-- .slide:  class="packageslide" -->

### Visibilité et encapsulation dans les packages

Organiser les classes dans un package avec la bonne visibilité

![openClosePrivate](assets/03-chp29F-36A-Conception-de-packages-18.pptx/openClosePrivate.png){.plain}{width=70%}

--

<!-- .slide:  class="packageslide" -->

### Visibilité et encapsulation dans les packages

- Bloquer l'accès à un attribut ou une méthode d'une classe avec `private`
- Bloquer l'accès à une classe dans un package?
  - Déclarer la classe `class X {...}` (package protection, sans mot clé)
  - GRASP Protection des variations
    - Client ne devrait pas accéder aux implémentations de Forme.

--

<!-- .slide:  class="packageslide" -->

### Visibilité et encapsulation dans les packages
- Cette visibilité empêche les transgressions de l'encapsulation
![image12](assets/03-chp29F-36A-Conception-de-packages-18.pptx/image12.png){.plain}{width=90%}

--

<!-- .slide:  class="packageslide" -->

### Comment instancier les classes invisibles?

- FabriqueForme permet à Client d'instancier les Formes concrètes, bien qu'elles lui soient invisibles

![fabrique-forme](assets/03-chp29F-36A-Conception-de-packages-18.pptx/fabrique-forme.png){.plain}

--

<!-- .slide:  class="packageslide" -->

### Principe: pas de cycles dans les packages
::: block {style=font-size:0.7em}
- Si un groupe de packages a une dépendance cyclique, on peut devoir les traiter comme un seul grand package. Cela n'est pas souhaitable, car la livraison de packages volumineux (ou d'agrégats de packages) aggrave le risque d'effets néfastes.
- Factoriser les types participant au cycle dans un package plus petit.
- Rompre le cycle à l'aide d'une interface.

![larman/F29.5](assets/larman/F29.5.png){.plain}
:::

--

<!-- .slide:  class="packageslide" -->

### Combinaison des patrons de packaging

![larman/F29.5](assets/03-chp29F-36A-Conception-de-packages-18.pptx/image16.png){.plain}{width=125%}

::: block {style=font-size:0.5em}
ref: [Commonly used architectural patterns in Java applications](http://www.techrepublic.com/article/commonly-used-architectural-patterns-in-java-applications)
:::

--

<!-- .slide:  class="packageslide" -->

## Qu'est-ce qu'une couche?
- Groupement à forte granularité de classes, packages et sous-systèmes
- Possède un thème «&nbsp;cohésif&nbsp;»
- Une couche plus «&nbsp;haute&nbsp;» fait appel aux couches plus «&nbsp;basses&nbsp;», mais pas l'inverse
- Couches OO typiques
  - Présentation (IHM)
  - Logique applicative (objets du domaine)
  - Services techniques (persistance, journalisation, etc.)

--

<!-- .slide:  class="packageslide" -->

### Concevoir une architecture en couches
- Séparation nette et cohésive
- Collaboration et couplage vont du haut vers le bas

![larman/F12.2](assets/larman/F12.2.svg){.plain}{width=30%}

fig F12.2, A13.2

- Séparation Modèle-Vue est un cas simple

--

<!-- .slide:  class="packageslide" -->

### Architecture  - Modèle / Vue / Contrôleur
::: block {style=font-size:0.7em}
- Vues/contrôleurs modifient le modèle
- Modèle informe les vues des changements
- Vues se mettent à jour de nouveau en conséquence

![mvc](assets/02-chp12F-13-diagrammes_de_package_16.pptx/mvc.png){.plain}{width:75%}

--

<!-- .slide:  class="packageslide" -->

### Avantages de la modélisation en couches
- Séparation de fonctions/services -> couplage réduit, cohésion améliorée
- La complexité est encapsulée (décomposable)
- On peut remplacer certaines couches
- Les couches basses contiennent des fonctions réutilisables
- Certaines couches (Domaine) peuvent être distribuées
- Segmentation logique facilite développement en équipe

--

<!-- .slide:  class="packageslide" -->

##### Architecture multi-couches
![couches Figure F12.4](assets/larman/F12.4.svg "Figure F12.4"){.plain}{width=65%}

<!-- --

## Architecture web multi-couches
![image16](assets/02-chp12F-13-diagrammes_de_package_16.pptx/image16.png ""){.plain}{width=70%} -->

--

<!-- .slide:  class="packageslide" -->

### Relation entre couche domaine et DCC
![larman/F12.5](assets/larman/F12.5.svg "Larman Figure F12.5"){.plain}{width=90%}

--

<!-- .slide:  class="packageslide" -->

## Relation entre DSS et couches
![larman/F12.8](assets/larman/F12.8.png "larman/F12.8"){.plain}

--

<!-- .slide:  class="packageslide" -->

#### Influence des artefacts du Processus Unifié

![larman/F12.1](assets/larman/F12.1.png "larman/F12.1"){.plain}{width=50%}

::: block {style=font-size:0.5em}
fig A13.1, F12.1
:::

--

<!-- .slide:  class="packageslide" -->

## Résumé
- Architecture logique est importante pour les conceptions de systèmes complexes
- Modèle en couches est populaire
    - Extension du principe de séparation Modèle-Vue
    - Java est organisé en couches
    - Android aussi
- DSS relie la couche présentation avec la couche du domaine à travers les opérations système


---


<!-- .slide: id="tdd" class="codeslide"   -->
## LOG210 Séance #08
## Analyse et conception de logiciels
::: block {style=font-size:0.8em}
1. [Administration](#administration)
1. [Équipe](#equipe)
1. [Première étude de la conception](#etude)
1. [Outils UML](#outilsUML) 
1. [GRASP](#grasp) 
1. [GOF Révision](#gofrevision)  
1. [Diagramme de package](#package)
1. [TDD en pratique](#tdd)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
:::

--

<!-- .slide: id="tdd" class="codeslide"  -->
## TDD
1. [Kata TDD avec TypeScript](https://github.com/profcfuhrmanets/typescript-tdd-kata)
 - Développer un fonction permettant d'extraire les mots uniques d'une phrase
 - Développer une fonction permettant de faire l'intesection des mots de deux phrases


---

<!-- .slide: class="feedbackslide"  -->
## Séance #08
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs