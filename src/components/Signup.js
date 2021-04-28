import React ,{useState} from 'react';
import axios from "axios";
const Signup = () => {

  const [name ,setName] = useState('');
  const [user_id,setUser_id] = useState('');
  const [email,setEmail] = useState('');
  const [phone_no,setPhone_no] = useState('');
  const [pass,setPass] = useState('');
  const [date,setDate] = useState('');
  const [type,setType] = useState('');
	const handleClick = (e) => {
    if(user_id.length===0 || pass.length===0)
			return;
		e.preventDefault();
		let data = {
			name: name,
			pass: pass,
      user_id:user_id,
      date:date,
      phone_no:phone_no,
      type:type,
      email:email

		  };
		  console.log("posting:", data);
		  axios
			.post("http://localhost:5000/signup", {
			  data: data,
			})
	  
			.then(res=>{
        console.log("Results:");
        console.log(res.data);
        console.log(res.data.affectedRows);
        if(res.data.affectedRows ===1)
        {
          alert("Account Created Successfully!");
          window.location.href="/detailsurl";
        }
      }

      )
			.catch((err) => {
			  console.log(err);
			});
			console.log("Dates posted to /signup")

	}
  return ( 
    <div className="app_1">

		<div className="bg_1"></div>

		<form >
        <h3 className="header_1">Create your Courseverse Account</h3>
				<input className="login_input" value={name}type="text" onChange={(e)=> setName(e.target.value)} name="" placeholder="Name"/>
        <input className="login_input" value={user_id}type="text" name="" onChange={(e)=> setUser_id(e.target.value)} placeholder="Username"/>
        <input className="login_input" value={email}type="text" name="" onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
        <input className="login_input" value={phone_no}type="text" name="" onChange={(e)=> setPhone_no(e.target.value)} placeholder="Phone Number"/>
				<input className="login_input" value={pass}type="password" name="" onChange={(e)=> setPass(e.target.value)}  placeholder="password"/><br/><br/>
        <label className="birthday" value={date} for="birthday" onChange={(e)=> setDate(e.target.value)} >Date of birth:</label>
        <input type="date" id="birthday" name="birthday"/><br/><br/>
        <input type="radio" id="student" name="type" value="student" onClick={(e)=> setType(e.target.value)} />
        <label for="male" className="radio">Student</label>
        <input type="radio" id="faculty" name="type" value="faculty" onClick={(e)=> setType(e.target.value)} />
        <label for="female" className="radio">Faculty</label>
		</form>

		<footer className="login_footer">
			<button className="register" onClick={handleClick}>Register</button>
			<p>Already have an account? <a href="/loginurl">Login</a></p>
		</footer> <br/>


	</div>
 );
}
 
export default Signup;