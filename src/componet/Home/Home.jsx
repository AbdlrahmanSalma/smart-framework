import {} from './Home.css';
import potoimges from '../../assets/imges/poto.jpg.svg'
export default function Home() {
  return (

   <>

<div className='home' > 


<div className='m-auto w-75 py-4 '>
    <img className=' text-center w-25' src={potoimges} alt="" /> 
</div>
<h1>START FRAMEWORK</h1>
<div className='start-icon'><i className="fa-solid fa-star"></i></div>
<div className='pb-5 pt-2'>Graphic Artist - Web Designer - Illustrator</div>
</div>

   

    
    </>
  )
}
