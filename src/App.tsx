import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Home } from "./components/Home";
import { Pedido } from "./components/Pedido";
import { Pagamento } from "./components/Pagamento";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
