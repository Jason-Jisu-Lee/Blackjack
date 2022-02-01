import React, { Fragment, useState } from "react";
import Player from "./Player";
import Dealer from "./Dealer";

function Play() {
  const [playing, setPlaying] = useState(false);
  const [betAmount, setBetAmount] = useState({
    amount: 1,
  });

  const hitHandler = (event) => {
    return null;
  };
  const standHandler = (event) => {
    return null;
  };

  const active = (
    <div>
      <button onClick={hitHandler}>Hit</button>
      <button onClick={standHandler}>Stand</button>
    </div>
  );

  const betAmountHandler = (event) => {
    setBetAmount(({ amount }) => ({
      amount: amount + parseInt(event.target.value),
    }));
  };

  const playHandler = (event) => {
    setPlaying(true);
  };

  const inactive = (
    <div>
      <button onClick={playHandler}>Bet</button>
      <button onClick={betAmountHandler} value="1">
        1
      </button>
      <button onClick={betAmountHandler} value="5">
        5
      </button>
      <button onClick={betAmountHandler} value="20">
        20
      </button>
    </div>
  );

  return (
    <Fragment>
      <h4>BLACKJACK PAYS 3 TO 2</h4>
      <div>
        <Dealer playing={playing} />
      </div>
      <div>
        <Player playing={playing} />
      </div>
      <div>Bet Amount: {betAmount.amount}</div>
      {playing === true ? active : inactive}
    </Fragment>
  );
}

export default Play;
