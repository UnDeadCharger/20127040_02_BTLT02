import './App.css';
import React, {useState} from "react";
import Axios from 'axios';
function App() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const register = () =>{
    Axios.post('http://localhost:3001/register',
     {username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
      console.log(response);
    });
  }

  const login = () =>{
    Axios.post('http://localhost:3001/login',
     {username: username, 
      password: password
    }).then((response)=> {
      console.log(response.data);
      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].username)
      }
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
          <input type="text"
           placeholder="Username..."
           onChange={(e) => {
            setUsername(e.target.value)
          }}>
           </input>
          <input type="text"
           placeholder="password..."
           onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
          <button onClick={login}>Login</button>
        </div>
      </div>
      <h1>{loginStatus}</h1>
    </div>

  );
}

export default App;
