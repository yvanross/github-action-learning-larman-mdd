 import {UseCase} from '../src/UseCase';
// const UseCase = require('../src/UseCase.ts');
// import * as chai from 'chai';
// import {chai} from 'chai';
var chai = require('chai');
// const expect = chai.expect;
const assert = chai.assert;
 
// var UseCase = require('src/UseCase.ts');



describe('CourseTest', () => {

  it('read use case', async () => {

   let useCase = new UseCase("./data/use_case.md");
   let classes: string[] = await useCase.classes();
   console.log("XXXXX") 
   console.log(classes);

   
  });

 
  
});
