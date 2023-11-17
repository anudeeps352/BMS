import React, { useState } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useNavigation, Form, useNavigate, redirect } from 'react-router-dom';
import axios from 'axios';

export const action = async ({ request }) => {
  console.log('entered');

  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const resp = await axios.post('http://localhost:5000/api/userlogin', data);
    console.log('try');
    toast.success('Login Successful');
    return redirect('/userdashboard');
  } catch (error) {
    toast.error('error');
    console.log(error.response.data);
    return error;
  }
};

const LoginUser = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className=" h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 invisible md:visible bg-gradient-to-tr from-cyan-500 to-blue-500 justify-around items-center ">
        <div>
          <h1 className="text-white font-bold text-9xl font-sans">BMS</h1>
          <p className="text-white mt-1 text-4xl">Bank Management System</p>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center  bg-white ">
        <Form method="post" className="bg-white ">
          <h1 className="text-gray-800 font-bold text-6xl mb-3 ">
            Welcome User
          </h1>
          <p class="text-base font-normal text-gray-600 mb-7">
            Enter Credentials
          </p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name="UserID"
              id="UserID"
              placeholder="UserID"
              required
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="Password"
              name="Password"
              id="Password"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            class="block w-full bg-cyan-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 transition-all hover:bg-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in' : 'Log In'}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default LoginUser;
