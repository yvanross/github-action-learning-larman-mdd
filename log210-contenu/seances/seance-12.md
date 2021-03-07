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
title: 'LOG210-C12-00-seance'
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
<!-- .slide: id='deploiement' class="packageslide" -->
# LOG210 Séance #12
## Analyse et conception de logiciels


1. [Diagrammes de déploiement](#deploiement)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[10.02m](https://youtu.be/yiS-ga3F4yg)
1. [Diagrammes de composants](#composant)
1. [Révision diagrammes UML](#uml)
1. [Sondage sur technologies](https://forms.gle/Bzn4q4tSoseoag796)
1. [Révision Observateur](#observateur)

Note: 35-40 min théorie déploiement et composant + 20 min exercice + 10 min pause
Note: 52m


--


<!-- .slide: class="packageslide" -->
## Diagrammes de déploiement
Documenter (1) comment les fichiers exécutables seront affectés sur les nœuds de traitement et (2)&nbsp;la&nbsp;communication entre composants physiques

![image7](assets/03-chp31F-37A-Diagrammes-de-deploiement-et-diagrammes-de-composants-12.pptx/image7.jpg){.plain width=30%}
![a](assets/03-chp31F-37A-Diagrammes-de-deploiement-et-diagrammes-de-composants-12.pptx/image8.jpeg){.plain width=30%}
![](assets/03-chp31F-37A-Diagrammes-de-deploiement-et-diagrammes-de-composants-12.pptx/image9.png){.plain width=10%}
::: block {style=font-size:0.3em}
- http://wahlnetwork.com/2012/06/03/hp-discover-2012-targeted-sessions/
- http://gadgetsin.com/speck-pixelskin-hd-wrap-ipad-2-case.htm
- http://wiki.open.hr/wiki/Samsung_I7500_(Samsung_Galaxy)
:::

--

<!-- .slide: class="packageslide" -->
## Types de nœuds
**Nœud physique (équipement)**

Ressource de traitement physique (p.ex. de l'électronique numérique), dotée de services de traitement et de mémoire destinés à exécuter un logiciel. Ordinateur classique, cellulaire, etc.{align=left}

--

<!-- .slide: class="packageslide" -->
## Types de nœuds

**Nœud d'environnement d'exécution  
(EEN *execution environment node*)**

Ressource de traitement logiciel qui s'exécute au sein d'un nœud externe (comme un ordinateur) et offrant lui-même un service pour héberger et exécuter d'autres logiciels.{align=left}

--

<!-- .slide: class="packageslide" -->
## Nœud d'environnement exécution

- Système d'exploitation (OS) est un logiciel qui héberge et qui exécute des programmes
- Machine virtuelle (JVM ou .NET)
- Moteur de base de données (p.ex. PostgreSQL) exécute les requêtes SQL
- Navigateur Web héberge et exécute JavaScript, applets Flash/Java
- Moteur de workflow
- Conteneur de servlets ou conteneur d'EJB

--

<!-- .slide: class="packageslide" -->
## Diagramme de déploiement

![larman/F31.1, A37.1](assets/larman/F31.1.svg){.plain width=60%}
::: block {style=font-size:0.5em}
fig. F31.1, A37.1
:::

--

<!-- .slide: class="packageslide" -->
## Diagramme de déploiement

![larman/F32.2, A38.2](assets/larman/F32.2.svg){.plain width=40%}
::: block {style=font-size:0.5em}
fig. F32.2, A38.2
:::

--

<!-- .slide: class="packageslide" -->
## Exemple 1/

La figure 2 de [Distributed visualization of gridded geophysical data: a web API for carbon flux](https://www.researchgate.net/publication/307681378_Distributed_visualization_of_gridded_geophysical_data_a_web_API_for_carbon_flux):

![](assets/A-unified-modeling-language-UML-deployment-diagram-for-the-Carbon-Data-Explorer-CDE_W640.jpg){.plain width=50%}

--

<!-- .slide: class="packageslide" -->
## Exemple 2/

![seance-12-diagramme-deploiement](https://www.plantuml.com/plantuml/svg/LLBTJi8m5BxVKvpWXLSi4haYG80X6YCwCnGJ9APZnz7GdPAsOnB20_aSlfWju_UcIK-_VdzjHnkcJ9u9JoyuBPbY6MYp5cXNnMUxasiZbs0anD8OcK725SuCb-G9_3RkGF5qRixc7ia4eT9u7nPCuTTTzC4_QGDTOcAj3RP2lszXy1ArtkASJ0wrkdzJXsq5casDQeMgtOOhuLXJXKYmyG3sdCyffvyZC5TGO6pHJCCuEg72jPbRXLk_xeG7DXKMKYrQ0y7qeXJAf77NIwJJA-RSu4uAO2QpfIGa0q4tz4jFJYEOEv7jIMYuZbwV75tCD88T9PBexnTrwQdVyoRspXIgYIoe2fD-RtgOv4kx7qTJRtlewnu9RUbXu0XdWZjzPzk-aUlrM4eiShpeXAruoboSeHqemifvciiiUzfciqjfBfXwZA3crorr6I-mRhQUinYSJ5kJq827qIZqEaY9_HF_ "seance-12-diagramme-deploiement"){.plain}

::: block {style=font-size:0.4em}
[(PlantUML)](http://www.plantuml.com/plantuml/uml/LLBTJi8m5BxVKvpWXLSi4haYG80X6YCwCnGJ9APZnz7GdPAsOnB20_aSlfWju_UcIK-_VdzjHnkcJ9u9JoyuBPbY6MYp5cXNnMUxasiZbs0anD8OcK725SuCb-G9_3RkGF5qRixc7ia4eT9u7nPCuTTTzC4_QGDTOcAj3RP2lszXy1ArtkASJ0wrkdzJXsq5casDQeMgtOOhuLXJXKYmyG3sdCyffvyZC5TGO6pHJCCuEg72jPbRXLk_xeG7DXKMKYrQ0y7qeXJAf77NIwJJA-RSu4uAO2QpfIGa0q4tz4jFJYEOEv7jIMYuZbwV75tCD88T9PBexnTrwQdVyoRspXIgYIoe2fD-RtgOv4kx7qTJRtlewnu9RUbXu0XdWZjzPzk-aUlrM4eiShpeXAruoboSeHqemifvciiiUzfciqjfBfXwZA3crorr6I-mRhQUinYSJ5kJq827qIZqEaY9_HF_)
:::

--

<!-- .slide: class="packageslide" -->
## Exemple 3/

![Apple iTunes](https://www.plantuml.com/plantuml/svg/ZLDBJwmm5DxtLvpWmkGcOCQbCSHNuYn6XuIvcStT53WwJKgBRH7dtlZVxpdGA3wYiYhqVC-MCn-a2tshuRphD8BQz0Qz41hl0WGBJjtl0ZJAOHsKDSBO1Y6PPhTOGOdk4Lq2fwSDFgeQy_oWa1etlNlehV88_mJGCy8cRf2ULbj235Xv5HYoOfLIwjQQ2E27ZAaxMOS8n193tsNuX8ILv43LaZtb-OXuVXLAeb8PhCDa4Yn_8CWXfRcdQCaDDah2IbLEkdqI1Px58JjF6pkOb3bZ7KlR8bpQjki3Tq5woyjv8n_L9XoCiqCrMOFAsS6ZUmiGRutDEtnVmu73HdoPWt4tgmMGG8lN3j5GfbXPiRC6ZrGXcoCCTJRDNf56Qoj5LD-cKUioWjPSzhhyCiYdpexVEml86xSBCKthSLfn0Gw5tvjwvwnHVobtXM4WLBJfeTgBU9VHDC1CudO1MSRvNrR7uf2FwbUQZf_ZYqxfJ0Gj-VCLdC3lye9F7h8-osc4Y7cBxzG91UsS3RQsEi__cFd5Wo9k42_HZ29KpUoDzEdmHwhj1whbPbE8iSkPra0_eaRluNlHCyfD__L_ "Apple iTunes"){.plain width=80%}

::: block {style=font-size:0.4em}
[(PlantUML)](http://www.plantuml.com/plantuml/uml/ZLDBJwmm5DxtLvpWmkGcOCQbCSHNuYn6XuIvcStT53WwJKgBRH7dtlZVxpdGA3wYiYhqVC-MCn-a2tshuRphD8BQz0Qz41hl0WGBJjtl0ZJAOHsKDSBO1Y6PPhTOGOdk4Lq2fwSDFgeQy_oWa1etlNlehV88_mJGCy8cRf2ULbj235Xv5HYoOfLIwjQQ2E27ZAaxMOS8n193tsNuX8ILv43LaZtb-OXuVXLAeb8PhCDa4Yn_8CWXfRcdQCaDDah2IbLEkdqI1Px58JjF6pkOb3bZ7KlR8bpQjki3Tq5woyjv8n_L9XoCiqCrMOFAsS6ZUmiGRutDEtnVmu73HdoPWt4tgmMGG8lN3j5GfbXPiRC6ZrGXcoCCTJRDNf56Qoj5LD-cKUioWjPSzhhyCiYdpexVEml86xSBCKthSLfn0Gw5tvjwvwnHVobtXM4WLBJfeTgBU9VHDC1CudO1MSRvNrR7uf2FwbUQZf_ZYqxfJ0Gj-VCLdC3lye9F7h8-osc4Y7cBxzG91UsS3RQsEi__cFd5Wo9k42_HZ29KpUoDzEdmHwhj1whbPbE8iSkPra0_eaRluNlHCyfD__L_)
:::


---

<!-- .slide: id='composant' class="packageslide" -->
# LOG210 Séance #12
## Analyse et conception de logiciels
1. [Diagrammes de déploiement](#deploiement)
1. [Diagrammes de composants](#composant)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[17.37m](https://youtu.be/fdgdvvtYcIA)
1. [Révision diagrammes UML](#uml)
1. [Sondage sur technologies](https://forms.gle/Yu1wbZTw4K9TgmQT7)
1. [Révision Observateur](#observateur)

--

<!-- .slide: class="packageslide" -->
## Diagrammes de composants

Un composant n'est pas clairement défini dans l'UML:
::: block {style=text-align:justify}
« Un composant est la **partie modulaire** d'un système qui encapsule son contenu et dont la manifestation est **remplaçable**  dans son environnement. Il définit son **comportement**  en termes d'**interfaces**  fournies et requises. Ainsi, un composant peut être utilisé comme un type dont la conformité est définie par ces interfaces fournies et requises. »

--

<!-- .slide: class="packageslide" -->
## Exemple en PlantUML

Figure F31.2 Composants UML

![Composants UML Figure 31.2](https://www.plantuml.com/plantuml/svg/NP3DQiCm48JlUeh5bwO7cIQzbH3IfBHGua0nFOKSXBnLHEoLaLQbUVkk3Gac1_tDp7wITftOHCvT2zlGzI4PuWJVrGxUlSiHuNbUBbGwU-fDD1qalhGeS_HsA9eu6sFFBePCpJQq8G97Gqai99wax709YLQF844iL8i_31mWUdTYQ7n4opwG6bP3Jc9x_ECF95WkqoKnTglLnDoyYNxZYdLDwzcJXkApgWiuL9YISPvSZV7NMpogsIFKNxjRk2nNura6Q2rGzI1WtUfH7RQ7asyQf6FKS4zJ51Z19DZFrMjcQPi8Pln47tA4JCfUkwkGci56TK-HDmW0Ng0er5fIqfn_ "Composants UML Figure 31.2"){.plain width=100%}

::: block {style=font-size:0.4em}
[(PlantUML)](http://www.plantuml.com/plantuml/uml/NP31QiCm44Jl-eh5bwO7cIQzbM3IfBHGua0nFOKSXBnLHEoLaLQb-Vkk3GaX1x7IpF3GpYgnYPpx3ZQX7q8on0c-wosyUvSZmlEyNAXqyZIOQ7fO6tjoCMHgDw4B4JWQIc8XyKtAZYWIhU5pXo3qXUhmXu43HE-E3AsFQDa7KkCqv2Ismp_-G8BbCfqJOrzLD-RwJVGhLwnBMi-UD1IVTLF0liQKZFFa6eo_tk91pHwX-TfUmsLPJMyveBL0rOE0TQSdTRpkZxvjaGvHmprDKM04as0tLw-PfHmHpBJ447A4JCfUEbH8xMYZkgV87mG0Br0KQYKfAUSV)
:::


--

<!-- .slide: class="packageslide" -->
### Existe-t-il réellement des composants logiciels?
::: block {style=font-size:0.7em}
**They have to exist.** Sales and marketing people are talking about them. Components are not a technology. Components are about how customers want to relate to software.{align=left}
- They want to be able to buy their software a piece at a time, and to be able to upgrade it just like they can upgrade their stereo.
- They want new pieces to work seamlessly with their old pieces, and to be able to upgrade on their own schedule, not the manufacturer's schedule.
- They want to be able to mix and match pieces from various manufacturers. This is a very reasonable requirement. It is just hard to satisfy.

[RalphJohnson do component exist](http://www.c2.com/cgi/wiki?DoComponentsExist)
:::

--

<!-- .slide: class="packageslide" -->
### Métaphore cinéma maison

-  [IFTTT](https://ifttt.com/)
1. [Heroku](https://elements.heroku.com/search/addons?q=redis)
1. [IOT](https://fr.wikipedia.org/wiki/Internet_des_objets)

![Cinema maison](http://farm5.staticflickr.com/4076/4807198270_2796cd34ef_b.jpg){.plain width=40%}
![amplificateur](http://farm5.staticflickr.com/4111/4841917543_83886eaf1e_b.jpg){.plain width=40%}
::: block {style=font-size:0.5em}
[viet](http://www.flickr.com/photos/viet/4807198270/)    /    [photostream](http://www.flickr.com/photos/criminalintent/4841917543/sizes/l/in/photostream/)
:::


--

<!-- .slide: class="packageslide" -->
## Diagramme de composants
![larman/F31.2, A37.2](assets/larman/F31.2.svg){.plain}
::: block {style=font-size:0.5em}
fig: 31.2, A37.2
:::

--

<!-- .slide: class="packageslide" -->
## D'autres exemples
![larman/F14.2](assets/larman/F14.2a.png){.plain width=75%}
::: block {style=font-size:0.5em}
fig.: F14.2
UML Distilled: A Brief Guide to the Standard Object Modeling Language, Third Edition
:::

--

<!-- .slide: class="packageslide" -->
## Exercices diagramme de déploiement

1. [Application web](https://docs.google.com/document/d/1KdTyAWF27UavHbx1uLpxswOpJbw56A1oNnEUoZi45KM/edit?usp=sharing)
1. [Tutorial online](http://www.peter-lo.com/Teaching/U08182/Tut_04_ans.pdf)
1. [UML deployment diagram - Apple iTunes](https://www.conceptdraw.com/examples/uml-deployment-diagram)
1. [UML Deployment Diagrams Examples
](https://www.uml-diagrams.org/deployment-diagrams-examples.html)

::: block {style=text-align:left}
Prenez le temps regarder la documentation de planUml pour les diagrammes de déploiement et de composants. Nous ferons un exercice la semain prochaine.
:::
  - https://plantuml.com/deployment-diagram
  - https://plantuml.com/component-diagram

---

<!-- .slide: id='uml' -->
# LOG210 Séance #12
## Analyse et conception de logiciels
1. [Diagrammes de déploiement](#deploiement)
1. [Diagrammes de composants](#composant)
1. [Révision diagrammes UML](#uml)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[16.57m](https://youtu.be/2XmhNF-0GwU)
1. [Sondage sur technologies](https://forms.gle/Yu1wbZTw4K9TgmQT7)
1. [Révision Observateur](#observateur)

--


### Méthodologie  de développement  UML 
::: block {style=font-size:0.9em}
- UML est  un langage  de modélisation général  qui inclut  un large éventail  de concepts, notations et diagrammes.


- Avant d’intégrer  UML dans  un processus  de développement , il est fondamental  de définir correctement une méthodologie  pour prendre en  charge son utilisation.
    - La définition d’une méthodologie  de développement facilitera l’intégration  et l’adoption d’UML , augmentera  la qualité  des modèles  et augmentera  la productivité  des développeurs.
:::

--

### Méthodologie  de développement  UML 
::: block {style=font-size:0.7em}

- Pour chaque  phase de développement , vous devez définir
    - Ensemble de diagrammes  UML utilisés dans  la phase 
    - Rôle  de chaque diagramme
    - Sous-ensemble de la notation UML utilisée
    - Remarque: certains diagrammes peuvent jouer   différents rôles dans différentes  phases du processus  de développement .
        - Par exemple . Les diagrammes  de séquence peuvent être utilisés  pour décrire  les interactions entre le système  et les acteurs lors  de la phase de modélisation  de cas d'utilisation , fournir  des détails  sur l'exécution  de scénarios lors  de la phase de conception et capturer des traces d'exécution lors  de la phase de test.
- Définir  un ensemble de règles  et de directives pour développer  des éléments  de modèle  aux différentes  phases de développement
:::

--

## Personnaliser / Customiser  UML
::: block {style=font-size:0.8em}
- UML fournit  un ensemble de concepts, notations et diagrammes pouvant être utilisés dans  un large éventail  de contextes  de développement.

- Cependant, seul  un sous-ensemble de ces éléments est requis dans  tout contexte  de développement

- Le mécanisme  de profil  UML peut être utilisé  pour personnaliser  le langage  UML pour des domaines  de développement spécifiques.

- Mais  la plupart  des outils  UML n'ont  pas réussi à fournir  un support de premier ordre  pour la personnalisation  et la modélisation spécifique à  un domaine.
:::

--

## Étapes de modélisation
![exigences](assets/LOG210-02-H19-UML-pour-Architecture-v3-87.pptx/exigences.png){style=border:none}


--

## Dimensions de la modélisation UML

Perspective selon [UML par la pratique](https://www.amazon.ca/UML-2-5-PAR-PRATIQUE-%C3%89D/dp/2212675658)

![3 axes](assets/UML_par_la_pratique_3_axes.png){.plain width=60%}

--

## Structure vs Comportement

<!-- ```plantuml
@startuml Classification de diagrammes UML
skinparam backgroundcolor transparent
skinparam style strictuml
'left to right direction
'skinparam linetype ortho
'skinparam groupInheritance 2
hide empty members
abstract class "**Diagrammes UML**" as UML #ffffff
abstract class "Structure" as S #ddffdd extends UML
abstract class "Comportement" as B #ddddff extends UML
class "Cas\nd'utilisation" as CU extends S implements B
class Activité extends B
class État extends B
abstract class "Interaction" as Int #ddffff extends B
class Séquence extends Int
class Commu-\nnication extends Int
class Classe extends S
class Object extends S
class Package extends S
class Déploie-\nment extends S
class Composant extends S
@enduml
``` -->

![Classification de diagrammes UML](https://www.plantuml.com/plantuml/svg/RP9DJiCm48NtESM8BYf5OiC92ksc4WYagBjk77kIcFeds1D4Zy1HUevSZ8bfsfIGXHFFUz_CUE9L916eioQB1-rQ4OI5KiX37NpdbFJ61w0WN6G97KrSaOu6UGrQ9dvfi28W3q7N3O7I0ILfxxBbbJ7Q8HrR11-eyLDbgDTkNOD1at0IuI5hj490sz8HBDeIGyn4oVM49916n0XtURxHecRUOeJTotEUtu58Nx2eqZD32WeTDnmmEGjOA5LLIW5-4JgLs1cpzhRbZj7o11BsD603U8EDRX7tJYqxqaP7COmWCUlTnLo0jgr9wJZNcNlaQNrgwayNswZqtoHe4ltRtjOH3lkn4kz_ZpNfRynLzAUF3eS1ZmgxpneVqtRtU-UqJ6t_PndMArkSmw_bE__iMVYDBvAev_PDVsgDryYrXXdCz3JlA6wK5R_vclq0 "Classification de diagrammes UML"){.plain width=100%}


--

#### Les meilleures pratiques  – Cas d'utilisations
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

--


#### Les meilleures pratiques  – Structure
::: block {style=font-size:0.8em}
- Respecter le décalage  de représentation

- Commencez par définir  les classes directement dérivées  des exigences et du modèle du domaine. Ajoutez  de manière itérative  de nouvelles  classes et raffinez -les selon vos besoins  au fur et à mesure  de votre  progression dans  le processus  de conception
- Définissez  les principaux attributs  de la classe . Ajoutez  de manière itérative  de nouveaux attributs  au fur et à mesure que vous avancez dans  le processus  de conception de manière itérative
- Utiliser une  convention de nommage cohérente  pour les classes et les attributs
:::

--


#### Les meilleures pratiques  – Diagramme d'intéraction
::: block {style=font-size:0.75em}
- Se concentrer  sur le comportement  global du système  et la communication entre le système  et l'ensemble  des acteurs
    - Ne commencez  pas à prendre  des décisions  de    conception à ce stade

- Concentrez-vous  sur les principaux scénarios , n'essayez  pas d'être exhaustif

- Décomposer  les diagrammes  de séquences  longs en  fragments plus petits, le cas échéant
    - Définir  des interactions séparées  et utiliser  « Interaction Use » pour faire référence à  des interactions définies séparément
:::


--

### Les meilleures pratiques  – diagramme activité
- Choisissez  le «bon» niveau d'abstraction  / détails
    - Évitez  le piège  de spécifier  les détails  de conception,… vous  le ferez  plus tard!


- Maintenir  la cohérence  avec les descriptions de cas d'utilisation 
    - Ne signifie  pas une traçabilité individuelle

- Concentrez-vous  sur la clarification et la compréhension  du modèle

--

#### Les meilleures pratiques  – “Diagramme d'état”
::: block {style=font-size:0.9em}
- Choisissez  le «bon» niveau d'abstraction  / détails
    - Évitez  le piège  de spécifier  les détails  de conception,… vous  le ferez  plus tard dans  le processus  de conception!
- Maintenir  la cohérence  avec le modèle  de cas d'utilisation
    - Ne signifie  pas une traçabilité formelle individuelle
- Exploiter les relations de cas d'utilisation  (et de scénarios) pour structurer les machines d’états
- Ne définissez  pas une  machine d’états pour chaque classe , mais uniquement  pour les classes actives
:::



---


# LOG210 Séance #12
## Analyse et conception de logiciels
1. [Diagrammes de déploiement](#deploiement)
1. [Diagrammes de composants](#composant)
1. [Révision diagrammes UML](#uml)
1. [Sondage sur technologies...](https://forms.gle/Yu1wbZTw4K9TgmQT7)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}
1. [Révision Observateur](#observateur)

Note: https://docs.google.com/forms/d/1brcV7CYulWB2piWam-3XwsoRRcU3vb68LJy1D3Jdno4/edit#responses

---

<!-- .slide: id='observateur' class='gofslide' -->

# LOG210 Séance #12
## Analyse et conception de logiciels
1. [Diagrammes de déploiement](#deploiement)
1. [Diagrammes de composants](#composant)
1. [Révision diagrammes UML](#uml)
1. [Sondage sur technologies](https://forms.gle/Yu1wbZTw4K9TgmQT7)
1. [Révision Observateur](#observateur)![](assets/Fleche-gauche-rouge-icon-64b.png){: .arrow}[8.47m](https://youtu.be/J_2E8JggVf0)

--

<!-- .slide: class="gofslide" -->
## Exercice Observateur

- Rappeler le patron Observateur
- Réviser le diagramme de structure
- Réaliser les diagrammes de comportement
  - Communication
  - Activité
  - Séquence

--


<!-- .slide: class="gofslide" -->
## Solution : Observateur structure
![larman/F26.22 p 466](assets/larman/F26.22.png){.plain}{width=80%}

fig. F26.22

--

<!-- .slide: class="gofslide" -->
## Observateur communication

Voir la note pour la solution

Note:![Diagramme de communication  initialize](https://www.plantuml.com/plantuml/png/XP2n3eCm34JtV8NL2GOgiQ8ACLHC34Zv0ekur58Igc26zkkBgTJIBfsIdE-UJsbcmIHBy4POFC6PSKmO0e4Z6AOGbiW32a-n0euiZ9uVP3nT16I2nEDLm76YGJr6JupZ2ZhCwAbTKLHMzdqz0CvWsxrlcxxqBxdZMKvzccwKvAuFYfJgpTZrncfjA8eLjY-MAGnqTMvikyqhA8-0plsYiby1Ferpg8tLTDThlDJyFtz3qQt_-0G0 "Diagramme de communication  initialize"){.plain}
![Diagramme de communication  setTotal (polymorphe)](https://www.plantuml.com/plantuml/png/NP1DJiCm48NtFiLJLobAaRgDKDK5tGKHAUmG2vCCYOKzjkn9KOx4ERWOIQ0KPUM_-JuzlsCI7MLmLeaHIxWtkelQEK9BQBnp0vj6Y_5S894yUT4MMV1sT3w6dhRAqfj0FABfUa5h8ZNpk9fNpTtat1IrjhI1JgZ_NuVe0qKPIvE4cEApUIdc_LsrUZWiR5afLSzfiTkXliR97ZpJ2AQFvRZ5GTNB20hi4OPNQr9_KPxEn9BL4Wrtk0J8VmndRGVwmyjgmc_tD_2yWgVFG7gJSlnwM3lAiPAm5vfOMCFl1Hx3rsTSUiIrF7KaRgVklm40 "Diagramme de communication  setTotal (polymorphe)"){.plain}
![Diagramme de communication  setTotal SaleFrame1](https://www.plantuml.com/plantuml/png/JOz1QiCm44NtEiKdgxGa0M-rA5cqsOKMd0iCzjGMbMQCD0xuI3r7BnQv8RIh-GplF_Z7OfHjJj5PiCXu3JHaIedHCpfDQPRGaGKLZy9sKQE8bYAVAiMDY_nfC4KEmsZeG-PkXPrR0ybGbHk_yXjGGVl_NHuM_-UxKoVNOh-lrwCvDCzG-SWwSRRbxSfYsvM7ZQ7iq5eECa1gUOUp2Y-uKfpv2IzErBXs4ODyURnFFz_vTmacZKlIF8tiZYnzNNy3 "Diagramme de communication  setTotal SaleFrame1"){.plain}



--

<!-- .slide: class="gofslide" -->
## Observateur Activité

Voir la note pour la solution

Note: ![Diagramme d'activité (initialise)](https://www.plantuml.com/plantuml/png/ROyn3i8m34Ltdo8RwTWrPUY0c1YGE855B6GfIQl4885o8SxHYv44bQ5YixxV-vR791ZbxXq8YoDrOBn5z9wKtU5L-C6ol9NcmCBeE547a1CwEXQAp6MT-Woj2SoAlaZNhQfmDq1kR0Q3rfxZD5EKvucJKA2eju7wNUYRMlFz5lfs_NUBbMIQOQHWotCV "Diagramme d'activité (initialise)"){.plain}
![Diagramme d'activité (setTotal généralisation)](https://www.plantuml.com/plantuml/png/NP0nRiCm34LtdO9R7Q0dK9SCoTQY0PAjwC0qX4D08WM9Tc705_8vVB78gTCX8ud_7_d_jXXcws9mnXO8TenjnXW9BY_uOzoppHCqXUoaXW7QUP9voXYueB7Anet-Y856TmSv_r0s7oeqWD3lVToyEP-wSxLT3raJPHlsFOarHyiiBVIO6S-1Nk7FPwjfJAlwdOkHKFxYRtzusetEgpnXwqzGS06k5mJZFxt7q56bYnfv-4nBeYKD90r3r9okLFDeSbkIIotd1W00 "Diagramme d'activité (setTotal généralisation)"){.plain}
![Diagramme d'activité (setTotal spécialisation)](https://www.plantuml.com/plantuml/png/FP11QiD034NtEeLsjI4KkfqIoABDhhIGN434IY8OIyECOchmXNAENAmpfkr6_CN__tsqAqxPRsC45u-CRqANJEF8E3pHoMKIVzonA-n7SufOqkD-4efIoCMqXoKSAFA-PlXbWRKDWkbNjiJPv_U9rRjcmLBF1W-UHI-erR_13rEUSQ9uu_uLr9m3VbP2NiinMPn7o-dAiBJqaRzzBno7yAyMa7FNod2xNGdFtdRsw5TMG0njUJLtlzm_5kiWvphN4koghW_u0G00 "Diagramme d'activité (setTotal spécialisation)"){.plain}


--

<!-- .slide: class="gofslide" -->
## Observateur Séquence

Voir la note pour la solution

Note: ![diagramme de séquence (initialise)](https://www.plantuml.com/plantuml/png/VP2nZi8m38RtF8N5r0uti5OdnCJKeL979girO5sQ1CSCvOru3bxid2AGhiDjjl_l_vrudnL5RvDtoke9HiQpu3HPHP2VZ-kDma1GSM1bz9ofTlc7GqAZ8Ejidgp2mv9XK-M14mQ5JKPF1wEewT_LTWEOeJ_y1HVzfQo4bhD-Tn8JYSwbeK2oMz2sSyVujRCmWERzkZjL9GlAwjg5g0J2vuj2F1dOG4pFXw1o392YdwSewKBE8aeGD83ZkDvMhGVm-LVj-c9ikvVpNt9FORGB_G80 "diagramme de séquence (initialise)"){.plain}
![diagramme de séquence (setTotal généralisation)](https://www.plantuml.com/plantuml/png/PT31ReCm303GUxx2wWcaxGVGLFMo6vEGsAtQmGMBMGjEcXWcFedluCSMQ3kjtSsEusSdXwWOTEYjCSfg2Lh6Bc3VfuWWBlDv86a8iaZwxXGjTCiionpGSaHb9xc9NomUKnD4dH8HDN2pcUbKkM6Feh0hQhIq0unGtnTyS9w2JYL79Q5mv8zYZL-gXy9-wouhStJFUwYXWDjMsPiJca3eUqjpWutoY4ffLWtNotuufQK_R-hhIA9PdPQL3aOCZ2TBJt2Hz1zZdVDmmSegQKuU85oVZYjnDGNxNsz4Er1kI5hJqX_rBZcaSlgs7m00 "diagramme de séquence (setTotal généralisation)"){.plain}
![diagramme de séquence (setTotal spécialisation)](https://www.plantuml.com/plantuml/png/RP11QiD034NtSmgHbGrfeLj3IZRrhhHWNq3OQY8wrandP5CVAUV8nQfnIccXAmbzwV-7ZbanwJnvfwoUO6Gy9PmcwmZozV8namm4LIRjWwA77A-NWT5pHkKWjSllB17j1hAkvf0ryR0vsbHvu8YYi6iwzBG3pD3z8xHsJmytkVshPvDx-jIMoOzDyzFUbllMIL22nAUpGdY3he4NGqmR7SJWrocaU2RNmTsZcKC3GLvJY9HqVLf8j2e0K6Bsq1cyd42CPW_FGMY51VrCjSD1UK5BChuGTLk1ms6xkzVo6cVc9Q8l6ULVHbfz6-Qjr8va13VIRxEZpUnRNm00 "diagramme de séquence (setTotal spécialisation)"){.plain}



---

<!-- .slide: class="feedbackslide" data-background-color="skyblue" -->
## Séance #12
### [Rétroaction: Page d'une Minute](https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs)
1. Quels sont les deux [trois, quatre, cinq] plus importants [utiles, significatives,
surprenantes, dérangeantes] choses que vous avez apprises au cours de cette session?
1. Quelle (s) question (s) reste (s) en tête dans votre esprit?
2. Y a-t-il quelque chose que tu n'as pas compris?

https://1drv.ms/u/s!An6-F73ulxAOhVyiCB46jTelNVLs