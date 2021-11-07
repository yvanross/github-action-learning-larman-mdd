# Laboratoire 01 ## Guide de correction

## Université
- La classe université est facultative
- SGB fonctionne uniquement avec une seule université donc SGA doit fonctionner uniquement avec une seule université.

- La classe université permet de développer un SGA qui pourrait représenter plusieurs universités.  Ce qui n'est pas nécessaire pour ce projet.

- Si université est utilisé., alors université contient la liste des Étudiants et la liste des Enseignants de SGA.

- Si Université n'est pas utilisé alors 
- Étudiant aura une liste et des méthodes statiques permettant de gérer la liste des étudiants de SGA.
- Cet attribut statique devrait apparaître dans le MDD
- Enseignant aura une liste et des méthodes statiques permettant de gérer la liste des Enseignants. 
- Cet attribut statique devrait apparaître dans le MDD
- Les Enseignants auront chacune une liste de cours.

## Forte cohésion et faible couplage
- Pour maximiser la cohésion et favoriser le faible couplage, les étudiants devraient avoir une classe de router par contrôleur.
- Pour l'instant je vois 4 contrôleurs de session. ControleurCours, ControleurÉtudiant, ControleurEnseignant et ControleurQuestion
- Il devrait alors avoir au moins 4 router.

## SGB
- SGB devrait apparaitre dans le MDD puisque c'est une classe qui représente le système externe avec lequel SGA doit interagir.
- C'est une classe de type FACADE donc SGB doit contenir ou permettre l'accès à la liste des Cours, Enseignant et Étudiant ainsi que les relations entre ces classes.
- Il n'y aura probablement pas de lien entre SGB et les autres classes de SGA puisque vous aurez probablement les situations suivantes:
- Ce sont les contrôleurs de session qui utilisent SGB. Les contrôleurs de session ne sont pas visibles dans le MDD.
- Ce sont les classes étudiant et enseignant qui utilise des méthodes statiques...
- Ils devraient représenter les attributs de type statique dans leurs diagrammes.

## Autre suggestion pour vous faciliter votre correction
- 
- 
- 

