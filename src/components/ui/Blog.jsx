import React from 'react';
import { blogpage } from '../../data';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-white font-[sans-serif]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-start'>
          <h2 className='text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4  after:bg-pink-400 after:rounded-full'>
            LATEST Posts
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto'>
          {blogpage?.map((data, i) => (
            <div key={i} onClick={()=>navigate('/blog-detail',{state:data})} className='bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group'>
              <img
                src={data?.image}
                alt='Blog Post 1'
                className='w-full h-96 object-cover'
              />
              <div className='p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90'>
                <span className='text-sm block text-gray-600 mb-2'>
                  10 FEB 2023 | BY JOHN DOE
                </span>
                <h3 className='text-xl font-bold text-[#333]'>{data?.title}</h3>
                <div className='h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300'>
                  <p className='text-gray-600 text-sm'>{data?.introduction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
