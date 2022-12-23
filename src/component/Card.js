import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  

  React.useEffect(() => {
  console.log('Добавлено в кошик');
  },[isAdded]);

    console.log(isAdded);
    return (
      
      <div className="flowers-container">
      <div className="card">
        <div className="favorite" onClick={props.onFavorite}>
          <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
        </div>
        <img width={133} height={112} src="/img/IMAGE_2022-12-01_18_35_47-removebg-preview.png" alt="Bouquets"></img>
        <p>Peonies</p>
        <div>
          <div>
            <span>Price:</span>
            <b>25$</b>
          </div>
              <img width={18} height={18} onClick={onClickPlus} src={ isAdded ?  '/img/icons8-check-mark-button-48-removebg-preview.png' : '/img/icons8-sum-30-removebg-preview.png'} 
              alt="Plus"></img>
          
        </div>
      </div>

      <div className="card">
        <div className="favorite" onClick={props.onFavorite}>
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_18_38_23-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>40$</b>
            </div>
            
              <img width={18} height={18} onClick={onClickPlus} src={isAdded ? '/img/icons8-check-mark-button-48-removebg-preview.png' : '/img/icons8-sum-30-removebg-preview.png'} 
              alt="Plus"></img>
            
          </div>
        </div>

        <div className="card">
        <div className="favorite" onClick={props.onFavorite}>
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={133} height={112} src="/img/IMAGE_2022-12-01_18_35_58-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>50$</b>
            </div>
              <img width={18} height={18}  onClick={onClickPlus} src={isAdded ? '/img/icons8-check-mark-button-48-removebg-preview.png' :'/img/icons8-sum-30-removebg-preview.png'}
               alt="Plus"></img>
          </div>
        </div>

        <div className="card">
        <div className="favorite" onClick={props.onFavorite}>
            <img src="/img/icons8-heart-24-removebg-preview.png" alt="Unliked"></img>
          </div>
          <img width={120} height={102} src="/img/IMAGE_2022-12-01_18_36_16-removebg-preview.png" alt="Bouquets"></img>
          <p>Peonies</p>
          <div>
            <div>
              <span>Price:</span>
              <b>70$</b>
            </div>
              <img width={18} height={18}  onClick={onClickPlus} src={isAdded ? '/img/icons8-check-mark-button-48-removebg-preview.png' :'/img/icons8-sum-30-removebg-preview.png'}
               alt="Plus"></img>
          </div>
        </div>

      </div>



    );
}

export default Card;