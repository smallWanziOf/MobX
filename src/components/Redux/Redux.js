import React,{Component} from 'react';
import CTShowNum from './containers/CTShowNum';
import CTOther from './containers/CTOther';

export default class Redux extends Component{
  render(){
    return(
      <div>
        <CTShowNum />
        <CTOther />
      </div>
    )
  }
}

