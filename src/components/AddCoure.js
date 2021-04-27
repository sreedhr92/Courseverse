import React, { useState } from 'react';
import axios from "axios";

const AddCourse = () => {

    const [faculty_name ,setFaculty_name] = useState('');
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [area,setArea] = useState('');
    const [est_time,setTime] = useState('');
    const [price,setPrice] = useState('');
    const [preq,setPreq] = useState('');
    const [complexity,setComplexity] = useState('');


    const getStatement = async () => {
        const res = await axios.get("http://localhost:5000/addcourse");
        console.log("Results:");
        console.log(res.data);
        if(res.data.affectedRows ===1)
         {
        alert("Course Uploaded Successfully!")
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        let data = {
            id:id,
            name:name,
            area:area,
            complexity:complexity,
            est_time:est_time,
            preq:preq,
            faculty_name:faculty_name,
            price:price,
            description:description
        };
        console.log("posting:", data);
        axios
            .post("http://localhost:5000/addcourse", {
            data: data,
            })
    
            .then()
            .catch((err) => {
            console.log(err);
            });
            console.log("Dates posted to /addcourse")
            getStatement();
            
    }
    return (<div>&emsp;
    <div className="flex">&emsp;&emsp;&emsp;&emsp;
    <div className="app_3">

    <div className="bg_3"></div>

    <form >
    <h3 className="header_1">Upload your course details</h3><br />
    <input value={id} onChange={(e)=> setId(e.target.value)}className="login_input" type="text" name="" placeholder="Course Id"/>
    <input value={name} onChange={(e)=> setName(e.target.value)}className="login_input" type="text" name="" placeholder="Course Name"/>
    <input value={description} onChange={(e)=> setDescription(e.target.value)}className="login_input" type="text" name="" placeholder="Description"/>
    <input value={area} onChange={(e)=> setArea(e.target.value)}className="login_input" type="text" name="" placeholder="Area"/>
    <br/>
    <select defaultValue={'DEFAULT'} onChange={(e)=> setTime(e.target.value)}>
        <option value="DEFAULT"disabled>Estimated Time</option>
        <option>3 Weeks</option>
        <option>5 Weeks</option>
        <option>7 Weeks</option>
    </select>
    <br/><br/>
    <br/>             

    </form>

</div> 
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<div className="app_3">

    <div className="bg_3"></div>

    <form >
    <h3 className="header_1">Overview of your Course</h3><br />
    <input value={price} onChange={(e)=> setPrice(e.target.value)} className="login_input" type="text" name="" placeholder="Price"/>
    <input value={preq} onChange={(e)=> setPreq(e.target.value)} className="login_input" type="text" name="" placeholder="Prerequisites"/>
    <input value={faculty_name} onChange={(e)=> setFaculty_name(e.target.value)} className="login_input" type="text" name="" placeholder="Faculty Name"/>
    <br/>
    <select defaultValue={'DEFAULT'} onChange={(e)=> setComplexity(e.target.value)}>
        <option value="DEFAULT"disabled>Complexity</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
    </select>
    </form>
    <footer className="login_footer">
        <button onClick={handleClick} className="register_1">Add Course</button>
    </footer>
</div> 
</div>
</div>
);
}
 
export default AddCourse;