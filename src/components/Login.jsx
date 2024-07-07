import {useInput} from "../hooks/useInput.js";
import {isEmail,isNotEmpty,hasMinLength,isEqualsToOtherValue} from "../util/validation.js"
export default function Login() {
    const {
      value:emailValue,
      handleInputChange:handleEmailChange,
      handleInputBlur : handleEmailBlur,
      hasError:emailHasError,
    } = useInput('',(value)=>isEmail(value) && isNotEmpty(value));
    const {
      value:passwordValue,
      handleInputChange:handlePasswordChange,
      handleInputBlur:handlePasswordBlur,
      hasError:passwordHasError,
    }=useInput('',(value)=>isNotEmpty(value) && hasMinLength(value,6));

    function handleSubmit(event){
      event.preventDefault();
      if(passwordHasError || emailHasError){
        return;
      }
      console.log("Submited");
      console.log(emailValue+" "+passwordValue);
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
                onBlur={handleEmailBlur}
                onChange={handleEmailChange} 
                value={emailValue}
                />
                {emailHasError && <div className="control-error">Invalid Email</div> }
          </div>
  
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                name="password" 
                onBlur={handlePasswordBlur}
                onChange={handlePasswordChange}
                value={passwordValue}
                />
              { passwordHasError && <div className="control-error">Invalid Password</div> }
          </div>
        </div>
  
        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
        </p>
      </form>
    );
  }
  