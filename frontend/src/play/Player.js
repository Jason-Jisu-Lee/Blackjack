import React, { Fragment } from "react";

function Player({ playing, player }) {

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
