import React, { Fragment, useEffect, useState } from "react";
import cardGenerator from "../utils/cardGenerator";

function Player({ playing }) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    while (player.length < 2) {
      const generate = setTimeout(() => {
        setPlayer((prevState) => [...prevState, cardGenerator()]);
      }, 1000);
      return () => generate;
    }
  }, [player]);

  const playerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{player[0]}</div>
        <div className="col-2">{player[1]}</div>
      </div>
    </div>
  );

  // If the player is playing, deal hands to the player
  if (playing) {
  }

  return (
    <Fragment>
      <div>{playing ? playerHand : "Player"}</div>
    </Fragment>
  );
}

export default Player;
