import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CreateProp from "./components/createRecord/createRecordForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<CreateProp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
