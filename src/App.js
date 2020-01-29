import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMemberList from "./components/TeamMemberList";
import TeamMemberItem from "./components/TeamMemberItem";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
        id: 1,
        name: "Tate Keller Moctezuma"
    }
]);
const addNewTeamMember = teamMember => {
    const newTeamMember = {
        id: Date.now(),
        name: teamMember.name
    };
    setTeamMembers([...teamMembers, newTeamMember])
};
return (
    <div className="App">
        <h1>The Team!</h1>
        <TeamMemberList addNewTeamMember={addNewTeamMember} />
        <TeamMemberItem teamMembers={teamMembers}/>
    </div>
)
}

export default App;
