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
logoImg: assets/logo_ets.svg
slideNumber: true
title: 'LOG210-seance-08'
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
date: '`r format(Sys.time(), "%d %B, %Y")`'

---

# LOG210 Analyse et conception de logiciels: Séance 08

--

<!-- https://www.fastemoji.com/Search/?order=newest&q=bureaucrat -->
## ┌(▀Ĺ̯ ▀-͠ )┐

1. Se connecter à Socrative  
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

--

## Schéma des outils

![OutilsLOG210g01](assets/OutilsLOG210g01.png){.plain}

--

## Plan général des séances

![PlanGénéralSéances](assets/PlanGénéralSéances.drawio.svg){.plain}

---

# Survol 
- Conférencier
- Rétroaction mini-test
- Passer des diagrammes au code
- Dette technique (7.x) et Réusinage (ndc 11.x)
- Architecture logique (en couches) F12.1-12.8/A13.1-13.8
- Conception de packages (ndc 18)

---

# Conférencier

Jude odilon-kenley Seide

- Quel est le coût de ne pas faire d'analyse et de conception?
- Quel est le coût de ne pas faire de test?


---

<!-- .slide: class="retroquizslide center" -->
# Rétroaction<br>mini-test

--

<!-- .slide: class="retroquizslide center" -->
# Questions difficiles 😕

Selon les statistiques de la première tentative.


Note: Quadrant de la dette technique

--

###### Dans quelle couche trouve-t-on un service pour stocker les données dans une base de données relationnelle ?
:::block {style="font-size:0.6em"}
1. **Présentation**  
La couche présentation contient des services pour reconnaître des gestes des utilisateurs à travers une ligne de commande, des fenêtres et boutons, des microphones, des caméras, etc.
1. **Application**   
La couche application contient des services de gestion des requêtes de la couche présentation, du workflow, de l'état des sessions, etc.
1. **Infrastructure métier**   
La couche d'infrastructure métier contient des services de bas niveau utilisés dans de nombreux domaines métier.
1. **Fondation**   
La couche fondation contient des services technique et frameworks de (relativement) bas niveau tels que les fonctions mathématiques, les structures de données, les threads, les entrées-sorties des fichiers, les bases de données et les réseaux. 
1. **Domaine(s)**   
La(les) couche(s) domaine(s) contient(nent) des services du domaine, ou les règles du domaine, etc.
1. **Services techniques**   
La couche de services techniques contient des services de techniques et frameworks de (relativement) haut niveau tels que la persistance et la sécurité.
:::
Note: reponse fondation

--

###### Dans quelle couche trouve-t-on un service pour calculer l'arc tangente d'un nombre réel ?
:::block {style="font-size:0.6em"}
1. **Présentation**  
La couche présentation contient des services pour reconnaître des gestes des utilisateurs à travers une ligne de commande, des fenêtres et boutons, des microphones, des caméras, etc.
1. **Application**   
La couche application contient des services de gestion des requêtes de la couche présentation, du workflow, de l'état des sessions, etc.
1. **Infrastructure métier**   
La couche d'infrastructure métier contient des services de bas niveau utilisés dans de nombreux domaines métier.
1. **Fondation**   
La couche fondation contient des services technique et frameworks de (relativement) bas niveau tels que les fonctions mathématiques, les structures de données, les threads, les entrées-sorties des fichiers, les bases de données et les réseaux. 
1. **Domaine(s)**   
La(les) couche(s) domaine(s) contient(nent) des services du domaine, ou les règles du domaine, etc.
1. **Services techniques**   
La couche de services techniques contient des services de techniques et frameworks de (relativement) haut niveau tels que la persistance et la sécurité.
:::
Note: reponse Fondation, mettre les couches dans l'ordre

---


<!-- .slide: class="rdcuslide center" -->
# Retour sur l'exercice RDCU<br/>🦗

Note: 0 soumissions...

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
- Indirection{style="color:green"}
- Protection de variation{style="color:green"}

---

<!-- .slide: class='methodologieslide center' -->
### Passer des diagrammes au code

- Passer des diagrammes au code?
- Comment faire pour s'assurer de respecter les exigences client?
- Ne pas oublier la ***Visibilité*** des objets (ndc 9.3)

::: block {style="align-items:center"}
![](assets/FigA.1-avec-contrats.svg){.plain width=75%}
:::

--

<!-- .slide: class='methodologieslide center' -->
## Qu'est-ce qui est plus important?

![savoir-faire](/assets/05-chp13F-14A-premiere-etude-conception-objet_9.pptx/UML-statique-dynamique.png){.plain width=80%}

Note: les deux ont des avantages et inconvénients

--

<!-- .slide: class='methodologieslide center' -->
### Outils pour automatiser le passage

![Modèles et code](assets/Forward-reverse-round-trip-engineering.png){.plain}

- [tplant](https://github.com/bafolts/tplant): Code vers plantuml
- [puml2code](https://opensourcelibs.com/lib/puml2code): Plantuml vers code 


--

<!-- .slide: class='methodologieslide center' -->
# Exercice sur Google Classroom

[LOG210: Créer des méthodes à partir des diagrammes d'interaction](https://docs.google.com/document/d/11jUkKYpYbUdTHipNbg2DJ6PjAj0QkQcTcK9mVOafTQU/edit?usp=sharing)

---


<!-- .slide: class='methodologieslide center' -->
# Dette technique (7.x)<br>Réusinage (ndc 11.x)

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Qu'est-ce qui **n'est pas** un exemple de dette technique?

::: block {.socrative}
1. Il faut que ça marche en 48 heures.
1. On a raté un peu ce cas d'utilisation, mais nous avons obtenu du financement.
1. Nos développeurs coûtent cher, mais ils valent l'argent.
1. Les singletons partout, ça ne fait pas de mal.
1. L'importateur du format XML est robuste mais difficile à comprendre. Le format n'est pas censé évoluer.
:::

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Une conséquence d'un réusinage est que le code s'exécute plus rapidemnt?

**Vrai ou faux?**

---

<!-- .slide: class='methodologieslide center' -->
## Architecture logique (en couches)<br>F12.1-12.8/A13.1-13.8
- Architecture logique (en couches) [F12.1-12.8/A13.1-13.8](https://log210-cfuhrman.github.io/log210-valider-architecture-couches/)

--

<!-- .slide: class='methodologieslide center' -->
![socrative_logo](assets/logo-socrative.png){width=35 .plain}tiny.cc/quizdesign $\rightarrow$ ETSDESIGN

Quel concept de LOG121 est proche de la notion d'architecture logique (en couches)?

::: block {.socrative}
1. Polymorphisme
2. Patron itérateur
3. MVC
4. Compilateur Java
5. Patron méthode fabrique
:::

Note: MVC

---

<!-- .slide: class='methodologieslide center' -->
# Conception de packages (ndc 18)

---

## Article sur le coût de ne pas faire de test
- https://www.alithya.com/fr/perspectives/les-5-bénéfices-des-tests-automatisés-en-développement-logiciel
- https://www.cftl.fr/wp-content/uploads/2015/04/avis-expert_retours-sur-investissements-tests-logiciels.pdf
- https://www.cloudnetcare.fr/2020/05/15/couts-automatisation-tests-mythes-realite/
  


---

### Dette technique en pratique <a onclick="window.open('https://youtu.be/eLKutSXOPMk','_blank')">4.09m</a>
  - Chaque équipe de laboratoire:
    - doit trouver une méthode qui a une dette technique au niveau de leur laboratoire,
    - doit modifier le code pour résoudre la dette technique,
    - doit présenter dans Zoom le avant et après du réusinage au niveau du code et de la valeur de la dette technique.

---

<!-- .slide: class='feedbackslide center' -->
# Feuille d'une minute

SVP m'écrire un courriel pour dire ce qu'étaient les points les moins clairs de la séance.

---

<!-- .slide id="whiteboard" --->

---


<!-- .slide: class='feedbackslide center' -->
# Conférencier

## Beatriz Kanzki  
Big Data Architect - Machine Learning and AI
![Rackspace logo](https://752f77aa107738c25d93-f083e9a6295a3f0714fa019ffdca65c3.ssl.cf1.rackcdn.com/newsroom/2020/logos/png/Rackspace_Technology_Logo_RGB_BLK.png){.plain width=50%}

---