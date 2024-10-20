import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../companies";
import { v4 as uuidv4} from "uuid";

interface Props {
  searchResult: CompanySearch[];
  addStockToPortfolio : (e: SyntheticEvent) => void;
}

const CardList = (props: Props) => {
  return (    
    <div>      
      {props.searchResult.length > 0 ? (
        props.searchResult.map((result) => {
          return <Card Id={result.symbol} key={uuidv4()} CompanyInformation={result} addStockToPortfolio={props.addStockToPortfolio}/>;
        })
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
};

export default CardList;
