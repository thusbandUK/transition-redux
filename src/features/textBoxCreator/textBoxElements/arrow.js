

const Arrow = (props) => {
    //alert(props.arrowtype);

    return(
        <div style={{display: 'inline'}}>
        {props.arrowtype === '&#8594;' ? <p style={{display: 'inline'}}>&#8594;</p> : []} 
        {props.arrowtype === '&#8652;' ? <p style={{display: 'inline'}}>&#8652;</p> : []}
        </div>
    )

}

export default Arrow;