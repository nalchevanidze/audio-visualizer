import React from "react";
import CircleSoundForm from "./RadialMath/CircleSoundForm";
import axios from "axios";

export default class WaveForm extends React.Component {
    constructor(props){ super(props);
        this.state ={
            form:[]};
    }

    getWaveJson (){
        let {cx,cy, r1, r2, map } = this.props;
        this.state.map = map ;
        axios.get(map).then(({data})=>{
          
            this.setState({form: CircleSoundForm(data, { 
                cx,
                cy , 
                c:(r2+r1)/2, 
                w: r2-r1 
            })});  
        }

        );
    }
    componentWillReceiveProps(p){
        if(p.map !== this.state.map){
            this.getWaveJson();
        }
    }
    componentWillMount(){
        this.getWaveJson();
    }
    render(){ return(<path d={this.state.form} className="prime" /> );}
}
