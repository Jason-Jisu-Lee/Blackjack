import React, { Fragment, useState, useEffect } from "react";

function Dealer({ playing, dealer }) {
  const [sum, setSum] = useState(0);

  const dealerHand = (
    <div className="container">
      <div>Dealer</div>
      <div className="row justify-content-center">
        <div className="col-2">{dealer[1]}</div>
        <div className="col-2">{dealer[2]}</div>
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
    };
  }, [dealer]);

  return (
    <Fragment>
      <div>{playing ? dealerHand : "Dealer"}</div>
      <div>{sum === 0 ? null : sum}</div>
    </Fragment>
  );
}

export default Dealer;
