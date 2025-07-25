import "./Contact.css"
export default function CONTACT() {
  return (
   <>
   
  <div className="contact">
     <h1 className="  fs-1 fw-bold text-center pt-4" >CONATCT SECTION</h1>
     <div className='Contact-icon'><i className="fa-solid fa-star"></i></div>
  </div>
    <div class="contact-form mx-auto">
      <div class="form-floating mb-4">
        <input type="text" 
        class="form-control  " 
        placeholder="name@example.com" />
        <label for="productName">userName</label>
      </div>
      <div class="form-floating mb-4">
        <input type="number"
        class="form-control  "   
        placeholder="price@example.com" />
        <label for="productPrice">userAge</label>
      </div>
      <div class="form-floating mb-4">
        <input type="email"
        class="form-control" 
        placeholder="price@example.com" />
        <label for="productPrice">userEmail</label>
      </div>

      <div class="form-floating mb-4">
        <input type="Password"
        class="form-control" 
        placeholder="price@example.com"/>
        <label for="productPrice">userPassword</label>
      </div>

      <button className="btn" > send Message </button>
    </div>
    
   
   
   
   
   
   </>
  )
}
