import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


function UserlistingDummy()
{

    const [taskList, setTaskList] = useState([])

    useEffect( ()=>{
      setTaskList([
            {
                "name" : "Rakesh",
                "username" : "username",
                "email" : "email",
                "phoneno" : "phoneno",
                "gender" : "gender",
                "countryname" : "countryname",
                "state_name" : "state_name",
                "address1" : "address1",
            },
            {
                "name" : "sonu",
                "username" : "username",
                "email" : "email",
                "phoneno" : "phoneno",
                "gender" : "gender",
                "countryname" : "countryname",
                "state_name" : "state_name",
                "address1" : "address1",
            },
            {
                "name" : "sonu",
                "username" : "username",
                "email" : "email",
                "phoneno" : "phoneno",
                "gender" : "gender",
                "countryname" : "countryname",
                "state_name" : "state_name",
                "address1" : "address1",
            },
            {
                "name" : "sonu",
                "username" : "username",
                "email" : "email",
                "phoneno" : "phoneno",
                "gender" : "gender",
                "countryname" : "countryname",
                "state_name" : "state_name",
                "address1" : "address1",
            },
        ])
    },[]);


    const onClickSubmit = () =>{
      alert("Dsajkdals")
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">User List</h5> 
                      
                    <div className="d-grid d-md-flex justify-content-md-end mb-3">
                    {/* <Link to="/userregistration" className="btn btn-success">Add New User</Link>                        */}
                    </div> 
                   <div style={{width:'100%'}}>
                    <table className="table table-bordered" >
                        <thead className="bg-light">
                           <tr>
                            <th>Sr. No</th>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Assigned To</th>
                            <th>Priority No</th>
                            <th>Story Point</th>
                            <th>Task Status</th>

                            <th>Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                taskList.map( (uData, index)=>(
                                 <tr key={index}>
                                <td>{index+1}</td>
                                <td>{uData.name}</td>
                                <td>{uData.username}</td>
                                <td>{uData.assignedTo}</td>
                                <td>{uData.address1}</td>
                                <td>{uData.username}</td>
                                <td>{uData.taskStatus}</td>
                                <td>
                                    {/* <Link 
                                    to="/DashboardTeamLead" 
                                    className="btn btn-success mx-2">Edit</Link>
                                    <Link 
                                    to="/DashboardTeamLead" 
                                    className="btn btn-danger">Delete</Link> */}
                                </td>
                            </tr>
                            )) }
                        </tbody>                        
                    </table>         
                    </div>
                    <div className="d-grid d-md-flex justify-content-md-end mb-3">
                    <button className="btn btn-success" onClick={onClickSubmit}> submit</button>                       
                    </div> 
                    </div>
                </div>
            </div>           
        </React.Fragment>
    );
}
export default UserlistingDummy;