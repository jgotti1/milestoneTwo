import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddNewProp from "./pages/addNewProp";

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
