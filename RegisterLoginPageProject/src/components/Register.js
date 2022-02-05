import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import "./Register.css";
// import "./App.css";

function Register(props) {
  const initialValues = {firstName:"",lastName:"",PhoneNo:" ",DOB:'', email: "", password: "",gender:" " };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.firstName){
        errors.firstName="firstName is required!";
    }else if(values.firstName.length< 6){
        errors.firstName="firstName should contain 6 character"
    }else if(values.firstName.search(/[0-9]/)!==-1){
        errors.firstName="name should not number";
    }

    if(!values.lastName){
        errors.lastName="lastName is required!";
    }else if(values.lastName.length<6){
        errors.lastName="lastName should contain 6 character"
    }else if(values.lastName.search(/[0-9]/)!==-1){
        errors.lastName="name should not number";
    }


   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    // function password_validate(p) {
    //     return /[A-Z]/.test(p) && /[0-9]/.test(p) &&  /^[@#][A-Za-z0-9]{7,13}$/.test(p);
    //     errors.password="password should contain upper case";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 characters";
      } else if (values.password.length > 20) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
    else if(values.password.search(/[A-Z]/)===-1){
       errors.password="password should contain one uppercase";
    }
    else if(values.password.search(/[0-9]/)===-1){
       errors.password="password should contain one number";

    }
    else if(values.password.search( /[#?!@$%^&*-]/)===-1){
        errors.password="password should contain one special";
     }

     if(values.PhoneNo.length<=10){
         errors.PhoneNo="phoneNo should be 10 digits";
     }else if(values.PhoneNo.search(/[A-z]&&[a-z]&&[#?!@$%^&*-]/)===-1){
         errors.PhoneNo="phoneNo should be of numbers"
     }
    //  if(this.props.errors.gender){
    //    errors.gender="gender is required";
    //  }
    
    return errors;
  };

  // const navigateToLogin=()=>{
  //            props.history.push('./login')
  //         }

  return (
    <div className="container1">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form  onSubmit={handleSubmit} >
        <h1>Registration Form</h1>
        <div className="ui divider1"></div>
        <div className="ui form1">
        <div className="field1">
            <label>firstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="first name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          <p>{formErrors.firstName}</p>
          </div>
           <div className="field1">
            <label>lastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          <p>{formErrors.lastName}</p> 
          </div>
          
          <div className="field1">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          <p>{formErrors.email}</p>
          </div>
          <div className="field1">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            
          <p>{formErrors.password}</p>
          </div>
          <div className="field1">
            <label>DOB</label>
            <input
              type="dob"
              name="DOB"
              placeholder="DOB"
              value={formValues.DOB}
              onChange={handleChange}
            />
          
          <p>{formErrors.email}</p>
          </div>
           {/* <div className="field1">
            <label>PhoneNo</label>
            <input
              type="phone"
              name="PhoneNo"
              placeholder="enter 10 digit number"
              value={formValues.PhoneNo}
              onChange={handleChange}
            />
             
          <p>{formErrors.PhoneNo}</p> 
          </div> */}

           {/* <div className="fiels1">
          <label for="" id="gender" onChange={this.props.onChange} onBlur={this.props.validate}> <b>Gender</b></label>
          <div className="fiels1"> 
          <input
            class="radio-check-input"
            type="radio"
            name="radioOptions"
            id="radio1"
            value="option1"
          />
          <label class="radio-check-label" for="radio1">Male</label>
        
           {/* <div className="fiels1">  */}
          {/* <input
            class="radio-check-input"
            type="radio"
            name="radioOptions"
            id="radio2"
            value="option2"
          />
          <label class="radio-check-label" for="radio2">Female</label>
           {/* </div> */}
           {/* <p>{formErrors.gender}</p>
           </div>
           </div>  */}
          <button className="fluid">Submit</button>
          
        dont have account?  
        <Link to="/login">Login</Link>
             {/* <button onClick={()=>{
               navigateToLogin()
           }}>login</button> */}
          </div> 
      </form>
     
    </div>
  );
}

export default Register;