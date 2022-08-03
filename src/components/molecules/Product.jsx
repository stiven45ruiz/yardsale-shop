import React, {useContext, useState} from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/components/Products.scss';
import addToCartIcon from '../../assets/icons/bt_add_to_cart.svg'
import addedicon from '../../assets/icons/bt_added_to_cart.svg'

const Product = ({product}) => {
  const {addToCart } = useContext(AppContext);
  const [added, setAdded] = useState(false);

  const handleClick = (item) => {
    addToCart(item)
    setAdded(!added)
  }

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className='addcart__icon' onClick={() => handleClick(product)}>
          <img 
            src={!added ? addToCartIcon: addedicon}  
            alt="addtoCArt" />
        </figure>
      </div>
    </div>
  );
};

export { Product };
