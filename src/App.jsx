import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Stage from "./pages/Stage";
import Orders from "./pages/Orders";
import Landing from "./pages/Landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // Using the useLocation hook to get the current path
  const path = useLocation().pathname;

  return (
    <div className="pizza_back select-none">
      <div className="w-screen h-screen bg-white bg-opacity-90 flex flex-col overflow-hidden">
        <ToastContainer position="bottom-center" />
        {/* Display navigation only if the path is not root */}
        {path !== "/" && <Navigation />}

        {/* Define the routes for the application */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
