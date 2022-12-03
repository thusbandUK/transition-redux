import TextBox from '../../components/textBox/textBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSection, selectPage, disableLeft, disableRight, reset } from './textBoxCreatorSlice';
import { textData } from '../../textData';
//import TextBox from '../../components/textBox/textBox';


const TextBoxCreator = (props) => {
    const dispatch = useDispatch();
    const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const reagentOptions = useSelector(state => state.menu.reagentOptions);    
    const currentSection = useSelector(state => state.textBoxCreator.selectedSection);
    let currentPage = useSelector(state => state.textBoxCreator.selectedPage);
    
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
        <TextBox
        handleLeftClick={leftClick}
        handleRightClick={rightClick} 
        />
    )
}

export default TextBoxCreator;