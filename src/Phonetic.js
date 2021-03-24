import React from "react";

export default function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="Phonetic">
                <a className="btn btn-secondary" href={props.phonetic.audio} target="_blank">
                    Listen
                </a>
                <br />
                {props.phonetic.text}
            </div>
        );
    }
    return null;
}