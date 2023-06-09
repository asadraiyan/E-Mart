import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Checkout from './Components/Checkout';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notificationHandler = (message) => {
    toast[message.status](message.text, {
      position: message.position
    })
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route path="/Product/:id" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout notify={notificationHandler} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
