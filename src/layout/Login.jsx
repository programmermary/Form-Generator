import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaApple } from 'react-icons/fa';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* القسم اليسار */}
      <div className="w-1/2 bg-[#7050EF] flex flex-col justify-center items-start p-12 text-white">
        <div className="bg-gray-300 rounded-full w-16 h-16 mb-4"></div>
        <h1 className="text-3xl font-bold">Hello,</h1>
        <h2 className="text-3xl font-bold">Welcome back!</h2>
      </div>

      {/* القسم اليمين */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12">
        <h2 className="text-2xl font-semibold" style={{ color: '#7050EF' }}>
          Welcome back!
        </h2>

        <div className="w-80 mt-4 space-y-3">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#7050EF' }} />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-2xl border focus:outline-none focus:border-[#7050EF]"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: '#7050EF' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 pl-10 pr-10 rounded-2xl border focus:outline-none focus:border-[#7050EF]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              style={{ color: '#7050EF' }}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
        </div>

        <div className="w-80 flex justify-end mt-2">
          <a href="#" className="text-[#7050EF] text-sm no-underline" style={{ color: '#7050EF', textDecoration: 'none' }}>
            Forget Password?
          </a>
        </div>

        <button className="bg-[#7050EF] text-white rounded-2xl w-80 p-3 mt-3 hover:bg-[#6040DF] focus:outline-none focus:ring-2 focus:ring-[#7050EF]">
          Login
        </button>

        <div className="mt-4 text-gray-500">Or login with</div>

        <div className="flex space-x-4 mt-3">
          <button className="flex items-center justify-center rounded-full border p-3 w-14 h-14 hover:border-[#7050EF]">
            <FcGoogle size={24} />
          </button>
          <button className="flex items-center justify-center rounded-full border p-3 w-14 h-14 hover:border-[#7050EF]">
            <FaApple size={24} />
          </button>
        </div>

        <div className="flex flex-row items-center mt-3 space-x-2">
          <p className="text-gray-600">Don't Have an Account?</p>
          <a href="#" className="text-[#7050EF] font-semibold mb-3" style={{ color: '#7050EF', textDecoration: 'none' }}>
            Join us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
