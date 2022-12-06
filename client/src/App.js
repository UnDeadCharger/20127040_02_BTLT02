import './App.css';
import React, {useState} from "react";
import Axios from 'axios';
function App() {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () =>{
    Axios.post('http://localhost:3001/register',
     {username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
      console.log(response);
    });
  }
  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <div className="form">
          <label>Username</label>
          <input type="text" onChange={(e) => {
            setUsernameReg(e.target.value)
          }}>
          </input>
          <label>Password</label>
          <input type="text"  onChange={(e) => {
            setPasswordReg(e.target.value)
          }}>
          </input>
          <button onClick={register}>Register</button>
        </div>
      </div>
      <div className="login">
        <h1>Login</h1>
        <div className="form">
          <input type="text" name="movieName"></input>
          <input type="text" name="movieName"></input>
          <button>Login</button>
        </div>
      </div>
    </div>

  );
}

export default App;
