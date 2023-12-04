import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';
import adminlinks from '../utils/adminlinks';
import Logo from './Logo';
const AdminBigSidebar = () => {
  const { showSidebar } = useAdminDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo></Logo>
          </header>
          <div className="nav-links">
            {adminlinks.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className="nav-link" end>
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

export default AdminBigSidebar;
