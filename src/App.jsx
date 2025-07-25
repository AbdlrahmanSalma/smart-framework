import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./componet/Layout/Layout";
import Home from "./componet/Home/Home";
import About from "./componet/About/About";
import PORTFOLiO from "./componet/PORTFOLiO/PORTFOLiO";
import CONTACT from "./componet/CONTACT/CONTACT";

const router = createBrowserRouter([


{ path: "/", element: <Layout />,children: [
    { index: true, element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "portfolio", element: <PORTFOLiO /> },
    { path: "contact", element: <CONTACT /> },
    { path: "*", element: <h5 className="vh-100 text-center">404 - Not Found</h5> },
  ],
},


  { path: "smart-framework",element: <Layout />,  children: [
    { index: true, element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "portfolio", element: <PORTFOLiO /> },
    { path: "contact", element: <CONTACT /> },
    { path: "*", element: <h5 className="vh-100 text-center">404 - Not Found</h5> },
  ],
},
]);




export default function App() {
  return (
    <>
      


<RouterProvider  router={router}  />



    </>
  )
}