import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const App = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Rupository</h4>
        <p>Curated archive of YouTube videos<br/>showcasing important bits of<br/>the phenomenal world of<br/>Rupaul's Drag Race</p>
      </div>
      <div>
        <Link to='/home'> 
          <button type='button' id="enter-button">
            Enter Rupository
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
