import React, { Fragment, useState } from "react";

function Dealer({ playing, dealer }) {
  const [blackjack, setBlackjack] = useState(false)

  if(dealer[0] + dealer[1] === 21) {
    setBlackjack(true)
  }

  const dealerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{dealer[0]}</div>
        <div className="col-2">{dealer[1]}</div>
      </div>
    </div>
  );

  if(blackjack) {
    return (
      <Fragment>
        <div>The Dealer has BlackJack. Unfortunate.</div>
      </Fragment>
    )
  } else {
  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
    </Fragment>
  )}
}

export default Dealer;
