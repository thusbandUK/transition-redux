const filterByExamBoard = (array, examBoard) => {
    const outputArray = array.filter((entry) => {
        return entry.childProps.true.includes(examBoard);
    })
    return outputArray;
}

export default filterByExamBoard;