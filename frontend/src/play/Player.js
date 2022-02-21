import React, { Fragment, useState, useEffect } from "react";

function Player({ playing, player }) {
  const [sum, setSum] = useState(0);

  const playerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{player[0]}</div>
        <div className="col-2">{player[1]}</div>
      </div>
    </div>
  );

  useEffect(() => {
    for (let i = 0; i < player.length; i++) {
      if ((player[i] === "A")) {
        setSum(sum + 11);
      } else if (isNaN(player[i])) {
        setSum(sum + 10);
      } else {
        setSum(sum + player[i]);
      }
    }
  }, [player]);

  return (
    <Fragment>
      <div>{playing ? playerHand : "Player"}</div>
      <div>{sum}</div>
    </Fragment>
  );
}

export default Player;
