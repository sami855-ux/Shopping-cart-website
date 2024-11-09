import PropTypes from "prop-types"
import styles from "./CartItem.module.css"

function CartItem({ cart, onDeleteItem }) {
  return (
    <div className={styles.cartItem}>
      <img src={cart["image-path"]} alt="" />
      <section>
        <p className={styles.title}>{cart.title}</p>
        <span>{cart.desc}</span>
        <p className={styles.price}>{cart.price} br</p>
        <button onClick={() => onDeleteItem(cart.id)}>Remove</button>
        <button>Add</button>
      </section>
    </div>
  )
}

CartItem.propTypes = {
  cart: PropTypes.object,
  onDeleteItem: PropTypes.func,
}
export default CartItem
