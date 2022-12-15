import filterByExamBoard from "./filterByExamBoard";

const stringSplicer = (object, examBoard) => {
    
    const workingString = object.staticContent.toString(); 
    //alert(workingString);   
    let replacementTextObject = object.dynamicContent.filter((entry) => {
        return entry.true.includes(examBoard);
    })

    //let replacementTextObject = filterByExamBoard(object.dynamicContent, examBoard);
    //alert(replacementTextObject[0]);
    const newString = workingString.replace('[REPLACE TEXT]', replacementTextObject[0].string);
    //alert(newString);
    return newString;

}

export default stringSplicer;