import React from "react";

const TeamMemberItem = props => { 
    console.log(props);
  return (
    <div className="team-list">
      {props.teamMembers.map(teamMember => (
         
        <div className="note" key={teamMember.id}>
         <h2>{teamMember.title}</h2>
         <p>{teamMember.body}</p>
         <p>{teamMember.role}</p>
        </div>
      ))} 
      
    </div>
   
  );
};

export default TeamMemberItem;