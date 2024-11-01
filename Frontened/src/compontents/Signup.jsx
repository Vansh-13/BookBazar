import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    console.log(data);
  };

  return (
    <div className='flex h-screen items-center justify-center border-2'>
      <div className="modal-box p-7 h-120">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <h3 className="font-bold text-lg">Signup</h3>
          <br />
          <label htmlFor="name">Name</label>
          <br />
          <input 
            type='text' 
            id="name" 
            placeholder='Enter your name...' 
            className='input input-bordered w-full' 
            {...register('name', { required: true })} 
          />
          {errors.name && <span className="text-red-700">Name is required</span>}
          <br /><br />

          <label htmlFor="email">Email</label>
          <br />
          <input 
            type='email' 
            id="email" 
            placeholder='Enter your email...' 
            className='input input-bordered w-full' 
            {...register('email', { required: true })} 
          />
          {errors.email && <span className="text-red-700">Email is required</span>}
          <br /><br />

          <label htmlFor="password">Password</label>
          <br />
          <input 
            type='password' 
            id="password" 
            placeholder='Enter your password...' 
            className='input input-bordered w-full' 
            {...register('password', { required: true })} 
          />
          {errors.password && <span className="text-red-700">Password is required</span>}
          <br /><br />

          <div className='flex-row md:flex justify-between'>
            <button type="submit" className="btn w-35 bg-blue-600 text-white rounded-md p-3">Signup</button>
            <p className='m-3 p-2'>Have an account? <Link to='/' className='text-blue-700 font-semibold underline'>Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
