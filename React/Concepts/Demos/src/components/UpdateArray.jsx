import React, { useState } from 'react'

const UpdateArray = () => {

    const [playersId, setPlayersId] = useState(["harry", "rohan", "neethu", "jessi"])

    const addPlayer = () => {
        setPlayersId([...playersId, "tom", "rossy", "reena"])
    }

    const removePlayer = () => {
        setPlayersId(playersId.filter((player) => player !== "neethu"))
    }

    const updatePlayer = () => {
        setPlayersId(playersId.map((player) => player === "harry" ? "harry king": player ))
    }

  return (
    <div>
      <h1>Gaming frineds List</h1>
      {
        playersId.map((player) => (
          <h3 key={player}>{player}</h3>
        ))
      }
      <button onClick={addPlayer}>Add Player</button>
      <button onClick={removePlayer}>Remove Player</button>
      <button onClick={updatePlayer}>Update Player</button>
    </div>
  )
}

export default UpdateArray;
