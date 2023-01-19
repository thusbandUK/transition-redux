import '../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';

const ComparisonFeedback = (props) => {

    
    const content = props.children;

    const dispatch = useDispatch();

    //styling

    const boldType = {fontWeight: 'bold', marginTop: '10px'};

    const comparisonsText = {display: 'inline', marginLeft: '10px'};

    const inverseStyling = {backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px'};

    const hiddenResponseStyling = {display: 'none'};   
    
    //accesses the part of state into which comparison statements have been logged on previous page

    const comparisonInputs = useSelector(state => state.textBoxCreator.comparison);

    //variable used to automatically generate unique keys for each list item

    let keyCount = 1;

    //Defines index of object from which to access previously input comparisons in comparison array of textBoxCreator section of state

    let indexOfComparisonToRead = comparisonInputs.findIndex((x) => {
        return x.id === props.id;
      }) 

      
    return (
        <div>
            {((!comparisonInputs[indexOfComparisonToRead].similarities.logged) && (!comparisonInputs[indexOfComparisonToRead].differences.logged)) ? null :
            <div>
            <h3 style={{marginTop: '10px'}}>Your comparison</h3>

            <div className="row">

               <div className="col-md-6">
                  <p style={boldType}>Similarities</p>
                  <p style={comparisonInputs[indexOfComparisonToRead].similarities.logged ? inverseStyling : hiddenResponseStyling} >
                     {comparisonInputs[indexOfComparisonToRead].similarities.logged}
                  </p>
                </div>

                <div className="col-md-6">
                  <p style={boldType}>Differences</p>
                  <p style={comparisonInputs[indexOfComparisonToRead].differences.logged ? inverseStyling : hiddenResponseStyling} >
                     {comparisonInputs[indexOfComparisonToRead].differences.logged}
                  </p>
                </div>
            </div>
            </div>
         }
            <h3>Did you notice?</h3>

            <div className="row">

               <div className="col-md-6">
                  <p style={boldType}>{content.sameReference}</p>
        
                  {content.similarities.map((similarity) => (            
                     <div key={keyCount = keyCount + 1}>
                        <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                        <p style={comparisonsText}>{similarity}</p>
                     </div>
                  ))}
               </div>

               <div className="col-md-6">
                  <p style={boldType}>{content.AReference}</p>

                  {content.differencesA.map((difference) => (
                     <div key={keyCount = keyCount + 1}>
                        <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                        <p style={comparisonsText}>{difference}</p>
                     </div>
                   ))}
                  {/***/}
                  {content.BReference ? 
                  <div>
                  <p style={boldType}>{content.BReference}</p>

                  {content.differencesB.map((difference) => (
                     <div key={keyCount = keyCount + 1}>
                        <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                        <p style={comparisonsText}>{difference}</p>
                     </div>
                  ))}
                  </div>
                  : null
                  }
                   
               </div>
            </div>
            
        </div>
    )
}

export default ComparisonFeedback;