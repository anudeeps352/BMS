import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/SmallSidebar';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
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
          <header>
            <Logo></Logo>
          </header>
          <div className="nav-links">
            {links.map((link) => {
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

export default SmallSidebar;
