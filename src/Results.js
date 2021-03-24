import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results mt-3">
                <section>
                <div className="row">
                <div className="col-sm-6">
                <h2>{props.results.word}</h2>
                </div>
                <div className="col-sm-6">
                {props.results.phonetics.map(function(phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                })}
                </div>
                </div>
                </section>
                {props.results.meanings.map(function(meaning, index) {

                    return <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>;
                })}
            </div>
        )
    } else {
        return null;
    }   
}