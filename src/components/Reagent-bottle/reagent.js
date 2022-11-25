import './reagent.css';
import { useSelector } from 'react-redux';

const ReagentBottle = (props) => {

    const selectedReagent = useSelector(state => state.menu.selectedReagent);
    
    const selectedReagentImage = selectedReagent.link;
        
      return (
          <div className="reagent-bottle-selection d-flex justify-content-center">
            <img className="reagent-bottle-image img-fluid " 
            src={selectedReagentImage}
            alt={selectedReagent.altText}
            />
          </div>
      );
    };
    
    export default ReagentBottle;