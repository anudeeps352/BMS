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
import { action as loginAction } from './pages/LoginUser';

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
          },
          {
            path: 'loanapply',
            element: <LoanApply />,
          },
          {
            path: 'transactionhistory',
            element: <TransactionHistory />,
          },
          {
            path: 'fundtransfer',
            element: <FundTransfer />,
          },
          {
            path: 'payloan',
            element: <PayLoan />,
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
