---

history: true
progress: true
controls: true
controlsTutorial: true
controlsBackArrows: faded
center: true
theme : beige
transition: none
transitionSpeed: fast
highlightTheme: monokai
logoImg: assets/logo_ets.svg
slideNumber: true
title: 'LOG210-seance-01'
margin: 0
minScale: 1
maxScale: 1
viewDistance: 3
display: block
navigationMode: 'linear'
notesSeparator: "Note:"
customTheme : "slide_themes"


---

# LOG210 Analyse et conception de logiciels: Séance 01

--

# Bienvenue dans LOG210!

---

<!-- https://dev.to/berry_clione/set-up-to-convert-a-markdown-file-to-revealjs-slides-by-pandoc-58n5 -->
<!-- .slide: id="presentationequipe" class="equipeslide"  -->
# Survol

1. **Présentation de l'équipe** {style=color:red}
2. Présentation personnelle
3. Présentations des étudiant.e.s
4. Faire un logiciel pour un domaine que vous ne connaissez pas
5. Outils de travail
6. Introduction à l'analyse et conception de logiciels

--

<!-- .slide:  class="equipeslide"  -->

## Équipe

- Professeur responsable du cour

![Christopher](assets/cfuhrman_2019.png){width=30% .plain}  
Prof. Christopher Fuhrman, PhD P.Eng

--

<!-- .slide: class="equipeslide"  -->
## Équipe

Chargé de cours

![Yvan](assets/01-chp0-intro_09.pptx/image2.png){width=25% .plain}  
Yvan Ross, M.ing

--

<!-- .slide: class="equipeslide"  -->
## Chargés de laboratoire
:::block {style=font-size:0.8em}
- LOG210 01 Mar 13:30 - 16:30 Labo à Distance A-3326
  - Valere Kamdoum-fami
  - Ruben Tordjman

- LOG210 02 Lun 08:30 - 11:30 Labo Présentiel A-3450
	- Anhe-pascal Anhe
	- Valere Kamdoum-fami

- LOG210 03 Ven 13:30 - 16:30 Labo Présentiel A-3322
	- Valere Kamdoum-fami
	- Élaine Soucy

--

### Communication
- Discord pour communiquer avec vos CL à propos des questions de laboratoire
- Courriel pour communiquer avec votre enseignant à propos des questions administratives (communication officielle)

--

### Object de la communication

- **objet précis**, ex. 
  **`LOG210-01: question sur le modèle du domaine`**
- Éviter d'utiliser l'objet par défaut de SIGNETS!
- Rencontres organisées de façon proactive selon mes disponibilités.


---

<!-- .slide: id="presentationequipe" class="equipeslide"  -->
# Survol

1. Présentation de l'équipe
2. **Présentation personnelle**{style=color:red}
3. Présentations des étudiant.e.s
4. Faire un logiciel pour un domaine que vous ne connaissez pas
5. Outils de travail
6. Introduction à l'analyse et conception de logiciels

--

<!-- .slide: class="equipeslide"  -->
# Yvan Ross

--

<!-- .slide: data-background-image="assets/LogosFuhrman.png" data-background-size="100%" data-background-opacity="0.1" -->
## Présentation personnelle

- Chargé de cours depuis 2013 
  - LOG121 - Conception orientée objet
  - LOG210 - Analyse et conception de logiciels
  - LOG430 - Architecture logicielle
  - MGL802 - Principes et applications de la conception de logiciels
  - MGL844 - Architecture logicielle
- [Expérience industrielle](https://www.linkedin.com/in/yvanross/?locale=fr_FR)

--

## Expérience industrielle ...
Capteur et gateway d'analyse et de traitement de signaux électrique

![Capteur signal](assets/01-chp0-intro_09.pptx/image5.png){width=90%}{style=border:none}

--

## Expérience industrielle ...
Imagerie médicale 3D

![Reconstruction genou 3D](assets/01-chp0-intro_09.pptx/image8.png){width=45%}{style=border:none}
![Segmentation genou](assets/01-chp0-intro_09.pptx/image9.png){width=45%}{style=border:none}

--

## Expérience industrielle ...
Imagerie des matériaux

![Clemex segmented image](assets/01-chp0-intro_09.pptx/image12.png){width=50%}{style=border:none}
![Clemex diamant mesure dureté](assets/01-chp0-intro_09.pptx/image13.png){width=40%}{style=border:none}

--

## Expérience industrielle ...
- Système d'inspection automatisé de caisse par vision
- Système d'inspection de bouteille par vision
- R&D développement de nouveau produits
- Dépôt de 7 brevets
  - Patent # US6040553, method of manufacturing air conveyor panels by laser ablation drilling
  - Patent # CA002180568A Fluid jet detecting device

--

## Expérience industrielle 
![Rouleaux de convoyeurs](assets/01-chp0-intro_09.pptx/image6.png){style=border:none}
https://www.sidel.com/en/conveying/packs-and-cases-conveyors/magneroll-roller-conveyor-pd-400

--

<!-- .slide: data-background-image="assets/LogosFuhrman.png" data-background-size="100%" data-background-opacity="0.1" -->

## Présentation personnelle
:::block {style=font-size:0.8em}
- Diplômes universitaires
  - 1990 Baccalauréat en Génie de la production automatisée
  - 1994 Maitrise en technologie des systèmes
    - Segmentation d'image radiologique par morphologie mathématique


![Radiographie numérique](assets/01-chp0-intro_09.pptx/image10.png){width=30%}{style=border:none}


:::

---

<!-- .slide: id="presentationequipe" class="equipeslide"  -->
# Survol

1. Présentation de l'équipe
2. Présentation personnelle
3. **Présentations des étudiant.e.s**{style=color:red}
4. Faire un logiciel pour un domaine que vous ne connaissez pas
5. Outils de travail
6. Introduction à l'analyse et conception de logiciels

--

<!-- .slide: id='pre_etudiants' class="equipeslide"  -->
## Présentations des étudiant.e.s

Questionnaire à tiny.cc/quizdesign

Nom de la salle de class: **ETSLOGYVAN**

![Socrative login](assets/SocrativeLoginAnimated.gif){style="width:200px" .plain}

Quiz: Présentation des étudiants

Note:
 https://b.socrative.com/teacher/

--

<!-- .slide: class="equipeslide"  -->
## Présentations des étudiant.e.s

- Comment développer un logiciel?
  - Quelle(s) méthode(s) de développement avez-vous suivie(s)?
  - Pour quel genre de logiciel?
- Quelles sont vos attentes pour LOG210?

--

<!-- .slide: class="equipeslide"  -->
## Présentations des étudiant.e.s
- Veuillez vous présenter sur Discord dans votre équipe. 
  - Votre nom, votre programme d'étude collégiale, votre programme d'étude universitaire, vos stages (entreprise, domaine, projet), pourquoi vous êtes en génie logiciel.
![Engrenages](assets/01-chp0-intro_09.pptx/image14.jpeg){width=35%}{.plain}

--

<!-- .slide: class="equipeslide"  -->
## Meilleures pratiques pour apprendre

Quelles sont les meilleures pratiques pour apprendre?

![Meuilleures pratiques](assets/01-chp0-intro_09.pptx/image15.jpeg){width=30%}{.plain}
![Meuilleur pratique pour réussir 2 personnes](assets/01-chp0-intro_09.pptx/image16.jpeg){width=30%}{.plain}
![note A plus](assets/01-chp0-intro_09.pptx/image17.jpeg){width=30%}{.plain}

--

<!-- .slide: class="equipeslide"  -->
## Mes conseils pour réussir

- L'étudiant.e qui réussit dans mes cours…
    - <s>s'assied vers l'avant de la salle,</s>
    - est motivé pour apprendre et pour participer, 
    - est bien discipliné, 
    - est organisé, 
    - cherche de l'aide d'une façon proactive,
    - sais que le **multitâche** nuit à la qualité.

--

<!-- .slide: class="equipeslide"  -->
## proactif

1. **Domaine**: psychologie
1. **Auteur**: Office québécois de la langue française, 2002  
1. **Définition**: Qui exerce un effet sur des faits ou des processus **à venir**

> Exemple: Pompiers qui visitent les maisons pour vérifier les détecteurs de fumée{align=left}

--

<!-- .slide: class="equipeslide"  -->
## Ingénieur logiciel, le meilleur métier au monde ?

**Revers de la médaille**: certains reprochent à leur métier la nécessité  de se mettre régulièrement au niveau. Ils trouvent difficile de suivre les évolutions avec les langages et les nouvelles pratiques qui ne cessent d'apparaître ou de se modifier
🧑👩💻👨‍🏫
{.fragment .shade-up} 

Note: 1 animation

--

<!-- .slide: class="equipeslide"  -->
## Ingénieur logiciel, le meilleur métier au monde ?

**Autre inconvénient**: la solitude, notamment  pour les développeurs  qui préfèrent travailler depuis chez eux. Un choix qui leur offre un emploi du temps flexible, mais qui les mène à passer de longues heures sans interagir avec le moindre collègue.{.fragment .shade-up}

::: block {style=font-size:14px}
http://www.developpez.com/actu/26910/Ingenieur-logiciel-le-meilleur-metier-au-monde-Oui-selon-une-etude-signee-CareerCast-com/
:::

Note:
Travail en équipe aide! Beaucoup d'interaction.

---

<!-- .slide: id="inconnu" class="equipeslide"  -->
# Survol

1. Présentation de l'équipe
2. Présentation personnelle
3. Présentations des étudiant.e.s
4. **Faire un logiciel pour un domaine que vous ne connaissez pas**{style=color:red}
5. Outils de travail
6. Introduction à l'analyse et conception de logiciels

--

### Faire un logiciel pour un domaine que vous ne connaissez pas

Application Web permettant de planifier les formations (faites par des spécialistes en TI) des enseignants dans les écoles québécoises.

Comment procéder?
  - Appliquer un processus pour la réalisation{.fragment .shade-up} 
    - Appliquer une méthodologie d'analyse{.fragment .shade-up} 
    - Appliquer une méthodologie de conception{.fragment .shade-up} 
    - Existe t'il des méthodologies pour l'implémentation ? {.fragment .shade-up} 
  

Note:
Il faut connaître **comprendre** le domaine, le **modéliser** (pour pouvoir automatiser les processus), faire du code simple. 


---

<!-- .slide: id="outils" class="toolslide" -->
# Survol

1. Présentation de l'équipe
2. Présentation personnelle
3. Présentations des étudiant.e.s
4. Faire un logiciel pour un domaine que vous ne connaissez pas
5. **Outils de travail**{style=color:red}
6. Introduction à l'analyse et conception de logiciels

--

<!-- .slide: class="toolslide" -->
# Outils de travail
- [Plan de cours](https://planets.etsmtl.ca/public/Versionpdf.aspx?sigle=LOG210)
- Moodle pour quiz chaque semaine
- Examen final - enaquiz
- Accès ETSMTL.NET (Google)
  - Google Disque pour le contenu
  - <s>Google Classrooms (exercices)</s>
- Socrative
- Discord (invitation dans moodle)
- GitHub Classrooms (labs, invitation)

--

<!-- .slide: class="toolslide" -->
##  Outils de travail...
- Visual Studio Code et extensions
  - plantuml
  - Markdown all in One
  - Markdown PDF
  - [Live Share](https://visualstudio.microsoft.com/services/live-share/)
- [GitInspector](https://www.npmjs.com/package/gitinspector)
- etc.

--

<!-- .slide: class="toolslide" -->
# Notes de cours

Il existe des [notes de cours](https://tinyurl.com/log210ndc) depuis janvier 2020.

## tinyurl.com/log210ndc

> Les notes de cours ne remplacent pas le livre obligatoire!

--

<!-- .slide: class="toolslide" -->
# Livre obligatoire

![Applying UML and patterns](http://www-fp.pearsonhighered.com/bigcovers/0131489062.jpg){width=25%}{.plain}
![Uml2 et les design patterns](assets/01-chp0-intro_09.pptx/image18.jpeg){width=20%}{.plain}

- Version anglaise sur la [BANQ](http://res.banq.qc.ca/login?url=https://www.oreilly.com/library/view/temporary-access/)

---

<!-- .slide: id="introaoo" class="toolslide" -->
# Survol

1. Présentation de l'équipe
2. Présentation personnelle
3. Présentations des étudiant.e.s
4. Faire un logiciel pour un domaine que vous ne connaissez pas
5. Outils de travail
6. **Introduction à l'analyse et conception de logiciels**{style=color:red}

---

# ⚠️LOG210 n'est pas un cours...

- ~~pour apprendre à programmer.~~
- ~~de technologies web.~~
- ~~de bases de données.~~
- ~~de conception d'interfaces humain-machine.~~
- ~~de gestion des exigences.~~

--

# Chapitre 1 des notes de cours

- Analyse vs Conception
- Complexité
- Méthodologie de développement
- Processus unifié

--


# Spectre de la Conception

Figure 6.1 des [notes de cours.](https://tinyurl.com/log210ndc)

--

<!-- .slide: data-background-image="https://www.plantuml.com/plantuml/svg/VLJRRjf047stb7yOvIK95LNIlbK81KWlQQEgAg5zW3oiTmTxvVMkjHTHyaTHFw5loOzrriR4X0Z9CjAPCsTcpW4kdMVMXr8bhf2wOfQLuFnQ8RsjvB5or2cbZ1UPDK4BRfInu2tJZage_L5o0ZwN3kXXa3CjLbPwZngMHdkG6dvBBSpA4V5PKE2I1UKZHRCIuPkLBlPStqw8TvkZGp0-H-j06LD0Pf7LOjDVd-6qP0Kj6YpIP5oVqAVKT91IA6YgXT7D3Soc7tzEE-FXuloiUzBB3HpBuaiVtlDQ5_3L1AkPEiZxKt01KsvbvG_oVY1PPLrtiQw5tWPC76UKoyNRTnqILyoviR42xQHE99T2eDvZR7Cxn1fPQrOD8LNKaH0jVX7Gel7h2bq3O5dvDPHOfhHnKdV2yS39U_pm_dnuTmpCmOfHrvAIQEkFVs72w0Bghs9WZ_zgtdTUjOnUxqslLuEf24iO34fQKk5ms1B6o08teIBp5feRpR7oqkY5PW74qqCQ_4AVZgzcdyuQwIYpB_wwzan3XII3z3YPlH2T6eheMVXLNPP9IcTVUHJnfe-rsDLcnjD3YJQZ7yz65_VSdDULdCAGEkju-QL1W9jLQjPRD_CasJeFVOLBFq-D4dVzsjEaDdO7ZkWUM9-ID0Vj5DezEaC6_J0NpEKOwp7D9ho-wA1fEsMN7D6DQpjqWLkuIsV9PlmBUfvSeXRqH_KV" data-background-size="80%" data-background-opacity="1" -->

---

### Survol des modèles
![survol](assets/Fig6.1.svg){.plain}

Note:
Indiquer ANALYSE / CONCEPTION / etc.

--

# Analyse vs Conception

C'est de la modélisation!
<!-- .slide: id='coo' -->

--

<!-- .slide: id='coo' -->
## Lectures à faire

Le chapitre 1 des notes de cours et les chapitres correspondants du livre de Larman.

- [Plan des séances](https://docs.google.com/document/d/1Q2ggxHZaDxVKG11zxcJdKd0sTiuasi_aWEtZZsSnt94/edit?usp=sharing)
- Quiz avant chaque séance

---

<!-- .slide: class="equipeslide"  -->

## Développement de logiciel en équipe
![image](assets/TeamGeek.pptx/image3.png){width=35%}{.plain}

--

<!-- .slide: class="equipeslide"  -->
## Développement de logiciel en équipe

Pratiquement tout conflit social est dû à un manque d'humilité, de respect ou de confiance.

![image](assets/TeamGeek.pptx/hrc.png){width=40%}{.plain}

:::block {style=font-size:0.5em}
référence: «Team Geek» Brian W. Fitzpatrick (Google), Ben Collins-Sussman (Subversion, Google)
:::

--

<!-- .slide: class="equipeslide"  -->

## Respect

Avez-vous un exemple d'un manque de respect:

- envers un coéquipier
- envers les élèves de la classe{.fragment .shade-up}
- d'un étudiant envers un professeur ou un chargé de laboratoire{.fragment .shade-up}
- d'un professeur/chargé de laboratoire envers un étudiant{.fragment .shade-up}

Note:  3 animations

--

<!-- .slide: class="equipeslide"  -->
## Confiance

Donnez-moi un exemple d'une:

- action qui donne confiance à mes coéquipiers
- action qui diminue la confiance envers mes coéquipiers{.fragment .shade-up}

Note: 1 animation

--

<!-- .slide: class="equipeslide"  -->
## Humilité

Trouvez-moi un exemple où:

- un étudiant ou un professeur fait preuve d'humilité
- un étudiant ou un professeur ne fait pas preuve d'humilité{.fragment .shade-up}

--

<!-- .slide: class="equipeslide"  -->

#### Pourquoi l'enseignant décide les membres de l'équipe? (1/2)

- Pour apprendre les compétences non-techniques
  - Demandées par les employeurs
  - Qui sont +stables que les compétences techniques (p.ex. Flash)
- On ne choisit pas (facilement) son équipe en entreprise
- Connaître des collègues différents pendant le bacc élargit son réseau de contacts
- Impact positif pour la carrière

::: block {style=font-size:0.5em}
Mark Granovetter, «The Strength  of Weak Ties » , Academic Press, 1977. 
:::

--

<!-- .slide: class="equipeslide"  -->

#### Pourquoi l'enseignant décide les membres de l'équipe? (2/2)

- Favorise le « coaching » car il y a de la diversité
- Un coéquipier moins fort dans un aspect du projet peut bénéficier du coaching d'un membre plus fort
- Le « coach » peut bénéficier également de ce qu'on appelle « deep learning »
- L'équipe est finalement plus cohésive et plus performante

--


<!-- .slide: class="equipeslide"  -->

### Éviter les comportements dysfonctionnels

- Chacun fait "sa part" sans se soucier de la santé de l'équipe et de la qualité globale du projet
  - L'équipe > moi (appliquer l'humilité)
  - Rester flexible pour les tâches, s'adapter
  - Proactivité envers problèmes dans l'équipe:
    - Exiger la présence des coéquipiers
    - Demander de l'aide (technologies)
    - S'impliquer!

Note: l'absence de preuves de proactivité vous donne tord généralement s'il y a un conflit majeur

--

<!-- .slide: class="equipeslide"  -->

### Éviter les comportements dysfonctionnels

- Un ou deux membres prennent tout le contrôle (manque de confiance)
  - Reconnaître les niveaux différents et aider (faire du coaching)
  - Être patient avec les membres ayant moins d'expérience
  - Membres ayant besoin d'aide doivent la chercher tôt (être proactif, s'impliquer)
  - Facteur de bus > 1

Note: exclure quelqu'un veut dire qu'il ne pourra jamais aider

---

<!-- .slide:  class="cuslide"  -->
# CU
## Cas d'utilisation

--

<!-- .slide: class="cuslide"  -->
## Cas d'utilisation - informel
1. **Traiter une vente.**  Un client arrive à la caisse avec les articles qu'il souhaite acheter. Pour enregistrer chaque article, le caissier utilise le système POS, lequel présente le détail des articles et le montant total des achats. Le client fournit les informations nécessaires pour le règlement. Le système valide et enregistre ces informations, puis met à jour les quantités en stock et imprime le ticket de caisse destiné au client. La vente est terminée et le client peut quitter le magasin.

--

<!-- .slide: class="mddslide"  -->

## Qu'est-ce qu'un modèle du domaine?

Représentation visuelle des classes conceptuelles ou des objets du monde réel dans 
un domaine donné [MO95, Fowler96]

- modèle conceptuel
- modèle objet du domaine
- modèle objet d'analyse

--

<!-- .slide: class="mddslide"  -->

#### Exemple avec l'outil PlantUML

![modèle du domain](http://www.plantuml.com/plantuml/svg/NP31IiGm48RlVOhGouBGejSzo8fuKn05xxF9s0sRJBh9H5d4zx7FqHTpwgQ5Ufl9_yt_psIN629dxwfqjDH31AyClaDsl0Tzx6B8P7Hm8IgEG4a89AusFfZnns5I9YiJF5X2HPj0h7gGHrH-7FWG3ARgOASMfwuqw7i-ovFVOqpY1UcKCIg7IcFK3Y-Kjd-rTf2IUhGTuLragwVGh-gKWTZoE5JVXNX3OXJ508i1veYBz0mMlSYY-a0iaujKB4lt11qaIyA1YPWILXJymhvWPnEBxoMglgbLa_j6YhQzgl-jk5NtGIZAs1YWf6whjLvVj-ra46rtOF6GkcWo-a2nP3KVaYKMA0QpNajOOy8dNSRAqZBsoa4Vns4EB890XPzNNIufMrh947u-QxtLcaron3ZCDoqZguMMxzvAUPxe7gB0EoIJlVi5){width=65% .plain}

[Plant Uml class diagram](https://plantuml.com/class-diagram)

--

<!-- .slide: class="mddslide"  -->
## Comment créer un modèle du domaine?
- Dans les limites des besoins de l'itération en cours:
    1. Identifier les classes conceptuelles.
    1. Les représenter sous forme de classes dans un diagramme UML.
    1. Ajouter des attributs et des associations.

**Chapitre 9 du livre**
Pratiquer les exercices!

--

<!-- .slide: class="mddslide"  -->
## Réaliser votre premier MDD


::: block {style=font-size:1em}
1. Trouver des classes du domaine
2. Ajouter des associations entre les classes lorsque vous désirez persister cette relation
3. Ajouter un verbe pour décrire cette association
4. Ajouter une multiplicité à l'association
:::

--

<!-- .slide: id="cu-noter-une-reservation" class="mddslide"  -->
## Réaliser votre premier MDD
Cas d'utilisation «Noter une réservation»

**Scénario principal**

::: block {style=font-size:0.75em}
1. Un client appelle à l'hôtel pour placer une réservation. 
2. Le commis démarre une nouvelle réservation. 
3. Le commis entre: 
    - La date d'arrivée; 
    - La date de départ; 
    - Le nom de la catégorie de chambre; 
4. Le système inscrit les informations à la réservation.

:::

---

<!-- .slide: class="dssslide"  -->

## Qu'est-ce qu'un DSS?
- Interaction avec le système
  - acteur génère des événements
  - réponses du système
- Illustrer ces opérations
  - pour mieux comprendre le système

--

<!-- .slide: class="dssslide"  -->
### Diagramme de séquence du système (DSS)
![image37](https://www.plantuml.com/plantuml/svg/NP1DQW9H3CVtSuhWoaAzm2156LhSj1IcosvYNZeyV2yppSiKlP6UOoxMA5Ibcq3o-tz0LiLGRSofAhie0ofcA7P8x5CZ_IDRf5sd_IY1-jGhcA8KHonsfmhyXMEobrxi3JF3XjCFMoIyqxJyFR8Glt8fsF4wnKw0F8UricZU_w4OVGFSzYASpnL8vgMpkadHrnbW0QeypxFZW6AEsaEnwPZv0aj5YwS2DOJfb56LTNqDcuTHfnCxZ68F5IsNYqMfOT2u_tFHMQ3l62-6c_LJvZBcfd59wq-IxX426Z_lX-lb5aXzOA0qdG29fcEfLYp1l_eB){width=55%}{.plain}

--


<!-- .slide: class="dssslide"  -->
## Réaliser votre premier DSS
Cas d'utilisation «Noter une réservation»

**Scénario principal**

::: block {style=font-size:0.75em}
1. Un client appelle à l'hôtel pour placer une réservation. 
2. Le commis démarre une nouvelle réservation. 
3. Le commis entre: 
    - La date d'arrivée; 
    - La date de départ; 
    - Le nom de la catégorie de chambre; 
4. Le système inscrit les informations à la réservation.
:::


---

## Note de cours

- <a href="ssh://rossypro@localhost/open .\/sources\/ets\/log210\/log210-contenu\/S20213/LOG210-notes-de-cours.pdf">Note de cours séance</a>
  
Voir chapitre #1


---


## Valider la compréhension

tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN

L'activité **d'analyse** vise à

::: block {.socrative}
1. étudier le problème que l'application est censée résoudre.
2. proposer une solution de l'application qui résout un problème.
:::

Note:
https://b.socrative.com/teacher/

--

## Valider la compréhension

tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN

La **complexité inhérente** est celle qui vient

::: block {.socrative}
1. du domaine de l'application
2. de la solution (conception)
3. de l'environnement d'exécution
:::

Note:
https://b.socrative.com/teacher/

--

## Valider la compréhension

tiny.cc/quizdesign $\rightarrow$ ETSLOGYVAN

La **complexité inhérente** se manifeste dans

::: block {.socrative}
1. le modèle du problème
2. le code de la solution
3. les deux
:::

Note:
https://b.socrative.com/teacher/

---

# LOG210 
## Travail pratique

---

# LOG210 
## Séance #01
### Rétroaction: Page d'une Minute
