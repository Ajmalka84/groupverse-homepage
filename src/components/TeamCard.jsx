import React from 'react';

function TeamCard({ name, img }) {
  return (
    <div className='w-44 h-48 border-2 border-gray-200 rounded-xl p-3 flex flex-col items-center font-semibold overflow-hidden gap-3 flex-shrink-0 '>
      <h3 className='overflow-hidden whitespace-nowrap'>{name}</h3>
      <img
        src={img === '' ? './images/logo.png' : `./teams/${img}`}
        alt=''
        className='w-20 rounded-lg'
      />
      <button className='bg-orange-600 text-white font-semibold w-20 h-8 rounded-lg'>
        Join
      </button>
    </div>
  );
}

export default TeamCard;
