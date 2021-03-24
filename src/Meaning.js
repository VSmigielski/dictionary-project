import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
 return (
 <div className="Meaning">
     <div className="card mt-3 rounded">
         <div className="card-body">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index) 
    {
        return (
            <div key={index}>
                <p>
                    <strong>Definition:</strong> {definition.definition}
                <br />
                    <strong>Example:</strong> <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} />
            </div>     
        );
    })}
    </div>
    </div>
 </div>
 );
}