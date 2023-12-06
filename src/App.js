import { ToastContainer } from "react-toastify";
import { Context } from "./context";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Cart from "./pages/Cart/Cart";


function App() {
  const [user, setUser] = useState({});
  const [checkUser ,setCheckUser ] = useState(false);
  const [loding, setLoding] = useState(false);

  return (
    <Context.Provider value={{
      checkUser,
      setCheckUser,
      loding,
      setLoding,
      user,
      setUser
    }}>
      <ToastContainer rtl={true} theme='colored' />
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<Cart/>} path="/cart" />
      </Routes>
    </Context.Provider>
  );
}

export default App;
