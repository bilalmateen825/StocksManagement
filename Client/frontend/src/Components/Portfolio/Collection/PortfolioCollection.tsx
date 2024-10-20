import React from 'react'
import RemovePortfolio from '../RemovePortfolio/RemovePortfolio';
import StocksPortfolio from '../StocksPortfolio/StocksPortfolio';

interface Props {
    PortfolioCollection: string[];
    removeStockFromPortfolio: (e:any) => void;
}

const PortfolioCollection = (props: Props) => {
  return (
    <div>{props.PortfolioCollection.length > 0 && props.PortfolioCollection.map((stock)=>{
       return <StocksPortfolio stock={stock} removeStockFromPortfolio={props.removeStockFromPortfolio}></StocksPortfolio>
    })}</div>

  )
}

export default PortfolioCollection