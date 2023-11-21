import axios from "axios";
import {Card} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const EmployeeData = () => {
    const {id} = useParams();

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async() => {
        try {
            const result = await axios.get(`http://127.0.0.1:8000/api/employee/${id}` );
            setEmployee(result.data);
        } catch (error) {
            console.log('Something is wrong');
        }
    }

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center m-4">
            <span>
                <h1>Employee Data</h1>
            </span>
            <span>
                <Link to="/">
                    <button type="button" className="btn btn-primary btn-sm">Back</button>
                </Link>
            </span>
        </div>  
        <Card style={{ width: '800px', margin: '0 auto' }}>
            <Card.Header className="text-center">
                <h1>{employee.lastName}, {employee.firstName} {employee.middleName}</h1>
            </Card.Header>
            <Card.Body className="">
                <div className="row">
                    <div className="col-md-6">
                        <p><strong>Mobile Phone: </strong>{employee.mobilePhone}</p>
                        <p><strong>Email: </strong>{employee.email}</p>
                        <p><strong>Address: </strong>{employee.address}</p>
                    </div>
                    <div className="col-md-6">
                        <p><strong>Department: </strong>{employee.department}</p>
                        <p><strong>Status: </strong><span style={{ color: employee.status === "Resigned/Terminated" ? "red" : "inherit" }}>{employee.status}</span></p>
                        <p><strong>Hire Date: </strong>{new Date(employee.hireDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
export default EmployeeData