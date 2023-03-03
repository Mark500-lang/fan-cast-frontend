import React, { useState } from "react";

function SignUp (){
    const [formData, setFormData]= useState({
        myusername: "",
        myemail: "",
    })

    const handleSubmit = (event)=>{
        event.preventDefault()
        fetch("/users" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response)=> response.json())
        .then(data=> console.log(data));
    }

    const handleOnChange=(event)=>{
        formData[event.target.name]=event.target.value
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    return(
            <form className="form">
                <div className="form-group">
                    <label>Username</label>
                    <input name="myusername" type="text" className="form-control" id="myusername" placeholder="...username" onChange={handleOnChange} value={formData.myusername}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="myemail" type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" onChange={handleOnChange} value={formData.myemail}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
            </form>
    )
}
/*<div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
                </div>*/
export default SignUp;