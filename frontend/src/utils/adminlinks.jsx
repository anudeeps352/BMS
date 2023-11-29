import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const adminlinks = [
  {
    text: 'Admin Details',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'Register Customer',
    path: 'registercustomer',
    icon: <MdQueryStats />,
  },
  {
    text: 'Close Accounts',
    path: 'closeaccounts',
    icon: <ImProfile />,
  },
  {
    text: 'PayLoan',
    path: 'payloan-admin',
    icon: <ImProfile />,
  },
  {
    text: 'Loan Approve',
    path: 'approveloans',
    icon: <MdAdminPanelSettings />,
  },
  {
    text: 'Withdraw',
    path: 'withdraw',
    icon: <MdAdminPanelSettings />,
  },
  {
    text: 'Deposit',
    path: 'deposit',
    icon: <MdAdminPanelSettings />,
  },
];

export default adminlinks;
