import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "../Component/Header"
import styles from "./Homepage.module.css"
import ItemList from "../Component/ItemList"
import Spinner from "../Component/Spinner"

const BASE_URL = "http://localhost:1234/item"

function Homepage({ itemData, onItem, onAddItemToCart, cartItemLength }) {
  const [isLoading, setIsLoading] = useState(false)
  const [typeOfImage, setTypeOfImage] = useState("all")

  //Drived State
  let filterData

  if (typeOfImage === "all") filterData = itemData
  if (typeOfImage === "t-shirt")
    filterData = itemData.filter((data) => data.type === typeOfImage)
  if (typeOfImage === "jacket")
    filterData = itemData.filter((data) => data.type === typeOfImage)
  if (typeOfImage === "trouser")
    filterData = itemData.filter((data) => data.type === typeOfImage)

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}`)
        const data = await res.json()

        if (!data.length > 0) return

        onItem(data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header cartItemLength={cartItemLength} />
      <div className={styles.filter}>
        <button
          className={typeOfImage === "all" ? `${styles.active}` : null}
          onClick={() => setTypeOfImage("all")}
        >
          All
        </button>
        <button
          className={typeOfImage === "t-shirt" ? `${styles.active}` : null}
          onClick={() => setTypeOfImage("t-shirt")}
        >
          T-shirt
        </button>
        <button
          className={typeOfImage === "jacket" ? `${styles.active}` : null}
          onClick={() => setTypeOfImage("jacket")}
        >
          Jacket
        </button>
        <button
          className={typeOfImage === "trouser" ? `${styles.active}` : null}
          onClick={() => setTypeOfImage("trouser")}
        >
          Trouser
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className={styles.mainWrapper}>
          {filterData.length > 0 ? (
            filterData.map((item, itemIndex) => (
              <ItemList
                item={item}
                key={itemIndex}
                onAddItemToCart={onAddItemToCart}
              />
            ))
          ) : (
            <p>There is no data yet!</p>
          )}
        </main>
      )}
    </>
  )
}

Homepage.propTypes = {
  itemData: PropTypes.array,
  onItem: PropTypes.func,
  onAddItemToCart: PropTypes.func,
  cartItemLength: PropTypes.number,
}

export default Homepage
