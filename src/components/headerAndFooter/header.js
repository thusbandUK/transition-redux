import '../../app/App.css';
import React from 'react';
import { useSelector } from 'react-redux';

function Header(props) {  
  const pathName = props.pathName;
  const selectedReagent = useSelector(state => state.menu.selectedReagent);

const title = () => {  
  if (pathName.includes('home')){
    return "Now Chemistry";
  } else if (pathName.includes('introduction')){
    return "Reactions of Complex Ions";
  } else if (pathName.includes('atoms')){
    return "Number of Atoms of Each Element in the Human Body";
  } else if (selectedReagent.name){
    return `Reactions of Complex Ions with ${selectedReagent.name}`;
  } else {
    return 'Now Chemistry';
  }  

}

 

  return (
    
    <div className="App">
      <header className="border-bottom py-5 overflow-hidden position-relative">
        <section className="container">
            <h1 className="display-2 m-0">{title()}</h1>
        </section>
      </header>      
    </div>
    
  );
}

export default Header;