import React, { Fragment, useState, useEffect } from "react";

function Dealer({ playing, dealer }) {
  const [sum, setSum] = useState(0);

  // Maps dealer's card array
const currentHand = dealer.map((card, key) => <div key={key} className="col-2">{card}</div>).slice(1)

  // Dealer's hand
  const dealerHand = (
    <div className="container">
      <div>Dealer</div>
      <div className="row justify-content-center">
        {currentHand}
      </div>
    </div>
  );

  useEffect(() => {
    setSum(0);
    for (let i = 0; i < dealer.length; i++) {
      if (dealer[i] === "A") {
        setSum((s) => s + 11);
      } else if (isNaN(dealer[i])) {
        setSum((s) => s + 10);
      } else {
        setSum((s) => s + dealer[i]);
      }
    }
  }, [dealer, playing]);

  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
      <div>{sum === 0 ? null : sum}</div>
    </Fragment>
  );
}

export default Dealer;
