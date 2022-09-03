import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/listado' element={<Listado />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
