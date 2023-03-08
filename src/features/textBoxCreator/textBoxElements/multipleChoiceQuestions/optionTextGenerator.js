/*
What this needs to do:

replicate some of the logic of element generator
it will go in the part of multipleChoiceQuestion.js that renders form labels
it will filter, importing the logic of filterByExamBoard.js
it will format text for arrows and sub and superscript, importing logic
it will receive the whole object as an input (all the details that go with that MCQ option) and output either the straight forward text,
or two columns worth of code to generate children

*/

//import filterByExamBoard from "../textBoxFunctions/filterByExamBoard";
import formatSubSuperScript from "../textBoxFunctions/formatSubSuperScript";
import { createElement } from 'react';


const optionTextGenerator = (MCQDetails, columns, key) => {
    
    let keyCount;
    if (!key){
        keyCount = 0;
    } else {
        keyCount = key;
    }
   
//console.log(MCQDetails);
if (columns === 2){
    //console.log('if function called!')
    //console.log(MCQDetails.optionText);
    let childrenToRender = MCQDetails.optionText.map((childElementDetails) => {
        if (childElementDetails.childProps.tagged === 'true'){
            //console.log('tagged logic triggered');
          const arrayOfTaggedElements = formatSubSuperScript(childElementDetails.childContent, keyCount = keyCount + 1);
          //console.log(arrayOfTaggedElements);
          return createElement(childElementDetails.childType === 'p' ? 'div' : childElementDetails.childType, {...childElementDetails.childProps, key: keyCount = keyCount + 1}, arrayOfTaggedElements)

    } else { 
        return createElement(childElementDetails.childType, {...childElementDetails.childProps, key: keyCount = keyCount + 1}, childElementDetails.childContent) }          
    })   

    //{...childElementDetails.childProps, key: keyCount = keyCount + 1}
    //console.log(childrenToRender);
    //return childrenToRender;
    //return createElement('div', {className: 'row justify-content-start'}, childrenToRender);

    return createElement('label', {className: "form-check-label row", htmlFor: `flexCheck${MCQDetails.optionNumber}`}, childrenToRender)
    //className="form-check-label" htmlFor={`flexCheck${option.optionNumber}`}

    //return '[INSERT CODE HERE]'
} else {
    return formatSubSuperScript(MCQDetails.optionText);
}
}

export default optionTextGenerator;

/*

let childrenToRender = newContent.map((childElementDetails) => {
        if (childElementDetails.childProps.tagged === true){
          const arrayOfTaggedElements = formatSubSuperScript(childElementDetails.childContent);
          return createElement(childElementDetails.childType === 'p' ? 'div' : childElementDetails.childType, childElementDetails.childProps, arrayOfTaggedElements)
          //return 'hello Joe!'
        } else { 
          return createElement(childElementDetails.childType, childElementDetails.childProps, childElementDetails.childContent) }          
      })
*/