import BasketBlock from './component/BasketBlock';
import Card from './component/Card';
import Header from './component/Header';
import Drawer from './component/Drawer';
import React from 'react';



function App() {
  const [cartOpened, setCartOpened]= React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  
  return (
    <div className="wrapper">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)}  />
      <div className="content">
        <div>
        <h1>All Bouquets</h1>
        <div className="search-block">
       <img src="/img/icons8-search-30-removebg-preview.png" alt="search"></img>
       <input placeholder="Search...."></input>

        </div>
        </div>
        


        <div className="flowers-container">
          <Card/>
          
        
        </div>

        <div className="flowers-container2">

        <div className="card">
        <div className="favorite">
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_18_36_09-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>90$</b>
            </div>
            <button className="button" onClick={() => alert (1)}>
              <img width={18} height={18} src="/img/icons8-sum-30-removebg-preview.png" alt="Plus"></img>
            </button>
          </div>
        </div>

        <div className="card">
        <div className="favorite">
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_18_36_02-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>68$</b>
            </div>
            <button className="button" onClick={() => alert (1)}>
              <img width={18} height={18} src="/img/icons8-sum-30-removebg-preview.png" alt="Plus"></img>
            </button>
          </div>
        </div>

        <div className="card">
        <div className="favorite">
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_19_43_30-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>100$</b>
            </div>
            <button className="button" onClick={() => alert (1)}>
              <img width={18} height={18} src="/img/icons8-sum-30-removebg-preview.png" alt="Plus"></img>
            </button>
          </div>
        </div>
    
        <div className="card">
        <div className="favorite">
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_19_43_27-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>75$</b>
            </div>
            <button className="button" onClick={() => alert (75)}>
              <img width={18} height={18} src="/img/icons8-sum-30-removebg-preview.png" alt="Plus"></img>
            </button>
          </div>
        </div>
      

        </div>
       
       



      </div>
    </div>
  );
}

export default App;
