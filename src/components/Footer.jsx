import React from 'react'

function Footer() {
  return (
    <div className='w-full flex items-center justify-between bg-pink-500 p-3 fixed bottom-0 left-0'>
        <div className='flex items-center gap-2 text-lg text-white font-semibold'>
            <img className='w-6' src="./postsymbols/add.png" alt="" />
            <h1>Create Post</h1>
        </div>
        <h1 className='text-white text-lg font-bold'>My teams</h1>
        <div className='flex items-center gap-2 text-lg text-white font-semibold'>
            <img className='w-6' src="./postsymbols/add.png" alt="" />
            <h1>Create Team</h1>
        </div>
    </div>
  )
}

export default Footer