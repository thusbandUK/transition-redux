import '../../app/App.css';
import { textData } from '../../textData';
import ElementGenerator from './textBoxElements/ElementGenerator';
import SubSuperTextGenerator from './textBoxElements/subSuperTextGenerator';
import VariableTextCreator from './variableTextCreator';
import { useSelector, useDispatch } from 'react-redux';
import '../../app/styleSlides.css';
import { useEffect } from 'react';
//import { selectSection, selectPage, disableRight, disableLeft } from '../../features/textBoxCreator/textBoxCreatorSlice';
//import { selectPage, disableLeft, disableRight } from '../../features/textBoxCreator/textBoxCreatorSlice';

const TextBox = (props) => {

  //const dispatch = useDispatch();
  const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
  const currentSection = useSelector(state => state.textBoxCreator.selectedSection);  
  const currentPage = useSelector(state => state.textBoxCreator.selectedPage);
  const leftDisabled = useSelector(state => state.textBoxCreator.leftDisabled); 
  const rightDisabled = useSelector(state => state.textBoxCreator.rightDisabled); 
 //alert(leftDisabled);
  //alert(rightDisabled);

  

//this needs to be in the state, not the contents of the object in textData but the path to it, no that doesn't work, because you
//use the same path no matter the examBoard, hmm... what if you had an entry in the textBox creator slice that replicated the
//examBoard bit


 //const pages = textData.introPage[0].allContent;
//alert(pages[0].content);
/*
add the function here that rewrites the copy of pages and instead of mapping pages directly
map the callback function of the copy of pages

*/
const pages = textData[currentSection][currentPage].allContent;
let copyOfPages = VariableTextCreator(pages, examBoard);
//alert(copyOfPages[0].content);

useEffect(() => {
 //alert('use effect worked');
  //const pages = textData[currentSection][currentPage].allContent;
  //let copyOfPages = VariableTextCreator(pages, examBoard);
  copyOfPages = VariableTextCreator(pages, examBoard);
  //dispatch(selectSection('introPage'));
  //dispatch(selectPage(0));
  //dispatch(disableRight(false));
  //dispatch(disableLeft(true));

//this makes a new copy but you would need this page to rerender which this won't do unless it updates state in someway

}, [examBoard])

/**/
const handleLeftClick = () => {
  props.handleLeftClick();
}

const handleRightClick = () => {
  props.handleRightClick();
}

    
      return (
        <div className="bg-light border p-5 rounded position-relative">
          
          <div className="text-box">
                    

            {copyOfPages.map((entry) => (
              entry.type === 'pTagged' ?
              <SubSuperTextGenerator 
              type={entry.type}
              content={entry.content}
              props={entry.props}/>
              :
              <ElementGenerator
              type={entry.type}
              content={entry.content}
              props={entry.props}
              />
            ))}
            
            
            <nav>
          {/* BF: these are now buttons elements (instead of divs) to ensure they can be focused on using keyboard nabigation only - crucial for accessibility. Also, semnatically they are indeed buttons! */}
              <button 
              className="nav-btn nav-btn__prev" 
              onClick={handleLeftClick} 
              id="back-button-0"
              disabled={leftDisabled}
              >
                <i className="mdi mdi-chevron-left" ></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
              className="nav-btn nav-btn__next" 
              onClick={handleRightClick} 
              id="next-button-0"
              disabled={rightDisabled}
              >
                <span className="visually-hidden">Next</span>
                <i className="mdi mdi-chevron-right" ></i>
              </button>
            </nav>
            </div>
        </div>
      );
    };
    
    export default TextBox;

    //disabled={leftDisabled}
    //disabled={rightDisabled}