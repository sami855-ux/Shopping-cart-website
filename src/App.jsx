import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Cart from "./Pages/Cart"
import PageNotFound from "./Pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
