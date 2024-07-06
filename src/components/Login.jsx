import {useState} from "react";
export default function Login() {
    const[enteredValues,setEnteredValues]=useState({
        email:'',
        password:''
    })
    const emailIsInvalid= enteredValues.email!=='' && !enteredValues.email.includes("@");
    function handleInputChange(identifier,value){
        setEnteredValues((prev)=>{
            return{
                ...prev,
                [identifier]:value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("Submited");
        console.log(enteredValues.email+" "+enteredValues.password);
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
  
        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                name="email" 
                onChange={(event)=>handleInputChange("email",event.target.value)} 
                value={enteredValues.email}
                />
            { emailIsInvalid && <div className="control-error">Invalid</div> }
          </div>
  
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                name="password" 
                onChange={(event)=>handleInputChange("password",event.target.value)}
                value={enteredValues.password}
                />
          </div>
        </div>
  
        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
  }
  