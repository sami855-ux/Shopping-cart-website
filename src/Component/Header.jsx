import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import PropTypes from "prop-types"

function Header({ cartItemLength }) {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <div className={styles.logoWrapper}>
          <img src="/icon.png" alt="Logo" />
          <h2>Simple Shopping Website</h2>
        </div>
      </Link>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            Cart
            {cartItemLength !== 0 ? (
              <span className={styles.top}>{cartItemLength}</span>
            ) : null}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

Header.propTypes = {
  cartItemLength: PropTypes.number,
}

export default Header
