import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-12 bg-surface p-8 border border-gray-700 rounded-md">
      <h2 className="text-3xl font-bold uppercase mb-6 text-white text-center">Login</h2>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-400 uppercase">Username</label>
          <input type="text" className="bg-black border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:border-accent" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-400 uppercase">Password</label>
          <input type="password" className="bg-black border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:border-accent" />
        </div>
        <button type="submit" className="bg-accent hover:bg-accent-hover text-white font-bold uppercase rounded-md py-3 mt-4 transition-colors">
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-400">
        Don't have an account? <Link to="/register" className="text-accent hover:text-accent-hover font-bold">Register here</Link>
      </div>
    </div>
  );
}
