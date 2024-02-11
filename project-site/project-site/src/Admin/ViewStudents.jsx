import axios from 'axios';
import React, { useState } from 'react'

export default function ViewStudents() {
    const[students,setStudents]=useState([]);
    
    // Fetching data from the server 
    const GetAllStudents=() =>{
      
        axios
        .get("http://localhost:5099/api/Student/Get_all_Student")
        .then((response)=>{
            console.log(response.data);
            setStudents(response.data);
        })
        .catch((error)=>{
            console.log("Error in retrieving students",error);
            alert("Error in retrieving students");
        })
        
    }

  return (
    <div>
        <center>
      <table  className="table table-striped">
        <thead>
            <tr>
                <th>StudentId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>SemName</th>
                <th>StreamName</th>
            </tr>
        </thead>
        <tbody>
            {students.map((item,index)=>(
                <tr key={index}>
                    <td> {item.id} </td>
                    <td> {item.fName+" "+item.lName} </td>
                    <td> {item.eMail} </td>
                    <td> {item.number} </td>
                    <td> {item.dob} </td>
                    <td> {item.gender} </td>
                    <td> {item.semName} </td>
                    <td> {item.streamName} </td>
                </tr>
            ))}
        </tbody>
      </table>
      <button onClick={GetAllStudents } type="button"className="btn btn-outline-primary">View Students</button>
      </center>
    </div>
  )
}
