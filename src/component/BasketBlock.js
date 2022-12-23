function BasketBlock() {
    return (

        <div  className="BasketBlock">
        <div className="basketlist"> 
          <h2>Basket<img className="cartItemRemove" width={25} height={25} src="/img/icons8-cancel-50-removebg-preview.png" alt="Remove"></img></h2>
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
     
          <div className="cartItem">
           <img width={200} height={200} src="/img/IMAGE_2022-12-01_19_43_30-removebg-preview.png" alt="Bouquets"></img>
           <div>
             <p>Peonies</p>
             <b>75$</b>
           </div>
           <img className="cartItemRemove" width={25} height={25} src="/img/icons8-cancel-50-removebg-preview.png" alt="Remove"></img>
          </div>
     
          <div className="cartItem">
           <img width={200} height={200} src="/img/IMAGE_2022-12-01_18_36_16-removebg-preview.png" alt="Bouquets"></img>
           <div>
             <p>Peonies</p>
             <b>65$</b>
           </div>
           <img className="cartItemRemove" width={25} height={25} src="/img/icons8-cancel-50-removebg-preview.png" alt="Remove"></img>
          </div>
       </div>
       <div/>
       
       </div>
  

    );
}
export default BasketBlock;