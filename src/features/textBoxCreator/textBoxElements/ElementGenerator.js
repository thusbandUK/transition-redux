import { createElement } from 'react';
import '../../../app/App.css';
import filterByExamBoard from './textBoxFunctions/filterByExamBoard';
import stringSplicer from './textBoxFunctions/stringSplicer';
import formatSubSuperScript from './textBoxFunctions/formatSubSuperScript';
import '../../../app/App.css';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
//import Arrow from './arrow';


function ElementGenerator(props) {

  //content generator for forms and divs  

//let { type, props, variableContent } = props.entry;

 let newType = props.type;
 let newProps = props.props;
 let newContent = props.content;
  
  const examBoard = props.examBoard;
/*
okay, so another sticking point is that you want to make the first layer of processing - which parses variableContent by examboard - 
cope with a variety of input styles, suggestions including:
i) substitute [REPLACE ME] with array.filter.true.includes(examboard)(which could output a single string)
ii) include list items also w array.filter.true etc.
iii) different images (and potentially other formats) but then the output will be produced the normal way, ie: if multiple children
(hasChildren === true) etc...

so there needs to be an engine that filters for examboard === true, which could be called at different levels

if variableContent === stringSplice -->
   
       return stringSpliced and filtered for examboard
   else if variableContent === 

   stringSplice can be called at different levels and it does just that, substitutes 
   filterByExamBoard can be called at different levels and it does just, they can be called in tandem
   the variableContent keys can be at different levels, and every level can call the functions
   


*/
const processContent = () => {
  //alert('function called');
  //let newContent = props.content;
  const itemToProcess = props.content;
  //alert(itemToProcess);
  //if (props.variableContent)


  //to generate single string which splices content filtered by examboard

  if (newProps.variableContent === 'stringSplicer'){
    
    const splicedString = stringSplicer(itemToProcess, examBoard);
    //alert(splicedString);
    newContent = splicedString;
    return newType;
  } 


  //to filter eg: a set of li elements by examboard

  if (newProps.variableContent === 'filter by exam board' ){
    let objectsToInclude = filterByExamBoard(props.content, examBoard);
    //alert(objectsToInclude[0]);
    let elementsToRender = objectsToInclude.map((childElementDetails) => {  
      if (childElementDetails.childProps.tagged === true){
        const arrayOfTaggedElements = formatSubSuperScript(childElementDetails.childContent);
        return createElement(childElementDetails.childType === 'p' ? 'div' : childElementDetails.childType, childElementDetails.childProps, arrayOfTaggedElements)
      } else { 
        return createElement(childElementDetails.childType, childElementDetails.childProps, childElementDetails.childContent) }          
    }) 
  newContent = elementsToRender;  
  return newType;
    
  }

  
  //to create an element with children, eg: div / form / ul and populate the children elements

  if (newProps.parent === true){
    
    let childrenToRender = newContent.map((childElementDetails) => {
      if (childElementDetails.childProps.tagged === true){
        const arrayOfTaggedElements = formatSubSuperScript(childElementDetails.childContent);
        return createElement(childElementDetails.childType === 'p' ? 'div' : childElementDetails.childType, childElementDetails.childProps, arrayOfTaggedElements)
        //return 'hello Joe!'
      } else { 
        return createElement(childElementDetails.childType, childElementDetails.childProps, childElementDetails.childContent) }          
    })
  newContent = childrenToRender;
  return newType;
  }

  
  //receives a single string with <sub> / <super> tags returns single element w no children, eg: li or div in place of p which should not 
  //be a parent

  if (newProps.tagged === true){
    
    const arrayOfObjects = formatSubSuperScript(props.content);
    /*
      let processedArray = [];
      arrayOfObjects.forEach((objectOfTaggedContent) => {
        processedArray.push(createElement(objectOfTaggedContent.newType, {...objectOfTaggedContent.newProps, style: {display: 'inline'}}, objectOfTaggedContent.newContent));
      })*/
      
      //return newContent = processedArray;
      newContent = arrayOfObjects;
      return newType = 'div';
  
    
  }
  if (props.type === 'mcq'){
    //return createElement('p', {}, 'hello!');
    //newProps = {}
    //newContent = 'hello'
    //console.log(newProps);
    //console.log(`new content id reads ${newContent.id}`);
    return newType = MultipleChoiceQuestion
  }

//if none of the if clauses apply

return newType;
}
/*
const formContent = () => {
  
    
    if ((props.type === 'form') || (props.type === 'div') || (props.type === 'ul')){           
        let formElements = props.content.map((formElementDetails) => (
            createElement(formElementDetails.formElement, formElementDetails.props, formElementDetails.formElementContent)           
        )) 
        return formElements;        
    } else {
      return newContent;
    }
} 
*/
  return createElement(
    processContent(),    
    newProps,
    newContent    
  );
}

export default ElementGenerator;

