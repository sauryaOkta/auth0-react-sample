import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { Outlet, Route, Routes } from "react-router-dom";
import { Profile } from "./views/Profile/Profile";
import Contact from "./views/Contact/Contact";
import Resources from "./views/Resource/Resources";
import Product from "./views/Product/Product";
import Token from "./views/Token/Token";
import CompanyZero from "./views/Company/CompanyZero";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import PartnerPortal from "./views/PartnerPortal/PartnerPortal";
import ProtectedRoutes from "./components/protected/ProtectedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CompanyZero />} />
        <Route
          path="profile"
          element={<ProtectedRoutes component={<Profile />} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="resource" element={<Resources />} />
        <Route path="product" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="token" element={<Token />} />
        <Route path="partnerportal" element={<PartnerPortal />} />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
