import React, { useState } from 'react'

function Forms(props) {
    const [user,setUser]=useState ({
        username:'',
        lastname:'',
        email:'',
        password:'',
        // phonenum:'',
        confirmpassword:'',
        dob:'',
        gender:''
    })

    const [isUseNameValid,setUserNameValid]=useState(true)
    const [isUserNameErr,setUserNameErr]=useState('')
    const [isLastNameValid,setLastNameValid]=useState(true)
    const [isLastUserNameErr,setLastUserNameErr]=useState('')
    const [isEmailValid,setEmailValid]=useState(true)
    const [isEmailErr,setEmailErr]=useState('')
    // const [isphoneValid,setphoneValid]=useState(true)
    // const [isPhoneErr,setPhoneErr]=useState('')
    const [passwordDetails,setPasswordDetails]=useState(true)
    const[passErr,setPassErr]=useState('')
    const [confirmPasswordDetails,setConfirmPasswordDetails]=useState(true)
    const[passConfirmErr,setConfirmPassErr]=useState('')
    const [dobDetails,setDobDetails]=useState(true)
    const[dobErr,setDobErr]=useState('')
    const [genderDetails,setGenderDetails]=useState(true)
    const[genderErr,setGenderErr]=useState('')
    const login=(event)=>{
        console.log(event);
        event.preventDefault()
        console.log(user);

        const isValid= ValidateUserName(user.username)
        const isLastNameValid1=ValidateLastName(user.lastname)
        const isEmailValid1=ValidateEmail(user.email)
        // const isPhoneNumValid1=ValidatePhone(user.phonenum)
        const isPassValid= ValidatePassword(user.password)
        const isConfirmPassValid1= ValidateConfirmPassword(user.confirmpassword)
        const isDobValid1= ValidateDob(user.dob)
        const isGenderValid1= ValidateGender(user.gender)




        if(isValid && isLastNameValid1&&isEmailValid1 &&isPassValid&&isConfirmPassValid1&&isDobValid1&& isGenderValid1){
        console.log('props',props);
        // props.history.push('/app')
        }else{
            console.error('not valid');
        }
    }

    const ValidateUserName=(username)=>{
        // const regex = "^[A-Za-z]\\w{5, 29}$"
        if(username===''){
            setUserNameValid(false)
            setUserNameErr('Please enter valid username')
            return false
        }else  if(!isNaN(username)){
            setUserNameValid(false)
            setUserNameErr('You cant use numbers in user name')
            return false
        }else {
            setUserNameValid(true)
            setUserNameErr('')
            return true
        }
    }
    const ValidateLastName=(lastname)=>{
        // const regex = "^[A-Za-z]\\w{5, 29}$"
        if(lastname===''){
            setLastNameValid(false)   
            setLastUserNameErr('Please enter valid username')
            return false
        }else  if(!isNaN(lastname)){
            setLastNameValid(false)
            setLastUserNameErr('You cant use numbers in user name')
            return false
        }else {
            setLastNameValid(true)
            setLastUserNameErr('')
            return true
        }
    }
    const ValidateEmail=(email)=>{
        // const reg =  RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
        // if(reg.match(email.value))
        if(email)
        {
            setEmailValid(true)
            setEmailErr('')
            return true
        }else{
            setEmailValid(false)
            setEmailErr('Please enter valid email')
            return false    
        }
    }
    // const ValidatePhone=(phonenum)=>{
    //     let num=/^\d{10}$/;
    //    
    //     if(phonenum.match(num)){
        
    //         setphoneValid(false)
    //        setPhoneErr('Please enter valid number')
    //         return false
    //     }
    //     if(phonenum.value.length>10 && phonenum.value.length<10){
    //         setphoneValid(false)
    //         setPhoneErr('Please enter valid number')
    //         return false
    //     }
    //     else  if(phonenum.length!=10){
    //         setphoneValid(false)
    //         setPhoneErr('Please enter valid number')
    //         return false
    //     }
    //     else{
    //         setphoneValid(true)
    //         setPhoneErr('Please enter number')
    //         return true
    //     }
    // }
    const ValidatePassword=(password)=>{
        if(password){
            setPasswordDetails(true)
            setPassErr('')
            return true
        }else{
            setPasswordDetails(false)
            setPassErr('Please Enter Valid Password')
            return false
        }

    }
    const ValidateConfirmPassword=(confirmpassword)=>{
        if(confirmpassword){
            setConfirmPasswordDetails(true)         
            setConfirmPassErr('')
            return true
        }else{
            setConfirmPasswordDetails(false)
            setConfirmPassErr('please enter confirm password')
            return false
        }

    }
    const ValidateDob=(dob)=>{
        if(dob===''){
            setDobDetails(false)
            setDobErr('Please enter valid date of birth')
            return false
        }else {
            setDobDetails(true)
            setDobErr('')
            return true
        }

    }
    const ValidateGender=(gender)=>{
        if((gender==='Male') || (gender ==='Female')){
            setGenderDetails(true)
            setGenderErr('')
            return true
        }else {
            setGenderDetails(false)
            setGenderErr('Select gender')
            return false
        }
    }
    const handleChange=(event)=>{
        console.log(event.target.name);
        const userCopy={...user}
        userCopy[event.target.name]=event.target.value
        setUser(userCopy)

    }
    
   
    return (
        <div>
            <form onSubmit={login}>
            <div className='row justify-content-center'>
                <div className='col-3'>
                    
                    <label for="firstname">First Name</label>
                    <input className='form-control bg-dark text-light' type="text"
                    name='username'
                    placeholder='Enter firstname'
                    onChange={(event)=>{
                        handleChange(event)
                    }}
                    value={user.username}
                    />
                    
                 {!isUseNameValid ? <span style={{color:'red',
                fontSize:'8px',fontSize:'larger'}}>{isUserNameErr}</span> : null}                  
                        </div>
                        </div>
                        {/* <br></br> */}
                    <div className='row justify-content-center'>
                    <div className='col-3'>
                    
                    <label for="last name">Last Name</label>
                    <input className='form-control bg-dark text-light' type="text"
                    name='lastname'
                    placeholder='Enter lastname'
                    onChange={(event)=>{
                        handleChange(event)
                    }}
                    value={user.lastname}
                    />
                     {/* </div> */}
                 {!isLastNameValid ? <span style={{color:'red',
                fontSize:'8px',fontSize:'larger'}}>{isLastUserNameErr}</span> : null}                  
                        </div>
                        </div>

                        {/* <br></br> */}
                        
                        <div className='row justify-content-center'>
                    <div className='col-3'>
                            <label for="email">Email ID</label>
                            <input  className='form-control bg-dark text-light' type="email"
                            name="email"
                            placeholder='Enter email'
                            onChange={(event)=>{
                                handleChange(event)
                            }} value={user.email}/>
                            {!isEmailValid ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}>{isEmailErr}</span>:null}
                            </div> 
                            </div> 

                            {/* <br></br> */}
                            {/* <div>
                                <label for='number'>Phone Number</label>
                                <input type="tel" value={'+91'} onChange={(event)=>{
                                handleChange(event)}}/>
                                {!isEmailValid ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}><br></br>{isEmailErr}</span>:null}
                            </div> */}
                            {/* <div>
                            <label for="number">Phone Number</label>
                            <input type="tel"
                            name="phonenum"
                            id='number'
                            placeholder='Enter phone number'
                            onChange={(event)=>{
                                handleChange(event)
                            }} value={user.phonenum}/>
                            {!isphoneValid ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}><br></br>{isPhoneErr}</span>:null}
                            </div>  */}
                            <div className='row justify-content-center'>
                         <div className='col-3'>
                             <label for="password">Password</label>
                            <input  className='form-control bg-dark text-light'type="password"
                            name="password"
                            placeholder='Enter password'
                            onChange={(event)=>{
                                handleChange(event)
                            }} value={user.password}/>
                            {!passwordDetails ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}>{passErr}</span>:null}
                            </div>
                            </div>
                            {/* <br></br> */}
                            <div className='row justify-content-center'>
                                <div className='col-3'>
                             <label for="confirmpassword">Confirm Pass</label>
                            <input className='form-control bg-dark text-light'type="password"
                            name="confirmpassword"
                            placeholder='Confirm password'
                            onChange={(event)=>{
                                handleChange(event)
                            }} value={user.confirmpassword}/>
                            {!confirmPasswordDetails ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}>{passConfirmErr}</span>:null}
                 </div>
                 </div>

                 {/* <br></br> */}

                 <div className='row justify-content-center'>
                     <div className='col-3'>
                             <label for="dob">Date of Birth</label>
                            <input className='form-control bg-dark text-light' type="date"
                            name="dob"
                            
                            onChange={(event)=>{
                                handleChange(event)
                            }} value={user.dob}/>
                            {!dobDetails ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}>{dobErr}</span>:null}
                </div>
                </div>
                
                {/* <br></br> */}
                <div>
                     
                             <label for="gender">Male</label>
                            <input type="radio"
                            name="gender" value="Male"
                            
                            onChange={(event)=>{
                                handleChange(event)
                            }} 
                            // value={user.gender}
                            />
                            
                            <label for="gender">Female</label>
                            <input type="radio"
                            name="gender" value='Female'
                          
                            onChange={(event)=>{
                                handleChange(event)
                            }} 
                            // value={user.gender}
                            />
                            
                            {!genderDetails ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}>{genderErr}</span>:null}
                </div>
                            {/* {!genderDetails ? <span style={{color:'red',
                fontSize:'5px',fontSize:'large'}}><br></br>{genderErr}</span>:null}
                </div> 
                {/*                           
                            <label for="dob">Date of Birth</label>
                       <input type="datetime-local" name="dob"/> */}
                       {/* <br></br> */}
                        <div>
                            <input type="submit" value="Login" class="btn btn-primary" />
                        </div>
                        
                    </form>

                </div>
            )
        }
        
        export default Forms
                        
                   

{/* // import React, { useState } from 'react'


// function Forms(props) { */}
//     const [details,setDetails]=useState({
//          username:'',
//          email:'',
//          password:''
//     })


//     const [isDetailsValid,setDetailsValid]=useState(true)
//     const [isDetailsValidErr,setDetailsValidErr]=useState('')

//     const isNameValid=ValidateUser(details.username)

//     if(isNameValid){
//         console.log('props',props);
//         props.history.push('/app')
//     } else {
//         console.erroe('not vaild')
//     }

//     const ValidateUser=(username)=>{
//         if(username){
//             setDetailsValid(true)
//             setDetailsValidErr('')
//         }else{
//             setDetailsValid(false)
//             setDetailsValidErr('Please enter valid username')
//         }
//     }

    
//      const handleChange=(e)=>{
//         const detailsCopy={...details}
//         detailsCopy[e.target.name]=e.target.value
//         setDetails(detailsCopy)
//         }
//     const handleFormSubmit=(e)=>{
//         e.preventDefault()
//         console.log(e.target);
        
//     }
//     return (
//         <div>
//              <form>
//                 <div>
//                     <label>Full Name </label>
//                     <br></br>
//                     <input type="text"
//                     name="name" 
//                     placeholder="Enter username"
//                     value={details.username}
//                     onChange={handleChange}/>
//                 </div>
//                 <div>
//                 <label>Email</label>
//                     <br></br>
//                     <input type="email"
//                     name="email" 
//                     placeholder="Enter email"
//                     value={details.email}
//                     onChange={handleChange}/>
//                 </div>
//                 <div>
//                 <label>Password</label>
//                     <br></br>
//                     <input type="password"
//                     name="password" 
//                     placeholder="Enter password"
//                     value={details.password}
//                     onChange={handleChange}/>
//                 </div>
//                 <button onClick={handleFormSubmit}> Submit</button>
//             </form>
            
            
//         </div>
//     )
// }

// export default Forms