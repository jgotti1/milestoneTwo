import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AddNewProp from "./pages/addNewProp";
import EditProp from "./pages/EditProp";
// import ShowProps from "./pages/showProp";
// import FourOhFour from "./pages/404";
import NewShowPage from "./pages/NewShowPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
// import NewNavbar from "./components/NewNavbar";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        {/* {user && <Navbar />} */}
        <Navbar />
        <div className="pages">
          <Routes>
            {/* {user && <Route path="/" exact element={<Home />} />} */}
            <Route path="/" exact element={<Home />} />
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/EditProp/:id" element={<EditProp />} />
            <Route path="/" element={<Navigate replace to="/Login" />} />
            <Route path="/AddNewProp" element={<AddNewProp />} />
            <Route path="/ShowProp" element={<NewShowPage />}></Route>
            {/* <Route path="*" element={<FourOhFour />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
      {/* {user && <Footer />} */}
      <Footer />
    </div>
  );
}

export default App;
