import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import Register from "./routes/auth/register/Register";
import Login from "./routes/auth/login/Login";
import Footer from "./components/footer/Footer";
import Cart from "./routes/cart/Cart";
import Single from "./routes/single/Single";
import "./locales/i18next";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/single/:id" element={<Single />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
