import React, { useState } from 'react';
import axios from "axios";
const Details = () => {
    const [e_stat ,setE_type] = useState('');
    const [interest,setInterest] = useState('');
    const [skills,setSkills] = useState('');
    const [sub_stat,setSub_type] = useState('Subscription type');
      const handleClick = (e) => {
          e.preventDefault();
          let data = {
              e_stat:e_stat,
              interest:interest,
              skills:skills,
              sub_stat:sub_stat  
            };
            console.log("posting:", data);
            axios
              .post("http://localhost:5000/details", {
                data: data,
              })
        
              .then(res=>{
                console.log("Results:");
                console.log(res.data);
                  if(res.data.affectedRows ===1)
                  {
                      alert("Please Wait ! Personalizing your pages");
                      window.location.href="/homeurl";
                  }
              }
              )
              .catch((err) => {
                console.log(err);
              });
              console.log("Dates posted to /details")               
      }
  return ( 
    <div className="app_2">

		<div className="bg_2"></div>

		<form >
        <h3 className="header_1">Just a few more steps to go Customizing your pages</h3><br />
		<input value={interest} onChange={(e)=> setInterest(e.target.value)} className="login_input" type="text" name="" placeholder="Area of interest"/>
        <input value={skills} onChange={(e)=> setSkills(e.target.value)} className="login_input" type="text" name="" placeholder="Skills"/>
        <br/>
        <select defaultValue={'DEFAULT'} onChange={(e)=> setSub_type(e.target.value)}>
            <option value="DEFAULT" disabled>Subscription type</option>
            <option value="Free">Free</option>
            <option value="VIP">VIP</option>
            <option value="Premium">Premium</option>
        </select>
        <br/>
        <select defaultValue={'DEFAULT'} onChange={(e)=> setE_type(e.target.value)}>
            <option value="DEFAULT" disabled>Education status</option>
            <option value="General">General</option>
            <option value="Faculty">Faculty</option>
            <option value="High School">High School</option>
            <option value="Under Graduate">Under Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
        </select>
        <br/><br/>             

		</form>

		<footer className="login_footer">
			<button onClick={handleClick} className="register">Setup my Account</button>
		</footer>
	</div>
 );
}
 
export default Details;