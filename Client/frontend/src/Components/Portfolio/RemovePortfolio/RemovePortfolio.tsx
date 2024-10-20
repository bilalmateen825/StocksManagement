import React from 'react'

interface Props {
    stock : string;
    removeStockFromPortfolio: (e:any) => void;
}

const RemovePortfolio = (props: Props) => {
  return (
    <form onSubmit={props.removeStockFromPortfolio}>
        <input hidden={true} readOnly={true} value={props.stock}/>
        <button type="submit">X</button>
    </form>
  )
}

export default RemovePortfolio