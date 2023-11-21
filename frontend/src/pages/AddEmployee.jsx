import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const AddEmployee = () => {
    const [employeeField, setEmployeeField] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        email: "",
        mobilePhone: "",
        address: "",
        department: "",
        status: "",
        hireDate: ""
    });

    const changeEmployeeField = (e) => {
        setEmployeeField({
            ...employeeField,
            [e.target.name]: e.target.value
        })
        // console.log(employeeField);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/employee', employeeField);
            console.log(response);
            alert('New user has been added!');
            navigate('/');
        } catch (error) {
            console.log('Something is wrong');
        }
    }

    const navigate = useNavigate();

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center m-4">
            <span>
                <h1>Add Employee</h1>
            </span>
            <span>
                <Link to="/">
                    <button type="button" className="btn btn-primary btn-sm">Back</button>
                </Link>
            </span>
        </div>
        <div className="card">
            <div className="card-header">
                Employee Form
            </div>
            <div className="card-body">
                <form action="">
                    <div className="form-group">
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>First Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                            <div className="col-md-4">
                                <label>Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                            <div className="col-md-4">
                                <label>Middle Name</label>
                                <input type="text" name="middleName" id="middleName" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>Email</label>
                                <input type="email" name="email" id="email" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                            <div className="col-md-4">
                                <label>Mobile Phone</label>
                                <input type="tel" name="mobilePhone" id="mobilePhone" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                            <div className="col-md-4">
                                <label>Address</label>
                                <input type="text" name="address" id="address" className="form-control mt-2" onChange={e => changeEmployeeField(e)} required />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>Department</label>
                                <select name="department" id="department" className="form-control mt-2" required onChange={e => changeEmployeeField(e)} defaultValue="select" >
                                    <option value="select" disabled>Select Department</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>

                                </select>
                            </div>
                            <div className="col-md-4">
                                <label>Status</label>
                                <select name="status" id="status" className="form-control mt-2" required onChange={e => changeEmployeeField(e)} defaultValue="select">
                                    <option value="Select" disabled>Select Status</option>
                                    <option value="Probation">Probation</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Contractual">Contractual</option>
                                    <option value="Resigned/Terminated">Resigned/Terminated</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label>Hire Date</label>
                                <input
                                    type="date"
                                    name="hireDate"
                                    id="hireDate"
                                    className="form-control mt-2"
                                    max={new Date().toISOString().split("T")[0]}
                                    onChange={e => changeEmployeeField(e)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm mt-2" onClick={e => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default AddEmployee