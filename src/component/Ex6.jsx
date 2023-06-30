import React,{useState} from "react"

//login component

const loginForm = (props) => {
    return ( 
        <div className="form">
            <form>
                <fieldset>
                    <legend>Register form</legend>
                    <div className="row">
                        <label htmlFor="user">Username</label>
                        <input type="text" name="user" id="user" required/>

                    </div>
                    <div className="row">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required />

                    </div>
                    <div className="row">
                        <input type="submit" value="login" className="btn" />

                    </div>
                </fieldset>
            </form>
           
        </div>
    )
}
const RegisterForm = (props) => {
    return (
        <div
    )
}