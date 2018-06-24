import * as React from "react";
import { render } from "react-dom";
import AudioVisualizer from "./src";
import Soundform from "./soundform";

render(
    <div>
        <AudioVisualizer
            src={"/david-alpha-reborn-work-in-progress"}
            par={{
                cx: 100,
                cy: 100,
                r1: 30,
                r2: 80,
                r3: 90,
                r4: 100
            }}
            play={true}
        />
        <Soundform 
            url={"/david-alpha-reborn-work-in-progress"} 
            stepSize={3}
            color={"red"}
            strokeWidth={0.2}
        />
    </div>,
    document.getElementById("page")
);