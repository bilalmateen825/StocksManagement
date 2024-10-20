import React from 'react'
import RemovePortfolio from '../RemovePortfolio/RemovePortfolio';

interface Props {
  stock : string;
  removeStockFromPortfolio : (e:any)=> void;
}

const StocksPortfolio = (props: Props) => {
  return (
    <div>
      {props.stock}
      <RemovePortfolio stock={props.stock} removeStockFromPortfolio={props.removeStockFromPortfolio}></RemovePortfolio>
    </div>
  )
}

export default StocksPortfolio