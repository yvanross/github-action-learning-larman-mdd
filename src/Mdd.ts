import { readFileSync } from 'fs';

// import * as fs from 'fs';
const { parse, Class, Note, Relationship, parseFile, formatters,MemberVariable, Method } = require('plantuml-parser');

 export class Mdd {
    private filename: string;
    private data;

  constructor(filename: string){
    this.filename = filename;
  } 

  public class_names(): string[]{
   const parsed_uml = this.getPlantUmlData();
   let names= <string[]>[];
    for (let diagram of parsed_uml){
      for(let e of diagram.elements) {
        if (e instanceof Class){
          names.push(e.name);
        }
      }
    }
    return names;
  }

  public class_attributes(name: string ): string[] {
    const parsed_uml = this.getPlantUmlData();
    let definitions = <string[]>[];
    for (let diagram of parsed_uml){
      for(let e of diagram.elements) {
        if (e instanceof Class){
          if(e.title == name){
            for(let member of e.members) {
              if(member instanceof MemberVariable){
                definitions.push( member.type + " " + member.name);
              }
            }
          }
        }
      }
    }
    return definitions;
  }

  public relations(): string[] {
    const parsed_uml = this.getPlantUmlData();
    let definitions = <string[]>[];
    for (let diagram of parsed_uml){
      for(let e of diagram.elements) {
        if (e instanceof Relationship){
        //   console.log(e)
          definitions.push( e.left + ";" + e.right);
        }
      }
    }
    return definitions;
  }

  public compare(user_mdd: Mdd): string {
    console.log(this.class_names());
    console.log(user_mdd.class_names());
    return "allo";
  }

  private getPlantUmlData() : any {
    if(this.data == null){
      let file_data = readFileSync(this.filename, 'utf-8');
      this.data = parse(file_data)
    }
    return this.data;
  }
}