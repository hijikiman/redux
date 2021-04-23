import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import CartContainerComponent from '../components/CartContainerComponent'

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

const mapDispatchToProps=dispatch=>({
  checkout: products=>dispatch(checkout(products))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainerComponent)
