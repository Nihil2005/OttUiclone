import React from 'react';
import MovieData from './Data/MovieData';

const Movies = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-6'>
        {MovieData.map(({ id, url, title }) => (
          <div key={id} className='p-2'>
            <img src={url} alt={title} className=' rounded-xl hover:scale-125' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
