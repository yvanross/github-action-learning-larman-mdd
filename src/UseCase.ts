
import * as fs from 'fs';
import { workerData } from 'worker_threads';
var SortedSet = require("collections/sorted-set");
const verbs = require('french-verbs-list');

 export class UseCase {
    filename: string;

  public classes() {
     let data = fs.readFileSync(this.filename,'utf8');

      var splitted = data.toString().replace(/#/g,"")
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
          class_names.add(word.charAt(0).toUpperCase() + word.slice(1));
        }
      }
      console.log(verbs.all);
      return class_names.toArray();
  }

  // static FromFile(arg0: string) : UseCase {
  //   throw new Error('Method not implemented.');
  // }
  constructor(filename: string){
    this.filename = filename;

  }

}