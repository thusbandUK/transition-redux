//import './reagent.css';
//import { useSelector } from 'react-redux';
import '../../app/App.css';
import {textData} from '../../textData';
import ElementGenerator from './textBoxElements/ElementGenerator';
import SubSuperTextGenerator from './textBoxElements/subSuperTextGenerator';
import '../../app/styleSlides.css';

const TextBox = (props) => {

    //const thisPageData = textData.allPages[0];


    //const experiment = 'Paragraph';

const page2 = textData.introPage[1].allContent;

    
      return (
        <div className="bg-light border p-5 rounded position-relative">
          
          <div class="text-box">
                    

            {page2.map((entry) => (
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
              <button class="nav-btn nav-btn__prev" onClick='displayLast(0, {"last page": 3, observation: "", comparison: "", "written response": ""});' id="back-button-0">
                <i class="mdi mdi-chevron-left"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="nav-btn nav-btn__next" onClick='displayNext(0, {"last page": 3, observation: "", comparison: "", "written response": ""});' id="next-button-0">
                <span class="visually-hidden">Next</span>
                <i class="mdi mdi-chevron-right"></i>
              </button>
            </nav>
            </div>
        </div>
      );
    };
    
    export default TextBox;

    /*
    
    */