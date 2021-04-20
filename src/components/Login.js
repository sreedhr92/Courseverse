import React from 'react';
const Login = () => {
  return (
    <div className="app">

		<div className="bg"></div>

		<form >
		<h3 className="header_1">Welcome to Courseverse</h3><br />
			<header className="img">
				<img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" />
			</header>

				<input className="login_input" type="text" name="" placeholder="username or email"/>
				<input className="login_input" type="password" name="" placeholder="password"/>

				<p className="light"><a href="#">Forgot password?</a></p>
		

		</form>

		<footer className="login_footer">
			<button className="register"><a href="/homeurl">Continue</a></button>
			<p>Don't have an account? <a href="/signupurl">Sign Up</a></p>
		</footer>


	</div>
   );
}
 
export default Login;