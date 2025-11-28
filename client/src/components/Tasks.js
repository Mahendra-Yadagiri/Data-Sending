import React from 'react'
import TopNavigation from './TopNavigation'
import { useSelector } from 'react-redux';

function Tasks() {
     let userDetails = useSelector((store)=>{
    return store.userDetails

  });

  return (
    <div>
        <TopNavigation></TopNavigation>
      <h1>Tasks</h1>

     <h1>{userDetails.firstName} {userDetails.lastName}</h1>
      <img 
  src={`https://data-sending-3.onrender.com/${userDetails.profilePic}`} 
  alt=""
/>
<img src={`/${userDetails.profilePic}`} alt= ''></img>

    </div>
  )
}

export default Tasks
