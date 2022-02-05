import React, { useState } from 'react'

function Personlist(props) {
    const [values, setValues] = useState({})
    
    let handleChange = (event) => {
        let { name, value } = event.target;
        if(name==="name"){
            let nameRegex=/^[a-zA-Z]$/
            if(nameRegex.test(value)){
                setValues({
                    ...values,
                    [name]: value
                })
            }
            else{
                console.log("invalid name");
            }
        }else if(name==="age"){
            let ageRegex=/^[0-9]{1,2}$/
            if(ageRegex.test(value)){
                setValues({
                    ...values,
                    [name]: value
                })
            }
            else{
                console.log("invalid name");
            }
        }else if(name==="mobile"){
            let mobileRegex=/^[0-9]{10,10}$/
            if(mobileRegex.test(value)){
                setValues({
                    ...values,
                    [name]: value
                })
            }
            else{
                console.log("invalid mobile");
            }
        }
        console.log({
            ...values,
            [name]: value
        })
        // setValues({
        //     ...values,
        //     [name]: value
        // })
    }

    let handleSubmit= (event) => {
        event.preventDefault()
        console.log(values)
        let lengthArr=Object.keys(values)        
        if(lengthArr.length===3){
            let datta=[...props.data]
            let dattaArray=datta.filter((val)=>{
                if(val.mobile===values.mobile){
                    return val;
                }
            })
            if(dattaArray.length===0){
                props.setData([...props.data,values])
            }else{
                console.log("user exists ")
            }
        }
        else
        {
            console.log("please enter all the values");
        }
    }

    return (
        <div className='list' align='center'>
            {console.log(props.data)}
            <form>
            <table>
                <tr><td><label>Name:</label></td>
                <td><input type='text' name='name' placeholder='Name' onChange={handleChange} /></td>
            </tr>
            <br/>
            <br/>
            <tr><td><label>Age:</label></td>
            <td><input type='number' max='0' max='120' name='age' placeholder='Age' onChange={handleChange} /></td></tr>
            <br/>
            <br/>
            <tr><td>
            <label>Image:</label></td>
            <td><input type='url' name='mobile' placeholder='Enter mobile no' onChange={handleChange} /></td></tr>
            
            <br/>
            <tr><td colSpan='1'>
            <input type="submit" id="login" value="Add " onClick={handleSubmit} /></td>
            <input type='reset' id="clear"  /></tr>
            </table>
            </form>
        </div>
    )
}

export default Personlist
