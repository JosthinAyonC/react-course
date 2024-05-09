import { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';
import { User } from '../../auth/data';
import { fetchMyUser } from '../../auth/helpers';

export const Navbar = () => {

  const { token, logout } = useContext(AuthContext);

  const [user, setUser] = useState<User>({} as User);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchMyUser(token);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);
  // el array vacio indica que solo se ejecutará una vez al montar el componente

  const handleLogout = () => {
    navigate('/login', { replace: true });
    logout();
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-primary'>
            {user.firstname} {user.lastname}
          </span>

          <button
            className='nav-item nav-link btn'
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
