import React, { useState } from 'react'

function Personlist(props) {
    const [values, setValues] = useState({})

    let handleChange = (event) => {
        let { name, value } = event.target;
        console.log({
            ...values,
            [name]: value
        })
        setValues({
            ...values,
            [name]: value
        })
    }

    let handleSubmit= (event) => {
        event.preventDefault()
        console.log(values)
        props.setData([...props.data,values])
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
            <td><input type='url' name='image' placeholder='Image URL' onChange={handleChange} /></td></tr>
            
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
