import { useState } from 'react'
import "./PORTFOLiO.css"
import firstimg from '../../../src/assets/imges/imgi_1_poert1.png'
import secondimg from '../../../src/assets/imges/imgi_2_port2.png'
import thirdimg from '../../../src/assets/imges/imgi_3_port3.png'

export default function PORTFOLiO() {

const [allsrc, setallsrc] = useState([
  firstimg,
  secondimg,
  thirdimg,
  firstimg,
  secondimg,
  thirdimg
  
]);

const [clcimg, setclcimg]= useState(null)

  return (
<>

<div>
  <div className="container py-5   Protfor">
    <h2 className=' text-center fw-bold fs-1'>PORTFOLIO COMPONANT</h2>
    <div className='portfolio-icon  pb-4'><i className="fa-solid fa-star"></i></div>
    <div className="row g-4">
      {allsrc.map(function(src){
        return (
          <div prop={src} className='col-md-6 col-lg-4'>
            <div 
            onClick={()=> setclcimg(src)}
            className='portofolioimg position-relative '>
              <img className='rounded-2' src={src} alt="" />
              <div className='icolayer'>
                <i className=' icopls  fa-solid fa-plus'></i>
              </div>
    </div>
  </div>
   );
      })}
</div>
</div>
</div>

{ clcimg && (

  <div onClick={ function () {   setclcimg( null)  }  }  className=' clcer   position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-item-center' >
     
   <img  onClick={ function (e){e.stopPropagation()}  }  className='img-fluid rounded  big-img'  src={ clcimg } alt="" />
   
 
  </div>
)

  


}


</>
  )
}
