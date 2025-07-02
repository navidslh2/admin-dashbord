import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import Home from "./pages/home/home";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <UnderConstruction />,
        },
        {
          path: "/product",
          element: <UnderConstruction />,
        },
        {
          path: "/order",
          element: <UnderConstruction />,
        },
        {
          path: "/element",
          element: <UnderConstruction />,
        },
                {
          path: "/note",
          element: <UnderConstruction />,
        },
                {
          path: "/setting",
          element: <UnderConstruction />,
        },
                {
          path: "/backup",
          element: <UnderConstruction />,
        },
                {
          path: "/chart",
          element: <UnderConstruction />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
