import { ComponentClass } from "react";

export interface SoundformProps {
    url: string;
    steps?: number[];
    height?: number;
    width?: number;
    fill?: string;
}

export default class AudioVisualizer
    extends React.Component<AudioVisualizerProps, {}> {

}