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
  RegisterCustomer,
  ApproveLoans,
  CloseAccounts,
  PayLoanAdmin,
  Deposit,
  Withdraw,
  CreateAdmin,
  CreateAccount,
  AdminLoanHistory,
} from './pages';
import DashboardLayout from './pages/DashboardLayout';
import LoanHistory from './pages/LoanHistory';
import { action as loginAction } from './pages/LoginUser';
import { action as adminloginAction } from './pages/LoginAdmin';
import { action as fundtransferAction } from './pages/FundTransfer';
import { loader as transactionloader } from './pages/TransactionHistory';
import { action as createadminAction } from './pages/CreateAdmin';
import { action as closeaccountAction } from './pages/CloseAccounts';
import { loader as loanhistoryloader } from './pages/LoanHistory';
import { loader as adminloanhistoryloader } from './pages/AdminLoanHistory';
import { loader as userdetailsloader } from './pages/UserDetails';
import { loader as loanapproveloader } from './pages/ApproveLoans';
import AdminDetails, {
  loader as admindetailsloader,
} from './pages/AdminDetails';
import AdminDashboardLayout from './pages/AdminDashboardLayout';
export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', !isDarkTheme);
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
        action: adminloginAction,
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
            action: fundtransferAction,
          },
          {
            path: 'userpayloan',
            element: <PayLoan />,
          },
          {
            path: 'loanhistory',
            element: <LoanHistory />,
            loader: loanhistoryloader,
          },
        ],
      },
      {
        path: 'admindashboard',
        element: <AdminDashboardLayout />,
        children: [
          {
            index: true,
            element: <AdminDetails />,
            loader: admindetailsloader,
          },
          {
            path: 'registercustomer',
            element: <RegisterCustomer />,
          },
          {
            path: 'createaccount',
            element: <CreateAccount />,
          },
          {
            path: 'createadmin',
            element: <CreateAdmin />,
            action: createadminAction,
          },
          {
            path: 'approveloans',
            element: <ApproveLoans />,
            loader: loanapproveloader,
          },
          {
            path: 'adminloanhistory',
            element: <AdminLoanHistory />,
            loader: adminloanhistoryloader,
          },
          {
            path: 'closeaccounts',
            element: <CloseAccounts />,
            action: closeaccountAction,
          },
          {
            path: 'payloan-admin',
            element: <PayLoanAdmin />,
          },
          {
            path: 'deposit',
            element: <Deposit />,
          },
          {
            path: 'withdraw',
            element: <Withdraw />,
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
