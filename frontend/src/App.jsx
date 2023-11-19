import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  LoginAdmin,
  LoginUser,
  Error,
  UserDetails,
  LoanApply,
  TransactionHistory,
  FundTransfer,
  PayLoan,
} from './pages';
import DashboardLayout from './pages/DashboardLayout';
import LoanHistory from './pages/LoanHistory';
import { action as loginAction } from './pages/LoginUser';
import { loader as transactionloader } from './pages/TransactionHistory';
import { loader as userdetailsloader } from './pages/UserDetails';
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'loginuser',
        element: <LoginUser />,
        action: loginAction,
      },
      {
        path: 'loginadmin',
        element: <LoginAdmin />,
      },
      {
        path: 'userdashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <UserDetails />,
            loader: userdetailsloader,
          },
          {
            path: 'loanapply',
            element: <LoanApply />,
          },
          {
            path: 'transactionhistory',
            element: <TransactionHistory />,
            loader: transactionloader,
          },
          {
            path: 'fundtransfer',
            element: <FundTransfer />,
          },
          {
            path: 'payloan',
            element: <PayLoan />,
          },
          {
            path: 'loanhistory',
            element: <LoanHistory />,
          },
        ],
      },
    ],
  },
]);
export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
