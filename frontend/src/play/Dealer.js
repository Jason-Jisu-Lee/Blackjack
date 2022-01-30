import React, { Fragment } from "react";
import cardGenerator from "../utils/cardGenerator";

function Dealer({ playing }) {
  // const [dealer, setDealer] = useState(null);

  const dealerArray = [];
  if (playing) {
    dealerArray.push(cardGenerator());
    dealerArray.push(cardGenerator());
  }

  return (
    <Fragment>
      <div>{playing ? dealerArray : "dealer"}</div>
    </Fragment>
  );
}

export default Dealer;
