import React,{Component} from 'react';

export default class Redux extends Component{
  constructor(props){
    super(props);
    this.state={
      name:null,
    }
  }

  componentWillMount(){
    console.log('componentWillMount')
    this.setState({name:{tang:'jianguo'}})
  }

  componentDidMount(){

  }

  componentWillReceiveProps(props){
    ////console.log(this)
  }

  render(){
    console.log('render')
    return (
      <div>
        {this.state.name.tang}
      </div>
    )
  }
} 