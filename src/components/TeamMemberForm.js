import React, { useState } from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        title: '',
        body: '',
        role: ''

    })

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        console.log(teamMember);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(teamMember)
        setTeamMember({title: '', body: '', role: ''})
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

            <label htmlFor="email">Email</label>
            <input 
            id="email" 
            name="body" 
            onChange={handleChanges}
            value={teamMember.body}/>

            <label htmlFor="role">Role</label>
            <textarea 
            id="role" 
            name="role" 
            onChange={handleChanges}
            value={teamMember.role}/>

            <button type="submit"> Add A Team Member! </button>
        </form>
    )
};

export default TeamMemberForm;