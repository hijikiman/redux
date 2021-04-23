import React from 'react'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import PropTypes from 'prop-types'


const ProductsContainerComponent = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={()=>addToCart(product.id)}
      />
    )}
  </ProductsList>
)


ProductsContainerComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default ProductsContainerComponent
