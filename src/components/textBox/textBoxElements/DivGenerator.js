import { createElement } from 'react';
import '../../../app/App.css';

function DivGenerator(props) {


  const exampleDivObject = {
    type: 'div',
    content: [
              {formElement: 'img',
               props: {src: 'images/structures/hexaaquacopper.png'},
               formElementContent: null
              },
              {formElement: 'p',
               props: {key: 2, id: "sidenote"},
               formElementContent: "Did you include sulfate ions anywhere in your structure? Don't worry, it's a common mistake. The question states that copper sulfate is dissolved. When the ionically bonded copper sulfate is mixed with water, the ions will be separated as they become hydrated by the water molecules. The sulfate ions will become surrounded by water molecules. Each copper ion will also become surrounded by water molecules, which will arrange themselves around the copper ions as shown."
              }
            ],
    props: {id: "intro-answer-sidenote"}
}
    
const divContent = () => { 
    
    
               
        let divElements = exampleDivObject.content.map((divElementDetails) => (
            createElement(divElementDetails.formElement, divElementDetails.props, divElementDetails.formElementContent)           
        )) 
        return divElements;        
    } 


  return createElement(
    'div',
    exampleDivObject.props,
    divContent()    
  );
}

export default DivGenerator;