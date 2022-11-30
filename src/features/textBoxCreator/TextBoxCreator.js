import TextBox from '../../components/textBox/textBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSection, selectPage } from './textBoxCreatorSlice';
import { textData } from '../../textData';
//import TextBox from '../../components/textBox/textBox';


const TextBoxCreator = (props) => {
    const dispatch = useDispatch();
    //const examBoard = useSelector(state => state.examBoard.selectedExamBoard);
    const reagentOptions = useSelector(state => state.menu.reagentOptions);    
    const currentSection = useSelector(state => state.textBoxCreator.selectedSection);
    let currentPage = useSelector(state => state.textBoxCreator.selectedPage);
    let lastPage = textData[currentSection].length -1;
    
    useEffect(() => {
        let textSectionSelector;
        if (!reagentOptions.name){
            textSectionSelector = 'introPage';
        } else {
            textSectionSelector = reagentOptions.name;
        }
        dispatch(selectSection(textSectionSelector));
        dispatch(selectPage(0))
    }, [dispatch, reagentOptions])

    //left click dispatch function
    const leftClick = () => {
       if (currentPage === 0){
            return;
        } else {
            dispatch(selectPage(currentPage - 1));
        }

    }

    //right click dispatch function
    const rightClick = () => {
       if (currentPage === lastPage){
            return;
       } else {
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