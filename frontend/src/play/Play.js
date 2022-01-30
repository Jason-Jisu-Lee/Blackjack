import React, { useState, useEffect } from "react";
import Player from "./Player";
import Dealer from "./Dealer";
import "./play.css"

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

  useEffect(() => {

  }, playing)

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

  const inactive = (
    <div>
      <button onClick={() => setPlaying(true)}>Bet</button>
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
    <div>
			<Dealer />
			<Player />
      <div>Bet Amount: {betAmount.amount}</div>
      {playing === true ? active : inactive}
    </div>
  );
}

export default Play;
