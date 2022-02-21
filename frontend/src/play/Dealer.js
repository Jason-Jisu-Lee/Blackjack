import React, { Fragment, useState, useEffect } from "react";

function Dealer({ playing, dealer }) {
  const [sum, setSum] = useState(0);

  const dealerHand = (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-2">{dealer[0]}</div>
        <div className="col-2">{dealer[1]}</div>
      </div>
    </div>
  );

  useEffect(() => {
    for (let i = 0; i < dealer.length; i++) {
      if ((dealer[i] === "A")) {
        setSum(sum + 11);
      } else if (isNaN(dealer[i])) {
        setSum(sum + 10);
      } else {
        setSum(sum + dealer[i]);
      }
    }
  }, [dealer]);

  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
      <div>{sum}</div>
    </Fragment>
  );
}

export default Dealer;
