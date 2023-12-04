import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { RiAdminFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { MdPayments } from 'react-icons/md';
import { FaListCheck } from 'react-icons/fa6';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';

const adminlinks = [
  {
    text: 'Admin Details',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'Register Customer',
    path: 'registercustomer',
    icon: <IoIosCreate />,
  },
  {
    text: 'PayLoan',
    path: 'payloan-admin',
    icon: <MdPayments />,
  },
  {
    text: 'Loan Approve',
    path: 'approveloans',
    icon: <FaListCheck />,
  },
  {
    text: 'Withdraw',
    path: 'withdraw',
    icon: <RiMoneyDollarBoxFill />,
  },
  {
    text: 'Deposit',
    path: 'deposit',
    icon: <RiLuggageDepositFill />,
  },

  {
    text: 'Create Admin',
    path: 'createadmin',
    icon: <RiAdminFill />,
  },

  {
    text: 'Close Accounts',
    path: 'closeaccounts',
    icon: <MdDelete />,
  },
];

export default adminlinks;
