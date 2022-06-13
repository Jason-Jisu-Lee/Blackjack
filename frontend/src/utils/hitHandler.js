import cardGenerator from "./cardGenerator";

export default function hitHandler({setPlayer}) {
    setPlayer((prevState) => [...prevState, cardGenerator()]);
  };