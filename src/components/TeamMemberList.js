import React, { useState } from "react";

const TeamMemberForm = props => {
    const [teamMember, setTeamMember] = useState({
        name: '',

    })

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
        console.log(teamMember);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(teamMember)
        setTeamMember({name: ''})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Team Member Name</label>
            <input id="name" type="text" name="title" onChange={handleChanges} placeholder="name" value={teamMember.title} />
        </form>
    )
};

export default TeamMemberForm;