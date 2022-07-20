import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AddNewProp from "./pages/addNewProp";
import EditProp from "./pages/EditProp";
import NewShowPage from "./pages/NewShowPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar />}
        <div className="pages">
          <Routes>
            {user && <Route path="/" exact element={<Home />} />}
            <Route path="/" element={<Navigate replace to="/Login" />} />
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/EditProp/:id" element={<EditProp />} />
            <Route path="/addNewProp" element={<AddNewProp />} />
            <Route path="/showProp" element={<NewShowPage />}></Route>
            {/* <Route path="*" element={<FourOhFour />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
      {user && <Footer />}
      <Footer />
    </div>
  );
}

export default App;
