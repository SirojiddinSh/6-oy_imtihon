import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import Register from "./routes/auth/register/Register";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
