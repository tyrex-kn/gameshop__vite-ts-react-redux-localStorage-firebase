import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Header } from "./components/ui";
import { 
  Homepage, 
  GamePage, 
  OrderPage, 
  FormOrderOutlet, 
  CartOutlet, 
  CreateGamePage,
  OrderListPage
} from "./pages";

import { loadGameThunk } from "./redux/games/gameLoadSlice";
import { loadOrderThunk } from "./redux/orders/orderLoadSlice";

import type { AppDispatch, RootState } from "./redux/index";

import "./App.css"
import { loadCartThunk } from "./redux/cart/cartSlice";

function App() {
  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(()=>{
    dispatch(loadGameThunk("games"))
    dispatch(loadOrderThunk("orders"))
    dispatch(loadCartThunk())
  },[dispatch])

  const items = useSelector((state: RootState) => state.item.body)
  console.log(items);

  return (
      <BrowserRouter>
        <div className="App">
          <Header /> 
          <Routes>
            <Route path="/" element={<Homepage items={items}/>} />
            <Route path="/app/:title" element={<GamePage />}/>
            <Route path="/create-game" element={<CreateGamePage />} />
            <Route path="/order" element={<OrderPage />} > 
              <Route path="" element={<CartOutlet />} />
              <Route path="form-order" element={<FormOrderOutlet />} />
            </Route>
            <Route path="order-list" element={<OrderListPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
