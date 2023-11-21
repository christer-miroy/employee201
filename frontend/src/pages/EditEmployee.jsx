import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const EditEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();

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

    useEffect(() => {
        fetchEmployee();
    },[id]);

    const fetchEmployee = async () => {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/api/employee/${id}`);
            console.log(result.data);
            setEmployeeField(result.data);
        } catch (error) {
            console.log('Something is wrong');
        }
    };

    const changeEmpFieldHandler = (e) => {
        setEmployeeField({
            ...employeeField,
            [e.target.name]: e.target.value
        });
        console.log(employeeField);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://127.0.0.1:8000/api/employee/${id}`, employeeField);
            console.log(res);
            alert('Employee has been updated!');
            navigate('/');
        } catch (error) {
            console.log('Something is wrong.')
        }
    };

    const cancelUpdate = () => {
        alert('Employee update cancelled.');
        navigate('/');
    };

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center m-4">
            <h1>Edit Employee</h1>
        </div>
        <div className="card">
            <div className="card-header">
                Employee Form
            </div>
            <div className="card-body">
                <form action="">
                    <div className="form-group">
                        <input type="hidden" name="id" value={id} />
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>First Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control mt-2" value={employeeField.firstName} onChange = {e => changeEmpFieldHandler(e)} />
                            </div>
                            <div className="col-md-4">
                                <label>Middle Name</label>
                                <input type="text" name="middleName" id="middleName" className="form-control mt-2" value={employeeField.middleName} onChange={e => changeEmpFieldHandler(e)} />
                            </div>
                            <div className="col-md-4">
                                <label>Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="form-control mt-2" value={employeeField.lastName} onChange={e => changeEmpFieldHandler(e)} />
                            </div>  
                        </div>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>Email</label>
                                <input type="email" name="email" id="email" className="form-control mt-2" value={employeeField.email} onChange={e => changeEmpFieldHandler(e)} />
                            </div>
                            <div className="col-md-4">
                                <label>Mobile Phone</label>
                                <input type="tel" name="mobilePhone" id="mobilePhone" className="form-control mt-2" value={employeeField.mobilePhone} onChange={e => changeEmpFieldHandler(e)} />
                            </div>
                            <div className="col-md-4">
                                <label>Address</label>
                                <input type="text" name="address" id="address" className="form-control mt-2" value={employeeField.address} onChange={e => changeEmpFieldHandler(e)} />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <label>Department</label>
                                <select name="department" id="department" className="form-control mt-2" value={employeeField.department} onChange={e => changeEmpFieldHandler(e)} >
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
                                <select name="status" id="status" className="form-control mt-2" value={employeeField.status} onChange={e => changeEmpFieldHandler(e)}>
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
                                    value={employeeField.hireDate}
                                    onChange={e => changeEmpFieldHandler(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm m-2" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-danger btn-sm m-2" onClick={cancelUpdate}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default EditEmployee