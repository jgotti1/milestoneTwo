import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar";
import AddNewProp from "./pages/AddNewProp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddNewProp" element={<AddNewProp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
