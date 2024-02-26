import {ThemeProvider} from "@/components/Theme/theme-provider";
import {Route, Routes} from "react-router-dom";
import NavbarPanel from "./Common/Navbar/NavbarPanel";
import Navbar2Panel from "./Common/Navbar/Navbar2Panel";
import Home from "./pages/Home";
import Footer1 from "./Common/Footer/Footer1";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NavbarPanel />
      <Navbar2Panel />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer1 />
    </ThemeProvider>
  );
}

export default App;
