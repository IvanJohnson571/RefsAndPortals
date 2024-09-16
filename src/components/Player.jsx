import { useState } from "react";
import { useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enteredPLayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPLayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" style={{ marginRight: '20px' }} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
