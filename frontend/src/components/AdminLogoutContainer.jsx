import React, { useState } from 'react';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';

const AdminLogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { admin, logoutAdmin } = useAdminDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutAdmin}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default AdminLogoutContainer;
