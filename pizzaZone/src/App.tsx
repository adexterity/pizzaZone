import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import { AnimatePresence } from "framer-motion";


function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">

      <Routes location={location} key={location.key}> {/* you cant use this uselocation() hook where you define your Router */}
        <Route path="/" element={<Home  />} exit={{x: 0}}/>
        <Route path="/toppings" element={<Toppings pizza={pizza} addTopping = {addTopping} />} />
        <Route path="/base" element={<Base pizza={pizza} addBase={addBase} />}  />
        <Route path="/order" element={<Order pizza={pizza} />}  />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
