const InitialObservation = (props) => {
console.log(props);
    return (
        <div>
            <label>
                Initial observation
            </label>
                
            <input type="text"   onChange={props.onChange} id={`flexCheck${props.metal.id}-initial`}/>
        </div>
    )
}

export default InitialObservation;

//id={`flexCheck${props.props.metal.id}-initial`}