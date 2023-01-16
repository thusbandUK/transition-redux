import { createElement } from 'react';
import Arrow from '../arrow';

function formatSubSuperScript(string, key){
   //console.log(`key reads: ${key}`);
let keyCount;
    if (!key){
        keyCount = 0;
    } else {
        keyCount = key;
    }
    
    let arrayOfObjects = [];
    let workingString = string.toString();
    //let keyCount = Math.floor(Math.random() * 5);

    //below section parses string into sections of plain text (type: p) and text that appears between sub tags (type: sub)
    while (workingString.includes('</sub>')){
  
    arrayOfObjects.push({newType: 'p', newProps: {key: keyCount = keyCount + 1}, newContent: workingString.substring(0, workingString.indexOf('<sub>'))}); 
    workingString = workingString.toString().substring(workingString.indexOf('<sub>') + 5, workingString.length);
    arrayOfObjects.push({newType: 'sub', newProps: {key: keyCount = keyCount + 1}, newContent: workingString.toString().substring(0, workingString.indexOf('</sub>'))});
    workingString = workingString.substring(workingString.indexOf('</sub>') + 6, workingString.length);

    }

    //the line below takes any remaining p-type text into a final object in the growing array

    arrayOfObjects.push({newType: 'p', newProps: {key: keyCount = keyCount + 1}, newContent: workingString});

    //this section iterates over the array of objects and identifies any which have content containing sup tags
    //if they do the object is edited so that the content contains the section leading up to the opening sup tag
    //then creates a new object and inserts it into the array after the one from which it was removed
   
 
    for (var x = 0; x < arrayOfObjects.length; x++){
 
       if (arrayOfObjects[x].newContent.toString().includes('<sup>')){
           if (arrayOfObjects[x].newContent.toString().indexOf('<sup>') > 0){
          
            let remainder;
            remainder = arrayOfObjects[x].newContent.toString().substring(arrayOfObjects[x].newContent.indexOf('<sup>') + 5, arrayOfObjects[x].newContent.length);
            
            arrayOfObjects[x].newContent = arrayOfObjects[x].newContent.toString().substring(0, arrayOfObjects[x].newContent.indexOf('<sup>'));
            
            arrayOfObjects.splice(x + 1, 0, {newType: 'sup', newProps: {key: keyCount = keyCount + 1}, newContent: remainder.toString().substring(0, remainder.indexOf('</sup>'))});
            remainder = remainder.toString().substring(remainder.indexOf('</sup>') + 6, remainder.length);
            arrayOfObjects.splice(x + 2, 0, {newType: 'p', newProps: {key: keyCount = keyCount + 1}, newContent: remainder});
        } 

    }    
    
}

//add logic here that will render one of two arrow components based on an if (equation) conditional
//if (equation){
    for (var x = 0; x < arrayOfObjects.length; x++){
 
        if (arrayOfObjects[x].newContent.toString().includes('&')){
            
            //if (arrayOfObjects[x].newContent.toString().indexOf('&') > 0){
                const contentString = arrayOfObjects[x].newContent.toString();
                let remainder;                
                const startingIndex = contentString.indexOf('&');
                const finalIndex = contentString.indexOf(';');
                remainder = contentString.substring(finalIndex + 1, arrayOfObjects[x].newContent.length);
                let textBeforeUnicode = contentString.substring(0, (startingIndex - 1));
                let unicodeString = contentString.substring(startingIndex, finalIndex+1);
                let textAfterUnicode = contentString.substring((finalIndex + 1), contentString.length);
                if (startingIndex > 0){
                    //textBeforeUnicode = contentString.substring(0, (startingIndex - 1));
                    arrayOfObjects[x].newContent = textBeforeUnicode;
                    arrayOfObjects.splice(x + 1, 0, {newType: Arrow, newProps: {key: keyCount = keyCount + 1, arrowtype: unicodeString}, newContent: ''});
                    //alert(arrayOfObjects[x+1].newProps.arrowtype);
                    if (textAfterUnicode.length > 0){
                        arrayOfObjects.splice(x + 2, 0, {newType: 'p', newProps: {key: keyCount = keyCount + 1, }, newContent: textAfterUnicode});
                    }
                } else {
                    arrayOfObjects[x] = {newType: Arrow, newProps: {key: keyCount = keyCount + 1, arrowtype: unicodeString}, newContent: ''};
                    if (textAfterUnicode.length > 0){
                        arrayOfObjects.splice(x + 1, 0, {newType: 'p', newProps: {key: keyCount = keyCount + 1, }, newContent: textAfterUnicode});
                    }
                }          
             
     
    // }
    }
}

let processedArray = [];
      arrayOfObjects.forEach((objectOfTaggedContent) => {
        processedArray.push(createElement(objectOfTaggedContent.newType, {...objectOfTaggedContent.newProps, style: {display: 'inline'}}, objectOfTaggedContent.newContent));
      })

//return arrayOfObjects;
return processedArray;

}

export default formatSubSuperScript;

//objectOfTaggedContent.newType