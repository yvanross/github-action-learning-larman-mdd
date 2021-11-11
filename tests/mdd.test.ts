import {Mdd} from '../src/Mdd';
var chai = require('chai');
const assert = chai.assert;

describe('mdd test', () => {
  let mdd;

  beforeEach(()=>{
    mdd = new Mdd("./data/mdd.puml");
  })

  it('get class name', async () => {
    let res:string[] = mdd.class_names();
    expect(res).toEqual(["Magasin", "Caisse", "MiseEnPlateau", "PlateauArgent", "Caissier"])
  });
 
  it('get attributes of Magasin', async () => {
    let res:string[] = mdd.class_attributes("Magasin");
    expect(res).toEqual([
        "string nom",
         "string adressee",
       ]);
  });
  
  it('get attributes of Caissier', async () => {
    let res:string[] = mdd.class_attributes("Caissier");
    expect(res).toEqual([
        "string identifiant",
         "string motDePasse",
       ]);
  });

  it('get relations', async () => {
    let res:string[] = mdd.relations();
    expect(res).toEqual([
        'Caisse;MiseEnPlateau',
        'MiseEnPlateau;Caissier',
        'MiseEnPlateau;PlateauArgent',
        'Magasin;PlateauArgent',
        'Magasin;PlateauArgent',
        'Magasin;Cassier',
        'Magasin;Caisse'
      ]);
  });

  it('get relations', async () => {
    let user_mdd = new Mdd("./data/mdd-2-classes-manquantes.puml");
    let res:string = mdd.compare(user_mdd)
    expect(res).toEqual("matchin mdd");
  });
});
