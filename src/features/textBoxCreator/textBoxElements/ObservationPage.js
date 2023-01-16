import { useSelector } from "react-redux";
import '../../../app/App.css';


const ObservationPage = (props) => {

   // console.log(`observation page props`);
    //console.log(props);

    const observationsObject = useSelector(state => state.observationForm.reactantsToObserve);

    const observationsArray = Object.entries(observationsObject);

    const inline = {display: "inline"}

    const modelObservations = props.children.modelObservations;

    const selectedReagent = useSelector(state => state.menu.selectedReagent.name);

    //console.log(observationsObject['copper']['1'].logged);
    /*
console.log(Object.entries(observationsArray[0][1]).map((x) => {
    if (x[1].logged)
    {console.log(x[1].logged)}
}));
*/

//let keyCount = 1;

    return (
        <div>
            <h2>{`Observations for ${selectedReagent}`}</h2>
             
            {observationsArray.map((metalObservations) => (
                <div >
                <p><strong>{`Your observations for ${metalObservations[0]}`}</strong></p>
                <p style={inline}>{`At first ${observationsObject[metalObservations[0]]['1'].logged}.`}</p>
                <p style={inline}>{` Then ${observationsObject[metalObservations[0]]['2'].logged}.`}</p>
                {observationsObject[metalObservations[0]]['3'].logged ?
                <p style={inline}>{` Finally ${observationsObject[metalObservations[0]]['3'].logged}.`}</p>
                : null }
                <p style={{textAlign: "right", marginTop: "10px"}}><strong>{`Model observations for ${metalObservations[0]}`}</strong></p>
                <p style={{textAlign: "right"}}>{modelObservations[metalObservations[0]]}</p>
                </div>
            ))}
            {/**
             * 
             * <p>{metalObservations[1]['1'].logged}</p>
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