import '../../app/App.css';
import { useSelector } from 'react-redux';

const ExcessButton = (props) => {
//console.log(props)
  const products = useSelector(state => state.rowOfTubes.products); 

  const product = useSelector(state => state.rowOfTubes.unreactedMetals2[props.metal].product);
  const handleExcessClick = () => {
    //console.log(`props.metal=${props.metal} and props.reagent=${props.reagent}`);
    props.onClick(props.metal, props.reagent);
  }

    return (
        <div className="excess-or-reset-button-container d-flex justify-content-center" >          
          <button className="excess-button list-group-item w-100 rounded"
            onClick={handleExcessClick}
            
            disabled={!product.link}
            >
            Add excess reagent         
          </button>
        </div>
  
      );
}

export default ExcessButton;

//style={products[props.metal].link ? {display: 'flex'} : {display: 'none'}}
//disabled={!products[props.metal].link}