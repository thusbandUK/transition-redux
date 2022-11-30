import '../../app/App.css';
import { textData } from '../../textData';
import ElementGenerator from './textBoxElements/ElementGenerator';
import SubSuperTextGenerator from './textBoxElements/subSuperTextGenerator';
import { useSelector } from 'react-redux';
import '../../app/styleSlides.css';

const TextBox = (props) => {

  
  const currentSection = useSelector(state => state.textBoxCreator.selectedSection);  
  const currentPage = useSelector(state => state.textBoxCreator.selectedPage);  

  const pages = textData[currentSection][currentPage].allContent;
 //const page2 = textData.introPage[0].allContent;


const handleLeftClick = () => {
  props.handleLeftClick();
}

const handleRightClick = () => {
  props.handleRightClick();
}

    
      return (
        <div className="bg-light border p-5 rounded position-relative">
          
          <div className="text-box">
                    

            {pages.map((entry) => (
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
              <button className="nav-btn nav-btn__prev" onClick={handleLeftClick} id="back-button-0">
                <i className="mdi mdi-chevron-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="nav-btn nav-btn__next" onClick={handleRightClick} id="next-button-0">
                <span className="visually-hidden">Next</span>
                <i className="mdi mdi-chevron-right"></i>
              </button>
            </nav>
            </div>
        </div>
      );
    };
    
    export default TextBox;