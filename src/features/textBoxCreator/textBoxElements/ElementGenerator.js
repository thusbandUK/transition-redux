import { createElement } from 'react';
import '../../../app/App.css';
import filterByExamBoard from './textBoxFunctions/filterByExamBoard';
import stringSplicer from './textBoxFunctions/stringSplicer';
import formatSubSuperScript from './textBoxFunctions/formatSubSuperScript';
import '../../../app/App.css';
import MultipleChoiceQuestion from './multipleChoiceQuestions/MultipleChoiceQuestion';
import ObservationPage from './ObservationPage';
import Comparison from './Comparison';
import ComparisonFeedback from './ComparisonFeedback';

//'./multipleChoiceQuestions/MultipleChoiceQuestion';
//import ObservationPage from './ObservationPage';



function ElementGenerator(props) {

  //console.log('elementGenerator props reads...');
  //console.log(props);

 let newType = props.type;
 //console.log(newType);
 let newProps = props.props; 
 //console.log(newProps);
 let newContent = props.content;
  
  const examBoard = props.examBoard;

const processContent = () => {
  
  const itemToProcess = props.content;
  


  //to generate single string which splices content filtered by examboard

  if (newProps.variablecontent === 'stringSplicer'){
    
    const splicedString = stringSplicer(itemToProcess, examBoard);    
    newContent = splicedString;
    return newType;
  } 


  //to filter eg: a set of li elements by examboard

  if (newProps.variablecontent === 'filter by exam board' ){
    let objectsToInclude = filterByExamBoard(props.content, examBoard);
    //alert(objectsToInclude[0]);
    let elementsToRender = objectsToInclude.map((childElementDetails) => {  
      if (childElementDetails.childProps.tagged === true){
        const arrayOfTaggedElements = formatSubSuperScript(childElementDetails.childContent);
        return createElement(childElementDetails.childType === 'p' ? 'div' : childElementDetails.childType, {...childElementDetails.childProps, key: props.key}, arrayOfTaggedElements)
      } else { 
        return createElement(childElementDetails.childType, childElementDetails.childProps, childElementDetails.childContent) }          
    }) 
  newContent = elementsToRender;  
  return newType;
    
  }

  
  //to create an element with children, eg: div / form / ul and populate the children elements

  if (newProps.parent === 'true'){
    
    let childrenToRender = newContent.map((childElementDetails) => {
      if (childElementDetails.childProps.tagged === 'true'){
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

  if (newProps.tagged === 'true'){
    
    //make sure below still works, added props.key to generate unique keyCount
    const arrayOfObjects = formatSubSuperScript(props.content, props.props.key);
    
      newContent = arrayOfObjects;
      return newType = 'div';
  
    
  }
  if (props.type === 'mcq'){    
    return newType = MultipleChoiceQuestion
  }

  if (props.type === 'ObservationPage'){
    //console.log(typeof(newProps));
    return newType = ObservationPage
  }

  if (props.type === 'comparison') {
    //console.log(newProps);
    return newType = Comparison
  }

  if (props.type === 'comparison-feedback'){
    return newType = ComparisonFeedback;
  }

//if none of the if clauses apply
//console.log(newProps);
return newType;
}

  return createElement(
    processContent(),    
    newProps,
    newContent    
  );
}

export default ElementGenerator;

