import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'
const Enroll = () => {
    const [data, setData] = useState([]);
    const getStatement = async () => {
        const res = await axios.get("http://localhost:5000/getcourse");
        console.log("Results:");
        console.log(res.data);
        if(res.data.length >0)
         {
            setData(res.data);
         }
    }
    useEffect( ()=>{
        getStatement();
    },[])
    return (<div className="box_1"><br/>
        <center><h3>Explore and Enroll into your favourite courses</h3></center><br/>
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Faculty Name</th>
                    <th>Description</th>
                    <th>Prerequisites</th>
                    <th>Area</th>
                    <th>Estimated Time</th>
                    <th>Price</th>
                    <th>Complexity</th>
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
                                {content.description}
                            </td>
                            <td>
                                {content.preq}
                            </td>
                            <td>
                                {content.area}
                            </td>
                            <td>
                                {content.est_time}
                            </td>
                            <td>
                                {content.price}
                            </td>
                            <td>
                                {content.complexity}
                            </td>
                            <td>
                                <button className="button">Enroll</button>
                            </td>
                        </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>  );
}
 
export default Enroll;