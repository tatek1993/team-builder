import React from "react";

const TeamMemberItem = props => {
  return (
    <div className="team-list">
      {props.teamMembers.map(teamMember => (
        <div className="note" key={teamMember.id}>
          <h2>{teamMember.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default TeamMemberItem;