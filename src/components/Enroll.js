import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid'
const Enroll = () => {
    const [data, setData] = useState([]);
    const [id, setId]= useState('');
    const getStatement = async () => {
        const res = await axios.post("http://localhost:5000/getcourse");
        console.log("Results:");
        console.log(res.data);
        if(res.data.length >0)
         {
            setData(res.data);
         }
    }
    const handleClick = (e) => {
        setId(e.target.value);
        e.preventDefault();
        let data_1 = {
            id:id
        };
        console.log("posting:", data_1);
        axios
            .post("http://localhost:5000/enrollcourse", {
            data: data_1,
            })
    
            .then(res=>{
                console.log("Results:");
                console.log(res.data);
                if(res.data.affectedRows ===1)
                 {
                    alert("Course enrolled Successfully!")
                }
            })
            .catch((err) => {
            console.log(err);
            });
            console.log("Dates posted to /enrollcourse")
            
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
                    <th>Complexity</th>
                    <th>Area</th>
                    <th>Estimated Time</th>
                    <th>Price</th>
                    <th>Prerequisites</th>
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
                               <div className="div1" style={{color:'white',borderRadius:'8px',padding:'3px',backgroundColor:content.complexity==='Beginner'? '#289672' :content.complexity==='Intermediate'?'#fa9905':'#810000'}}>{content.complexity}</div>
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
                                {content.prerequisites}
                            </td>
                            <td>
                                <button value={content.id} onClick={(e)=>{handleClick(e)}} className="button">Enroll</button>
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