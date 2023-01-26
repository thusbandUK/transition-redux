import '../../app/App.css';

const ExcessButton = (props) => {

  const handleExcessClick = () => {    
    props.onClick(props.metal, props.reagent);
  }

    return (
        <div className="excess-or-reset-button-container d-flex justify-content-center" >          
          <button className="excess-button list-group-item w-100 rounded"
            onClick={handleExcessClick}            
            >
            Add excess reagent         
          </button>
        </div>
  
      );
}

export default ExcessButton;