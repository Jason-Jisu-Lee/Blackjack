import React, { Fragment, useEffect, useState } from "react";
import cardGenerator from "../utils/cardGenerator";

function Dealer({ playing }) {
  const [dealer, setDealer] = useState([]);

  useEffect(() => {
    while (dealer.length < 2) {
      const generate = setTimeout(() => {
        setDealer((prevState) => [...prevState, cardGenerator()]);
      }, 3000);
      return () => generate;
    }
  }, [dealer]);

  const dealerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{dealer[0]}</div>
        <div className="col-2">{dealer[1]}</div>
      </div>
    </div>
  );

  // If the player is playing, deal hands to the dealer
  if (playing) {
  }

  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
    </Fragment>
  );
}

export default Dealer;
