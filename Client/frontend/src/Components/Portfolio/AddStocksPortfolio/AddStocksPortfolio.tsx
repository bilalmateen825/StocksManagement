import React, { SyntheticEvent } from "react";

interface Props {
  symbol: string;
  addStockToPortfolio: (e: SyntheticEvent) => void;
}

const AddStocksPortfolio = (props: Props) => {
  return (
    <form onSubmit={props.addStockToPortfolio}>
      <input readOnly={true} hidden={true} value={props.symbol} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStocksPortfolio;
