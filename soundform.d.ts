import * as React from "react";

export interface SoundformProps {
    url: string;
    color?:string, 
    stepSize?: number;
    strokeWidth:number;
    height?: number;
    width?: number;
}

export default class Soundform
    extends React.Component<SoundformProps, {}> {

}