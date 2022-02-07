import React, { Fragment, useEffect, useState } from "react";
import cardGenerator from "../utils/cardGenerator";

function Dealer({ playing }) {
  const [dealer, setDealer] = useState([]);

  // If the player is playing, deal hands to the dealer
  useEffect(() => {
    if (playing) {
      while (dealer.length < 2) {
        const generate = setTimeout(() => {
          setDealer((prevState) => [...prevState, cardGenerator()]);
        }, 2000);
        return () => generate;
      }
    }
  }, [dealer, playing]);

  const dealerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{dealer[0]}</div>
        <div className="col-2">{dealer[1]}</div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
    </Fragment>
  );
}

export default Dealer;
