import { useSelector } from "react-redux";
import '../../../app/App.css';


const ObservationPage = (props) => {

    const observationsObject = useSelector(state => state.observationForm.reactantsToObserve);

    const observationsArray = Object.entries(observationsObject);

    const inline = {display: "inline-block"}

    //console.log(observationsObject['copper']['1'].logged);
    /*
console.log(Object.entries(observationsArray[0][1]).map((x) => {
    if (x[1].logged)
    {console.log(x[1].logged)}
}));
*/

    return (
        <div>
            <h2>Hello! I will be the observations page!</h2>
             
            {observationsArray.map((metalObservations) => (
                <div>
                <p><strong>{`Observations for ${metalObservations[0]}`}</strong></p>
                <p style={inline}>{`At first ${observationsObject[metalObservations[0]]['1'].logged}.`}</p>
                <p style={inline}>{` Then ${observationsObject[metalObservations[0]]['2'].logged}.`}</p>
                {observationsObject[metalObservations[0]]['3'].logged ?
                <p style={inline}>{` Finally ${observationsObject[metalObservations[0]]['3'].logged}.`}</p>
                : null }
                
                </div>
            ))}
            {/**<p>{metalObservations[1]['1'].logged}</p>
                <p>{metalObservations[1]['2'].logged}</p>
                <p>{metalObservations[1]['3'].logged}</p>
                {Object.entries(metalObservations[1]).map((x) => (
                    <p>{x.logged}</p>
                ))}
                */}
        </div>
    )
}

export default ObservationPage;