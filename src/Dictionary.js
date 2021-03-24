import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        // console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        // console.log(event.target.value);
        setKeyword(event.target.value); 
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
    <div className="Dictionary">
    <div className="Input-area">
    <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} 
        onChange={handleKeywordChange} />
    </form>
    <div className="Hint">
        suggested words: sunset, wine, beach, plant
    </div>
    </div>
    <Results results={results} />
    </div>
    );
    } else {
        load();
        return "Loading...";
    }
}