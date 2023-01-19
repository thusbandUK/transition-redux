const filterByExamBoard = (array, examBoard, MCQ) => {
    if (MCQ){
        
        const outputArray = array.filter((entry) => {        
            return entry.true.includes(examBoard);
    })
    return outputArray;
    } else {
    const outputArray = array.filter((entry) => {        
            return entry.childProps.true.includes(examBoard);
    }
    )
    
    return outputArray;
}
 
}

export default filterByExamBoard;