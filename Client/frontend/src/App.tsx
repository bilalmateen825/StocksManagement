import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { searchCompanies } from "./api";
import { CompanySearch } from "./Components/companies";
import PortfolioCollection from "./Components/Portfolio/Collection/PortfolioCollection";
import { stringify } from "querystring";
function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioCollection,setPortfolioCollection] = useState<string[]>([]);
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {    
    setSearch(e.target.value);
    console.log("onChange: ", e.target);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();// Prevents the default form submission behavior (page reload)
    const result = await searchCompanies(search);
    
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    console.log("button pressed: ", e.target);
  };

  const addStockToPortfolio= (e:any)=>{
    e.preventDefault();

    const stockExists= portfolioCollection.find((value) => value === e.target[0].value);

    if(stockExists)
      return;

    const updatedPortfolioList = [...portfolioCollection, e.target[0].value];
    setPortfolioCollection(updatedPortfolioList);
    console.log("Stock Added to Portfolio");
  }

  const removeStockFromPortfolio=(e:any)=>{

    e.preventDefault();

    const stocksToBeRemoved = portfolioCollection.filter((value)=>{
      if(value !== e.target[0].value)
        return value;
    });    

    setPortfolioCollection(stocksToBeRemoved);
    console.log("Stock Removed from Portfolio");
  }

  return (
    <div className="App">
      <Search handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} search={search} />
      <PortfolioCollection removeStockFromPortfolio={removeStockFromPortfolio} PortfolioCollection={portfolioCollection} />
      <CardList searchResult={searchResult} addStockToPortfolio={addStockToPortfolio}/>
    </div>
  );
}

export default App;
