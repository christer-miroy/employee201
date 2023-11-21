import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

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
        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/employee/${id}`);
                const newEmpData = employeeData.filter(emp => emp.id !== id);
                alert('Employee record deleted!');
                setEmployeeData(newEmpData);
            } catch (error) {
                console.log('Something is wrong');
            }
        }
    }

  return (
    <div className="container">
        <div className="d-flex justify-content-center align-items-center m-4">
            <h1>Employee List</h1>
        </div>
        <div className="mt-4">
            <table className="table table-striped table-hover table-bordered">
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
                        employeeData.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center">No employee records to display</td>
                            </tr>
                        ) : (employeeData.map((employee) => (
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
                        ))) 
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default AllEmployees