import React from 'react';
import '../styles/teams.css'
import { teamData } from '../data';

const Team = () => {
  return (
    <>
      <div id="page2">
        <p>Our Team</p>
        <div id="team">
            {
                teamData.map(item=>(
                    <div id="members">
                        <img src={item.image} alt="image"/>
                        <p>{item.name}</p>
                        <p>{item.designation}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Team