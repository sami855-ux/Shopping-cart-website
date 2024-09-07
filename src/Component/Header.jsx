import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
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
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
