import '../../../app/App.css';
import { useSelector, useDispatch } from 'react-redux';
//import filterByExamBoard from './textBoxFunctions/filterByExamBoard';

const ComparisonFeedback = (props) => {

    
    const content = props.children;

    //const dispatch = useDispatch();

    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);

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

   //Small temporary area to add filter logic
   //console.log(content.experiment);
   //console.log(filterByExamBoard(content.experiment, examBoard, true));

/*
right I think it's a mixed blessing bending the filtration logic to apply to every different usage. Write a special one for this
that outputs the array of just the strings, and then you don't need to alter the render logic too much, so basically, if 
content.filter === 'true' then process the array of objects and output an array of strings
*/
/*
const filterComparisonContentSuperceded = (contentParent, contentKey) => {
   if (contentParent.filter === 'true'){
      const filteredArray = contentKey.filter((entry) => {
         return entry.true.includes(examBoard);
      })
      return filteredArray;
   } else {
      return contentKey;
   }
}
*/
const filterComparisonContent = (contentKey) => {
   let filteredArray =[]
   contentKey.forEach((entry) => {
      if (entry.true){
         if (entry.true.includes(examBoard)){
            return filteredArray.push(entry.content);
         } else {
            return;
         }
      } else {
         return filteredArray = contentKey;
      }
   })
   return filteredArray;  
}


//console.log(filterComparisonContent2(content.experiment));
   
   //temporary filter area ends
      


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
        
                  {filterComparisonContent(content.similarities).map((similarity) => (            
                     <div key={keyCount = keyCount + 1}>
                        <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                        <p style={comparisonsText}>{similarity}</p>
                     </div>
                  ))}
               </div>

               <div className="col-md-6">
                  <p style={boldType}>{content.AReference}</p>

                  {filterComparisonContent(content.differencesA).map((difference) => (
                     <div key={keyCount = keyCount + 1}>
                        <input name='option' className="form-check-input" type="checkbox" value={'not sure yet'}  id={`flexCheckCHANGEME`} />
                        <p style={comparisonsText}>{difference}</p>
                     </div>
                   ))}
                  {/***/}
                  {content.BReference ? 
                  <div>
                  <p style={boldType}>{content.BReference}</p>

                  {filterComparisonContent(content.differencesB).map((difference) => (
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