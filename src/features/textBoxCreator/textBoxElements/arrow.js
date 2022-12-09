

const Arrow = (props) => {
    //alert(props.arrowtype);

    return(
        <div style={{display: 'inline'}}>
        {props.arrowtype === '&#8594;' ? <p style={{display: 'inline'}}>&#8594;</p> : null} 
        {props.arrowtype === '&#8652;' ? <p style={{display: 'inline'}}>&#8652;</p> : null}
        </div>
    )

}

export default Arrow;