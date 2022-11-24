import './reagent.css';
import { useSelector } from 'react-redux';

const ReagentBottle = (props) => {

    const selectedReagent = useSelector(state => state.menu.selectedReagent);
    
    const selectedReagentImage = selectedReagent.link;
        
      return (
          <div className="reagent-bottle-selection">
            <img className="reagent-bottle-image" 
            src={selectedReagentImage}
            alt={selectedReagent.altText}
            />
          </div>
      );
    };
    
    export default ReagentBottle;