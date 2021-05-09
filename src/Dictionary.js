import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response){
    console.log(response.data[0])
    //console.log(response.data[0].meaning[0].definitions[0].definition)
    setResults(response.data[0])
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dicitonaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
      </form>
      <Results results={results}/>
    </div>
  );
}