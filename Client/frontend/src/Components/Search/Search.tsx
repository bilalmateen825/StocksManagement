import React, { ChangeEvent, SyntheticEvent, useState } from "react";

interface Props {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
}

const Search: React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <>
       <form onSubmit={props.onSearchSubmit}>         
        <input
          value={props.search}
          onChange={(e) => {
            props.handleSearchChange(e);
          }}
        ></input>       
       </form> 
    </>
  );
};

export default Search;
