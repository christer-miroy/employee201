import axios from "axios";
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const AllEmployees = () => {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        getEmployees()
    }, []);

    const getEmployees = async () => {
        try {
            const result = await axios('http://127.0.0.1:8000/api/employee');
            // console.log(result.data);
            setEmployeeData(result.data);
        } catch (error) {
            console.log('Something is wrong');
        }
    }

    const handleDelete = async (id) => {
        console.log(id);
        try {
            await axios.delete(`http://127.0.0.1:8000/api/employee/${id}`);
            const newEmpData = employeeData.filter(emp => emp.id !== id);
            alert('Employee record deleted!');
            setEmployeeData(newEmpData);
        } catch (error) {
            console.log('Something is wrong');
        }
    }

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center m-4">
            <span>
                <h1>Employee List</h1>
            </span>
            <span>
                <Link to="/add">
                    <button type="button" className="btn btn-primary btn-sm">Add Employee</button>
                </Link>
            </span>
        </div>
        <div className="mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData.map((employee) => (
                            <tr key={employee.id}>
                                <td className="text-center align-middle">{employee.id}</td>
                                <td className="text-center align-middle">{employee.lastName}</td>
                                <td className="text-center align-middle">{employee.firstName}</td>
                                <td className="text-center align-middle">
                                    <NavLink to={`/view/${employee.id}`} className="btn btn-primary btn-sm m-2">
                                        View
                                    </NavLink>
                                    <NavLink to={`/edit/${employee.id}`} className="btn btn-success btn-sm m-2">
                                        Edit
                                    </NavLink>
                                    <button type="button" className="btn btn-danger btn-sm m-2" onClick={() => handleDelete(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default AllEmployees