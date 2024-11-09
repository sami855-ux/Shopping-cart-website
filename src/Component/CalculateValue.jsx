import PropTypes from "prop-types"
import styles from "./CalculateValue.module.css"

function CalculateValue({ cartItem }) {
  const length = cartItem.length
  const totalAmout = cartItem.map((data) => data.price)
  let price = 0
  for (let i = 0; i < totalAmout.length; i++) {
    const num = Number(totalAmout[i])
    price += num
  }
  return (
    <div className={styles.calaculateWrapper}>
      <h2>Your Cart summary</h2>
      <p>Totala Item: {length}</p>
      <p>Totala Amout of price: {price} br</p>

      <button>Purchase</button>
    </div>
  )
}

CalculateValue.propTypes = {
  cartItem: PropTypes.array,
}

export default CalculateValue
