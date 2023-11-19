import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'User Details',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'Transaction History',
    path: 'transactionhistory',
    icon: <MdQueryStats />,
  },
  {
    text: 'Loan History',
    path: 'loanhistory',
    icon: <MdQueryStats />,
  },
  {
    text: 'Fund Transfer',
    path: 'fundtransfer',
    icon: <ImProfile />,
  },
  {
    text: 'PayLoan',
    path: 'payloan',
    icon: <ImProfile />,
  },
  {
    text: 'Loan Apply',
    path: 'loanapply',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
