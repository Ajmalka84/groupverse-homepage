import React from 'react';
import { teams , users } from '../datas/teams';
import TeamList from './TeamList';
import './style.css';

function Top({user}) {
  return (
    
    <div className='h-80 overflow-y-auto  overflow-hidden hide-scrollbar'>
        {!user ? teams.map((team)=>{
                return <TeamList key={team.id} img={team.img} name={team.name} />
            }) : 
            users.map((user)=>{
                return <TeamList key={user.id} img={user.img} name={user.name} userstat />
            })
         }
    </div>
  )
}

export default Top