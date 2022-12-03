

const VariableTextCreator = (arrayToIterate, examBoard) => {
//alert(arrayToIterate);
    let copyOfArrayToIterate = arrayToIterate;
    
    //const arrayToIterate = object.allContent;
    //copyOfArrayToIterate = arrayToIterate; 
    //console.log(arrayToIterate);
    //let workingString = '';
    for (let x = 0; x < arrayToIterate.length; x++){
        if (Object.keys(arrayToIterate[x].content).includes('staticContent')){
            return copyOfArrayToIterate[x].content = (arrayToIterate[x].content.staticContent.openingString + arrayToIterate[x].content.dynamicContent[examBoard] + arrayToIterate[x].content.staticContent.closingString);
    }

    

}
//alert(copyOfArrayToIterate);
return copyOfArrayToIterate;
}

export default VariableTextCreator;