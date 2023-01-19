import '../../../app/App.css';
import { useSelector } from "react-redux";
import formatSubSuperScript from './textBoxFunctions/formatSubSuperScript';

const WrittenResponseFeedback = (props) => {

    //this creates a reference to the part of the store where users' written responses to questions are logged

    const allResponses = useSelector(state => state.textBoxCreator.writtenResponses);

   //returns the index of the set of responses for which feedback to be provided
   
   let indexOfResponseToCompare = allResponses.findIndex((x) => {
    return x.id === props.id;
   }) 
    
    //creates a reference to the part of the store where the relevant responses are stored

    const responsesToCompare = allResponses[indexOfResponseToCompare].questions;

    //This repackages the information in the relevant section of state.textBoxCreator.writtenResponses to optimise the data for mapping below

    const repacker = (object) => {
        const keys = Object.keys(object);        
        const values = Object.values(object);
        let newArray = [];       
        for (let x = 0; x < keys.length; x++){            
            newArray.push({questionReference: keys[x], questionAnswer: values[x].logged, id: values[x].id});
        }       
        return newArray;
    
    }


    const responsesForMapping = repacker(responsesToCompare);

    //console.log(responsesForMapping);

    //this is a reference to the sets of feedback passed to the component via props

    const feedbackPointsForMapping = props.children;

    //this locates the correct set of feedback points for each question with a unique ID 
    //(this facilitates filtering by examboard, *questions* are filtered in WrittenResponse component,
    //then in this section the relevant answers are found by the matching IDs)

    const feedbackFinder = (responseId) => {
                
        const arrayOfFeedbackPoints = feedbackPointsForMapping.answers.find((details) => {
            return (details.id === responseId);
        })
         return arrayOfFeedbackPoints;
              
    }

    //styling 

    //styles responses white on black for emphasis

    const inverseStyling = {backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '10px'};

    //styles feedback points so that they line up with check boxes and with a small gap between the two

    const feedbackPointsStyling = {display: 'inline', marginLeft: '10px'};

    //bold styling for the titles, eg: "Your [question]"

    const titleStyling = {fontWeight: 'bold', marginTop: '10px'};

    //if the user didn't enter a response, this hides the white on black styling

    const hiddenResponseStyling = {display: 'none'};    

    //this is to generate a unique id for each item mapped from the arrays

    let keyCount = 1;

    return(
        <div>
            <h3>How did you do?</h3>
            {responsesForMapping.map((responseDetails) => (
                <div key={keyCount = keyCount + 1}>
                <p style={titleStyling}>{`Your ${responseDetails.questionReference}`}</p>
                <p style={responseDetails.questionAnswer ? inverseStyling : hiddenResponseStyling}>{responseDetails.questionAnswer}</p>
                
                {feedbackFinder(responseDetails.id).answerText.map((feedbackPoint) => (

                            <div key={keyCount = keyCount * 2 + 1}>
                              <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                              <div style={feedbackPointsStyling}>{formatSubSuperScript(feedbackPoint)}
                            </div>
                    
                   </div>))}


                </div>
            ))}

        </div>
    )
}

export default WrittenResponseFeedback;