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
title: 'LOG210-seance-07'
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

# LOG210 Analyse et conception de logiciels: Séance 07

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
  - Révision des RDCU labos
- GRASP Indirection F22.3/A25.3
- GRASP Protection des variations F22.4/A25.4
- Révision GoF Observer (diapos de LOG121)

---

<!-- .slide: class="equipeslide center" -->
# Travail en équipe

## Développement de logiciels

--

<!-- .slide: class="equipeslide center" -->

## Travail d'équipe

- Quels sont les problèmes HRC rencontrés par votre équipe?
- Quelles solutions avez-vous apportées?

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
# Rétroaction<br>mini-test

--

<!-- .slide: class="retroquizslide center" -->
# Questions difficiles 😕

Selon les statistiques de la première tentative.

--

<!-- .slide: class="graspslide center" -->

# Contrôleur GRASP

Variants

1. Contrôleur de façade
1. Contrôleur de session (ou de cas d'utilisation)

(revoir notes de cours)

--

## Contrôleur de façade vs<br>Contrôleur de session

![GRASP Contrôleur (deux options)](https://www.plantuml.com/plantuml/svg/VPFFRjim3CRlUWeYbpX6uzo38cZJ8i4EMue6o5sns4ohBBcaDAmOzZnRxdi3lzXeE_-0PVD5W3xo8_aJVSTHKqoLKz56Xx1ylby_mKFmaPhV3XD1PZ1zWr176poF5BzQNslI5N1ybmIEPClEuApCTVcwev2yUGWk44JIdaL27vKgdMQ6mJFkhEJY0BuhaCyQKUsBrJx2j7FrkqueYg8xn-FkAAdP8tqAwIiwXnj9mcpKAQmjMxgdQ4jtl3ic7uxC37MIeWnLiu-VWq6Pw8Vo8IB4KAiylvpS8BpevgSscESg8wobDBS5ePtxdMFpgqBOkR3LxWPKyd1x6xPVC0BfqdgSpMv0BflzMx8rLf89AgJsYaFYyT5Xf3u87IlcO19yV7nKw0sqFQb-uXxO4hbz0gyjzMFp03J3SdC0UC7e_vp-nUgIru69-2_cVrDXP9PMX4gUotf0AN5ccA9rbdNRv2ZF2r0PbytUQx81hWKf8riXADyIEd33K3TxweGJMyK8DGMJR1ofoQJVpONUoiRrWK-9S38vypeslLhB5AkJ8PyTJw6hDHIkcC5n3wVJAyIwA9AevUQwlfX3OGgHrPquor_m1m00 "GRASP Contrôleur (deux options)"){.plain}

---

<!-- .slide: class="rdcuslide center" -->
# Retour exercice RDCU

Google Classrooms

Personne n'a remis de quoi,  
alors inspectons 🧐 des RDCU des labo!

--

#### Équipe jaune
<!-- .slide: class="rdcuslide center" -->
![RDCU pour addCourse](https://www.plantuml.com/plantuml/svg/bPJFRjim3CRlUWgkbpX0dTo39cYJRKKFlSphJhaeCkDgbMM3aeRsZRRxtY0lDbfM_dWDXYL073lYz-D7YlAjyv9yg8rmBzgsacGDIwbUAcg2BLUDQGWyIUju2Qq_YNB-pI1VIQk_z2LkPJ1-srXlPOtm3QcKLWwqqkCZEYShl3EwiZMp0KXNpru8hpsJltnSFK7R109Pif503eLWkTTAjvB3hsP59LUSX1fZaAv0Ed2L7CQeA9pr-XYYXW6ksXH8FxH2nkrl4sjpZkKUPJjRMxxU55oyhQuZVD73ww4aEAJPaqlkWX3vWYt2x5XJrbCVoh6mZSU-1npWq3GMOdcxtmO3hMqsg1VG-RKresRp7JsGLDhYM3IjXqW4VDMEUTnv1zpEuluE00H_uIRFUnDf1mZA4H9n3e76OTBRKIAqx3nI617rdJXVTFrXHZSeRL-AWpbKwDF3PshgudwPZQFcJ6sVNbiaFoHshhRzv7MG3dZ2dsoryKZPsXx_dKIt3oNCvt1i9UnhxVgXjmFcXpdOO4nSLeGyYJmJa3xH2LjHR4Hn-ZuWEz6F3x7dzejslpZ-_MwjxNGgAzhzh70wJKR7mwpxZZeVIZuEgPj5Ubg-hL9rcPheyfykJZfxGbTn_G3Czdd-ho38-lp3Geft34wMBmBhkz7ljgKhuYdUPnUQpXV9ybUKwZaIUkZbd9gNs-0FX-qQr2KGFZ5fE7j0N41RTkCbzh_Ybk_uJVW7 "RDCU pour addCourse"){.plain width=90%}

Note: 1) SgaContrôleur n'est pas un objet racine. Ce n'est pas non plus un GestionnaireCourse. Conséquence: SgaController n'est pas très cohésif. Ça contient beaucoup de méthodes 2) Appliquer Contrôleur de session, une classe par CU. 3) Créateur est mal appliqué? Qui est le meilleur créateur de Course?

--

<!-- .slide: class="rdcuslide center" -->
# Diagramme de classe

Généré avec [tplant](https://github.com/bafolts/tplant)  

```bash
tplant -i src/App.ts -o src/App.plantuml
```

--

<!-- .slide: class="rdcuslide center" -->
### Diagramme de classes logicielles

Généré avec [tplant](https://github.com/bafolts/tplant)

![classdiagram](https://www.plantuml.com/plantuml/svg/lLVDRjiu4BxdAGZai0fYlu3T3PeuSJUBrfl0tbDH2BH4AqGaqIMf94QGT-z8_359KOuB1EqXjMOumu_3-MQ6duN4N3PLUI8UQRt575T8o5r9u2-dMQ2vmjbZmLbJvpDMCeuanxK05QdbILPY8T3_Wd3qUeBWtvZc4rGtrPfmzItP8waddUEwKA9qGxcG2roHG0xEOc9IOLfwilE2oDiyEVEsQeMhThTM7YoUcnqZkgzuK7NJxkp8t_I1R-idNDByheqFaOJVS0w18I-IrBb0wal78yrOJdoSdiIuN1Rh9U5FD2FMie6mJhhWAZj1PFkHxEM0x8dHNAatH6OFCzPmGSIA_RlyRz4Yl-Eiee9ymlNkmbctb4qE5oYkTie2efdf7mPQrBZG6CuqC0jV-RFOmpHGTvxMyKkFoVktFawtX5UuXdrqL8z9YG-wUYE_Cn1cWC1B3Ro6dpYJI4NalY52KbRha9ocShVr8P_sZtsQ_jHcAyYcG9KnpaacvuJaQ-1aeANrORt4XJ2Yxp_iUNfyQuNtGo1QvUp0Djqj70JIiJG2HIWeYHiIBxs53olvwO8BLmOOawpzDRIu1pYXXvQtw1C_cjwILvC8R-Y9SBhPNTRY6IY3k_yShswYEaOG86qHP9-pHjWrFQ_0LSjAnUrXKWfQb27lwdLQuPTKA4871cqVs8OMaaeUod8iIPgJTIDZYWqDMu8aE7iW_BQ7KDUfYQamEb_6bYYW-eQtdvItaQNTHR3iAnK0nMWT0aIBnh8DJ8Jzg_Qe4VardEgwFUs0RavZNMcn_ePVJ2MEeFZIHJi6mqGhD1AkZhgbV9-VxV6SFVsujXwiDXByqDFzCRVWBHoy22DAp9Kj_59WzBroO0tsQpoOEIcXIR_dVirOIR3o_jUvj0tq5UtZE4KUOwR8I_qfyhaZzcO-RwQeJmyjSvW1c_NZFqL32Jr5R_jk_C2uBX2s3Pdf9EXBuzIl8FOwuZNeGE7P1_oeicUmhdX3vhWKv7YaxbNzIQZB0lz3ogqTTizVOP2MD7j36mPJWUpAhPwZka8CBbG9ZYxNbvhOKgiij3WmoJY1_53UZjb2hOzGHDduPB9MpJPth2ub109ob8W8nKQe9i_T12nwJat0Baj0aUzkNY1NnGSCoGicv-r3v4FcRJnZjUIiBFUFbs3YXepBSvBhcLfLEELcf8DkkenO5tfwdpYJVFzPafoXlo-yB2rP0Rq1t0ldThmIgxUVmoo-_7BbplHAy_s7hh80rikFw2ZlujQLSTZ8R13uxsKLj3WSpwoMdKuCavvJUy1h8c7Y5iCmWlMseSGi8kr5zyMzsJ0KUxxGymWTrPkwno7mwBAH3ueXYVUQ6Q4jfE0puz4PS-mqwEEUPxOxw7HSDxGqgR1H3tUTmUR00manfa9zTeoDRUcLNZTzVZzcdgkAvL27ttN5ohpJEdMdgqEXyBqy12Qtzpz4w6v6ifJkfgGzgTzEFaFPQQho5m00 "classdiagram"){.plain}

--

<!-- .slide: class="rdcuslide center" -->
#### Équipe bleu

![RDCU](http://www.plantuml.com/plantuml/svg/ZLFDJeD04BxlKqouI9DMxwIIQckywCMgfruMcBQhoq1sXyI-bs_WYpbiiHPI6pa0E_Fzp3U4cMVjk2cjyk-6Qkrq2Pvt5kNkJ3xe5BZMZULrHKowH7X5LsZIYWqBusanVu6wQXmuPEFGGKEGozd3ylu6aXLDixHhpTloz2fBbIYpoKsjYI5AvYBjAelD7X61zf2pi-4qmDuk5g6V5KM_KrO5MlG9FEfwkfGSj1c7TshA3DqODEtID70xQ9_FEhCO76Nkv8ZOyW8j8AIfr2GzZ0S9MEDvpuHhE8uQco8yHuegHd1cisN1UxGLGGZzzTccNb4yM06WvnNPYofxGmQdSqCuKkhNTPAs6n2ntjZYlq5-Rajnb7V5wAJztKUDZfLgLKIiMybfmVzgQSjz-kLM7oq1vEeb-5ce2BNkZ7titqv81OZPO25dladU20_Tmw4ghl6vB3EnaD_W6m00){.plain}

Note: 1) ContrôleurCours N'est pas un objet racine! 2) C'est mieux que SGAControleur, car son thème est plus concentré (cours). `GestionnaireX` suit la théorie du cours. 3) BDD ne respecte pas le principe de réduire le décalage des représentations. BDD n'a pas d'encapsulation (elle contient tout!). À la limite, c'est une Fabrication Pure pour la persistance (voir StockagePersistant). Ça ne suit pas la méthodologie du livre, donc points perdus à l'examen. Ce n'est pas OO cette solution. Université est l'expert des cours selon le MDD.

--

<!-- .slide: class="rdcuslide center" -->
### Diagramme de classes logicielles

![App](https://www.plantuml.com/plantuml/svg/tLZTRzis47_FNo5WBmvg5ttPYn5uTUmu2D06IPFjPHWAHhgvN2HI9IatHf3_VKUAb4YA2hAbc8iLg2FU5-_ZTpnAxwKYGZLLUIJlAQk985KcrRu4_1KqZpYd9B_V2jwmOiLBBZ8b29F80gQEyf98cLsm7IbfSQN5GO4u4mBbu441AsJMhXwFClmt-vpp0kOPQwex48Rq9g0y7P4xT8BaAcjjdp555PokrzR2JuzEu2cJe2wA2IsSzl4yst5Qj6OzkIqm421GzZZSMf9c1riY2X0JngjRSbUYApe9R3lDQF7BF2Di7vh5t2cQFsK2yYyWzF-4Ab7uSDUede8PWaOibSv90yuk_lx-1mPjOrLDGGbJBbawibQ_NVz9XLINcEEGZBe9AbI4bY6f1b4HXdLRcPHxh3TRK9kaTStvG4OO5yM0T3ROLbElaZkxk5Uy4RB7IrJnML_WTYtfjeo2HGqHaJHawn1givpK94VZ8RKW2jRWLQidRoYBicfB9ETTjR20riqp9e5k6T92cDbCHQIRGHYQUZk8H5FFXy6OP8zwexdhP5oE4uUcwQikFuD2ZyL6_kADRdcx_SGbgFSeQ9z8N4wI2GrKdkto5xLsgf5dNIElU5KhxCrGlsDVHiqzVWpykwQ_0R6ZELYm6mZmHfgMk3a_dIX-3rsXKFbAy8fAE3565aCah9kqgZxE3CTBOsJBUUIrNeNjMWBgV2JroOqrf9zR6rCTos9XZtQ_0POuHQ0CK_fQlawDhiJWl3sU3too5XbL6CqLnjsR7gIqHzEE8bnGOP962cNun7BS5sKY7EWciMojhGLSFY-vskZn-Qgns9fQbW98iJzxe5B9xs1lnPaIN8EqFOCVWourj14O8S0II38ictpi33opi3a_eBFGeR9hW76XvK18KU7S6S8uPMvCrgpxWTk1OcpMl7Ravkt-6fukWJP7peTV6Ts1a7ZgEX-WyohIxDrT3APH86V9UXF0QBBh1gIYdDtkQxVBRuBG3MaUEZ-SpCldCBPXD8N9LZgAcufVhTb8KczooXc3Jr1p32l1_eWdE45GfINsUXpwSRLquOGH5Cxh00ClcjM3OVBy258u8xIAFo1aI_Lo52lTOhPwBOTWQHbXBcDT5tXYruuLPtwmVro3XB6Xp6ZbakQZ6exj48izL__1FbXxRNU01MDTCuTOYMruxZdSQ6r7za4Lgrwqy4eYPkmGYWnueobbnMEdOFi_kmxr4waxaCAXrE7RQwrfrjQuMmNDCytYLa29CHXRrWZuffcFXS6TIXEI5N9EzwzKUjmvgiGtvvVKsSbxT_o4dJ7KUThTtVDy-SaarULOcDKyQwajhUa6rDmRLkvI4TmVvl658fQwxWenhBDzRTFtNxnmRF16iUBydi8aDt-y_lUHL_8jPTYXNz5fC7K-CTyXv9hcsYeH-sbRA_E3cubzUv5zYt8IYckvq5MLMb-QskhxCD8Ouc2UNUBlfc76Lj0mdzkTxSmtnclCwJSk2hly_au5lVw5Lt20m7N64Hs7s3cublvd-xkxhVPZaRYG7Y0H8rVh7yMJvK4zMOF2bfI7ByuLsVP7ym_cZZTi3jb8yKm_n3aE-iLPVvVy-TsxYLduvxTzUlOarfyPkay6tQjwNRkf2WyrMf18cMVs-IqkIfgJVl1Lj2XA-4O4X5yV_k50d9aHBZrttklRLbN-3G00 "App"){.plain}

---

<!-- .slide: class="rdcuslide center" id='rdcu' -->
# RDCU
## Réalisation d'un cas d'utilisation

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
- Forte cohésion{style="color:green"}
- Polymorphisme{style="color:green"}
- Fabrication pure{style="color:green"}
- **Indirection**
- **Protection de variation**

--

<!-- .slide: class="rdcuslide center" -->
#### RDCU (Survol)

![Schéma pour la méthodologie avec RDCU](assets/FigA.1-avec-contrats.svg){.plain width=50%}

Note: expliquer encore le contexte de la RDCU

--

<!-- .slide: class='graspslide center' -->
# Indirection

Définition du livre (notes de cours)  
Exemples:
- AdaptateurCalculateurTaxes
- StockagePersistant (appliqué à la solution "BDD" ÉquipeBleu)

--

<!-- .slide: class='graspslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN  
Qu'est-ce qui est faux dans le problème de design des calculateurs de taxes?
::: block {.socrative}
1. On ne peut changer l'API des calculateurs de taxes.
2. On ne veut pas que le "core" de NextGenPOS soit couplé aux API différentes des calculateurs.
3. Pour intégrer un nouveau calculateur de taxes, on n'à qu'à écrire son adaptateur.
4. Chaque adaptateur a une API différente pour fonctionner avec son calculateur externe.
5. Aucune de ces réponses.
:::

Note: 4 est la bonne réponse - les adaptateurs ont tous la même API, p. ex., une méthode polymorphe `getTaxes()`

--

<!-- .slide: class='graspslide center' -->
# Indirection

D'autres exemples:
- Contrôleur de cas d'utilisation (de session) est une indirection qui 
  - «&nbsp;découple les objets pour maintenir le potentiel de réutilisation.&nbsp;»
  - une application du patron GoF «&nbsp;Façade&nbsp;»

https://log210-cfuhrman.github.io/log210-valider-architecture-couches/#/0/2

--

<!-- .slide: class='graspslide center' -->
# Protection des variations

Définition du livre (notes de cours)  
Exemples:
- Problème du calculateur de taxes
  - Solution: Adaptateur avec `getTaxes` polymorphe

--

<!-- .slide: class='graspslide center' -->
## D'autres exemples de PV

- Conceptions pilotées par les données
  - `tsconfig.json` permet de configurer le générateur de Javascript selon beaucoup de variations
- Une machine virtuelle (JVM)
  - programme en "bytecode" qui peut exécuter sur plusieurs plateformes (qui varient)
- Langages standard:
  - Requêtes SQL qui fonctionnent sur plusieurs BD

--

# ⚠️ PV spéculatif

Deux types de points de changement:

- **Points de variations**: spécifiés **explicitement** dans les besoins (cahier des charges)
- **Points d'évolution**: points de variation «&nbsp;spéculatifs&nbsp;» **absents des besoins existants**

Principe YAGNI: «&nbsp;**Y**ou **A**in't **G**onna **N**eed **I**t&nbsp;»  
Il vaut mieux ne pas spéculer.

---

<!-- .slide: class='gofslide center' -->
# Révision Observateur

[Diapos LOG121](https://fuhrmanator.github.io/oodp-horstmann/htm/Ch5/Ch5_fr.html#:~:text=Contr%C3%B4leur-,Patron%20Observateur,qui%20leur%20int%C3%A9resse,-Un)

--

#### Observateur Fig.A26.22/F23.22 et Indirection

«&nbsp;Comment affecter les responsabilités pour éviter le couplage direct?&nbsp;»

![Observer](assets/larman/A26.22.svg){.plain width=55%}

Note: Séparation des couches, Sale devrait être découplée de SaleFrame1 puisque cette dernière n'est pas stable.

--

#### Observateur Fig.A26.22/F23.22 et PV

::: block {style="font-size:0.8em"}
«&nbsp;Comment affecter les responsabilités aux objets, sous-systèmes et systèmes de sorte que
les variations ou l'instabilité de ces éléments n'aient pas d'impact négatif sur les autres?&nbsp;»
:::

![Observer](assets/larman/A26.22.svg){.plain width=50%}

Note: Ce sont les classes de la GUI qui sont instables et on veut protéger les classes du domaine des changements. C'est l'interface Observable qui est le point de stabilité, avec appels polymorphes.

---

<!-- .slide: class='feedbackslide center' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.
