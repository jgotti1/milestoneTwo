import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AddNewProp from "./pages/addNewProp";
<<<<<<< HEAD:frontend/src/App.js
import ShowProps from "./pages/ShowProps";
=======
import ShowProps from "./pages/showProp";
>>>>>>> 0449b38165641cb0c5181f0a4aaa449a18ef33e5:src/App.js
import FourOhFour from "./pages/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddNewProp" element={<AddNewProp />} />
            <Route path="/ShowProp" element={<ShowProps />}></Route>
            {/* <Route path="*" element={<FourOhFour />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
