import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductsContainerComponent from '../components/ProductsContainerComponent'


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

const mapDispatchToProps=dispatch=>({
  addToCart: id => dispatch(addToCart(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainerComponent)
