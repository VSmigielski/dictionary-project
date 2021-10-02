import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        console.log(response);
        // console.log(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        // console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        // console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = 
        "563492ad6f9170000100000104a75a35d24c4c0a8213cb4f7237853a";
        
        let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

        axios
        .get(pexelsApiUrl, {headers: {Authorization: `Bearer ${pexelsApiKey}`}})
        .then(handlePexelsResponse);
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
        <h2>What word would you like to look up?</h2>
        <input type="search" autoFocus={true} 
        onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
    </form>
    <div className="Hint">
        suggested words: sunset, wine, beach, plant
    </div>
    </div>
    <Results results={results} />
    <Photos photos={photos} />
    </div>
    );
    } else {
        load();
        return "Loading...";
    }
}

export default Dictionary