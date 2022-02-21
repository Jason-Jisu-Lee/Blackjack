import React, { Fragment, useState, useEffect, useRef } from "react";

function Player({ playing, player }) {
  const playerHand = (
    <div className="container">
      <div>Player</div>
      <div className="row justify-content-center">
        <div className="col-2">{player[0]}</div>
        <div className="col-2">{player[1]}</div>
      </div>
    </div>
  );

  const sum = useRef(0);

  useEffect(() => {
      for (let i = 0; i < player.length; i++) {
        if (player[i] === "A") {
          sum.current += 11;
        } else if (isNaN(player[i])) {
          sum.current += 10;
        } else {
          sum.current += player[i];
        }
      }
  }, [player]);

  return (
    <Fragment>
      <div>{playing ? playerHand : "Player"}</div>
      <div>{sum.current === 0 ? null : sum.current}</div>
    </Fragment>
  );
}

export default Player;
