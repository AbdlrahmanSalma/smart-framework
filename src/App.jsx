import './App.css'
import About from './componet/About/About'
import Home from './componet/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componet/Layout/Layout';
import PORTFOLiO from './componet/PORTFOLiO/PORTFOLiO';
import CONTACT from './componet/CONTACT/CONTACT';


 const router = createBrowserRouter(  [




{ path:'smart-framework' , element: <Layout />, children:[



{ index:true,   element:<Home />   },

{ path:'Home' ,  element:<Home />   },

{ path:'About' ,  element:<About />   },

{ path:'CONTACT' ,  element:<CONTACT />   },

{ path:'PORTFOLiO' ,  element:<PORTFOLiO />   },


{ path:'*' ,  element: <div>

<h1 className=' vh-100  text-center pt-5'>4   0   4</h1>


</div>   },


]},
{ path:'/' , element: <Layout />, children:[



{ index:true ,  element:<Home />   },
{ path:'Home' ,  element:<Home />   },

{ path:'About' ,  element:<About />   },

{ path:'CONTACT' ,  element:<CONTACT />   },

{ path:'PORTFOLiO' ,  element:<PORTFOLiO />   },


{ path:'*' ,  element: <div>

<h1 className=' vh-100 text-center'>4   0   4</h1>


</div>   },


]}
] )





export default function App() {
  return (
    <>
      


<RouterProvider  router={router}  />






    </>
  )
}


