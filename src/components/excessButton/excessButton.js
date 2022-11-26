import '../../app/App.css';
import { useSelector } from 'react-redux';

const ExcessButton = (props) => {

  const products = useSelector(state => state.rowOfTubes.products); 

  const handleExcessClick = () => {
    props.onClick(props.metal, props.reagent);
  }

    return (
        <div className="excess-or-reset-button-container d-flex justify-content-center" >          
          <button className="excess-button list-group-item w-100 rounded"
            onClick={handleExcessClick}
            
            disabled={!products[props.metal].link}
            >
            Add excess reagent         
          </button>
        </div>
  
      );
}

export default ExcessButton;

//style={products[props.metal].link ? {display: 'flex'} : {display: 'none'}}