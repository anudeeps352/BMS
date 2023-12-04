import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaHistory } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import { AiFillFund } from 'react-icons/ai';
import { BiTransferAlt } from 'react-icons/bi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { VscRequestChanges } from 'react-icons/vsc';

const links = [
  {
    text: 'User Details',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'Fund Transfer',
    path: 'fundtransfer',
    icon: <BiTransferAlt />,
  },
  {
    text: 'Transaction History',
    path: 'transactionhistory',
    icon: <AiFillFund />,
  },

  {
    text: 'Loan Apply',
    path: 'loanapply',
    icon: <VscRequestChanges />,
  },
  {
    text: 'PayLoan',
    path: 'userpayloan',
    icon: <MdPayments />,
  },
  {
    text: 'Loan History',
    path: 'loanhistory',
    icon: <MdQueryStats />,
  },
];

export default links;
