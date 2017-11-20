import * as React from "react";

export interface SoundformProps {
    url: string;
    steps?: number[];
    height?: number;
    width?: number;
    fill?: string;
}

export default class Soundform
    extends React.Component<SoundformProps, {}> {

}