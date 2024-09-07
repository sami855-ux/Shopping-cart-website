import { useEffect, useState } from "react"

import Header from "../Component/Header"
import styles from "./Homepage.module.css"

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
      <main className={styles.mainWrapper}></main>
    </>
  )
}

export default Homepage
