import './excessButton.css';

const ExcessButton = (props) => {

  const handleExcessClick = () => {
    props.onClick(props.metal, props.reagent);
  }
    return (
        <div>          
          <button className="excess-button"
            onClick={handleExcessClick}>
            Click to add excess reagent         
          </button>
        </div>
  
      );
}

export default ExcessButton;