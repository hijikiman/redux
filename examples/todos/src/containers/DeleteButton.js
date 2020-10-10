import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import Button from '../components/Button'

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(deleteTodo())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
