import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"

import Homepage from "./Pages/Homepage"
import Cart from "./Pages/Cart"
import PageNotFound from "./Pages/PageNotFound"

function App() {
  const [itemData, setItemData] = useState([])
  const [cartItem, setCartItem] = useState([])

  const cartItemLength = cartItem.length

  const handelItem = (data) => {
    setItemData(data)
  }
  const handelAddItemToCart = (id) => {
    const [clickedItem] = itemData.filter((data) => data.id == id)
    setCartItem([...cartItem, clickedItem])
  }
  const handelDeleteItem = (id) => {
    setCartItem((curr) => curr.filter((data) => data.id !== id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Homepage
              itemData={itemData}
              onItem={handelItem}
              onAddItemToCart={handelAddItemToCart}
              cartItemLength={cartItemLength}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItemLength={cartItemLength}
              cartItem={cartItem}
              onDeleteItem={handelDeleteItem}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
