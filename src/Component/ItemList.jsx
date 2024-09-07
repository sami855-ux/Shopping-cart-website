import PropTypes from "prop-types"
import styles from "./ItemList.module.css"

function ItemList({ item, onAddItemToCart }) {
  return (
    <div className={styles.list}>
      <img src={item["image-path"]} alt="" />
      <section className={styles.item}>
        <span>{item.title}</span>
        <p>{item.desc}</p>

        <div className={styles.price}>
          <span>{item.price} br</span>
          <p>Best offer yet</p>
        </div>
        <button className={styles.btn} onClick={() => onAddItemToCart(item.id)}>
          Add to cart
        </button>
      </section>
    </div>
  )
}

ItemList.propTypes = {
  item: PropTypes.object,
  onAddItemToCart: PropTypes.func,
}

export default ItemList
