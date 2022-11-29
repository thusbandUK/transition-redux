//import './reagent.css';
//import { useSelector } from 'react-redux';
import '../../app/App.css';
//import {textData} from '../../textData';
import TypeSelector from './textBoxElements/typeSelector';

const TextBox = (props) => {

    //const thisPageData = textData.allPages[0];


    //const experiment = 'Paragraph';

    const allContent = [
            
        {
            type: 'h2',
            content: ['What should I be able to do before I start?'],
            props: {}
        },
        {
            type: 'p',  
            content: ['Draw a diagram showing the structure of the complex ion formed when copper sulfate is dissolved in distilled water.',
            'Try drawing the diagram now and then click the next button to check your answer.'],
            props: {}
        },
        {
          type: 'img',  
          content: null,
          props: {src: 'images/select reagent.png'}
        },
        {
          type: 'form',
          content: [{formElement: 'br'},
                    {formElement: 'input',
                     props: {key: 1, type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands'},
                     formElementContent: null
                    },
                    {formElement: 'label',
                     props: {key: 2, for: 'pre-learning-checklist'},
                     formElementContent: 'Six aqua ligands bonded via oxygen atoms'
                    },
                    {formElement: 'br'},
                    {formElement: 'input',
                     props: {key: 3, type: 'checkbox', id: 'pre-learning-checklist2', name:'pre-learning-checklist2', value:'brackets'},
                     formElementContent: null
                    },
                    {formElement: 'label',
                     props: {key: 4, for: 'pre-learning-checklist2'},
                     formElementContent: 'Square brackets with overall charge shown top right'
                    },
                    {formElement: 'br'},
                    {formElement: 'input',
                     props: {key: 5, type: 'checkbox', id: 'pre-learning-checklist3', name:'pre-learning-checklist3', value:'arrows'},
                     formElementContent: null
                    },
                    {formElement: 'label',
                     props: {key: 6, for: 'pre-learning-checklist3'},
                     formElementContent: 'Arrow heads point towards central Cu ion to show coordinate bonds'
                    },
                    {formElement: 'br'}
                   ],
          props: {style: {display: 'block'}}          
        }

    ]
        



      return (
        <div className="bg-light border p-5 rounded position-relative">


          
          <div class="text-box">
                    

            {allContent.map((entry) => (
              <TypeSelector
              type={entry.type}
              content={entry.content}
              props={entry.props}
              />
            ))}

{/**
 * 
 *  [{formElement: 'input',
                    props: {type: 'checkbox', id: 'pre-learning-checklist', name: 'pre-learning-checklist', value: 'ligands'},
                    formElementContent: null
                    },
                    {formElement: 'label',
                    props: {for: 'pre-learning-checklist'},
                    formElementContent: 'Six aqua ligands bonded via oxygen atoms'
                    }
                  ],
 * 
            <TypeSelector
            type={allContent[0].type}
            content={allContent[0].content}
            />



            
            {allContent.map((contentEntry) => (
                contentEntry.title ? <Title title={allContent[0].title} /> : null;
                contentEntry.paragraph ? allContent[1].paragraph.map((paragraph) => (
                    <Paragraph paragraph={paragraph}/>
                )) : null;

            ))}
 
            {allContent[0].title ? <Title title={allContent[0].title} /> : null}
            {allContent[1].paragraph? allContent[1].paragraph.map((paragraph) => (
                <Paragraph paragraph={paragraph}/>
            )) : null }


            <h2>{allContent[0].title}</h2>
            {allContent[1].paragraph.map((paragraph) => (
                <p>{paragraph}</p>
            ))}

*/}
            
          
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