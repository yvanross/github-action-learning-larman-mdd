
import * as fs from 'fs';
// import { workerData } from 'worker_threads';
var SortedSet = require("collections/sorted-set");
const verbs = require('french-verbs-list');

 export class UseCase {
    filename: string;
    

  public class_names() : string[] {
      return  this.possible_names().map((name)=>name.charAt(0).toUpperCase() + name.slice(1)).sort();
  }

  public verb_names() : string[] {
    let names = this.possible_names();
    
    return (names.filter(value => verbs.all.includes(value))).toArray();
 }

 private possible_names(){
  let data = fs.readFileSync(this.filename,'utf8');

  var splitted = data.toString().toLowerCase()
  .replace(/#/g,"")
  .replace(/\*\*/g,'')
  .replace(/-/g,' ')
  .replace(/[\(\)\[\]\.\:\/]/g ,' ')
  .replace(/\r?\n|\r/g,' ')
  .replace(/\s\s+/g, ' ')
  .replace(/[a-z|A-Z]['’]([a-z|A-Z]*)/g,'$1')
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/Systeme/g,'')
  .replace(/System/g,'')
  .split(" ");
  
  let class_names = new SortedSet();
  for(let word of splitted) {
    if(word.length > 1){
      class_names.add(word);
    }
  }
  return class_names;
 }
 

  // static FromFile(arg0: string) : UseCase {
  //   throw new Error('Method not implemented.');
  // }
  constructor(filename: string){
    this.filename = filename;

  }

}