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
import {Toaster} from "react-hot-toast";
import {useRecoilState, useRecoilValue} from "recoil";
import UserAtom from "./Recoil/UserAtoms/UserAtom";
import {useEffect} from "react";
import {verifyUser} from "./Common/Session/VerifyUser";
import RefreshUser from "./Recoil/UserAtoms/RefreshUser";
import Dashboard from "./pages/Dashboard";
import AccountDetails from "./pages/AccountDetails";
import Address from "./pages/Address";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import Merchants from "./pages/Merchants";
import Requests from "./pages/Requests";
import EditCategory from "./components/Categories/EditCategory";
import AddCategory from "./components/Categories/AddCategory";
import NotFound from "./pages/NotFound";
import EditBrand from "./components/Brands/EditBrand";
import AddBrand from "./components/Brands/AddBrand";
import AddAddress from "./components/Address/AddAddress";
import EditAddress from "./components/Address/EditAddress";
import ProductView from "./components/Shop/ProductView";
import Contact from "./pages/Contact";
import Sell from "./pages/Sell";
import OrderSuccess from "./pages/OrderSuccess";
import OrderDetail from "./components/Orders/OrderDetail";
import AddProductSeller from "./components/Products/AddProductSeller";
import EditProductSeller from "./components/Products/EditProductSeller";
import ScrollToTop from "./Common/Session/Scrolltotop";

function App() {
  const [user, setuser] = useRecoilState(UserAtom);
  const refreshUser = useRecoilValue(RefreshUser);

  useEffect(() => {
    setuser((u: any) => ({
      ...user,
      loading: true,
    }));
    const getdata = async () => {
      const data = await verifyUser();
      if (data) {
        setuser({
          user: data,
          loading: false,
        });
      } else {
        setuser({
          user: null,
          loading: false,
        });
      }
    };
    getdata();
  }, [refreshUser]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <ScrollToTop />
      <NavbarPanel />
      <Navbar2Panel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:name" element={<ProductView />} />
        <Route path="/shop/brands" element={<Brand />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell-with-us" element={<Sell />} />
        <Route path="/order/success/:id" element={<OrderSuccess />} />
        <Route path="/order/:id" element={<OrderDetail />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/account" element={<AccountDetails />} />
          <Route path="/dashboard/address" element={<Address />} />
          <Route path="/dashboard/address/add" element={<AddAddress />} />
          <Route path="/dashboard/address/edit/:name" element={<EditAddress />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/add" element={<AddProductSeller />} />
          <Route path="/dashboard/products/edit/:name" element={<EditProductSeller />} />
          <Route path="/dashboard/categories" element={<Categories />} />
          <Route path="/dashboard/categories/edit/:name" element={<EditCategory />} />
          <Route path="/dashboard/categories/add" element={<AddCategory />} />
          <Route path="/dashboard/brands" element={<Brands />} />
          <Route path="/dashboard/brands/edit/:name" element={<EditBrand />} />
          <Route path="/dashboard/brands/add" element={<AddBrand />} />
          <Route path="/dashboard/merchants" element={<Merchants />} />
          <Route path="/dashboard/requests" element={<Requests />} />
          <Route path="/dashboard/orders" element={<Orders />} />

          <Route path="/dashboard/wishlist" element={<Wishlist />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer1 />
    </ThemeProvider>
  );
}

export default App;
