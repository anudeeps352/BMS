import Wrapper from '../assets/wrappers/ThemeToggle';
import { useAdminDashboardContext } from '../pages/AdminDashboardLayout';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const AdminThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAdminDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};
export default AdminThemeToggle;
