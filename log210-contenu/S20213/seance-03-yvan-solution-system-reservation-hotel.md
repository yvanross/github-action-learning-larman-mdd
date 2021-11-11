# Système de réservation de chambre d'hotel

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

# MDD
```plantuml

@startuml MDD
class Client <<Role>>> {
  nom:String
  telephone:String
}
class Hotel <<Objet physique, lieu de service>>
class Reservation <<Transaction>> {
  noConfirmation:String
}
class LigneReservation <<Ligne de transaction>> {
  dateArrive:DateTime
  dateDepart:DateTime
}

class Categorie <<Description d'entité, Catalogue>> {
  nom:String
}
class Commis <<Role>>
class Chambre <<Service,object physique>>

Chambre "*" -- "1" Categorie: A07,A08\ndécrit <
Reservation "1" -- "*" LigneReservation: A02\ncontient >
LigneReservation "1" -- "*" Chambre : A03\nréserve >
Commis "1" -- "*" Reservation: A04\nréalise  >
Client "1" -- "*" Reservation: A04\ndemande >
Hotel "1" -- "1" Commis: A09\nemploie >
Hotel "1" -- "*" Categorie: A11,gére ??? > 
@enduml
```
# DSS
```plantuml
@startuml DSS
skinparam style strictuml
actor ":Commis" as C
participant ":Système" as S
C -> S: demarrerNouvelleReservation()
S--> C: [categorie],  demande dateArrive, dateDepart, quantite
loop [!terminé]
C ->S: reserverChambre(dateArrive:string, dateDepart:string, nomCategorie:string, quantite:int)
S--> C: [categorie],  demande dateArrive, dateDepart, quantite
end
C->S: terminerReservation()
S-->C: [dateArrive, dateDepart,nomCategorie, quantite]
C->S: confirmerReservation(nom:string, telephone:string)
S-->C: noConfirmation

@enduml
```

# Contrat


## demarrerNouvelleReservation()
- Précondition:
  - c:Commis est authentifié
- Postconditions:
  - Une instance r:Reservation a été créée
  - Une association a été créée entre r:Reservation et c:Commis


## reserverChambre(dateArrive:string, dateDepart:string, nomCategorie:string, quantite:int)
PostConditions:
- Une instance lr:LigneReservation a été créée
- lr.dateArrive est devenu dateArrive
- lr.dateDepart est devenu dateDepart
- quantite d'associations ont été créées entre lr:LigneReservation et Chambre sur la base de correspondance avec Categorie.nom == nomCategorie
- Une association a été créée entre r:Reservation et lr:LigneReservation

## terminerReservation()
AUCUNE postCondition

## confirmerReservation(nom:string, telephone:string)
- Une instance cl:Client a été créée
- cl.nom est devenu nom
- cl.telephone est devenu telephone
- r.noConfirmation est devenu numero unique


# RDCU's


## demarrerNouvelleReservation()
```plantuml
@startuml RDCU-demarrerNouvelleReservation
skinparam style strictuml
participant ":ControleurReservation" as C
participant "r:Reservation" as R
participant ":Hotel" as H
note left of C: Controleur de session
participant "llr:List<LigneReservation>" as LLR

participant "c:Commis" as CO
->C : demarrerNouvelleReservation()
note left of R: Createur par default\nc:Commis pour diminuer le couplage et \nExpert en information
C-> R**: Create(c:Commis)
note right of R: Createur Reservation contient * LigneReservation
R->LLR**: create()
note right of C: expert\ncontroleur à un visibilité sur l'objet racine Hotel\nHotel gère les catégories
C -> H: List<Categorie> lc = getCatetories()

@enduml
```
- Précondition:
  - c:Commis est authentifié
- Postconditions:
  - Une instance r:Reservation a été créée
  - Une association a été créée entre r:Reservation et c:Commis


## reserverChambre(dateArrive:string, dateDepart:string, nomCategorie:string, quantite:int)
```plantuml
@startuml RDCU-reserverChambre
skinparam style strictuml

participant ":ControleurReservation" as C
participant "r:Reservation" as R
participant "h:Hotel" as H
participant "lr:LigneReservation" as LR
participant "MC:Map<nomCategorie,Categorie>" as MC
participant "cat:Categorie" as CAT
participant "llr:List<LigneReservation>" as LLR

note left of C: Controleur de session
->C : reserverChambre(\n   dateArrive:string, \n   dateDepart:string, \n   nomCategorie:string, \n   quantite:int)

note right of C: Ctrl a un visibilité sur l'objet racine Hotel\nHotel gère les catégories
C->H:{categories:list<Categories>,chambres:List<Chambre>} lcc = \ngetChambresDisponible(\n   dataArrive:string, \n   dateDepart:string,\n   nomCategorie:string, \n   quantite:int)
note right of H: Hotel gère plusieurs catégorie
H->MC:get(nomCategorie:string): cat
note right of H: expert Hotel a une visibilité sur categorie, chambres sont connu du catalogue categorie
H->CAT: lc = getChambresDisponible(dataArrive:string, dateDepart:string,quantite:int)
note right of C: expert en information \nControleur est le créateur de Reservation
C->R: creerLigneReservation(\n   lc:List<Chambre>,\n   dataArrive:string, \n   dateDepart:string)
note right of R: Createur Réservation contient LigneReservation
R->LR**: create(\n   lc:List<Chambre>,\n   dataArrive:string, dateDepart:string)
note right of R: exper en information puisque r possède llr
R->LLR: add(lr)


@enduml
```
PostConditions:
- Une instance lr:LigneReservation a été créée
- lr.dateArrive est devenu dateArrive
- lr.dateDepart est devenu dateDepart
- quantite d'associations ont été créées entre lr:LigneReservation et Chambre sur la base de correspondance avec Categorie.nom == nomCategorie
- Une association a été créée entre r:Reservation et lr:LigneReservation

## terminerReservation()
```plantuml
@startuml RDCU-terminerReservation
skinparam style strictuml
participant ":Controleur" as C
participant "r:Reservation" as R
participant "llr[i]:List<ligneReservation>" as LLR

->C : terminerReservation()   

note right of C: Expert\nCtrl est le créateur de r:Reservation\nReservation possèle List<LigneReservation>
C->R: [dateArrive,dateDepart,categorie,quantite] =\n getLigneReservation()

loop
note right of R: Expert\nReservatioon possède  List<LigneReservation>
R->LLR: quantite,categorie = getQuantiteEtCategorieChambre()
end


@enduml
```
AUCUNE postCondition

## confirmerReservation(nom:string, telephone:string)
```plantuml
@startuml RDCU-confirmerReservation
skinparam style strictuml
participant ":Controleur" as C
participant "r:Reservation" as R
participant  "cl:Client" as CL

->C : confirmerReservation(\n   nom:string, \n   telephone:string)   

note right of C: Expert,\nCtrl est le créateur de Réservation\nReservation connait son Client
C->R: noConfirmation = confirmerReservation(\n   nom:string, \n   telephone:string)

note right of R: Expert,\nCtrl est le créateur de Réservation\nReservation connait son Client
R->CL**: create(nom:string, telephone:string)

note right of R: Expert\nReservation possède l'instance du client\nMutateur de l'attribut Client dans Reservation
R->R: setClient(cl:Client)

note right of R: Expert\nMutateur d'attribut
R->R: genererNoConfirmation()
@enduml
```

- Une instance cl:Client a été créée
- cl.nom est devenu nom
- cl.telephone est devenu telephone
- r.noConfirmation est devenu numero unique


