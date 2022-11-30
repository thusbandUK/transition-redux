import { createElement } from 'react';
import '../../../app/App.css';

function ElementGenerator(props) {

  //content generator for forms and divs  


const formContent = () => {
  
    
    if ((props.type === 'form') || (props.type === 'div')){           
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

