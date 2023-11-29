import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';
import AdminLogoutContainer from './AdminLogoutContainer';
import AdminThemeToggle from './AdminThemeToggle';
const AdminNavbar = () => {
  const { toggleSidebar } = useAdminDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="togge-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h4 className="logo-text ">dashboard</h4>
        </div>
        <div className="btn-container ">
          <AdminThemeToggle />
          <AdminLogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminNavbar;
