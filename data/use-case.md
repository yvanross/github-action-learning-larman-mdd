## Glossaire
**plateau (plateau d’argent)**
- « Support plat muni de rebords et de compartiments, qui se place à l'intérieur d'un tiroir-caisse et qui sert à garder séparément et à rendre facilement accessibles les différents billets de banque et pièces de monnaie. » [granddictionnaire.com]

**tiroir-caisse**
- Tiroir dans lequel se place le plateau d’argent confié à un caissier.

## CU03-Mise en plateau (Cash in)
**Acteur principal :** Caissier
****Préconditions :****
La caisse est libre et son tiroir-caisse est vide (il n’y a pas de plateau dedans).

**Garanties de succès (postconditions)**
Le caissier est authentifié. Le plateau du caissier est inséré dans le tiroir-caisse et son identificateur est enregistré. Le montant d’argent du plateau est enregistré. L’heure de l’arrivée du caissier est enregistrée.

**Scénario principal (succès)**
1. Le Caissier arrive à la caisse avec son plateau d’argent.
1. Le Caissier saisit son identifiant et son mot de passe.
1. Le Système authentifie le Caissier.
1. Le Système ouvre le tiroir-caisse et demande au Caissier de poser son plateau dans le tiroir-caisse.
1. Le Caissier pose son plateau dans le tiroir-caisse.
1. Le Système reconnaît l’identificateur du plateau.
1. Le Système demande au Caissier de rentrer le montant d’argent du plateau.
1. Le Caissier rentre le montant d’argent du plateau.
1. Le Système demande au Caissier de fermer le tiroir-caisse.
1. Le Caissier ferme le tiroir-caisse.


Pour voir comment un plateau-argent peut être enlevé d’un tiroir-caisse, regarder cette vidéo sur YouTube : https://goo.gl/9HdKNq