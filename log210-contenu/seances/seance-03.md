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
title: 'LOG210-C03-00-seance'
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

<!-- .slide: id="admin"  -->
## LOG210 Séance #03
## Analyse et conception de logiciels

1. [Administration](#admin)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Équipe: Confiance](#confiance)
1. [MDD: Classes, Attributs, Associations](#mdd)
1. [DSS: Exercice, résumé](#dss)
1. [Contrats d'opération](#contrat)
1. [RDCU: Créateur et Expert GRASP](#rdcu)

--

# Administrivia

1. Accès G Suite (ETSMTL.NET)
   - Google Classrooms
   - Google Drive
2. Invitation Lab 0 (GitHub Classroom)
   - ⚠️ lien différent pour chaque groupe!
   - ne pas partager 
3. Équipes (connaissez-vous vos coéquipiers?)
4. <del>Lien Zoom</del> <ins>Serveur Discord</ins> pour lab

Ajouter patron: Transformer identifiant en objets

--

### Survol Visuel{align=right}

<!-- .slide: data-fullscreen data-background-image="assets/FigA.1-avec-contrats.svg" data-background-size="50%"  data-background-opacity="1" -->

Note: Montrer aux étudiants l’utilité des artéfacts lors de l’implémentation. Montrer aux étudiants comment passer des artéfacts au code


---

<!-- .slide: id="confiance" class="equipeslide"  -->

## LOG210 Séance #03
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [Équipe: Confiance](#confiance)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[4.33m](https://youtu.be/yge8cI11JRE)
1. [MDD: Classes, Attributs, Associations](#mdd)
1. [DSS: Exercice, résumé](#dss)
1. [Contrats d'opération](#contrat)
1. [RDCU: Créateur et Expert GRASP](#rdcu)

--

<!-- .slide: class="equipeslide" -->
## Confiance

- Je crois que les autres coéquipiers sont compétents et qu'ils feront la bonne chose.
- Je suis à l'aise lorsqu'ils prennent le volant, le cas échéant.

![Confiance](assets/TeamGeek.pptx/confiance.gif){width=50%}

--

<!-- .slide: class="equipeslide"  -->

#### Tendances comportementales chez les développeurs…

- Je ne veux pas montrer mon code source à mes coéquipiers…
    - Mon code n'est pas fini…
    - J'ai trop peur d'être jugé(e)…
    - J'ai peur que quelqu'un vole mon idée…  
Il s'agit de l'insécurité. C'est normal!

![tortue.png](assets/TeamGeek.pptx/tortue.png){width=35%}{.plain}

--

<!-- .slide: class="equipeslide"  -->
### Cacher ses idées augmente le risque…
- de faire des erreurs dans la conception initiale.
- de «&nbsp;réinventer la roue&nbsp;».
- de terminer le travail plus tard que son compétiteur, qui, lui, a collaboré avec son équipe.

![Rues triangulaires](assets/TeamGeek.pptx/motocycle.png){width=40%}{.plain}

---


<!-- .slide: id="mdd" class="mddslide"  -->
## LOG210 Séance #03
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [Équipe: Confiance](#confiance)
1. [MDD: Classes, Attributs, Associations![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}](#mdd)[58.47m](https://youtu.be/THARfauPB-8)
1. [DSS: Exercice, résumé](#dss)
1. [Contrats d'opération](#contrat)
1. [RDCU: Créateur et Expert GRASP](#rdcu)


--

<!-- .slide: class="mddslide"  -->

# MDD

- Classes conceptuelles
- Attributs
- Associations

--

<!-- .slide: class="mddslide"  -->

## *MDD - Jeu [Risk](https://fr.wikipedia.org/wiki/Risk)

![MDD](https://www.plantuml.com/plantuml/svg/VPJDRjD04CVl-nGZNzoY9285Yh1GrQfKLKibegJ0fPVjUkeiNk-6_KY941Ay3Rtp1daJdeHPEwxJ44MorbxFRpxsFsCVEy-j3vLYhfHwnYslmFc5Gbgj51kMMoxAmfgWSs6KiU0jruvCg3rBmK-b0xeuJBdExwtq7ZNS6Ur1QlWiTMxk7KkxS3dUyQ1y93Il4DvRwQBBnVKfIw-dw12Cdw9re8mfeR38wr2JJ-UmL_6IYWmMAIykKhfBJOTH2dFAQU7awWe-Jix6axNaC7o-lwi0nukuw9rLNkWIBasmcgjTsBTIv30HLixyBco4f99rQoAlY-TjGEO4ftuCsLJc25ZD_08gh6wZbr3SkLWD1WlV6O0s5MGmeTxfWlrOsTyj7shZdE8Gbv4YdeojDuQnT6MxJKQAU-JrkmIuWz6uDOtumctBiZAVUC-_1co8ssR7gVbDllYE2hb3xROKyK68CEDU6hro7oyV2bdHOBaE7OqX6IRmhD-7vEL1qjIJmIbfAOc4eoV4OT9ODDOrd3dVlz6vd4ktVA0dKlU8TK0Nk7VOkz6lUsze7NP9pcdiPnXJn7sa8pmS39uz8Z73t4WdTJ-Fv4hO1bRz-au5Dk0N4wWCcjzDC2VmLLBtBADP4oh4WwMWPA7ZmCivQOeWsaC73KZVe41GtDBuxltz-MkVhKOYESWEk-HjdgoUc9XuHMqxJPJ6Bl-eoEqrOA-sxSDWiDOlbcv4eH2FpTk8atRYgV_9jp2onYz_5qZjCO4MtamKU-hMbDbEMmPNN8kjdRdHwrWpV7a_AcUtdRvtq7lH2dyPFqjYs36vq4_m7m00){.plain width="100%"}

Note: 1) Classes 2) attributs 3) associations, 4) Association a un verbe (éviter verbes «avoir», «posséder», «contenir» car ils sont moins précis), 5) Association un sens de lecture (indiqué par triangle), 6) association a cardinalités 7) association parfois multiple (Pays et Attaque), 8) classe d'association (Occupation), 9) pas d'association qui ne sont pas «mémorables» (JeuRisk et Attaque) 10)composition

--

<!-- .slide: class="mddslide"  -->

### MDD - Attributs NextGen (Larman) 

Dans LOG210 il <span style="color:red">faut</span> spécifier les **types des attributs**

![MDD NextGen](assets/Fig9.27.png){.plain width="60%"}

--

<!-- .slide: class="mddslide"  -->
## Attributs dérivés
![larman/F9.21](assets/larman/F9.21.png){.plain}


--

<!-- .slide: class="mddslide"  -->
## *Attribut dérivé - Risk
Voyez-vous où appliquer un attribut dérivé?

![MDD](https://www.plantuml.com/plantuml/svg/VPJDRjD04CVl-nGZNzoY9285Yh1GrQfKLKibegJ0fPVjUkeiNk-6_KY941Ay3Rtp1daJdeHPEwxJ44MorbxFRpxsFsCVEy-j3vLYhfHwnYslmFc5Gbgj51kMMoxAmfgWSs6KiU0jruvCg3rBmK-b0xeuJBdExwtq7ZNS6Ur1QlWiTMxk7KkxS3dUyQ1y93Il4DvRwQBBnVKfIw-dw12Cdw9re8mfeR38wr2JJ-UmL_6IYWmMAIykKhfBJOTH2dFAQU7awWe-Jix6axNaC7o-lwi0nukuw9rLNkWIBasmcgjTsBTIv30HLixyBco4f99rQoAlY-TjGEO4ftuCsLJc25ZD_08gh6wZbr3SkLWD1WlV6O0s5MGmeTxfWlrOsTyj7shZdE8Gbv4YdeojDuQnT6MxJKQAU-JrkmIuWz6uDOtumctBiZAVUC-_1co8ssR7gVbDllYE2hb3xROKyK68CEDU6hro7oyV2bdHOBaE7OqX6IRmhD-7vEL1qjIJmIbfAOc4eoV4OT9ODDOrd3dVlz6vd4ktVA0dKlU8TK0Nk7VOkz6lUsze7NP9pcdiPnXJn7sa8pmS39uz8Z73t4WdTJ-Fv4hO1bRz-au5Dk0N4wWCcjzDC2VmLLBtBADP4oh4WwMWPA7ZmCivQOeWsaC73KZVe41GtDBuxltz-MkVhKOYESWEk-HjdgoUc9XuHMqxJPJ6Bl-eoEqrOA-sxSDWiDOlbcv4eH2FpTk8atRYgV_9jp2onYz_5qZjCO4MtamKU-hMbDbEMmPNN8kjdRdHwrWpV7a_AcUtdRvtq7lH2dyPFqjYs36vq4_m7m00){.plain width="80%"}

Note: Joueur./nbPaysOccupés: int

--

<!-- .slide: class="mddslide"  -->
### Calcul des renforts
On reçoit les renforts selon le nombre de pays occupés. Utiliser une **classe d'association**


![MDD attribut dérivé](https://www.plantuml.com/plantuml/svg/VPB1QXj138RlynJ25oUXSUgh2IObb98sa91DqhDsLjaTTaPZD3Ca9kI1SiyR-CMYNRlKj61OPXZqwTSlQIzIHiabU9DwnoiK393osfEUukm_aHfjtqeitDZeeq0MvAGXucoca3kNG3-43hbv5fSpCJn5pk0OVZjkudCoqxzo3JrXyNaW60F1Bt5fIBcwlpJJ-uuIGSmTIG8VOm-j48vIrUCFE0hOgyaYf7LfFTNRiJRZFJLQK-3RzJKyLD_lghtYCFzwVCX0mdOu-A3BA-xXPop2w0zXBxrjeBBYLlaGTaiw9KbxGzuVNfP29bdKVSnDvne22gkyXa2X7hAinvG6DrG4NWq0nm0Bg7HttEhpVDpJelQ5bcTSt-8wtLXRLfltf9ZZV7us4alpjjCQaF-L_aJ7PCmkyfQfxpRlhGkw_vsUaZita_a4Ja_rcirE9blP1LngsxBvq7QMvcWBVXbZnp2RxQcR2-96_xrF){.plain width="35%"}

--

<!-- .slide: class="mddslide"  -->
## Types de données Ch. 9.16
- Définir de nouveaux types quand les types primitifs ne sont pas adéquats
  - ex : Sigle de cours $\rightarrow$ `LOG120`  
   ![Sigle](https://www.plantuml.com/plantuml/svg/VL71JiCm3BtdAtmhtDYLqn12Q6m7H0USlSHheoPEPQSQ4-BVSH4I4uTAaQFOpy_EUskjA7NAoUaGUKJ135hFYInAzFyg1_H39sNYu4ig0bMGrKh4rJLG-wXW1w573YU9jHB3iN25oF0UEPIJkkQFBj0HfrHd16Ccs4hKkMMpltVDlYSbABKdKKYb3D09uGzL-_O8Lna7Mt8IihbqRkoER9z9YOBD5BZRxU2rVNXfBuR3wkPwQG75RWwykEM61tWgap2c9TZ7u0EqNk9Obs3FP2g9NeXyALwLYPnwD3zMhe-1WF9Opv0f7-Okdr0LsjWPuDC1Z58wup3UMsZDGEuigQGQ2rigcay0lWJwVNmvjoOEvl8t){.plain}  
  - ex : un code SKU  
![type-donnees](assets/05b-chp09-Modele-du-domaine_51.pptx/type-donnees.png){.plain width="60%"}
 

--


<!-- .slide: class="mddslide"  -->
## UML : classes types de données
![larman/F9.24](assets/larman/F9.24.png){.plain}

--

<!-- ## Entité -> nouveau type de donnée si…
Tableau 9.3
::: block {style=font-size:0.8em}
- Elle est composée de sections séparées
- Des opérations lui sont habituellement associées, comme une analyse syntaxique ou une validation (ex. numéro de carte de crédit){.fragment .shade-up}
- Elle a d'autres attributs (ex. prix promotionnel a une date de début et de fin){.fragment .shade-up}
- Elle a une quantité exprimée en unités (ex. Paiement en `$`US  ou  `$`CA){.fragment .shade-up}
- C'est une abstraction d'un ou de plusieurs types présentant l'une de ces propriétés{.fragment .shade-up}
    - ex. CodeArticle est une généralisation de UPC (Universal Product Code) ou EAN (European Article Number){.fragment .shade-up}
:::

-- -->

<!-- .slide: class="mddslide"  -->
## *Généralisation

Lire Ch. 32.2-32.7 (version française 26.2-26.7)

 ![larman/F26.2, A32.2](assets/larman/F26.2.png){width=80%}{.plain}

Note: CashPayment a un attribut «&nbsp;amount&nbsp;» et CheckPayment est associé aussi à Sale. Une sous casse conceptuelle respecte les deux règles suivantes: Est-un, A 100%

--

<!-- .slide: class="mddslide"  -->
## Sous-classes conceptuelles

Les énoncés sur les super-classes s'appliquent aux sous-classes

 ![larman/F26.5, A32.5](assets/larman/F26.5.png){.plain}


--

<!-- .slide: class="mddslide"  -->
## Règle «&nbsp;à 100%&nbsp;»
- 100% de la définition d'une classe conceptuelle est applicable aux sous-classes
- Sous-classe
    - conforme à 100% à sa superclasse
        - en termes d'attributs
        - en termes d'associations

--

<!-- .slide: class="mddslide"  -->
## Règle «&nbsp;est un&nbsp;»
- Sous-classe conceptuelle
    - est membre de l'ensemble de sa superclasse
    - objet d'une sous-classe **est un** objet de la super-classe

 ![larman/F26.4,A32.4](assets/larman/F26.4.png){.plain width="70%"}

--

<!-- .slide: class="mddslide"  -->
### Définir une sous-classe conceptuelle quand elle...

- possède des attributs additionnels intéressants
- possède des associations additionnelles intéressantes
- réagit, est manipulée, est traitée d'une façon intéressante et
  - différemment de sa superclasse
  - différemment d'autres sous-classes
- représente un objet animé (humain, animal, robot) ayant un comportement différent et intéressant

Note: Exemples: Tableau F26.2/A32.2

--

<!-- .slide: class="mddslide"  -->
## Super-classe conceptuelle

- Quand définit-on une super-classe conceptuelle?
    - Lorsque les classes sont des variations de concepts similaires
    - respectent les règles à 100% et «&nbsp;est un&nbsp;»
    - ont des attributs communs
        - qui pourraient être placés dans la super-classe
    - ont les mêmes associations
        - qui pourraient s'appliquer à la super-classe

--

<!-- .slide: class="mddslide"  -->
## Exemple de partition inutile
 ![larman/F26.6, A32.6](assets/larman/F26.6.png){.plain}

figure: F26.6, A32.6

--

### Classes d'association
::: block {style=font-size:0.8em}
- Services d'autorisation de paiement
    - assignent une identification à chaque magasin
    - demande d'autorisation de paiement  codeVendeur
    - le même magasin peut utiliser plusieurs services, chacun lui donnant un codeVendeur différent
- Dans quelle classe conceptuelle mettre codeVendeur?
:::
 ![larman/F26.14, A32.14](assets/larman/F26.14.png){.plain}

--

<!-- .slide: class="mddslide"  -->
## Solution intermédiaire

 ![larman/F26.15, A32.15](assets/larman/F26.15.png){.plain width=100%}

--

<!-- .slide: class="mddslide"  -->
## Classe d'association

 ![larman/F26.16, A32.16](assets/larman/F26.16.png){.plain}

--

<!-- .slide: class="mddslide"  -->
## Ajout - classe d'association

- Règles pour l'ajout : 
    - un **attribut**  est lié à une association
    - la durée de vie des instances de la classe d'association dépend de l'association
        - «historic mapping» (patron d'analyse, M. Fowler)
- il y a une association N-N entre deux concepts et des **informations liées à l'association** elle-même.

https://martinfowler.com/apsupp/properties.pdf

--

<!-- .slide: class="mddslide"  -->
<!-- .slide: class="mddslide"  -->
## Classes d'association (Exemple)
 
![larman/F26.17, A32.17](assets/larman/F26.17.png){.plain width=60%}

--

<!-- .slide: class="mddslide"  -->
# *Solution Exercice MDD sur Google Classroom
voir: seance-03-exercice-reserverLivre

--


<!-- .slide: class="mddslide"  -->
## Exercice MDD (Hôtel)
::: block {style=font-size:0.7em}
1. Un client appelle à l'hôtel pour placer une réservation.
1. Le commis démarre une nouvelle réservation.
1. Le commis saisit la date d'arrivée; la date de départ; le nom de la catégorie de chambre; la quantité de chambres.
1. Le système inscrit les informations à la réservation.

Les étapes 3 et 4 sont répétées tant que le client n'indique pas qu'il a terminé{align="left"}

5. Le commis termine la réservation.
1. Le système affiche toutes les informations entrées.
1. Le commis valide les informations auprès du client et confirme la réservation à l'aide du nom et du numéro de téléphone du client.
1. Le système enregistre la réservation et affiche le numéro de confirmation.
1. Le commis communique le numéro de confirmation au client.
:::
voir seance-01-exercice-CU02

---

<!-- .slide: id='dss' class="dssslide"  -->
## LOG210 Séance #03
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [Équipe: Confiance](#confiance)
1. [MDD: Classes, Attributs, Associations](#mdd)
1. [DSS: Exercice, résumé](#dss)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[11.23m](https://youtu.be/XUK39QK9I58)
1. [Contrats d'opération](#contrat)
1. [RDCU: Créateur et Expert GRASP](#rdcu)

--

<!-- .slide: class="dssslide"  -->
# DSS

Retour sur l'exercice Google 

Voir: Seance-03-solution-reserverLivreBibliotheque

--

<!-- .slide: class="dssslide"  -->
## Points importants

Voir le PDF des [notes de cours](https://drive.google.com/file/d/1__yjzv7vuqbX0ElxLj5AkVO0xEk7ubVO/view?usp=sharing)



<!-- - opération système n'a pas de verbe
- Utiliser des boucles alors qu'il n'y a aucune répétition dans le cas d'utilisation -->
<!-- - Une boucle commence toujours par une opération -->
<!-- - Oublier l'opération qui termine la boucle
- Oublier les paramètres et types dans les opérations -->
<!-- - Une opération synchrone avec plusieurs retour! -->
<!-- - Les types de flèches pour des opérations synchrones et asynchrones sont différents -->
<!-- - On oublie de mettre un message de retour
- On met un message de retour pour une information qui n'est pas spécifique. -->

<!-- ## Exercice DSS
::: block {style=font-size:0.7em}
Cas d'utilisation «Noter une réservation»
1. Un client appelle à l'hôtel pour placer une réservation.
2. Le commis démarre une nouvelle réservation.
3. Le commis saisit la date d'arrivée; la date de départ; le nom de la catégorie de chambre; la quantité de chambres.
4. Le système inscrit les informations à la réservation.

Les étapes 3 et 4 sont répétées tant que le client n'indique pas qu'il a terminé{align="left"}

5. Le commis termine la réservation.
1. Le système affiche toutes les informations entrées.
1. Le commis valide les informations auprès du client et confirme la réservation à l'aide du nom et du numéro de téléphone du client.
1. Le système enregistre la réservation et affiche le numéro de confirmation.
1. Le commis communique le numéro de confirmation au client.
::: -->

---


<!-- .slide: id='contrat' class="contratslide"  -->
## LOG210 Séance #03
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [Équipe: Confiance](#confiance)
1. [MDD: Classes, Attributs, Associations](#mdd)
1. [DSS: Exercice, résumé](#dss)
1. [Contrats d'opération](#contrat)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[12.08m](https://youtu.be/4bJ5a5l_TQk)
1. [RDCU: Créateur et Expert GRASP](#rdcu)

--

<!-- .slide: id='contrat' class="contratslide"  -->
# Contrats d'opération

- Qu'est-ce qu'un contrat d'opération?
- Pourquoi les contrats d'opération?

--

<!-- .slide: class="contratslide"  -->
## *Qu'est-ce qu'un contrat d'opération?

Un document décrivant ce qui est arrivé après l'exécution d'une opération système.

![DSS](assets/SurvolContrats.svg){.plain width="45%"}

Note: exemple avec `créerNouvelleVente()` - l'instance de Vente dans le MDD n'existe pas encore avant que le caissier démarre une vente. - Après l'exécution de créerNouvelleVente, l'instance existe et elle est associée à la caisse.

--

<!-- .slide: class="contratslide"  -->
## Éléments d'un contrat d'opération

- Signature de l'opération système:  
`saisirArticle(codeArticle: CodeArticle, quantité: int)`
- Postconditions (3 formes, vocabulaire du MDD)
  - création (ou suppression) d'instances;
  - modification des valeurs des attributs;
  - formation (ou rupture) d'associations.

--

<!-- .slide: class="contratslide"  -->
### *Contrat d'opération: 

**Opération:** `créerNouvelleVente()` {align=left}

**Références croisées:** Cas d'utilisation : Traiter Vente {align=left}

**Postconditions:** {align=left}
  - une instance *v* de Vente a été créée
  - *v* a été associée au Registre
  - des attributs de *v* ont été initialisés

Note: chacune de forme des postconditions, vocabulaire du MDD

--

<!-- .slide: class="contratslide"  -->
## Pourquoi les contrats

- Facilite la conception OO (RDCU)
  - Liste d'épicerie (quoi faire)
  - RDCU s'inspire du MDD (réduire décalage des représentations)
- Donne des conditions pour tests
- Aide à valider le MDD
  

--


<!-- .slide: class="contratslide"  -->
# Exercice contrats (Google Classroom)
 
Voir seance-03-exercice-reserverLivre

---

<!-- .slide: id='rdcu' class="rdcuslide"  -->
## LOG210 Séance #03
## Analyse et conception de logiciels
1. [Administration](#admin)
1. [Équipe: Confiance](#confiance)
1. [MDD: Classes, Attributs, Associations](#mdd)
1. [DSS: Exercice, résumé](#dss)
1. [Contrats d'opération](#contrat)
1. [RDCU: Créateur et Expert GRASP](#rdcu)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[24.28m](https://youtu.be/qJ2qG-CZzUY)

--

<!-- .slide:  class="rdcuslide"   -->
## RDCU

Prendre les bonnes décisions pour une solution facile à comprendre et modulaire... {align=left}

![Swing et JeuDeDés](assets/cohesion_RDCU.png){width="65%" .plain}

--

<!-- .slide:  class="rdcuslide"   -->
## Décalage des représentations

Facile? Les classes logicielles devraient ressembler à des classes conceptuelles.

![](assets/Fig9.6-français.svg){.plain width="50%"}

Qui fait quoi? Qui a quelle responsabilité?

--

<!-- .slide:  class="rdcuslide"   -->
# RDCU

Approche: conception orientée-responsabilités

## GRASP

**G**eneral **R**esponsability **A**ssignment **S**oftware **P**atterns

Pour décider où mettre les méthodes...

--

<!-- .slide:  class="rdcuslide"   -->
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

<!-- .slide:  class="rdcuslide"   -->
## *RDCU (Survol)

![](asset/../assets/FigA.1-avec-contrats.svg){.plain width=50%}

Note: expliquer encore le contexte de la RDCU

--

<!-- .slide:  class="rdcuslide"   -->
## RDCU: scénario Démarrer

- C'est l'initialisation du système. 
- C'est implicite mais essentiel!
- On doit instancier les objets faisant partie de l'application.

  
Note: page suivante; Exemple: Monopoly - instancier les objets Case

--

<!-- .slide:  class="rdcuslide"   -->
## Instancier les objets Case

- Quelle classe s'en occupe? (sondage Zoom)

![F16.3,A17.3](assets/FigF16.3.png){.plain width=65%}

--

<!-- .slide:  class="rdcuslide"   -->
## Créateur (GRASP)

- Les «conteneurs» créent les objets «contenus»

![createur](assets/01-chp16F-17A_GRASP-46.pptx/createur.png){width=70% .plain}

--

<!-- .slide:  class="rdcuslide"   -->
## Créateur (GRASP)

- **Problème**: Qui crée? (postcondition d'un contrat)
- **Solution**: Affecter à la classe B la responsabilité de créer les objets d'une classe A si...
  - B possède les données d'initialisation des objets A
  - B contient ou agrège des objets A
  - B utilise étroitement des objets A
  - B enregistre des objets A

On s'inspire du MDD. On réutilise les liens existents.

--

<!-- .slide:  class="rdcuslide"   -->
## *Créateur

- Qui crée les cases (Square)?

![F16.3,A17.3](assets/FigF16.3.png){.plain width=65%}

Note: On favorise la classe agrégate

--

<!-- .slide:  class="rdcuslide"   -->
## *Créateur (Annotation)

![F16.4, A17.4](assets/FigF16.4.png){width=100%}{.plain}

Note: Ce n'est pas une classe `CaseRepertoire` (nom étrange, augmente l'écart des représentations)

--

<!-- .slide:  class="rdcuslide"   -->
## Expert en Information

- **Problème:** Quel est le principe général d'affectation des responsabilités aux objets?
- **Solution:** Affecter la responsabilité à la classe qui possède les informations nécessaires pour s'en acquitter
> En termes de paramètres, associations

--

<!-- .slide:  class="rdcuslide"   -->
## Expert (GRASP)

- (Sondage) Où mettre la méthode `getCase(nom)`?

![get_cases](assets/getCase_nom.png){width=30%}{.plain align=top style="background:#DDFFDD"}
![F16.3](assets/FigF16.3.png){width=60%}{.plain}

--

<!-- .slide:  class="rdcuslide"   -->
## Expert

- Application du patron Expert

![get_cases](assets/getCase_nom.png){width=30%}{.plain align=top style="background:#DDFFDD"}![F16.6, A17.6](assets/FigF16.6.png){.plain width=75%}

--

<!-- .slide: class="contratslide"  -->
# Exercice RDCU (Google Classroom)
 
Voir seance-03-exercice-reserverLivre

---

<!-- .slide: class="feedbackslide"  -->
## Séance #03
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

<!-- .slide: class="mddslide"  -->
https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs<!-- .slide: class="mddslide"  -->
<!-- .slide: class="mddslide"  -->


