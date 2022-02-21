import React, { Fragment, useState, useEffect } from "react";

function Player({ playing, player }) {
  const [sum, setSum] = useState(0);

  const playerHand = (
    <div className="container">
      <div>Player</div>
      <div className="row justify-content-center">
        <div className="col-2">{player[1]}</div>
        <div className="col-2">{player[2]}</div>
      </div>
    </div>
  );

  useEffect(() => {
    setSum(0);
    for (let i = 0; i < player.length; i++) {
      if (player[i] === "A") {
        setSum((s) => s + 11);
      } else if (isNaN(player[i])) {
        setSum((s) => s + 10);
      } else {
        setSum((s) => s + player[i]);
      }
    }
  }, [player, playing]);

  return (
    <Fragment>
      <div>{playing ? playerHand : "Player"}</div>
      <div>{sum === 0 ? null : sum}</div>
    </Fragment>
  );
}

export default Player;
