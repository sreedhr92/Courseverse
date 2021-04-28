import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'
const Dashboard = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [temp,setTemp] = useState('');
    const getStatement = async () => {
        const res = await axios.post("http://localhost:5000/getusercourse");
        console.log("Results:");
        console.log(res.data);
        if(res.data.length >0)
         {
             setData(res.data);
         }
    }
    const handleClick = (e) => {
        setId(e.target.value);
        setTemp(temp);
        e.preventDefault();
        let data_1 = {
            id:id
        };
        console.log("posting:", data_1);
        axios
            .post("http://localhost:5000/unenrollcourse", {
            data: data_1,
            })
    
            .then(res=>{
                console.log("Results:");
                console.log(res.data);
                if(res.data.affectedRows ===1)
                 {
                    alert("Course unenrolled Successfully!")
                }
            })
            .catch((err) => {
            console.log(err);
            });
            console.log("Dates posted to /unenrollcourse")
            
    }
    useEffect(()=>{
        setTemp(id);
        getStatement();
    },[id])
    return (<div className="box_1"><br/>
        <center><h3>Hello ! This is your Personal Area</h3></center><br/>
        <div className="scroll">
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Course </th>
                    <th>Faculty</th>
                    <th>Estimated Time</th>
                    <th>Progress</th>
                    <th>Enrollment</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(content =>{
                        return( <tr key={uuid()}>
                            <td>
                                {content.name}
                            </td>
                            <td>
                                {content.faculty_name}
                            </td>
                            <td>
                                {content.est_time}
                            </td>
                            <td>
                                {content.complexity}
                            </td>
                            <td>
                                <button value={content.id} onClick={handleClick} className="button">Unenroll</button>
                            </td>
                        </tr>
                        );
                    })
                }
            </tbody>
        </table>
        </div>
    </div>  );
}
 
export default Dashboard;