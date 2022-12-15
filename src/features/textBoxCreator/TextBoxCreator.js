//import TextBox from '../../components/textBox/textBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSection, selectPage, disableLeft, disableRight, reset } from './textBoxCreatorSlice';
import { textData } from '../../textData';
//import TextBox from '../../components/textBox/textBox';
import { textDataTemp } from '../../textDataTemp';
import ElementGenerator from './textBoxElements/ElementGenerator';
import SubSuperTextGenerator from './textBoxElements/subSuperTextGenerator';
import VariableTextCreator from './textBoxElements/variableTextCreator';


const TextBoxCreator = (props) => {
    const dispatch = useDispatch();
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const reagentOptions = useSelector(state => state.menu.reagentOptions);    
    const currentSection = useSelector(state => state.textBoxCreator.selectedSection);
    let currentPage = useSelector(state => state.textBoxCreator.selectedPage);
  const leftDisabled = useSelector(state => state.textBoxCreator.leftDisabled); 
  const rightDisabled = useSelector(state => state.textBoxCreator.rightDisabled); 

  const pages = textData[currentSection][currentPage].allContent;
 // let copyOfPages = VariableTextCreator(pages, examBoard);

 const pages2 = textDataTemp.introPage[0].allContent;



    //I think if you make the below more dependent on the state, that will help solve things, for why?
    //if you've got the initial state, which you will have, it'll know what page to load and if the localStorage has different
    //data, it will load that. Basically, synch this with the state
    
    useEffect(() => {
        //alert('use effect called')
        if (!examBoard) {
            return;
        }
        dispatch(reset());
        //localStorage.setItem('textBoxCreator'.'leftDisabled', true);
        //localStorage.setItem('rightDisabled', false);
        let textSectionSelector;
        if (!reagentOptions.name){
            textSectionSelector = 'introPage';
        } else {
            textSectionSelector = reagentOptions.name;
        }
        dispatch(selectSection(textSectionSelector));
        dispatch(selectPage(0));
        dispatch(disableRight(false));
        dispatch(disableLeft(true));
    }, [dispatch, reagentOptions, examBoard])
/**/
    //, examBoard
    /*
    useEffect(() => {
        if (!examBoard) {
            return;
        }
        let textSectionSelector;
        if (!reagentOptions.name){
            textSectionSelector = 'introPage';
        } else {
            textSectionSelector = reagentOptions.name;
        }
        dispatch(selectSection(textSectionSelector));
        dispatch(selectPage(0))
    }, [dispatch, reagentOptions])
*/
    let lastPage = textData[currentSection].length -1;

    //left click dispatch function
    const leftClick = () => {
       if (currentPage === 0){
            return;
        } else {
            if (currentPage === 1){
                dispatch(disableLeft(true));
            }
            dispatch(selectPage(currentPage - 1));
        }
        if (currentPage === lastPage){
            dispatch(disableRight(false));
        }
        

    }

    //right click dispatch function
    const rightClick = () => {
       if (currentPage === lastPage){
            return;
       } else {
        if (currentPage === (lastPage - 1)){
            dispatch(disableRight(true));
        } else if (currentPage === 0){
            dispatch(disableLeft(false));
        }
        dispatch(selectPage(currentPage + 1));
    }
        
    }

    return(
        <div className="bg-light border p-5 rounded position-relative">
          
          <div className="text-box">
                    
{/** */}
            {pages.map((entry) => (
              
              <ElementGenerator
              type={entry.type}
              content={entry.content}
              props={entry.props}
              key={entry.id}
              examBoard={examBoard}
              
              
              />
            ))}
            
            
            <nav>
          {/* BF: these are now buttons elements (instead of divs) to ensure they can be focused on using keyboard nabigation only - crucial for accessibility. Also, semnatically they are indeed buttons! */}
              <button 
              className="nav-btn nav-btn__prev" 
              onClick={leftClick} 
              id="back-button-0"
              disabled={leftDisabled}
              >
                <i className="mdi mdi-chevron-left" ></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
              className="nav-btn nav-btn__next" 
              onClick={rightClick} 
              id="next-button-0"
              disabled={rightDisabled}
              >
                <span className="visually-hidden">Next</span>
                <i className="mdi mdi-chevron-right" ></i>
              </button>
            </nav>
            </div>
        </div>
        
    )
}

export default TextBoxCreator;

//variableContent={entry.variableContent}
//parent={entry.parent}