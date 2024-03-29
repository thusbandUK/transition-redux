import { createElement } from 'react';
import '../../../app/App.css';

function SubSuperTextGenerator(props) {

//below function takes string passed in via props and splits it into an array of objects, each of which has a tag type,
//(<sub>, <sup> or <p>), empty props and content, which is a fragment of the string for the appropriate tag

  function splitter(string){

    
    let arrayOfObjects = [];
    let workingString = string.toString();

    //below section parses string into sections of plain text (type: p) and text that appears between sub tags (type: sub)
    while (workingString.includes('</sub>')){
  
    arrayOfObjects.push({newType: 'p', newProps: {}, newContent: workingString.substring(0, workingString.indexOf('<sub>'))}); 
    workingString = workingString.toString().substring(workingString.indexOf('<sub>') + 5, workingString.length);
    arrayOfObjects.push({newType: 'sub', newProps: {}, newContent: workingString.toString().substring(0, workingString.indexOf('</sub>'))});
    workingString = workingString.substring(workingString.indexOf('</sub>') + 6, workingString.length);

    }

    //the line below takes any remaining p-type text into a final object in the growing array

    arrayOfObjects.push({newType: 'p', newProps: {}, newContent: workingString});

    //this section iterates over the array of objects and identifies any which have content containing sup tags
    //if they do the object is edited so that the content contains the section leading up to the opening sup tag
    //then creates a new object and inserts it into the array after the one from which it was removed
   
 
    for (var x = 0; x < arrayOfObjects.length; x++){
 
       if (arrayOfObjects[x].newContent.toString().includes('<sup>')){
           if (arrayOfObjects[x].newContent.toString().indexOf('<sup>') > 0){
          
            let remainder;
            remainder = arrayOfObjects[x].newContent.toString().substring(arrayOfObjects[x].newContent.indexOf('<sup>') + 5, arrayOfObjects[x].newContent.length);
            
            arrayOfObjects[x].newContent = arrayOfObjects[x].newContent.toString().substring(0, arrayOfObjects[x].newContent.indexOf('<sup>'));
            
            arrayOfObjects.splice(x + 1, 0, {newType: 'sup', newProps: {}, newContent: remainder.toString().substring(0, remainder.indexOf('</sup>'))});
            remainder = remainder.toString().substring(remainder.indexOf('</sup>') + 6, remainder.length);
            arrayOfObjects.splice(x + 2, 0, {newType: 'p', newProps: {}, newContent: remainder});
        } 

    }    
    
}
return arrayOfObjects;
}

//define variable, which is the array of objects produced by the above function

const stringFragmentsSeparatedByTag = splitter(props.content);

//process the array of objects contained fragments filed by tag type and produce an array of children to go in the final render function

  const processArrayOfObjects = (arrayOfObjects) => {
    let processedArray = [];
    arrayOfObjects.forEach((objectOfTaggedContent) => {
      processedArray.push(createElement(objectOfTaggedContent.newType, {...objectOfTaggedContent.newProps, style: {display: 'inline'}}, objectOfTaggedContent.newContent));
    })
    return processedArray;
    
}

  return createElement(
    'p',
    {},
    processArrayOfObjects(stringFragmentsSeparatedByTag)
  );
}

export default SubSuperTextGenerator;