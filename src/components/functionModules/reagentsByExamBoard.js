import imagesOfReactantsAndProducts from '../images/images-combined';

const examBoardSelectsMetalEntries = (examBoard) => {        

    const metalsByExamBoard = [
            {examboard: 'AQA', metals: ['copper', 'cobalt', 'iron II', 'iron III', 'aluminium']},
            {examboard: 'OCRA', metals: ['copper', 'chromium', 'iron II', 'iron III', 'manganese']}
        ]
    
    const objectToMatch = metalsByExamBoard.filter((x) => x.examboard === examBoard);
    
    const metalsToMatch = objectToMatch[0].metals;
    
    const examBoardMatcher = (metalEntry) => {
        if (metalsToMatch.indexOf(metalEntry.metal) === -1){
            return false;
        } else return true;
    }

   const selectedMetals = imagesOfReactantsAndProducts.unreactedMetals.filter(examBoardMatcher);

   return selectedMetals;
    
}

export default examBoardSelectsMetalEntries;