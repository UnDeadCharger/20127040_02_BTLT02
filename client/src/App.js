import './App.css';
import React, {useState} from "react";
import Axios from 'axios';
function App() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const [message, setMessage] = useState('');

  const register = () =>{
    Axios.post('http://localhost:3001/register',
     {username: usernameReg, 
      password: passwordReg
    }).then((response)=> {
      console.log(response);
    });
    setUsernameReg('');
    setPasswordReg('');
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
      setUsername('');
      setPassword('');
    });
  }

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <div className="form">
          <label>Username</label>
          <input type="text"
            value={usernameReg}
            onChange={(e) => {
            setUsernameReg(e.target.value)
          }}>
          </input>
          <label>Password</label>
          <input type="text"
            value={passwordReg}
            onChange={(e) => {
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
           value={username}
           onChange={(e) => {
            setUsername(e.target.value)
          }}>
           </input>
          <input type="text"
           placeholder="password..."
           value={password}
           onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
          <button onClick={login}>Login</button>
        </div>
      </div>
      <h1 className="confirmation">{loginStatus}</h1>
    </div>

  );
}

export default App;
