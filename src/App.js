
import React, {useState} from "react";
import './App.css';


function App() {
  const[curValue,setCurValue]=useState({
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    textarea : ""
});
const[errors, setformErrors]=useState( {} );

  const submithogayaHai=(event)=>{
    event.preventDefault();
    // const {firstname,lastname,email,password,textarea} = curValue;

    // after submit, we will make blank value visible
    setCurValue({
      firstname : "",
    lastname : "",
    email : "",
    password : "",
    textarea : ""
        });
        // calling form validation function insise usestate hooks
        setformErrors(validate(curValue));
}
// Form validation function
const validate=(values)=>{
let errors={};
const regex= /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ ;
if(!values.firstname){
errors.firstname="*First name is required"}
else if(values.firstname.length < 3){
  errors.firstname="*minimum 3 letters are required"
}

if(!values.lastname){
  errors.lastname="*Last name is required"}

  if(!values.email){
    errors.email="*Email address is required"}
else if(!regex.test(values.email)){
  errors.email="*Email not valid "
  }

    if(!values.password){
      errors.password="*Password is required"}

      if(!values.textarea){
        errors.textarea="*Text area is required"}
        return errors;
}
let name,value;
const changingValue=(event)=>{
value=event.target.value;
name=event.target.name;
setCurValue({
  ...curValue, [name] : value
})
};
  return (
    <div className="App">
    <div className='container'>
      <div className='row my-5'>

        <div className='col-2'></div>

        <div className='col-8'>
          <h2 className='text-center my-4'>PLEASE FILL THE  FORM</h2>
         
        <form className='border rounded border-info p-4' onSubmit={submithogayaHai}>
        <div class="mb-3">
        <div class="row">
  <div class="col">
  <label for="inputFirst4" class="form-label">First name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" id='inputFirst4'
    name="firstname" value={curValue.firstname} onChange={changingValue}
    />
    {/* { curValue.firstname.length < 3 &&  <small className="text-danger">*Atleast 3 letters required</small>} */}
    {errors.firstname && <small className="text-danger">{errors.firstname}</small>}
   </div>
  <div class="col">
  <label for="inputLast4" class="form-label">Last name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id='inputLast4'
    name="lastname" value={curValue.lastname} onChange={changingValue}/>
    {errors.lastname && <small className="text-danger">{errors.lastname}</small>}
  </div>
</div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
              name='email'
              value={curValue.email} onChange={changingValue}
              />
                {errors.email && <small className="text-danger">{errors.email}</small>}
             
          </div>

          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword"
              name='password'
              value={curValue.password} onChange={changingValue}
              />
   {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className='mb-3'>
          <label for="floatingSelect" class="form-label">Country</label>    
  <select class="form-select" id="floatingSelect" >
    <option selected>***select***</option>
    <option value="India">India</option>
    <option value="China">China</option>
    <option value="Sri Lanka">Sri Lanka</option>
  </select>
  

          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
              name='textarea'
              value={curValue.textarea} onChange={changingValue}
              ></textarea>
               {errors.textarea && <small className="text-danger">{errors.textarea}</small>}
          </div>

          <div >
          <button type="submit" class="btn btn-primary">SUBMIT</button>
          </div>
        </form>
        </div>

        <div className='col-2'></div>

      </div>
    </div>
    </div>
  );
}

export default App;
