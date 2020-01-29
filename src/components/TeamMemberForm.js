import React, { useState } from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        title: '',

    })

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        console.log(teamMember);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(teamMember)
        setTeamMember({title: ''})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Team Member Name: </label>
            <input id="name" 
            type="text" 
            name="title" 
            onChange={handleChanges} 
            placeholder="Enter Name Here" 
            value={teamMember.title} />
            <button type="submit"> Add A Team Member! </button>
        </form>
    )
};

export default TeamMemberForm;