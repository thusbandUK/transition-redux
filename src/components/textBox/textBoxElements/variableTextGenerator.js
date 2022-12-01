import { createElement } from 'react';
import '../../../app/App.css';

/*
so this is a two-parter: at some point you need to add logic upstream to make something - either textBox or ElementGenerator - process
the incoming data and see whether variable is true or not. If it is it needs to get served to this component
*/

//if (Object.keys(x.content).includes('staticContent'))

const exemplarObject = {id: 18, variable: true, allContent: [
    {
        type: 'h2',
        content: {
            staticContent: `The ${numberOfStartingSolutions} starting solutions`,
            dynamicContent: {
                numberOfStartingSolutions: { 
                    AQA: 'five',
                    Edexcel: 'five',
                    OCRA: 'five',
                    OCRB: 'three'
                }
            }
        },
        props: {key: 18.1}
    },
    {
        type: 'p',  
        content: ['The AQA syllabus includes the reactions of five hexaaquaions with four different reagents. The hexaaquaions are as follows:'],
        props: {key: 18.2}
    },
    {
        type: 'ul',
        content: [
                  {formElement: 'li',
                   props: {},
                   formElementContent: 'hexaaquacobalt(II): pink solution'
                  },
                  {formElement: 'li',
                   props: {},
                   formElementContent: 'hexaaquacopper(II): blue solution'
                  },
                  {formElement: 'li',
                   props: {},
                   formElementContent: 'hexaquairon(II): green solution'
                  },
                  {formElement: 'li',
                   props: {},
                   formElementContent: 'hexaaquairon(III): pale yellow (or violet) solution'
                  },
                  {formElement: 'li',
                   props: {},
                   formElementContent: 'hexaaquaaluminium(III): colourless solution'
                  }
                ],
        props: {key: 18.3}
            },
        {
            type: 'p',  
            content: ['In each section the starting solutions appear in a different order with buttons you can click to reveal their identity. This is so you can practise recalling their name by colour.',
        'After each set of reactions there is a set of text boxes to record your observations. Make sure to describe both the appearance of each tube at the start and at the end. State whether colours describe a solution or a precipitate. For example: "When a few drops of sodium hydroxide are added to a blue solution of hexaaquacopper(II) ions, a pale blue precipitate forms.'],
            props: {key: 18.4}
        }
    ]
    }

    function VariableTextGenerator(props) {

        //content generator for forms and divs  
      
      
      const formContent = () => {
        
          
          if ((props.type === 'form') || (props.type === 'div') || (props.type === 'ul')){           
              let formElements = props.content.map((formElementDetails) => (
                  createElement(formElementDetails.formElement, formElementDetails.props, formElementDetails.formElementContent)           
              )) 
              return formElements;        
          } else {
            return props.content;
          }
      } 
      
        return createElement(
          props.type,
          props.props,
          formContent()    
        );
      }
      
      export default VariableTextGenerator;

//see code below for working function to go in textBox

let copyOfArrayToIterate;

const variableContentGenerator = (object, examBoard) => {
    
    const arrayToIterate = object.allContent;
    copyOfArrayToIterate = arrayToIterate; 
    //console.log(arrayToIterate);
    //let workingString = '';
    for (let x = 0; x < arrayToIterate.length; x++){
        if (Object.keys(arrayToIterate[x].content).includes('staticContent')){
            return copyOfArrayToIterate[x].content = (arrayToIterate[x].content.staticContent.openingString + arrayToIterate[x].content.dynamicContent[examBoard] + arrayToIterate[x].content.staticContent.closingString);
    }

    

}

    

} 


      
/*
function ElementGenerator(props) {

  //content generator for forms and divs  


const formContent = () => {
  
    
    if ((props.type === 'form') || (props.type === 'div') || (props.type === 'ul')){           
        let formElements = props.content.map((formElementDetails) => (
            createElement(formElementDetails.formElement, formElementDetails.props, formElementDetails.formElementContent)           
        )) 
        return formElements;        
    } else {
      return props.content;
    }
} 

  return createElement(
    props.type,
    props.props,
    formContent()    
  );
}

export default ElementGenerator;


*/      