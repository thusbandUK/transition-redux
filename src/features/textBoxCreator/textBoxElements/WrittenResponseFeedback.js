import { useSelector } from "react-redux";

const WrittenResponseFeedback = (props) => {

    const allResponses = useSelector(state => state.textBoxCreator.writtenResponses);

   
   
   let indexOfResponseToCompare = allResponses.findIndex((x) => {
    return x.id === props.id;
   }) 

    //console.log(allResponses[indexOfResponseToCompare]);
    const responsesToCompare = allResponses[indexOfResponseToCompare];

    /*I feel like you should further nest the object so you have id and questions and then you can just say, read the questions section 
    instead of programming it to ignore id and that same logic would work here and if you did want to do an Object.entries situation,
    it would probably simplify things greatly */


    return(
        <div>
            <h3>How did you do?</h3>
            <p>I will be the Written Response Feedback</p>

        </div>
    )
}

export default WrittenResponseFeedback;