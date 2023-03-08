//import TextBox from '../../components/textBox/textBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSection, selectPage, disableLeft, disableRight, reset } from './textBoxCreatorSlice';
//import { textData } from '../../textData';
//import TextBox from '../../components/textBox/textBox';
import { textDataTemp } from '../../textDataTemp';
import ElementGenerator from './textBoxElements/ElementGenerator';
//import SubSuperTextGenerator from './dump/subSuperTextGenerator';
//import VariableTextCreator from './dump/variableTextCreator';
import { introPage } from '../../data/transitionMetalData/introPage';
//import { introPage2 } from '../../data/transitionMetalData/introPage2';
import { AmmoniaText } from '../../data/transitionMetalData/AmmoniaText';
import { HydrochloricAcidText } from '../../data/transitionMetalData/HydrochloricAcidText';
import { SodiumCarbonateText } from '../../data/transitionMetalData/SodiumCarbonateText';
import { SodiumHydroxideText } from '../../data/transitionMetalData/SodiumHydroxideText';


const TextBoxCreator = (props) => {
    const dispatch = useDispatch();
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    //const reagentOptions = useSelector(state => state.menu.reagentOptions);    
    const selectedReagent = useSelector(state => state.menu.selectedReagent);
    const currentSection = useSelector(state => state.textBoxCreator.selectedSection);
    const leftDisabled = useSelector(state => state.textBoxCreator.leftDisabled); 
    const rightDisabled = useSelector(state => state.textBoxCreator.rightDisabled); 
    let currentPage = useSelector(state => state.textBoxCreator.selectedPage);

    

    //console.log(currentSection);
  //important way of doing things
  //const pages = textData[currentSection][currentPage].allContent;



  
 
  const directionTree = {
    introPage: introPage,
    HydrochloricAcidText: HydrochloricAcidText,
    SodiumHydroxideText: SodiumHydroxideText,
    SodiumCarbonateText: SodiumCarbonateText,
    AmmoniaText: AmmoniaText
  }

  const pages = directionTree[currentSection][currentPage].allContent;

  /*var tempNamespace = {};
  var sectionName = currentSection;
  
  tempNamespace[sectionName] = 5;*/
  
  //console.log(directionTree[currentSection]);
//console.log(currentSection);

//console.log(window[currentSection]);
 //temporary stand in
 //const pages2 = textDataTemp.introPage[0].allContent;

//console.log(reagentOptions);

    //I think if you make the below more dependent on the state, that will help solve things, for why?
    //if you've got the initial state, which you will have, it'll know what page to load and if the localStorage has different
    //data, it will load that. Basically, synch this with the state
    
//I think this is the problem because it doubles up what the introduction page is doing, which is setting state to introPage

    useEffect(() => {
        //console.log('I fire once');
        /*if (!examBoard) {
            return;
        }*/
        dispatch(reset());
        //localStorage.setItem('textBoxCreator'.'leftDisabled', true);
        //localStorage.setItem('rightDisabled', false);
        let textSectionSelector;
        if (!selectedReagent.name){
            //console.log('if fired');
            textSectionSelector = 'introPage';
        } else {
            textSectionSelector = selectedReagent.text;
        }
        dispatch(selectSection(textSectionSelector));
        dispatch(selectPage(0));
        dispatch(disableRight(false));
        dispatch(disableLeft(true));
    }, [dispatch, selectedReagent/*, examBoard*/])
/**/
    //, examBoard  , examBoard
    /*
    useEffect(() => {
        //console.log('useEffect called');
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
/**/

//this is important, the logic needs to know the last page
    //let lastPage = textData[currentSection].length -1;
    let lastPage = directionTree[currentSection].length - 1;

    //console.log(`length of last page: ${lastPage}`);

    //temporary stand in
    //let lastPage = textDataTemp.introPage.length -1;
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

    const skipRender = (entry) => {
        if (!entry.doNotRender){
            return true;
        } else if (entry.doNotRender){
            if (entry.doNotRender.includes(examBoard)){
                return false;
            } else {
                return true;
            }

        }

    }

    return(
        <div className="bg-light border p-5 rounded position-relative" key="container-div">
          
          <div className="text-box" key="text-box-div">
                    
{/**TEMPORARY - YOU WILL NEED TO CHANGE PAGES2 BACK TO PAGES */}
            {pages.map((entry) => (
              
              (skipRender(entry)) ?

              <ElementGenerator
              type={entry.type}
              content={entry.content}
              props={entry.props}
              key={entry.props.key}
              examBoard={examBoard}              
              />
              
              : null

            ))}
            
            {/*
            {(skipRender(entry)) ? 
            
            : null }
            
            props={entry.props} */}
            <nav>
          {/* BF: these are now buttons elements (instead of divs) to ensure they can be focused on using keyboard nabigation only - crucial for accessibility. Also, semnatically they are indeed buttons! */}
              <button 
              className="nav-btn nav-btn__prev" 
              onClick={leftClick} 
              id="back-button-0"
              disabled={leftDisabled}
              key={'button1'}
              >
                <i className="mdi mdi-chevron-left" ></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button 
              className="nav-btn nav-btn__next" 
              onClick={rightClick} 
              id="next-button-0"
              disabled={rightDisabled}
              key={'button2'}
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