function Header(props) {
    
return (

<header>
        <div className="headerleft">
       <img width={60} height={60} src="/img/icons8-spa-flower-50-removebg-preview.png"></img>
       <div className="headerInfo">
        <h3>Flower Shop</h3>
        </div> 
        </div>
        <ul className="headerRight">
          <li onClick={props.onClickCart}>
          <img width={30} height={30} src="/img/icons8-green-shopping-basket-50-removebg-preview.png"></img>
          <span>50$</span>
          </li>
          <li>
          <img width={25} height={25} src="/img/icons8-female-user-50-removebg-preview.png"></img>
          </li>
        </ul>
      </header>
);
}
export default Header;