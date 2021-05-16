import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null)

  function handleDictionaryResponse(response){
    //console.log(response.data[0])
    //console.log(response.data[0].meaning[0].definitions[0].definition)
    setResults(response.data[0])
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos)
  }

  function search(){
    //documentation: https://dicitonaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f91700001000001bd74a32418964d9c9511084a095e82c4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=15`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded (true);
    search();
  }

  if (loaded) {
      return (
        <div className="Dictionary">
          <section>
            <h1>What are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
          </form>
          <div className="hint">
            Suggested words: sunset, wine, yoga, forest ...
          </div>
          </section>
          <Results results={results}/>
          <Photos photos={photos}/>
        </div>
      );
    } else {
       load();
       return "Loading..."
    }
  

  
}