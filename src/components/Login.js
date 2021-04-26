import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
	const [username, setUser] = useState('');
	const [password, setPass] = useState('');
	const [valid, setValid] = useState(0);
	const [type, setType] = useState(0);
	const getStatement = async () => {
		const res = await axios.get("http://localhost:5000/login");
		console.log("Results:");
		console.log(res.data);
		console.log("length",res.data.length);
		console.log("Type",res.data[0].type)
		setValid(res.data.length);
		console.log(valid);
		if (valid === 1)
			alert("Successfully logged in");
		else
			alert("Invalid user id or password");
		if( res.data[0].type === "student" )
			setType(1);
		else
			setType(0);
	  };
	const handleClick = (e) => {
		e.preventDefault();
		let data = {
			user_id: username,
			password: password,
		  };
		  console.log("posting:", data);
		  axios
			.post("http://localhost:5000/login", {
			  data: data,
			})
	  
			.then()
			.catch((err) => {
			  console.log(err);
			});
			console.log("Dates posted to /login")
		  getStatement();
		  if(valid === 1 && type === 1)
			window.location.href="/studenturl";
		  else if(valid === 1 && type === 0)
			window.location.href="/facultyurl";
			
	}
  return (
    <div className="app">

		<div className="bg"></div>

		<form >
		<h3 className="header_1">Welcome to Courseverse</h3><br />
			<header className="img">
				<img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" />
			</header>

				<input className="login_input" value ={username} type="text" name="" placeholder="username or email" onChange={(e)=> setUser(e.target.value)}/>
				<input className="login_input" value ={password} type="password" name="" placeholder="password" onChange={(e)=> setPass(e.target.value)}/>

				<p className="light"><a href="#">Forgot password?</a></p>
		

		</form>

		<footer className="login_footer">
			<button className="register" onClick={handleClick}>Continue</button>
			<p>Don't have an account? <a href="/signupurl">Sign Up</a></p>
		</footer>


	</div>
   );
}


 
export default Login;