import PropTypes from "prop-types"

import Header from "../Component/Header"

function Cart({ cartItemLength }) {
  return (
    <>
      <Header cartItemLength={cartItemLength} />
    </>
  )
}

Cart.propTypes = {
  cartItemLength: PropTypes.number,
}

export default Cart
