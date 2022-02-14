import React, { Fragment, useState, useEffect } from "react";
import Player from "./Player";
import Dealer from "./Dealer";
import cardGenerator from "../utils/cardGenerator";
import "./Play.css";

function Play() {
  const [playing, setPlaying] = useState(false);
  const [betAmount, setBetAmount] = useState({
    amount: 1,
  });
  const [dealer, setDealer] = useState([]);
  const [player, setPlayer] = useState([]);
  const [cash, setCash] = useState({
    amount: 100,


  });


/**
 * 
 *  If 'playing' is true,
 *  deal Cards to the dealerand the player
 * 
 */
// Deal cards to the dealer
  useEffect(() => {
    if (playing) {
      while (dealer.length < 2) {
        const generate = setTimeout(() => {
          setDealer((prevState) => [...prevState, cardGenerator()]);
        }, 1200) // Deal each card after a delay to allow the animation to complete
        return () => generate;
      }
    }
  }, [dealer, playing]);
// Deal cards to the player
  useEffect(() => {
    if (playing) {
      while (player.length < 2) {
        const generate = setTimeout(() => {
          setPlayer((prevState) => [...prevState, cardGenerator()]);
        }, 1200) // Deal each card after a delay to allow the animation to complete
        return () => generate;
      }
    }
  }, [player, playing]);


  // IMPLEMENT HIT/STAND BUTTONS
  const hitHandler = (event) => {
    return null;
  };
  const standHandler = (event) => {
    return null;
  };

  // Set the bet amount
  const betAmountHandler = (event) => {
    setBetAmount(({ amount }) => ({
      amount: amount + parseInt(event.target.value),
    }));
  };
  // set 'playing' to true if the user makes the bet
  const playHandler = (event) => {
    setPlaying(true);
  };

  /**
   * Display "active" or "inactive" depending on whether the player is playing.
   *
   * For "active," Display "Hit" and "Stand" button after
   * the player makes the bet.
   * For "inactive," display "Bet" button and buttons to raise
   * the bet amount when the player is not playing
   */
  const active = (
    <div>
      <button onClick={hitHandler}>Hit</button>
      <button onClick={standHandler}>Stand</button>
    </div>
  );
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
        <div className="container mb-3 pt-5">
          <div className="row">
            <div className="col-4">Cash in my pocket: {cash.amount}</div>
            <h5 className="col-4">BLACKJACK PAYS 3 TO 2</h5>
          </div>
        </div>
        <div className="remark">How lucky are you feeling today?</div>
        <div>
          <Dealer playing={playing} dealer={dealer}/>
        </div>
        <div className="player">
          <Player playing={playing} player={player}/>
        </div>
        <div>Bet Amount: {betAmount.amount}</div>
        {playing === true ? active : inactive}
    </Fragment>
  );
}

export default Play;
