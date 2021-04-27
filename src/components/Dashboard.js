import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'
const Dashboard = () => {
    const [data, setData] = useState([]);
    const getStatement = async () => {
        const res = await axios.get("http://localhost:5000/getusercourse");
        console.log("Results:");
        console.log(res.data);
        if(res.data.length >0)
         {
             setData(res.data);
         }
    }
    useEffect( ()=>{
        getStatement();
    }
    )
    return (<div className="box_1"><br/>
        <center><h3>Hello ! This is your Personal Area</h3></center><br/>
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Faculty Name</th>
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
                                <button className="button">Unenroll</button>
                            </td>
                        </tr>
                        );
                    })
                }
            </tbody>
        </table>

    </div>  );
}
 
export default Dashboard;