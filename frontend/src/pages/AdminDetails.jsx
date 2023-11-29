import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AccountsContainer } from '../components';
import { AdminStats } from '../components';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  const adminid = localStorage.getItem('AdminID');
  const data = { AdminID: adminid };
  try {
    const Admindetails = await customFetch.get('/admindetails', {
      params: data,
    });
    return Admindetails.data;
  } catch (error) {
    return error.response.data;
  }
};

const AdminDetails = () => {
  const { Admindetails } = useLoaderData();

  return (
    <>
      <AdminStats Admindetails={Admindetails} />
    </>
  );
};

export default AdminDetails;
