import * as React from "react";
import { ComponentClass, ReactElement } from "react";

interface Parameters {
    cx: number,
    cy: number,
    r1: number,
    r2: number,
    r3: number,
    r4: number
}

interface AudioVisualizerProps {
    par: Parameters,
    src: string,
    play: boolean,
}

export default class AudioVisualizer 
    extends React.Component<AudioVisualizerProps,{}> { 

}