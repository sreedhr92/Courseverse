import React from 'react';
const AddCourse = () => {
    return (<div>&emsp;
    <div className="flex">&emsp;&emsp;&emsp;&emsp;
    <div className="app_3">

    <div className="bg_3"></div>

    <form >
    <h3 className="header_1">Upload your course details</h3><br />
    <input className="login_input" type="text" name="" placeholder="Course Id"/>
    <input className="login_input" type="text" name="" placeholder="Course Name"/>
    <input className="login_input" type="text" name="" placeholder="Description"/>
    <input className="login_input" type="text" name="" placeholder="Area"/>
    <br/>
    <select>
        <option value="" selected disabled hidden>Estimated Time</option>
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
    <input className="login_input" type="text" name="" placeholder="Price"/>
    <input className="login_input" type="text" name="" placeholder="Prerequisites"/>
    <input className="login_input" type="text" name="" placeholder="Faculty Name"/>
    <br/>
    <select>
        <option value="" selected disabled hidden>Complexity</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
    </select>
    </form>
    <footer className="login_footer">
        <button className="register_1">Add Course</button>
    </footer>
</div> 
</div>
</div>
);
}
 
export default AddCourse;