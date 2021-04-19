import React from 'react';
import './login.css';
const Login = () => {
  return (
    <div class="app">

		<div class="bg"></div>

		<form>
			<header>
				<img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_0re1.svg" />
			</header>

			<div class="inputs">
				<input type="text" name="" placeholder="username or email"/>
				<input type="password" name="" placeholder="password"/>

				<p class="light"><a href="#">Forgot password?</a></p>
			</div>

		</form>

		<footer>
			<button>Continue</button>
			<p>Don't have an account? <a href="#">Sign Up</a></p>
		</footer>


	</div>
   );
}
 
export default Login;