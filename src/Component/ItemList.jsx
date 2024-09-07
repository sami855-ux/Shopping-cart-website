import PropTypes from "prop-types"
import styles from "./ItemList.module.css"

function ItemList({ item }) {
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
        <button className={styles.btn}>Add to cart</button>
      </section>
    </div>
  )
}

ItemList.propTypes = {
  item: PropTypes.object,
}

export default ItemList
