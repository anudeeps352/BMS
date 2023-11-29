import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';
import Wrapper from '../assets/wrappers/SmallSidebar';
import adminlinks from '../utils/adminlinks';
import { NavLink } from 'react-router-dom';

const AdminSmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAdminDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes></FaTimes>
          </button>
          <header>Logo</header>
          <div className="nav-links">
            {adminlinks.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link "
                  onClick={toggleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminSmallSidebar;
