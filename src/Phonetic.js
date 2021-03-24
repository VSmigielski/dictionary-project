import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="Phonetic d-inline">
                <a className="btn btn-secondary" rel="noreferrer" href={props.phonetic.audio} target="_blank">
                    Listen
                </a>
                <br />
                <div className="text">
                {props.phonetic.text}
                </div>
            </div>
        );
    }
    return null;
}