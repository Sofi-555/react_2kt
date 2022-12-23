function Drawer(props) {
    return (

        <div  className="Drawer">
        <div className="basketlist"> 
          <h2>Basket<img onClick={props.onClose} className="cartItemRemove" width={25} height={25} src="/img/icons8-close.svg" alt="Close"></img></h2>
          <div className="items">
            
        
          <div className="cartTotalBoard">
          <ul>
             <li>
               <span>Just to pay:</span>
               <b>140$</b>
             </li>
           </ul>
           <button>To order</button>
          </div>
           </div>
           
     </div>
     </div>

    );
}
export default Drawer;