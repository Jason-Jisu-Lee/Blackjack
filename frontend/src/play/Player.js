import React, { Fragment, useEffect, useState } from "react";
import cardGenerator from "../utils/cardGenerator";

function Player({ playing }) {
  const [player, setPlayer] = useState([]);

  // If the player is playing, deal cards to the player
  useEffect(() => {
    if (playing) {
      while (player.length < 2) {
        const generate = setTimeout(() => {
          setPlayer((prevState) => [...prevState, cardGenerator()]);
        }, 2000) // Deal each card after a delay to allow any animation to complete
        return () => generate;
      }
    }
  }, [player, playing]);

  const playerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{player[0]}</div>
        <div className="col-2">{player[1]}</div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div>{playing ? playerHand : "Player"}</div>
    </Fragment>
  );
}

export default Player;
