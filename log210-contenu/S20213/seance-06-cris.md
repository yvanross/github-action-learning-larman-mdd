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
title: 'LOG210-seance-06'
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

# LOG210 Analyse et conception de logiciels: Séance 06

--

<!-- https://www.fastemoji.com/Search/?order=newest&q=bureaucrat -->
## ┌(▀Ĺ̯ ▀-͠ )┐

1. Se connecter à Socrative  
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

--

## Schéma des outils

![OutilsLOG210g01](assets/OutilsLOG210g01.png){.plain}

---

## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

--

# Survol

- Travail en équipe
- Rappel méthodologie
- Rétroaction mini-test
- Retour Exercice RDCU
- GRASP Polymorphisme F22.1/A25.1
- GRASP Fabrication Pure F22.2/A25.2
- Patron Transformer ID en objets (ndc 9.4)
- Patron Faire soi-même (ndc 9.8)

---

<!-- .slide: class="equipeslide center" -->
# Travail en équipe

## Développement de logiciels

--

<!-- .slide: class="equipeslide center" -->

## Rencontres efficaces

1. N'inviter que celles et ceux qui doivent absolument être présent.e.s
2. Préparer et distribuer l'ordre du jour *bien avant* que ça commence
3. Terminer tôt si les objectifs ont été atteints
4. Respecter l'ordre du jour
5. Planifier la rencontre autour des pauses habituelles (p.ex., à midi, à la fin de la journée)

[TeamGeek]

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

<!-- .slide: class="graspslide center" -->
Q: Quel principe GRASP permet de gérer des alternatives (`if-then-else` ou `case`) qui dépendent des types? (4 tentatives)

| Model response            | Partial credit |Count |Frequency            |
| :------------------------- | -------: | -: | ------: |
| Polymorphisme             | 100.00% | 2 | 50.00% |
| Indirection               | 0.00%   | 0 | 0.00%  |
| Fabrication Pure          | 0.00%   | 0 | 0.00%  |
| **Protection des variations**{style="color:red} | 0.00%   | **2**{style="color:red} | 50.00% |

---

<!-- .slide: class="contratslide center" -->
# Retour exercice RDCU

Google Classrooms

---

<!-- .slide: class="rdcuslide center" id='rdcu' -->
# RDCU
## Réalisation d'un cas d'utilisation

--

<!-- .slide: class="rdcuslide center" -->
# Rappel: Diagrammes de séquence

--

<!-- .slide: class="rdcuslide center" -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Quel(s) est(sont) le(s) problème(s)  
de **flot de contrôle** avec le diagramme suivant?

![sequence_flow_problems](https://www.plantuml.com/plantuml/svg/ZP91JiCm44NtFiMe6sX45h2iIjKaxP8R85N66LAhpZYCdLOz0ZU1FJVenPWaHPIgbTXOe_dptrZVdeUeERQrWu1lBPB1rQlpkrN3_iLX7LJOM6eqwnf2t3kKawtf32TAhiscOjzIMNZd6I9h2Y8XnLF_SS4JXg0hp9oj28pC89zChJMLExOn8WcdHINjQ8rjD4KOJRAjzJG27I0xKt8Ti1VoCw7GzO-dE9CMhAkZjFWhuUJm7hrr0tAfL3g332PGtwiCf2ww-a4fmwWZoa01QJgRmLBw28ymz1Lv4VqM6POJI99id2JWDBowmuTPOmUY6mmH6bbYF3CQCVKBSW7fihp5yG1XMwqZT92yWmn1Y5ltNdaOuodouKkgnhSCI5k_bxq6eHu2xwuuWyLLRj5pXxIkWv_f0dawJTC-df7VZCwvYt_TbozWVzFBxlh4asJPmQ9lHJ0OW0-VZQU0GSsHIlcLtm00 "sequence_flow_problems"){.plain}

Note: C'est C. Le flot ne peut pas passer de Base ou de Avion à Camion, sans message intermédiaire.

--

<!-- .slide: class="rdcuslide center" -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Selon le diagramme suivant, qui voit *e* ?

<div class="container">
<div class="col">

![sequence_visibility_problems](https://www.plantuml.com/plantuml/svg/NP0zRiCm38LtdOBmr0uUsj58ZVWdOyyGC3BX4f4bHwHJv0WzLozMEKvHrmj1lk-z9q1xKOmw3Gw4BXDvIySh2v_OiTwEOmmdHuCOERCVCU80eZT7QKQsSsn5QhJdFeR9Tqrm8O96z98GULtd7y-yamZsL3dkFTZaeRXoVQ3lFYEhaayz4vaaAriUqIjaHNNbu3D0WMf3QXIwWte36Xn-Cyq6jH7x1sh_8og-lpImMoeFnkGbL530y68gI7ipxw_6s4Yeb0mDv7bPmY7f16-mw8ktJXfstHCzpwuIshzxjylpUsyMpfdPa-_Ip_u0 "sequence_visibility_problems"){.plain}

</div>

<div class="col">

::: block {.socrative}
1. :Avion
1. :Base
1. :Camion
1. :Dragon
1. (tous)
:::

</div>
</div>

--

<!-- .slide: class="rdcuslide center" -->
## RDCU

Prendre les bonnes décisions pour une solution facile à comprendre et modulaire... {align=left}

![Swing et JeuDeDés](assets/cohesion_RDCU.png){width="65%" .plain}

--

<!-- .slide: class="rdcuslide center" -->
## Décalage des représentations

Facile? Les classes logicielles devraient ressembler à des classes conceptuelles (concepts du monde réel).

![Décalage des représentations](assets/Fig9.6-français.svg){.plain width="50%"}

Qui fait quoi? Qui a quelle responsabilité?

--

<!-- .slide: class="rdcuslide center" -->
# RDCU

Approche: conception orientée-responsabilités

## GRASP

**G**eneral **R**esponsability **A**ssignment **S**oftware **P**atterns

Pour décider où mettre les méthodes...

--

<!-- .slide: class="rdcuslide center" -->
## GRASP

- Contrôleur (séparation des couches){style="color:green"}
- Créateur{style="color:green"}
- Expert en information{style="color:green"}
- Faible couplage{style="color:green"}
- Forte cohésion[1]{style="color:green"}
- **Polymorphisme**
- **Fabrication pure**
- Indirection{style="color:gray"}
- Protection de variation{style="color:gray"}

[1] pas terminé faute de temps

--

<!-- .slide: class="rdcuslide center" -->
#### RDCU (Survol)

![Schéma pour la méthodologie avec RDCU](asset/../assets/FigA.1-avec-contrats.svg){.plain width=50%}

Note: expliquer encore le contexte de la RDCU

--

<!-- .slide: class="graspslide center" -->
# Forte Cohésion

--

<!-- .slide: class="graspslide center" -->
## Rappel: Cohésion
![](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Vrai ou Faux?

![couteau simple](assets/PocketKnifeSimple.png){.plain width=25% style="vertical-align:middle"} a plus de cohésion que ![couteau suisse](assets/SwissArmyKnifeLots.png){.plain width=30% style="vertical-align:middle"}

Note: Le couteau de poche de base est plus cohésif (moins de responsabilités). Le coûteau suisse a plus de fonctionnalités et il est plus difficile à maintenir, à comprendre. La métaphore ici n'est pas parfaite, car les couteaux ne sont pas combinés en application.

--

## Évaluer sur le plan de la cohésion

<!-- .slide: class="graspslide center" -->
1. ![RegistreCréePaiement](https://www.plantuml.com/plantuml/svg/NOyn3i8m34NtdCBg10CNO410Lv0GIEnMiAhGDWsEKuaZSGukXXE92hfu-E__RtiR1LbIty6P6XU5gURtYqxeg2SlHfnq10UQCDZC8NcOFB5rFY1Z3tkqRSD3yhTww0O6OVHHqRyhobCxjSpPlFc7NEYHo5iwKepOqAvpZSyhmEeWDkeIPrr0bQhrT5C566560wod2miFy_GrTnOqcjK6M0FbD_x65ajZcL18imng2SMI5KL56LN1-v3a9nMMPal-ffzz0000 "RegistreCréePaiement"){.plain style="vertical-align:top"}

2. ![VenteCréePaiement](https://www.plantuml.com/plantuml/svg/RT1B2i8m40RWVKunTAKBBz25LBjL40NtGpgKO9l6oRJWaJo75tFIKl6rp7m_yqWH1Ldwje4pUQ6I7tSweADMNqQSD0Gxd0niGkWzl0Bnudn0nXQsQ2yrTxslogxf68JHHwNFL9IRDep2pgQPRtAYQq_UqfvYn9esZQjz6W4sZMQZAN7M1THIbiEHQgTjA0ECyAFZkYCDtpIlFcemgpKmvDDbFDjYQHXKXdzYcL3_8fWXHS8OIHMbWdobLpq1 "VenteCréePaiement"){.plain style="vertical-align:top"}

Note: dans la solution 1, Registre a plus de responsabilités (créer et envoyer Paiement). Dans la solution 2, Vente a la responsabilité de créer le Paiement (donc il est moins cohésif que dans la solution 1), mais la responsabilité de créer appartient à qui selon votre intuition? Cohésion et couplage sont reliés -- Vente a moins de responsabilités dans 2 et donc moins de couplage (pas de lien avec Paiement)

--

<!-- .slide: class="graspslide center" -->
# Polymorphisme

- Définition du livre
- Exemples du livre
  - Calculateurs de taxe externes (`getTaxes()`)
  - Types de case Monopoly (`atterrirSur()`)
- [Exercice sur Google Docs](https://docs.google.com/document/d/11JqEF_dJ5v56LgdGMaUNCbVoxgmazWJGdqHTen-YG4A/edit?usp=sharing)
--

<!-- .slide: class="graspslide center" -->
# Polymorphisme $=$ réusinage

"[Replace conditional with polymorphism](https://www.refactoring.com/catalog/replaceConditionalWithPolymorphism.html)"

--

<!-- .slide: class="graspslide center" -->
# Fabrication Pure

- Définition du livre
- Exemples du livre
  - StockagePersistant (s'occupe des responsabilités pour stocker des objets)
  - "Cornet" entre Joueur et Dé (réutilisable dans d'autres jeux)

Note: le StockagePersistant marche pour les "flat files" aussi (JSON) sans utiliser une BD

--

<!-- .slide: class="graspslide center" -->
# Fabrication Pure

Exemple: Choix no. 2 dans GRASP Contrôleur *(contrôleur de session* ou de cas d'utilisation) est une Fabrication Pure.

--

<!-- .slide: class="graspslide center" -->
### Contrôleur surchargé de responsabilités

![DSS](assets/01-chp10-Diagrammes_de_sequence_systeme_9.pptx/dssEtCasUtilisation.png){style=border:none}{width=60%}

"Traiter vente" nécessite des opérations systèmes envoyées à Registre (équipement, GRASP Contrôleur)

--

<!-- .slide: class="graspslide center" -->
### Registre "explose" de responsabilités

Tous les cas d'utilisation qui se déroulent sur la caisse (Registre) $\rightarrow$ situation désespérée 😩

![CU](assets/larman/A6.3.svg){style=border:none}{width=50%}

--

<!-- .slide: class="graspslide center" -->
## Solution : Fabrication pure

![Fab_Pure_Controleurs](https://www.plantuml.com/plantuml/svg/hPJ1QXin48RlUeh1FjXPy1fwx2crmS67bk12BgK4UJNU5P6bhKPo6qgUf_MzRx0lrj6ksMoWJafJ7SIWqVmpqdpI9GNfGzmRMCdjxNNqUBjqDdXdC7eI4uEx0C61rsKLG6cFHT3E2hhJjfPUxe72lK6UlIwIpi2paCLTwLsqQkcCyn2yjCGkj44a7MbBZXp9WxHX19907c2ysoaUy5q0Zy988XXjiDIS04UdvJIqOXczqnmBRzlqjkoTUPxtzcpMcuLlZkW_k7X0O_261N1wqNj9QjB-dG-wCCFreTZ078Z9kC7WeZydrdbjS_nRrVUQyDh8mCg341b3rHqQ_SjAKpNX08y4--OOAgUGkfW7yI2i2yXjhKMMjUrkVgL-WqBOoUQ7L9XbGD4NbVHbSnHgukhcw6LgFG7TKy0zvc8-_wX3R5T1DKT2IhiGvtE-zQxT9HT0oIyuFzJSfKBNR76cB5ivpsKKhk9OtiCvCN15Awct9gt7siYIIn5e5QIIds1J--OdTTpKC5OgaNEE6zwqUVDAUfwvq47EAwHq7rRoKsa9wqgykXba_sz8ditS4NTAlNanzMi0Fbl3KbArjbq9o_LpDVmJxZt6hBzQjDXi-GywCPf-CcAWv04BU09vonwTg9ooNR20ciIWZQOs-YBBSX3B2Py5c3GkCPAsJ2ACy1jJNOJkk2Ee-LQ07ycNY82MS9-u_UDZUKHujO1SvGn4RsrwQxaM4_u4Pv_6bLQCw6VbljePyoqkEPv_rzy0 "Fab_Pure_Controleurs"){.plain}

--

<!-- .slide: class="graspslide center" -->
# Fabrication Pure $=$ réusinage

[Extract (methods) to Class](https://refactoring.com/catalog/extractClass.html)

--

<!-- .slide: class="graspslide center" -->
## Forces parfois opposées

1. Principe: Réduire l'écart des représentations  
2. Principe: Faible couplage et Forte cohésion

Fabrication Pure $\rightarrow$ `GestionnaireVentes`  
Représentation facile à comprendre? 🤔

Peut-on "équilibrer" ces forces?

Note: Fabrication Pure va à l'encontre du principe de réduire l'écart des représentations (une FP n'est pas traçable au "domaine")

--

<!-- .slide: class="graspslide center" -->
## Patterns GOF et Fabrication Pure

### Visitor, Moderator, Observer, etc.

- Abstractions (classes ou types interface) ayant un ensemble cohésif de responsabilités.
- Augmentent l'écart des représentations:
  - Solutions au problèmes de design (plutôt que du domaine).
  - Complexité circonstancielle.

### ⚠️

--

<!-- .slide: class="graspslide center" -->
# Résumé GRASP

- Forte cohésion (évaluation)
- Polymorphisme
- Fabrication Pure

---

<!-- .slide: class='feedbackslide center' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.
