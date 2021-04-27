import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
	const [username, setUser] = useState('');
	const [password, setPass] = useState('');
	const getStatement = async () => {
		const res = await axios.get("http://localhost:5000/login");
		console.log("Results:");
		console.log(res.data);
		console.log("length",res.data.length);
		if (res.data.length === 1)
		{
			alert("Successfully logged in");
			if(res.data[0].type ==='student')
				window.location.href="/studenturl";
			else
				window.location.href="/facultyurl";
		}
		else
		{
			alert("Invalid user id or password");
			return;
		}

	  };
	const handleClick = (e) => {
		if(username.length===0 || password.length===0)
			return;
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
			
	}
  return (
    <div className="app">

		<div className="bg"></div>

		<form >
		<h3 className="header_1">Welcome to Courseverse</h3><br />
			<header className="img">
				<img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" alt ="pic"/>
			</header>

				<input className="login_input" value ={username} type="text" name="" placeholder="username or email" onChange={(e)=> setUser(e.target.value)}/>
				<input className="login_input" value ={password} type="password" name="" placeholder="password" onChange={(e)=> setPass(e.target.value)}/>
				<p className="light"><a href="/">Forgot password?</a></p>
		

		</form>

		<footer className="login_footer">
			<button className="register" onClick={handleClick}>Continue</button>
			<p>Don't have an account? <a href="/signupurl">Sign Up</a></p>
		</footer>


	</div>
   );
}


 
export default Login;