import React from 'react';
const Signup = () => {
  return ( 
    <div className="app_2">

		<div className="bg_2"></div>

		<form >
        <h3 className="header_1">Just a few more steps to go Customizing your pages</h3><br />
		<input className="login_input" type="text" name="" placeholder="Area of interest"/>
        <input className="login_input" type="text" name="" placeholder="Skills"/>
        <br/>
        <select>
            <option value="" selected disabled hidden>Subscription type</option>
            <option>Free</option>
            <option>VIP</option>
            <option>Premium</option>
        </select>
        <br/>
        <select>
            <option value="" selected disabled hidden>Education status</option>
            <option>General</option>
            <option>Faculty</option>
            <option>High School</option>
            <option>Under Graduate</option>
            <option>Post Graduate</option>
        </select>
        <br/><br/>             

		</form>

		<footer className="login_footer">
			<button className="register">Setup my Account</button>
		</footer>
	</div>
 );
}
 
export default Signup;