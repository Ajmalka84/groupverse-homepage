import React from 'react'
import { teams , feedPosts } from "../datas/teams";
import TeamCard from './TeamCard';
import Post from './Post';
import './style.css';

function Feeds() {
  return (
    <div className='w-1/3 h-[calc(100vh-5vh)] overflow-auto space-y-7 hide-scrollbar z-0'>
        <h3 className='text-xl font-bold text-center'
        >Recommended Team</h3>
        <div className='flex p-3 overflow-x-auto gap-2 hide-scrollbar border-x-2 border-slate-600 rounded-lg'>
            {
               teams.map((team)=>{
                  return <TeamCard key={team.id} name={team.name} img={team.img} />
               })
            }
        </div>
        <div className='space-y-3'>
            <h1 className='text-2xl font-bold text-center' >Feed Posts</h1>
            <div className='px-12 py-5 space-y-4'>
              {
                feedPosts.map((post)=>{
                  return <Post key={post.id} userimg={post.user.img} username={post.user.name} teamimg={post.team.img} teamname={post.team.name} title={post.title} img={post.postimg} />
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Feeds