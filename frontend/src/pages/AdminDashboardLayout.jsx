import React, { createContext, useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminBigSidebar, AdminNavbar, AdminSmallSidebar } from '../components';
import Wrapper from '../assets/wrappers/Dashboard';
import { checkDefaultTheme } from '../App';
import customFetch from '../utils/customFetch';

const AdminDashboardContext = createContext();

const AdminDashboardLayout = () => {
  const admin = localStorage.getItem('AdminID');
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutAdmin = async () => {
    navigate('/');
    await customFetch.get('/logout');
    console.log(localStorage.getItem('darkTheme'));
    localStorage.clear();
  };
  return (
    <AdminDashboardContext.Provider
      value={{
        admin,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutAdmin,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <AdminSmallSidebar></AdminSmallSidebar>
          <AdminBigSidebar></AdminBigSidebar>
          <div>
            <AdminNavbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </AdminDashboardContext.Provider>
  );
};

export const useAdminDashboardContext = () => useContext(AdminDashboardContext);
export default AdminDashboardLayout;
