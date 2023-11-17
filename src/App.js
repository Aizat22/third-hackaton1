import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import Favorites from "./components/product/Favorites";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <br></br>
      <Footer />
    </div>
  );
};

export default App;
