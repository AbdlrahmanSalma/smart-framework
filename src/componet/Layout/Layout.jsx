import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Layout.css'

export default function Layout() {
  return (
   <>
   
   <Navbar />




   <Outlet />


{/* 

              





 



*/}


<div className="local">
    <div className="container">
          <div className="row   g-5 ">
            <div className="col-md-4 " >

               <div>
                   <h1 className="fs-3">LOCATION</h1>
                   <p>2215 John Daniel Drive</p>
                   <p>Clark, MO 65243</p>
                </div>
 
                       
           

            </div>
            <div className="col-md-4">

               <div className="around ">
     <h1 className="fs-3" >AROUND THE WEB</h1>
    <div className="d-flex justify-content-center name ">

        <div className="fac-icon">
        <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="fac-icon">
         <i class="fa-brands fa-twitter"></i>
        </div>
       
       <div className="fac-icon">
     <i class="fa-brands fa-linkedin-in"></i>
       </div>
        
        <div className="fac-icon">
            <i class="fa-solid fa-earth-africa"></i>
        </div>
    </div>
   </div>
 
                       
           

            </div>
            <div className="col-md-4">

             
                    <div className=" free">
                       <h1>ABOUT FREELANCER</h1>
                       <p>Freelance is a free to use, licensed Bootstrap theme</p>
                       <p>created by Route</p>
                    </div>
                       
           

            </div>
          </div>




    </div>
</div>
  

 

<footer><p className="pt-2">Copyright © Your Website 2021</p></footer>
   



   
   </>
  )
}
