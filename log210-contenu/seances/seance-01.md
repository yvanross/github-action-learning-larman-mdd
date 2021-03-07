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
title: 'LOG210-C01-00-seance'
margin: 0
minScale: 1
maxScale: 1
rtl: false
viewDistance: 3
display: block
navigationMode: 'linear'
height: 50%
width: 100%
autoPlayMedia: true
notesSeparator: "Note:"
customTheme : "slide_themes"


---

<!-- https://dev.to/berry_clione/set-up-to-convert-a-markdown-file-to-revealjs-slides-by-pandoc-58n5 -->
<!-- .slide: id="presentationequipe" class="equipeslide"  -->
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Présentation personnelle](#perso)
1. [Présentations des étudiants](#pre_etudiants)
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)
1. [Outils de travail](#outils)
2. [Introduction à l'analyse et conception de logiciels](#spectre)

--

<!-- .slide:  class="equipeslide"  -->

## Équipe
- Responsable du cour
    - Christopher Fuhrman
    - christopher.fuhrman@etsmtl.ca

![Christopher](assets/cfuhrman_2019.png){width=30%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
- Chargé de cours 
    - Yvan Ross, M.ing
    - cc-yvan.ross@etsmtl.ca    

![Yvan](assets/01-chp0-intro_09.pptx/image2.png){width=25%}{style=border:none}
::: block {style=font-size:0.8em}
Utiliser Discord pour communiquer avec moi.
:::

--

<!-- .slide: class="equipeslide"  -->

## Communiquer avec moi

- Par discord: **objet précis**, ex. 
  **`GR01: question sur le modèle du domaine`**
- Rencontres organisées de façon proactive **en dehors** de ces heures. Proposez moi au moins deux périodes de disponibilité.
::: block {style="font-size:0.8em"}
  - Lun 8h30-12:00
  - Lun 13:30 - 17:00         
  - Mar 18:00 - 21:30        
  - Jeu 08:30 - 12:00        
  - Ven 13:30 - 16:30 
:::

  
<!-- - Mes dispos $\rightarrow$ profs.etsmtl.ca/cfuhrman proposez-moi dans le premier courriel l'heure du rendez-vous 🏆- Ne pas me proposer des choses après 18h SVP 👨‍👨‍👧‍👦 -->

--

<!-- .slide: class="equipeslide"  -->
## Chargés de laboratoire

- 01 Jeu 08:30 - 11:30 Labo A-3322
  - hind.errahmouni.1@ens.etsmtl.ca
    
- 02 Lun 13:30 - 16:30 Labo A-3322
  - edouard.laforge.1@ens.etsmtl.ca
    
- 03 Mer 18:00 - 21:00 Labo A-3322
  - islem.saidani.1@ens.etsmtl.ca

::: block {style=font-size:0.8em}
Utiliser Discord pour communiquer avec eux à propos du laboratoire.
:::


---

<!-- .slide: id="perso" class="equipeslide"  -->
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)
1. [Présentation personnelle](#perso)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[7.48m](https://youtu.be/i7KNb6QvH-g)
1. [Présentations des étudiants](#pre_etudiants)
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)
1. [Outils de travail](#outils)
1. [Introduction à l'analyse et conception de logiciels](#spectre)

--

<!-- .slide: class="equipeslide"  -->
# Christopher Fuhrman

--


## Présentation personnelle

- Professeur depuis 2001 (Conception de logiciels)
- Expérience industrielle
  - 2019 : Développement Pharo.org Inria Lille
  - 2014-20 : PlantUML Gizmo 
  - 2008 : Développement convertisseur XML FBI-WVU
  - 2000 : Directeur du programme NASA « ASSET »
  - 1998-1999 : Développeur chez ProLogic
  - 1989-1991 : Développeur chez Apple


--

<!-- .slide: class="equipeslide"  -->

## Présentation personnelle 

- Diplômes universitaires
  - 1988 Bachelor of Science (informatique) WVU
  - 1996 Docteur ès sciences (informatique technique) École Polytechnique Fédérale de Lausanne


--

<!-- .slide: class="equipeslide"  -->
# Yvan Ross

--

<!-- .slide: class="equipeslide"  -->
## Présentation personnelle
- Expérience industrielle
    - 2013-: Chargé de cours ETS
    - 2010-2015: Consultant
    - 2011-2013: Web analytique cloud (ROR), gestion de projet
    - 2009-2011: Reconnaissance vocale. C++, java, ROR, Perl

--

<!-- .slide: class="equipeslide"  -->

## Présentation personnelle (...)
- 2008-2009: Capteur d'analyse réseau électrique, C++, simulink , Matlab

![Capteur signal](assets/01-chp0-intro_09.pptx/image5.png){width=75%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Présentation personnelle (...)

- 2001-2008: R&amp;D en imagerie médicale, C++, Matlab

![Reconstruction genou 3D](assets/01-chp0-intro_09.pptx/image8.png){width=45%}{style=border:none}
![Segmentation genou](assets/01-chp0-intro_09.pptx/image9.png){width=45%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Présentation personnelle (...)

- 1998-2001: Développeur imagerie par microscopie, C++

![Clemex segmented image](assets/01-chp0-intro_09.pptx/image12.png){width=30%}{style=border:none}
![Clemex diamant mesure dureté](assets/01-chp0-intro_09.pptx/image13.png){width=30%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Présentation personnelle (...)

- 1994-1998: Directeur R&amp;D, conception de système d'inspection automatisée par vision, C++, conception d'équipement de convoyage
![Rouleaux de convoyeurs](assets/01-chp0-intro_09.pptx/image6.png){style=border:none}

--

<!-- .slide: class="equipeslide"  -->
### Présentation personnelle (...)

#### Diplômes universitaires
- 1994 Maîtrise en technologie des systèmes

![Radiographie numérique](assets/01-chp0-intro_09.pptx/image10.png){width=30%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
#### Diplômes universitaires
- 1990 Baccalauréat en Génie de la production automatisée

---

<!-- .slide: id='pre_etudiants' class="equipeslide"  -->
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)
1. [Présentation personnelle](#perso)
1. [Présentations des étudiants](#pre_etudiants)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)
1. [Outils de travail](#outils)
1. [Introduction à l'analyse et conception de logiciels](#spectre)

--

<!-- .slide: id='pre_etudiants' class="equipeslide"  -->
## Présentations des étudiants

Questionnaire à tiny.cc/quizdesign

Nom de la salle de class: **ETSDESIGN**

![Socrative login](assets/SocrativeLoginAnimated.gif){style="width:300px" .plain}

Note: 
https://b.socrative.com/teacher/


--

<!-- .slide: class="equipeslide"  -->
## Présentations des étudiants

- Comment développer un logiciel?
  - Quelle(s) méthode(s) de développement avez-vous suivie(s)?
  - Pour quel genre de logiciel?
- Quelles sont vos attentes pour LOG210?

--

<!-- .slide: class="equipeslide"  -->
## Présentations des étudiants
- Veuillez vous présenter sur Discord dans Général. 
  - Votre nom, votre programme d'étude collégiale, votre programme d'étude universitaire, vos stages (entreprise, domaine, projet), pourquoi vous êtes en génie logiciel.
![Engrenages](assets/01-chp0-intro_09.pptx/image14.jpeg){width=35%}{style=border:none}



--


<!-- .slide: class="equipeslide"  -->
## Meilleures pratiques pour apprendre

Quelles sont les meilleures pratiques pour apprendre?

![Meuilleures pratiques](assets/01-chp0-intro_09.pptx/image15.jpeg){width=30%}{style=border:none}
![Meuilleur pratique pour réussir 2 personnes](assets/01-chp0-intro_09.pptx/image16.jpeg){width=30%}{style=border:none}
![note A plus](assets/01-chp0-intro_09.pptx/image17.jpeg){width=30%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Mes conseils pour réussir

- L'étudiant qui réussit dans mes cours…
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
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)
1. [Présentation personnelle](#perso)
1. [Présentations des étudiants](#pre_etudiants)
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Outils de travail](#outils)
1. [Introduction à l'analyse et conception de logiciels](#spectre)

--

### Faire un logiciel pour un domaine que vous ne connaissez pas

Exemple:  
Application Web permettant de planifier les formations (faites par des spécialistes en TI) des enseignants dans les écoles québécoises.

Comment procéder?
  - Appliquer un processus pour la réalisation
    - Appliquer une méthodologie d'analyse
    - Appliquer une méthodologie de conception
  

Note:
Il faut connaître **comprendre** le domaine, le **modéliser** (pour pouvoir automatiser les processus), faire du code simple. 


---

<!-- .slide: id="outils" class="toolslide" -->
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)
1. [Présentation personnelle](#perso)
1. [Présentations des étudiants](#pre_etudiants)
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)
1. [Outils de travail](#outils)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Introduction à l'analyse et conception de logiciels](#spectre)


--

<!-- .slide: class="toolslide" -->
# Outils de travail
- [Plan de cours](https://planets.etsmtl.ca/Public/Versionpdf.aspx?session=20211&sigle=LOG210&groupe=00)
- [Moodle - classe inversé](https://ena.etsmtl.ca/my/)
- [Examen - enaquiz](https://enaquiz.etsmtl.ca/)
- [Google Drive pour le contenu](https://drive.google.com/drive/folders/1CWoWGClL2sQkvsw57NiCUNnqU3RwPBPH?usp=sharing)  
<!--- [GitHub Classrooms pour laboratoires et autres](https://classroom.github.com/classrooms) -->
- [Socrative](http://www.socrative.com)
- [Zoom](http://www.zoom.us) / [obs](https://obsproject.com/) / [youtube](#youtube.com) / [discord](https://discord.com/)
- [one note](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
- laboratoires


--


<!-- .slide: class="toolslide" -->
###  Outils de travail...
- Visual studio code
  - extension
    - https://visualstudio.microsoft.com/services/live-share/
    - plantuml
    - Markdown all in One
    - Markdown PDF
- https://www.npmjs.com/package/gitinspector
- https://www.npmjs.com/package/tplant
- https://plantuml.com/
- https://wakatime.com/dashboard

--

<!-- .slide: class="toolslide" -->
# Notes de cours 

Il existe des [notes de cours](https://drive.google.com/file/d/1__yjzv7vuqbX0ElxLj5AkVO0xEk7ubVO/view?usp=sharing) depuis janvier 2020. 

:::block {style=font-size:0.7em}
- https://drive.google.com/file/d/1__yjzv7vuqbX0ElxLj5AkVO0xEk7ubVO/view
:::

- Les notes de cours ne remplacent pas le livre obligatoire

--

<!-- .slide: class="toolslide" -->
# Livre obligatoire

- Version anglaise ou française?

![Applying UML and patterns](http://www-fp.pearsonhighered.com/bigcovers/0131489062.jpg){width=25%}{style=border:none}
![Uml2 et les design patterns](assets/01-chp0-intro_09.pptx/image18.jpeg){width=25%}{style=border:none}

<!-- ---

### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
[Try to fix bug in production](htps://www.youtube.com/watch?v=75wa8Lx4yc4) -->

---


<!-- .slide: id="introaoo" class="toolslide" -->
## LOG210 Séance #01
## Analyse  et  conception de logiciels
1. [Présentation de l'équipe](#presentationequipe)
1. [Présentation personnelle](#perso)
1. [Présentations des étudiants](#pre_etudiants)
1. [Faire un logiciel pour un domaine que vous ne connaissez pas](#inconnu)
1. [Outils de travail](#outils)
1. [Introduction à l'analyse et conception de logiciels](#spectre)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}


---


<!-- .slide: id='spectre' -->

### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels...
::: block {style="font-size:0.8em}
1. Spectre de la conception - voir 2
2. **[Analyse et conception orienté objet](#aoo)**
3. **[Equipe](#equipe)** - Travail d'équipe (HRC)
4. **[PU](#pu)** - Processus unifié
5. **[DCU](#dcu)** - Diagramme de cas d'utilisation
6. **[CU](#cu)** - Cas d'utilisation
7. **[IU](#iu)** - Interface Usager vs DSS
8. **[MDD](#mdd)** - Modèle du domaine
9. **[DSS](#dss)** - Diagramme de séquence système
10. **[Contrats](#contrat)** - Contrats d'opération
11. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
12. **[DCL](#dcl)** - Diagramme de classe logiciel
<!-- .slide: id='spectre' -->
:::

--


# Spectre de la Conception

Figure 2.1 des [notes de cours.](https://drive.google.com/file/d/1__yjzv7vuqbX0ElxLj5AkVO0xEk7ubVO/view?usp=sharing)

--

<!-- .slide: data-background-image="https://www.plantuml.com/plantuml/svg/VLJBRjim4BppAnQvE77X8cblXM74Tlf86nH5dRG7EmUAN4k4ALBW0wxxHq4_eRVanxgKR4UsKmC21SpEpYvd85twm5s8fMP-eKp57I_1XvL6EfqIUvMCYqNkR3HIM6qT1CUDfnAQm3eG2kM17Wu5DtBfL0XeO6vD06NWfpBIBZthFCj9dFEeGs8ONY9ySSgdbklRCUlS5kWHR2ZGUT3MBY1to6kfoO-FS5ho1IqP7T9SN7NehGnTHckKDDF1yEO6xYRllqzQm-7Y_8pzVxxdUJhCqIMlpG8-s-WCryTelnP2maGuLOLZj6z89ZdVMghjNN0HcHUSuhXu_QP54ffxFx9EeXlNIHHAIZG7Z6rUnrX3v-oo8MIQEXZHKlxeq8PLXRu1iAp22aeiixHmtGadVQz-uxktvuFx4-0UbfowvXJ2flxu1yQSRa3zLShgyM_D-ogg3QFRVTNjrc0cunpw_PAMr3WOR0WZv57OM95tCoEi4LW5PStCy0ZowI6BOMPEHrTt7yuQwIHpAFwozXL9e5Vvdjh4KZJFYYyAybnHB8UImuGtVNmxPZtZwQ54bzFNijR50nkdTQMW59J9MoP-QX0GTfdPrTR6Wh6jvT3JE0_Jp6fvtwlDPBMZEt123y3wAgovq4vXiqThIByNfvBx0bCznTYarfCjDDjCsIKdTEtQ3btY5cxJELkFtwCNx1ADf1_JFm00" data-background-size="80%" data-background-opacity="1" -->


---

<!-- .slide: id='aoo' -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[21.26m](https://youtu.be/vGV5NN0ZMCo)
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats d'opération
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[DCL](#dcl)** - Diagramme de classe logiciel
:::


--

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

# Analyse

- Faire un modèle du *problème*
  - Diagramme de classes conceptuelles
  - Modèle du domaine
- Investiger le problème
- Comprendre les besoins
- Ne pas (encore) proposer la solution

--

<!-- .slide: id='coo' -->
# Conception

- Faire un *modèle* d'une *solution*
  - Diagrammes de classes logicielles
  - Diagrammes d'interaction (séquence)
  - etc.
- Ce n'est pas la solution
- Facilite une évaluation des qualités comme la modularité

--

<!-- .slide: id='coo' -->
## Décalage des représentations

Comprenez-vous ce que fait ce programme?

```
000111011000100100101001010100001011110011
```

--

<!-- .slide: id='coo' -->
## Décalage des représentations

Comprenez-vous ce que fait ce programme?

![Jeu de dés](https://www.plantuml.com/plantuml/svg/NP31QiCm44Jl-eh1bq31X_QOGyd1K0WK2eNUD_RQLYkjZBGgcD8FodVanogRD4bxMRGxRuP1kwGKDNk7vwOnwSFAH94yaiwEouosNTGRfUEUijC-Y0fvnXl7ZeICurwX0T4EewApaLkrGSneEmRxIMTuzWUEoMokQSuAwpmnGjGncDPHIjY7p3dYom0IFBPuBJraMDR3IwbhEPMZ5RszFD4Wf-D5-JvdDQVZ6lH9RidyA-uvDro8PCpbYUg-GbsZUgXMy-9eNLOymfoBLNU5SFLANdrRl1TvmJQ_tFyaHzAkn8wbAz_w0m00){.plain}

--

<!-- .slide: id='coo' -->
## Décalage des représentations

- Plus une solution (conception) ressemble à une description du problème, plus elle est facile à comprendre.
- La "distance" entre la représentation d'un problème et la représentation de sa solution s'appelle **le décalage
des représentations.**

--

<!-- .slide: id='coo' -->
## Analyse versus Conception
![Diagramme d'acivité du processus d'analyse et de concpetion de Larman](http://www.plantuml.com/plantuml/svg/NOzDJiD038NtFeLtt27Pj6gML49Ki3SJDumwFy5s5XNbG3r7BuQ7IAXg5gFC-FbxxstKI6p92VGKoqn26TNEYVsK61uc8nzfINQinGfbndUMaGhTx_BNmYKmVWFwjsTLcdYRubGmS34M-06BvWOlKeEF5yNnoI7fh8nixe6XEc6sM4kxfJh543bfkpoJP2e0b-swSK7uQm3Ti7lheMl7iSe9klqmhBz84yNYWiEX1oxZEjvv1o7h7RNxjtDQzxg2XaYJ5yhSN4CYrRiaFPHgZ1AdJqFOnn9pL1PChhvT0oNl32Ch2izokoeNeyPNdEiY2C4VczmLArfRSpAJ-B6OjfJO71vYE7jEDN9cBYsvMfrXu-8bfry0){class=plain}

Note:
    Ajouter des notes pour la présentation Powerpoint

--

<!-- .slide: id='coo' -->
## Lectures à faire

Le chapitre 1 des notes de cours.

---

<!-- .slide: id='equipe' class="equipeslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[25.53m](https://youtu.be/KJUXa8Yxrl4)
2. **[PU](#pu)** - Processus unifié
3. **[DCU](#dcu)** - Diagramme de cas d'utilisation
4. **[CU](#cu)** - Cas d'utilisation
5. **[IU](#iu)** - Interface Usager vs DSS
6. **[MDD](#mdd)** - Modèle du domaine
7. **[DSS](#dss)** - Diagramme de séquence système
8. **[Contrats](#contrat)** - Contrats d'opération
9.  **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
10. **[DCL](#dcl)** - Diagramme de classe logiciel
:::



--

<!-- .slide: class="equipeslide"  -->

## Développement de logiciel en équipe
![image](assets/TeamGeek.pptx/image3.png){width=35%}{style=border:none}

--

<!-- .slide: class="equipeslide"  -->
## Développement de logiciel en équipe

Pratiquement tout conflit social est dû à un manque d'humilité, de respect ou de confiance.

![image](assets/TeamGeek.pptx/hrc.png){width=50%}{style=border:none}

:::block {style=font-size:0.5em}
référence: «Team Geek» Brian W. Fitzpatrick (Google), Ben Collins-Sussman (Subversion, Google)
:::

--

<!-- .slide: class="equipeslide"  -->

## Respect
Trouvez-moi un exemple d'un manque de respect:

- envers un coéquipier
- envers les élèves de la classe{.fragment .shade-up}
- d'un étudiant envers un professeur ou un chargé de laboratoire{.fragment .shade-up}
- d'un professeur/chargé de laboratoire envers un étudiant{.fragment .shade-up}

Note:  3 animations

--

<!-- .slide: class="equipeslide"  -->
## Confiance
Trouvez-moi un exemple d'une:

- action qui donne confiance à mes coéquipiers
- action qui diminue la confiance envers mes coéquipiers{.fragment .shade-up}

Note: 1 animation

--

<!-- .slide: class="equipeslide"  -->
## Humilité
Trouvez-moi un exemple ou:
- un étudiant ou un professeur fait preuve d'humilité
- un étudiant ou un professeur ne fait pas preuve d'humilité{.fragment .shade-up}

--

<!-- .slide: class="equipeslide"  -->

#### Pourquoi l'enseignant décide les membres de l'équipe? (1/2)

- Pour apprendre les compétences non-techniques
  - Demandées par les employeurs
  - N'évoluent pas autant que les compétences techniques (p.ex. Flash)
- On ne choisit pas (facilement) son équipe en entreprise
- Travailler avec des collègues différents tout au long de son baccalauréat élargit son réseau de contacts
- Impact positif pour la carrière

::: block {style=font-size:0.5em}
Mark Granovetter, «The Strength  of Weak Ties » , Academic Press, 1977. 
:::

--

<!-- .slide: class="equipeslide"  -->

#### Pourquoi l'enseignant décide les membres de l'équipe? (2/2)

- Favorise le « coaching » car il y a de la diversité
- Un coéquipier moins fort dans un aspect du projet peut bénéficier du coaching d'un membre plus fort
- Le « coach » peut bénéficier également de ce qu'on appelle «deep learning»
- L'équipe est finalement plus cohésive et plus performante
  

--

<!-- .slide: class="equipeslide"  -->

### Éviter les comportements dysfonctionnels

- Chacun fait "sa part" sans se soucier de la santé de l'équipe et de la qualité globale du projet
  - L'équipe > moi (appliquer l'humilité)
  - Rester flexible pour les tâches, s'adapter
  - Proactivité envers problèmes dans l'équipe:
    - Exiger la présense des coéquipiers
    - Demander de l'aide (technologies)
    - S'impliquer!

Note: l'absense de preuves de proactivité vous donne tord généralement s'il y a un conflit majeur

--

<!-- .slide: class="equipeslide"  -->

### Éviter les comportements dysfonctionnels

- Un ou deux membres prennent tout le contrôle (manque de confiance)
  - Reconnaître les niveaux différents et aider (faire du coaching)
  - Être patient avec les membres ayant moins d'expérience
  - Membres ayant besoin d'aide doivent la chercher tôt (être proactif, s'impliquer)
  - Facteur de bus > 1

Note: exclure quelqu'un veut dire qu'il ne pourra pas aider


---


<!-- .slide: id='pu' class="puslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
2. **[PU](#pu)** - Processus unifié![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[5.21m](https://youtu.be/SR7BoDKVbPg)
3. **[DCU](#dcu)** - Diagramme de cas d'utilisation
4. **[CU](#cu)** - Cas d'utilisation
5. **[IU](#iu)** - Interface Usager vs DSS
6. **[MDD](#mdd)** - Modèle du domaine
7. **[DSS](#dss)** - Diagramme de séquence système
8. **[Contrats](#contrat)** - Contrats d'opération
9.  **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
10. **[DCL](#dcl)** - Diagramme de classe logiciel
<!-- .slide: class="puslide"  -->
:::


--

<!-- .slide: class="puslide"  -->
## Phases du Processus Unifié

![](assets/02-chp2_UP_24.pptx/phases_pu.png){style="border:none; margin-left:12%"}

--

<!-- .slide: class="puslide"  -->

## Phase  Inception
- Étude de faisabilité
    - Vision approximative
    - Estimations globales
    - Cas d'utilisation
    - Continuer ou non (p.ex. chercher le financement)

    ![image12](assets/02-chp2_UP_24.pptx/image12.jpeg){style="margin-left:25%"}

- Ne pas confondre avec
    - analyse des exigences

---

<!-- .slide: id='dcu' class="dcuslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
2. **[PU](#pu)** - Processus unifié
3. **[DCU](#dcu)** - Diagramme de cas d'utilisation![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[3.24m](https://youtu.be/ZtCCUaEfOgQ)
4. **[CU](#cu)** - Cas d'utilisation
5. **[IU](#iu)** - Interface Usager vs DSS
6. **[MDD](#mdd)** - Modèle du domaine
7. **[DSS](#dss)** - Diagramme de séquence système
8. **[Contrats](#contrat)** - Contrats d'opération
9.  **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
10. **[DCL](#dcl)** - Diagramme de classe logiciel
:::

<!-- .slide: id='dcu' class="dcuslide"  -->


--

<!-- .slide:  class="dcuslide"  -->

## DCU (LOG410) 
### Diagramme de cas d'utilisation

![customer-usecase](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/customer-usecase.png){style="border:none"}{width=50%}

https://plantuml.com/use-case-diagram

Note: LOG410

--

<!-- .slide: class="dcuslide"  -->
#### Concepts de base du  diagramme   de  cas  d'utilisation
1. **Sujet (subject)** 
    -  Le sujet est utilisé  pour délimiter  le système  de son environnement
1. **Acteur** 
    - Entité externe  qui interagit  avec le système
    - Peut représenter  des personnes  / utilisateurs  et d'autres systèmes externes  avec lesquels  le système interagit

--

<!-- .slide: class="dcuslide"  -->
#### Concepts de base du  diagramme   de  cas  d'utilisation...

1. **Cas d'utilisation**
    - Fonctionnalité fournie  par le système 
    - Décrit comme une séquence d'étapes  / actions
1. **Relations**
    - L'interaction  entre les acteurs  et un cas d'utilisation est spécifiée à l'aide d'une  association.
    - Différents  types de relations entre les cas d'utilisation: include, extend, generalization/inheritance


--

<!-- .slide: class="dcuslide"  -->
## Trois types d‘acteurs
::: block {style=font-size:32px}
1. **Acteur principal**
    - il a un objectif et utilise le système à l'étude (SAE)
1. **Acteur de support**
    - fournit un service, une information, au SAE
    - p.ex. système d'autorisation de paiement. Peut être humain, système externe ou équipement.
1. **Intervenant**
    - a un intérêt, mais ni acteur principal ou acteur de support (ex: service des taxes du gouvernement, comptable, vérificateur, propriétaire, client, …)
:::

--

<!-- .slide: class="dcuslide"  -->
## Diagramme de cas d'utilisation (agile)
![dcu-agile](assets/04-chp6-Cas-utilisation_21.pptx/dcu-agile.jpeg){width=60%}{style=border:none}

---


<!-- .slide:  id='cu' class="cuslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
2. **[PU](#pu)** - Processus unifié
3. **[DCU](#dcu)** - Diagramme de cas d'utilisation
4. **[CU](#cu)** - Cas d'utilisation![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[1.53m](https://youtu.be/JgesxHruhmo)
5. **[IU](#iu)** - Interface Usager vs DSS
6. **[MDD](#mdd)** - Modèle du domaine
7. **[DSS](#dss)** - Diagramme de séquence système
8. **[Contrats](#contrat)** - Contrats d'opération
9.  **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
10. **[DCL](#dcl)** - Diagramme de classe logiciel

:::


--

<!-- .slide:  class="cuslide"  -->
# CU
## Cas d'utilisation

--

<!-- .slide: class="cuslide"  -->
## Cas d'utilisation - informel
1. **Traiter une vente.**  Un client arrive à la caisse avec les articles qu'il souhaite acheter. Pour enregistrer chaque article, le caissier utilise le système POS, lequel présente le détail des articles et le montant total des achats. Le client fournit les informations nécessaires pour le règlement. Le système valide et enregistre ces informations, puis met à jour les quantités en stock et imprime le ticket de caisse destiné au client. La vente est terminée et le client peut quitter le magasin.

--

<!-- .slide: class="cuslide"  -->

#### De la description du cas d'utilisation au diagramme  de cas d'utilisation
![cu2dcu](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/cu2dcu.png){style=border:none}

---


<!-- .slide: id="iu" class="uislide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[6.22m](https://youtu.be/2uiPVpRFNxA)
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats d'opération
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[DCL](#dcl)** - Diagramme de classe logiciel

:::


--

<!-- .slide:  class="uislide"  -->

# IU
## Interface Usager

--

<!-- .slide: class="uislide"  -->
## Interface Usager
- Réaliser les wireframes des différentes interfaces usagées nécessaires pour la réalisation du cas d'utilisation [Noter une réservation](#cu-noter-une-reservation)

- Utiliser plant uml
  - https://plantuml.com/salt

---

<!-- .slide: id='mdd' class="mddslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
2. **[PU](#pu)** - Processus unifié
3. **[DCU](#dcu)** - Diagramme de cas d'utilisation
4. **[CU](#cu)** - Cas d'utilisation
5. **[IU](#iu)** - Interface Usager vs DSS
6. **[MDD](#mdd)** - Modèle du domaine![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[12.25m](https://youtu.be/LeakCzmEzEc)
7. **[DSS](#dss)** - Diagramme de séquence système
8. **[Contrats](#contrat)** - Contrats d'opération
9.  **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
10. **[DCL](#dcl)** - Diagramme de classe logiciel

:::

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
![modèle du domain](http://www.plantuml.com:80/plantuml/png/NL3DIiOm4BmN-WwXbuAGejSU115l2gBWFIHB6sms_VAZYFW-zZdwOcxQHFjvosHcTcQtDLQjtnDufY9JrWYDmB2r6DWiw1EOMPSmMWM-haQTC2H8g3N2do8uDW6JuEG4MI7r3kGal6VtUa2uSK7BbF9PLwSeCEYmBdNrLKGlW04IgKH8Oo0wED2FGeCXIL8OwaO33cmUNk2368JNcBH2EV2U6BJcO7Y2GVkG4lRSvgfXFCwS7brtqVohtBDRYWICm9L0MloSRYwxBlcT7iR0jrcP8-STkfp5tr8KLnHQw8QYkBBlkBjAxvuz1ojVroN7bV-jPP5lFSiUkQA6T9R3IeTAvr9F6wpBlW-xFlFyzVazUa_FZoIVXVi1){width=75% .plain}

[Plant Uml class diagram](https://plantuml.com/class-diagram)

--

<!-- .slide: class="mddslide"  -->
## Comment créer un modèle du domaine?
- Dans les limites des besoins de l'itération en cours:
    1. Identifier les classes conceptuelles.
    1. Les représenter sous forme de classes dans un diagramme UML.
    1. Ajouter des attributs et des associations.

--

<!-- .slide: class="mddslide"  -->
## Réaliser votre premier MDD
**En équipe de 2**
::: block {style=font-size:1em}
1. Trouver les classes du domaine
1. Ajouter des associations entre les classes lorsque vous désirez persister cette relation
1. Ajouter un verbe pour décrire cette association
1. Ajouter une multiplicité à l'association
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


[Interface usager](#iu) | [Réaliser votre premier DSS](#realiser-votre-premier-dss) | [Itération suivante](#iteration-suivante)
:::

---

<!-- .slide: id='dss' class="dssslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS
1. **[MDD](#mdd)** - Modèle du domaine
2. **[DSS](#dss)** - Diagramme de séquence système![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[8.47m](https://youtu.be/GhNeVi0t8f0)
3. **[Contrats](#contrat)** - Contrats d'opération
4. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
5. **[DCL](#dcl)** - Diagramme de classe logiciel
:::


--

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
::: block {style=font-size:0.5em}
- événements synchrones
- paramètres
- retour d'information
- frontières du système
:::
![image37](https://www.plantuml.com/plantuml/png/NP1DQW9H3CVtSuhWoaAzm2156LhSj1IcosvYNZeyV2yppSiKlP6UOoxMA5Ibcq3o-tz0LiLGRSofAhie0ofcA7P8x5CZ_IDRf5sd_IY1-jGhcA8KHonsfmhyXMEobrxi3JF3XjCFMoIyqxJyFR8Glt8fsF4wnKw0F8UricZU_w4OVGFSzYASpnL8vgMpkadHrnbW0QeypxFZW6AEsaEnwPZv0aj5YwS2DOJfb56LTNqDcuTHfnCxZ68F5IsNYqMfOT2u_tFHMQ3l62-6c_LJvZBcfd59wq-IxX426Z_lX-lb5aXzOA0qdG29fcEfLYp1l_eB){width=55%}{.plain}



--

<!-- .slide: class="dssslide"  -->
## Pourquoi tracer un DSS?
- Pour connaître les événements système
    1. déclenchés par acteurs (humains ou ordis)
    1. d'échéance de temporisation (timeout) 
    1. d'erreurs ou d'exceptions (sources externes)
- Début de la modélisation par décomposition (top-down)
- Vu abstrait du système comme application
- Facilite le changement de l'interface humain-machine (la couche présentation)

--

<!-- .slide: class="dssslide"  -->
## DSS et cas d'utilisation

![image](assets/01-chp10-Diagrammes_de_sequence_systeme_9.pptx/dssEtCasUtilisation.png){style=border:none}{width=75%}
https://plantuml.com/sequence-diagram

--

<!-- .slide: id="realiser-votre-premier-dss" class="dssslide"  -->
## Réaliser votre premier DSS
- Réaliser un diagramme de séquence système du cas d'utilisation [Noter une réservation](#cu-noter-une-reservation).

--

## IU - Interface Usager vs DSS

Le DSS peut vous permettre de définir les interfaces usager nécessaires pour appeller les opérations systèmes et afficher les retours d'informations.

- Vérifier la correspondance entre vos interfaces usager et vos opérations systèmes

---


<!-- .slide: id='contrat' class="contratslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats d'opération![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[9.57m](https://youtu.be/Ava0v-vmuEI)
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation
1. **[DCL](#dcl)** - Diagramme de classe logiciel
:::



--

<!-- .slide: class="contratslide"  -->
## Contrats
- Transformation au niveau des données dans le MDD suite à l'exécution d'une opération du DSS
- Expliquer en vos propre mots se qui ce passe au niveau des données de votre modèle du domaine lorsque vous appellez chacune des opérations système.{.fragment .shade-up}
- Opération système == contrat{.fragment .shade-up}

Note: 2 animations

---


<!-- .slide: id='rdcu' class="rdcuslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats d'opération
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[25.10m](https://youtu.be/3QJLltSRbqc)
1. **[DCL](#dcl)** - Diagramme de classe logiciel
:::



--

<!-- .slide: class="rdcuslide" -->

## Réalisation d'un cas d'utilisation
- Un diagramme d'interaction avec des annotations pour réaliser une opération système et satisfaire:
    - Son contrat
    - Ses retours d'informations
- Deux types de responsabilités
  - Faire
  - Savoir

https://plantuml.com/sequence-diagram

Note: Diagramme de séquence, Diagramme de communication

--

<!-- .slide: class="rdcuslide" -->

## Responsabilités de faire
- faire quelque chose lui-même (ex. effectuer un calcul)
- déclencher une action d'un autre objet
- contrôler et coordonner les activités d'autres objets

![Faire](assets/01-chp16F-17A_GRASP-46.pptx/faire.png){width=25%}{style=border:none}

--

<!-- .slide: class="rdcuslide" -->

### Responsabilités de savoir
- connaître les données privées encapsulées
- connaître les objets connexes
- connaître des éléments qu'il peut dériver ou calculer

![savoir](assets/01-chp16F-17A_GRASP-46.pptx/savoir.png){width=20%}{style=border:none}

--

<!-- .slide: class="rdcuslide" -->


### La CPR est une métaphore pour la COO
- On y assimile les objets à des personnes qui
    - ont des responsabilités
    - collaborent avec d'autres personnes
    - réalisent une tâche

![image](assets/01-chp16F-17A_GRASP-46.pptx/image13.jpeg){width=30%}{style=border:none}

CPR = Conception pilotée par les responsabilités

--

<!-- .slide: class="rdcuslide" -->

## Réaliser vos premiers RDCU
- Concrètement: Un RDCU est un diagramme de séquence ou de communication qui réalise le contrat associer à l'opération système et s'assure de pouvoir retourner les informations demandées.
- Créer un contrôleur{.fragment .shade-up}
- Faire un diagramme de séquence ou de communication pour chaque opération système.{.fragment .shade-up}

Note: 2 animations


---


<!-- .slide: id='dcl' class="dclslide"  -->
### LOG210 Séance #01
#### Introduction à l'analyse  et conception de logiciels
::: block {style="font-size:0.8em}
1. **[Spectre de la conception](#spectre)**
1. **[Analyse et conception orienté objet](#aoo)**
1. **[Equipe](#equipe)** - Travail d'équipe (HRC)
1. **[PU](#pu)** - Processus unifié
1. **[DCU](#dcu)** - Diagramme de cas d'utilisation
1. **[CU](#cu)** - Cas d'utilisation
1. **[IU](#iu)** - Interface Usager vs DSS
1. **[MDD](#mdd)** - Modèle du domaine
1. **[DSS](#dss)** - Diagramme de séquence système
1. **[Contrats](#contrat)** - Contrats d'opération
1. **[RDCU](#rdcu)** - Réalisation d'un cas d'utilisation^
1. **[DCL](#dcl)** - Diagramme de classe logiciel![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[8.59m](https://youtu.be/-XH1jSyJboY)
:::



--

<!-- .slide: id='dcl' class="dclslide"  -->
<!-- S202023-LOG210-01 -->
<!-- S202023-LOG210-03 -->

# DCL - DCC
## Diagramme de classe logiciel
## Diagramme de classe de conception
Note: S20201-03 continuer ici

--

<!-- .slide: class="dclslide"  -->
## Classificateurs UML
- Dans les DCC, il y en a deux classificateurs courants:
    - Les classes
    - Les interfaces
  
https://plantuml.com/class-diagram


--

<!-- .slide: class="dclslide"  -->

## Notation courante (vue en LOG121)
![larman/F15.1, A16.1](assets/larman/F15.1.png){width=50%}{style=border:none}

--

<!-- .slide: class="dclslide"  -->

## Attributs en UML
![larman/F15.3, A16.3](assets/larman/F15.3.png){width=75%}{style=border:none}

--

<!-- .slide: class="dclslide"  -->
### Décalage de représentation
![larman/F15.4, A16.4](assets/larman/F15.4.png){width=75%}{style=border:none}

--

<!-- .slide: class="dclslide"  -->
### Relation diagrammes 
### d'interaction et de classes
![larman/F15.21, A16.21](assets/larman/F15.21.png){width=75%}{style=border:none}

--

<!-- .slide: class="dclslide"  -->
## Ordre d'implémentation
![larman/F18.12](assets/larman/F18.12.png){width=75%}{style=border:none}

--

<!-- .slide: class="dclslide"  -->

## Résumé
- DCC servent comme plan pour le codage
    - Soyez à l'aise avec la transformation
- DCC se construisent au fur et à mesure que l'on réalise la dynamique (à travers les diagrammes d'interaction)

---

<!-- .slide: id='iteration-suivante' -->
### Itération suivante
::: block {style=font-size:0.9em}
CU02-Le client aimerais pouvoir réserver plusieurs chambres avec des dates différents lors de la même réservation
- Qu'est-ce qui change au niveau du [DCU](#dcu)
- Qu'est-ce qui change au niveau du [CU](#cu-noter-une-reservation)
- Qu'est-ce qui change au niveau du [MDD](#mdd)
- Qu'est-ce qui change au niveau des [IU](#iu)
- Qu'est-ce qui change au niveau du [DSS](#dss)
- Qu'est-ce qui change au niveau des [contrats](#contrat)
- Qu'est-ce qui change au niveau des [RDCU](#rdcu)
- Qu'est-ce qui change au niveau du [DCL](#dcl)

[Noter une réservation](#cu-noter-une-reservation)
:::

---

<!-- .slide: class="feedbackslide"  -->

## Séance #01
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs


---



To initialise text to speech use the following process
::: block {style=font-size:0.7em}
- edit /Users/rossypro/.vscode/extensions//Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/views/initialize.ejs
- in dependencies section add 
    - { src: 'libs/reveal.js/3.8.0/plugin/tts_min/tts_min_reveal.js', async: false }, 
- copy tts_min directory at /Users/rossypro/.vscode/extensions/evilz.vscode-reveal-4.0.3/libs/reveal.js/3.8.0/plugin
- modify tts_min_reveal.js to our needs
- Shortcuts
  - "h pour aide, e pour changer de langue, p pour lire, q cancel, t activer/désactiver la voie, r pour enregistrez, z pour récupérer les fichiers audio"
:::

::: block {class=francais style=font-size:0.2em}
Bonjour je peux lire du texte en français.
:::

::: block {class=english style=font-size:0.2em}
Hello my name is Samanta I can read text in english
:::

::: block {class=francais style=font-size:0.2em}
Bonjour je m'appelle Amélie je suis la voie par défault de Chrome.  Vous avez besoin d'une configuration d'écran de 1920x1048 pour afficher sur les écran Creston de l'École de Technologie Supérieure
:::


<!-- S202023-LOG210-02 -->
<!-- S202023-LOG210-04 -->
