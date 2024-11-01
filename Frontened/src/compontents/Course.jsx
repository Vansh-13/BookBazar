import React from 'react';
import Cards from './Cards';
import list from "/public/list.json";
import { Link } from 'react-router-dom';

function Course() {
  return (
    <div className='mt-20 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          Welcome to Your Learning Adventure! <span className='text-red-900'>Let’s Explore!</span> :)
        </h1>
        
        <p className='mt-4 text-gray-700 md:text-lg text-center max-w-xl mx-auto'>
          Discover a world of knowledge with our diverse range of courses. 
          Whether you want to advance your career or pursue a passion, 
          we’ve got you covered!
        </p>
        <Link to="/">
          <button className='mt-6 bg-green-600 text-white rounded-md px-6 py-2 hover:bg-green-900 transition duration-200'>
            Explore Courses
          </button>
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {list.map((item) => (
          <div className="flex justify-center" key={item.id}> 
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
