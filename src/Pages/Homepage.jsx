import { useEffect, useState } from "react"

import Header from "../Component/Header"
import styles from "./Homepage.module.css"
import ItemList from "../Component/ItemList"

const BASE_URL = "http://localhost:1234/item"

function Homepage() {
  const [itemData, setItemData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}`)
        const data = await res.json()

        setItemData(data)
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
      <Header />
      <div className={styles.filter}>
        <button className={styles.active}>All</button>
        <button>T-shirt</button>
        <button>Jacket</button>
        <button>Trouser</button>
      </div>
      <main className={styles.mainWrapper}>
        {itemData.length > 0 ? (
          itemData.map((item, itemIndex) => (
            <ItemList item={item} key={itemIndex} />
          ))
        ) : (
          <p>There is no data yet!</p>
        )}
      </main>
    </>
  )
}

export default Homepage
