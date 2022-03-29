import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
// import PrivateRoute from './PrivateRoute';
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
// import NavMenu from './components/NavMenu';
// import ScrollUpArrow from './components/ScrollUpArrow';
// import BlogPost from './pages/BlogPost';
// import AdminPost from './pages/AdminPost';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import { AuthContext } from "./context/auth";
// import LoadingSpinner from './components/LoadingSpinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App(props) {
  // Auth
  // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  // const [authTokens, setAuthTokens] = useState(existingTokens);
  // const setTokens = (data) => {
  // 	localStorage.setItem("tokens", JSON.stringify(data));
  // 	setAuthTokens(data);
  // }

  // Nav
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [cart, setCart] = useState([]);
  const mobileDown = useMediaQuery("(max-width:600px)");
  console.log("mobileDown: ", mobileDown);
  let localCart = localStorage.getItem("cart");

  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []);

  function toggleMenu() {
    if (displayMenu) {
      setDisplayMenu(false);
    } else {
      setDisplayMenu(true);
    }
  }
  function toggleCart() {
    if (displayCart) {
      setDisplayCart(false);
    } else {
      setDisplayCart(true);
    }
  }

  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <div className="App">
      <Routes>
        <Route
          element={
            <>
              <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart} />
              <Menu
                displayMenu={displayMenu}
                toggleMenu={toggleMenu}
                mobileDown={mobileDown}
              />
              <Cart
                displayCart={displayCart}
                toggleCart={toggleCart}
                cart={cart}
                setCart={setCart}
              />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/" element={<Landing />} />
        {/* <Navbar toggleMenu={toggleMenu} />
					<NavMenu displayMenu={displayMenu} handleMouseUp={handleMouseUp}/>
					<Route path="/loading" component={LoadingSpinner} />
					<Route path="/blogpost/:id" component={BlogPost} />
					<Route path="/privacypolicy" component={PrivacyPolicy} />
					<PrivateRoute path="/admin" component={Admin} />
					<PrivateRoute path="/adminpost/:id" component={AdminPost} />
					<PrivateRoute path="/createpost" component={CreatePost} />
					<PrivateRoute path="/editpost/:id" component={EditPost} />
					<ScrollUpArrow />
					<Footer /> */}
      </Routes>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
