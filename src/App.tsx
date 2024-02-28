import {ThemeProvider} from "@/components/Theme/theme-provider";
import {Route, Routes} from "react-router-dom";
import NavbarPanel from "./Common/Navbar/NavbarPanel";
import Navbar2Panel from "./Common/Navbar/Navbar2Panel";
import Home from "./pages/Home";
import Footer1 from "./Common/Footer/Footer1";
import Shop from "./pages/Shop";
import Brand from "./pages/Brand";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavbarPanel />
      <Navbar2Panel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/brands" element={<Brand />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer1 />
    </ThemeProvider>
  );
}

export default App;
