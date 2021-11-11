---
theme: beige
title: "LOG210: Formation évaluation laboratoires"
logoImg: "https://www.etsmtl.ca/getmedia/28fb7777-8d95-45d4-a6ff-b1e4a83eb918/Logo-ETS_SansTypo_FR_1"
enableTitleFooter: false
---

# LOG210: Formation évaluation laboratoires

--

## Objectifs

- 1er: Expliquer les éléments essentiels de l'évaluation
- Secondaire: votre rétroaction sur la correction

--

## Préliminaires

Plusieurs contextes pour les **évaluations**

  1. Processus unifié: Intervenants évaluent un logiciel (critères d'évaluation définis dans le plan d'itération)
  2. LOG210: Auxiliaires évaluent les travaux de lab (critères d'évaluation dans la grille) {.fragment .current-visible .highlight-green}
  3. BCAPG: Visiteurs évaluent les cours (LOG210) selon leur processus.

note: Auxiliaires sont appelés à évaluer l'évaluation de la démo (!)

---

## Éléments essentiels de l'évaluation

- Plan d'itération plus étoffé ([gabarit du plan](https://github.com/profcfuhrmanets/log210-enonce-lab1/blob/main/rapports/plan-iteration-gabarit.md#crit%C3%A8res-d%C3%A9valuation))
- [Processus d'évaluation de la démo](https://github.com/profcfuhrmanets/log210-enonce-lab1#d%C3%A9monstration)
- [Processus d'évaluation de la conception et des tests](https://github.com/profcfuhrmanets/log210-enonce-lab1#%C3%A9valuation-de-la-conception-et-des-tests)
- Grille d'évaluation [`log210-template-notes-lab1-bcapg.xls`](https://docs.google.com/spreadsheets/d/1M1mnxtXvlemp86aDPpdaTEhOxlhztEMf/edit?usp=sharing&ouid=100642354018215358554&rtpof=true&sd=true)

--

## Résumé des nouveautés

- Les étudiants doivent [compléter la section évaluation du plan d'itération *après* la démo et soumettre de nouveau ce plan actualisé](https://github.com/profcfuhrmanets/log210-enonce-lab1#d%C3%A9monstration)
- Les auxiliaires doivent évaluer cette section (dans la [grille](https://docs.google.com/spreadsheets/d/1M1mnxtXvlemp86aDPpdaTEhOxlhztEMf/edit?usp=sharing&ouid=100642354018215358554&rtpof=true&sd=true))
  - Qualité de l'évaluation
  - (Après la démo) Complétude de l'évaluation

---

![Ingénieurs Canada](https://engineerscanada.ca/themes/sassquatch/assets/images/logo-colour.svg){width=30%}

## BCAPG: TL;DR

- Certaines parties de la correction sont importantes pour **le BCAPG** et ne doivent pas être ignorées.
- Il s'agit des **Mesures BCAPG** résumées à l'onglet **Équipe** et expliquées à l'onglet **QDR BCAPG** du template [`log210-template-notes-lab1-bcapg.xls`](https://docs.google.com/spreadsheets/d/1M1mnxtXvlemp86aDPpdaTEhOxlhztEMf/edit?usp=sharing&ouid=100642354018215358554&rtpof=true&sd=true)

--

## Mesures se font lors des itérations

1. Lab 2 Rétroaction
2. Lab 3 planification
3. Lab 3 RDCU

C'est automatique, si vous complétez toutes les parties de l'évaluation normale (dans la bonne version de la grille [`log210-template-notes-lab1-bcapg.xls`](https://docs.google.com/spreadsheets/d/1M1mnxtXvlemp86aDPpdaTEhOxlhztEMf/edit?usp=sharing&ouid=100642354018215358554&rtpof=true&sd=true))

--

## LOG210 est obligatoire dans deux programmes

```plantuml
skinparam style strictuml
hide empty members
class LOG as "Baccalauréat en génie logiciel\n(LOG)"
class GTI as "Baccalauréat en génie des\ntechnologies de l'information\n(GTI)"
class LOG210 as "LOG210: Analyse et conception de logiciels"
LOG -d-> LOG210
GTI -d-> LOG210
```

--

## BCAPG

- Les programmes d'ingénierie doivent être [agréés](https://engineerscanada.ca/fr/agrement/a-propos-de-l-agrement) au Canada.
- L'agrément se fait
  - par le **Bureau canadien d'agrément des programmes en génie (BCAPG)**
  - à tous les 4 ans environ à la suite des visites (vérifications)

--

## Vérifications (Visites)

- C'est une sorte d'audit
- [PlanETS de LOG210](https://planets.etsmtl.ca/Public/Versionpdf.aspx?session=20213&sigle=LOG210&groupe=00)
- LOG210 est censé toucher à 3 qualités:
  - Q2: Analyse de problèmes
  - Q3: Investigation
  - Q12: Apprentissage continu

--

<!-- .slide: data-fullscreen -->
## Qualités d'ingénieur

```plantuml
@startuml diagram name
skinparam style strictuml
skinparam backgroundcolor transparent
hide empty members
title LOG210: 2021 été Qualités et Indicateurs BCAPG
class "BCAPG" as BCAPG
BCAPG "1" -- "12" Qualité : définit >
abstract class "Q12 Apprentissage continue" as Q12 #lightgreen extends Qualité
class "i1 Identifier ses\nbesoins en formation" as Q12i1 #lightblue implements Q12
abstract class "Q2 Analyse de problèmes" as Q2 #lightgreen extends Qualité
class "i2 Formuler une approche" as Q2i2 #lightblue implements Q2
class "i3 Développer une solution" as Q2i3 #lightblue implements Q2

abstract class "Q3 Investigation" as Q3 #lightgreen extends Qualité
class "LOG210 2020 été" as LOG210
class "i1 Planifier" as Q3i1 #lightblue implements Q3
class "i2 Appliquer\nles méthodologies" as Q3i2 #lightblue implements Q3
class "i3 Interpréter\nles résultats" as Q3i3 #lightblue implements Q3

class "Activité" as activité

class "Lab0" as lab0 #yellow extends activité
class "Lab3 Planification" as lab3Plan #yellow extends activité
class "Lab3 RDCU" as lab3RDCU #yellow extends activité
class "Lab2 Rétroaction" as lab2Feedback #yellow extends activité
class "Lab3 MDD" as lab3MDD #yellow extends activité
class "Lab3 Évaluation Démo" as lab3Démo #yellow extends activité

LOG210 "1" *-- "*" activité : propose >

'mapping
lab0 "*" -- "1" Q12i1 : mesure >
lab3Plan "*" -- "1" Q3i1 : mesure >
lab3RDCU "*" -- "1" Q3i2 : mesure >
lab2Feedback "*" -- "1" Q3i3 : mesure >
lab3MDD "*" -- "1" Q2i2 : mesure >
lab3Démo "*" -- "1" Q2i3 : mesure >

note as q2note
**Q2 Analyse de problèmes**
I2: "Choisir un modèle ou une méthode pour 
analyser ou résoudre un problème", c'est la 
modélisation du domaine, ou l'analyse 
orientée objet suivi par une conception 
cohérente suivant les règles de modularité (GRASP). 
I3: "Appliquer le modèle ou la méthode en vue 
d'analyser ou résoudre le problème", c'est 
la définition d'une solution, ou réalisation 
de cas d'utilisation (RDCU) qui est aussi 
implémentée dans le laboratoire.
end note

note as q3note
**Q3 Investigation**
L'objectif du cours est de parfaire l'apprentissage des 
méthodes et techniques de modélisation orientés objet, 
des langages de modélisation, des patrons de conception, 
des processus itératif et évolutif, … 
Se faisant, l'étudiant est amené à planifier (**I1**) 
et concevoir son processus d'investigation afin de 
proposer une approche structurée pour le développement 
d'une (ou des) solution(s).
(**I2**) Appliquer les méthodologies - les RDCU à la 
dernière itération
(**I3**) Interpréter les résultats - le saisi de 
la rétroaction à l'avant-dernière iteration
end note

@enduml
```
