import React, { useState } from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import TeamMemberForm from "./components/TeamMemberForm";
import TeamMemberItem from "./components/TeamMemberItem";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
        id: 1,
        title: "Tate Keller Moctezuma"
    }
]);
const addNewTeamMember = teamMember => {
    const newTeamMember = {
        id: Date.now(),
        title: teamMember.title
    };
    setTeamMembers([...teamMembers, newTeamMember])
};
return (
    <div className="App">
        <h1>The Team!</h1>
        <TeamMemberForm addNewTeamMember={addNewTeamMember} />
        <TeamMemberItem teamMembers={teamMembers}/>
    </div>
)
}

export default App;
