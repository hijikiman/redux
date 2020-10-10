import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      marginLeft: '4px',
      borderTopLeftRadius: '30px 50px',
      borderTopRightRadius: '30px 50px',
      borderBottomRightRadius: '30px 50px',
      borderBottomLeftRadius: '30px 50px',
    }}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
