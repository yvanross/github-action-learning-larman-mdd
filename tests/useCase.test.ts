 import {UseCase} from '../src/UseCase';
var chai = require('chai');
const assert = chai.assert;

describe('CourseTest', () => {
  let useCase;

  beforeEach(()=>{
    useCase = new UseCase("./data/use-case.md");
  })

  it('give possible class name', async () => {
    let possible_classes=[
      '9hdknq',            'Accessibles',    'Acteur',
      'Argent',            'Arrive',         'Arrivee',
      'Au',                'Authentifie',    'Avec',
      'Banque',            'Billets',        'Caisse',
      'Caisse,',           'Caissier',       'Cash',
      'Cette',             'Com',            'Comment',
      'Compartiments,',    'Confie',         'Cu03',
      'Dans',              'De',             'Dedans',
      'Demande',           'Differents',     'Du',
      'En',                'Enleve',         'Enregistre',
      'Enregistree',       'Est',            'Et',
      'Etre',              'Facilement',     'Ferme',
      'Fermer',            'Garanties',      'Garder',
      'Gl',                'Glossaire',      'Goo',
      'Granddictionnaire', 'Heure',          'Https',
      'Identifiant',       'Identificateur', 'Il',
      'In',                'Insere',         'Interieur',
      'La',                'Le',             'Lequel',
      'Les',               'Libre',          'Mise',
      'Monnaie',           'Montant',        'Mot',
      'Muni',              'Ouvre',          'Pas',
      'Passe',             'Peut',           'Pieces',
      'Place',             'Plat',           'Plateau',
      'Pose',              'Poser',          'Postconditions',
      'Pour',              'Preconditions',  'Principal',
      'Qui',               'Rebords',        'Reconnait',
      'Regarder',          'Rendre',         'Rentre',
      'Rentrer',           'Saisit',         'Scenario',
      'Se',                'Separement',     'Sert',
      'Son',               'Succes',         'Support',
      'Sur',               'Systeme',        'Tiroir',
      'Un',                'Vide',           'Video',
      'Voir',              'Youtube'
    ];
   
   let classes: string[] = await useCase.class_names();
   expect(classes).toEqual(possible_classes)
  });

  it('give possible verb for opertation', async () => {
    let possible_verbs=["fermer", "garder", "poser", "regarder", "rendre", "rentrer", "voir"]
   let verbs: string[] = await useCase.verb_names();

   expect(verbs).toEqual(possible_verbs)
  });
 
  
});
