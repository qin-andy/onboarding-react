import { useState } from "react";

function CounterDisplay(props) {
    const { count } = props;

    if (count >= 10) {
        return (
            <h1>YOU WIN!</h1>
        );
    }

    if (count <= -10) {
        return (
            <h1>YOU LOSE!</h1>
        );
    }

    return (
        <>
            <h1>I'M A DONUT! {count}</h1>
        </>
    );
}

export default CounterDisplay;
