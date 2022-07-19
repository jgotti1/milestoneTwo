import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AddNewProp from "./pages/AddNewProp";
import EditProp from "./pages/EditProp";
// import ShowProps from "./pages/showProp";
// import FourOhFour from "./pages/404";
import NewShowPage from "./pages/NewShowPage";
// import NewNavbar from "./components/NewNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/EditProp/:id" element={<EditProp />} />
            <Route path="/AddNewProp" element={<AddNewProp />} />
            <Route path="/ShowProp" element={<NewShowPage />}></Route>
            {/* <Route path="*" element={<FourOhFour />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
