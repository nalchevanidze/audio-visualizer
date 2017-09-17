import React from "react";
import ReactDOM from "react-dom";
import AudioVisualizer from "./src";
ReactDOM.render(
    <AudioVisualizer
        src={"/resource/david-alpha-reborn-work-in-progress"}
        par={{
            cx: 100,
            cy: 100,
            r1: 30,
            r2: 80,
            r3: 90,
            r4: 100
        }}
        play={true}
    />,
    document.getElementById("page")
);

