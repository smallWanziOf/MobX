import React,{ Component } from 'react';

export default class Test extends Component{
  constructor(props){
    super(props)
    this.state={
      author:'TangJianGuo',
    }
  }

  handleClick(){
    this.props.handleClick();
  }

  componentWillReceiveProps(props){
    console.log(props.store)
  }

  render(){
    return (
      <div onClick={this.handleClick.bind(this)}>The author is {this.state.author}</div>
    )
  }
}