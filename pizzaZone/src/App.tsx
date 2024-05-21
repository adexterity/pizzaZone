import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Order from "./components/Order";
import Base from "./components/Base";
import Toppings from "./components/Toppings";


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

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/toppings" element={<Toppings pizza={pizza} addTopping = {addTopping} />} />
        <Route path="/base" element={<Base pizza={pizza} addBase={addBase} />}  />
        <Route path="/order" element={<Order pizza={pizza} />}  />
      </Routes>
    </>
  );
}

export default App;
