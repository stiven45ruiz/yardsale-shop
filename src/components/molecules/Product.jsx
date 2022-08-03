import React, {useContext} from 'react';
import AppContext from '../../context/AppContext';
import '../../styles/components/Products.scss';
import addToCartIcon from '../../assets/icons/bt_add_to_cart.svg'

const Product = ({product}) => {
  const {addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item)
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
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export { Product };
