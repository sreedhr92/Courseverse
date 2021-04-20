import React from 'react';
const Signup = () => {
  return ( 
    <div className="app_1">

		<div className="bg_1"></div>

		<form >
        <h3 className="header_1">Create your Couserverse Account</h3>
				<input className="login_input" type="text" name="" placeholder="Name"/>
        <input className="login_input" type="text" name="" placeholder="Username"/>
        <input className="login_input" type="text" name="" placeholder="Email"/>
        <input className="login_input" type="text" name="" placeholder="Phone Number"/>
				<input className="login_input" type="password" name="" placeholder="password"/><br/><br/>
        <label className="birthday" for="birthday">Date of birth:</label>
        <input type="date" id="birthday" name="birthday"/><br/><br/>
        <input type="radio" id="student" name="type" value="student"/>
        <label for="male" className="radio">Student</label>
        <input type="radio" id="faculty" name="type" value="faculty"/>
        <label for="female" className="radio">Faculty</label>

		

		</form>

		<footer className="login_footer">
			<button className="register">Register</button>
			<p>Already have an account? <a href="/loginurl">Login</a></p>
		</footer>


	</div>
 );
}
 
export default Signup;