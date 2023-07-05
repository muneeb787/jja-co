import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./components/Pages/HomePage/homepage"
import Contact from "./components/Pages/Contact/contact"
import Footer from "./components/Footer/footer";
import StudentPortal from "./components/Pages/Career/studentportal";
import EmploymentPortal from "./components/Pages/Career/empolymentportal";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empPortal" element={<EmploymentPortal />} />
          <Route path="/stuPortal" element={<StudentPortal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
