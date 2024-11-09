import PropTypes from "prop-types"
import styles from "./Error.module.css"

function Error({ message }) {
  return (
    <div className={styles.error}>
      <p>{message} 😟</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string,
}
export default Error
