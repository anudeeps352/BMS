import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';
import adminlinks from '../utils/adminlinks';
import { NavLink } from 'react-router-dom';

const AdminNavLinks = () => {
  const { toggleSidebar, user } = useAdminDashboardContext();
  <div className="nav-links px-8 flex-col">
    {adminlinks.map((link) => {
      const { text, path, icon } = link;
      return (
        <NavLink
          to={path}
          key={text}
          className="nav-link flex items-center text-black px-4 py-0 capitalize transition duration-300 ease-in-out hover:text-blue-900"
          onClick={toggleSidebar}
          end
        >
          <span className="icon text-2xl mr-4 grid place-items-center transition duration-300 ease-in-out">
            {icon}
          </span>
          {text}
        </NavLink>
      );
    })}
  </div>;
};

export default AdminNavLinks;
