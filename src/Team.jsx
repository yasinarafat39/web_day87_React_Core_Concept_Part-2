import { useState } from "react"

export default function Team(){

    const [teamCount, setTeamCount] = useState(11)

    const handleAdd = () => {
        setTeamCount(teamCount + 1);
    }

    const handleRemove = () => {
        setTeamCount(teamCount - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
 
    return (
        <div style={teamStyle}>
            <h3>Players: {teamCount}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}