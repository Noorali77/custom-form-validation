import './App.css';
import {useState,useEffect} from 'react';

function App(){
  const initialState = {
    username : '',
    email : '',
    password : ""
  }

  const [formValues,setFormValues] = useState(initialState);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);
  const changeHandler = (e)=>{
    const {name ,value } = e.target;
    setFormValues({...formValues,[name] : value});
  }
  const formSubmitHandler = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  };
  const validate = (values)=>{
    const errors = {};
    if(!values.username){
      errors.username = 'userName is required!';
    }
    else if(values.username.length <= 4){
      errors.username = 'username must be atleast 5 characters'
    }

    if(!values.email){
      errors.email = 'Email is required!';
    }

    if(!values.password){
      errors.password = 'Password is required!';
    }
    else if(values.password.length <= 4){
      errors.password = 'Password must be atleast 5 characters'
    }

    return errors;
  }
  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
     alert('send data')
    }

  },[formErrors])


  return(
    <>
    <div className='main_container'>
      <h1>login Form</h1>

      <form onSubmit={formSubmitHandler}>
      <div className='form_div'>
        <div>
          <label>
            userName
          </label>
          <input type='text' name='username' value={formValues.username} onChange={changeHandler} placeholder='User Name'/>
          <p className='error_msg'>{formErrors.username}</p>
        </div>
        <div>
          <label>
            Email
          </label>
          <input type='email' name='email' value={formValues.email} onChange={changeHandler} placeholder='Email'/>
          <p className='error_msg'>{formErrors.email}</p>
        </div>
        <div>
          <label>
            Password
          </label>
          <input type='password' name='password' value={formValues.password} onChange={changeHandler} placeholder='Password'/>
          <p className='error_msg'>{formErrors.password}</p>
        </div>
        <div>
          <input type='submit' value='submit'/>
        </div>

      </div>
      </form>
     
    </div>
    </>
  )
};

export default App;