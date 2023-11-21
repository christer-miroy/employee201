import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <h3>Employee 201 File</h3>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/add">Add Employee</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar