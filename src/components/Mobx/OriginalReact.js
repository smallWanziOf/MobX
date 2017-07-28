import React,{Component} from 'react';

let Store = 0;

export default class OriginalReact extends Component{
  constructor(props){
    super(props);
    this.state={
      attr:['Tang','我在哪？','我要干嘛？'],
      name:'',
    }
  }

  handleClickStore(){
    Store++
    console.log(Store)
  }

  handleClickName(){
    var index = Math.floor(Math.random()*3);
    this.setState({
      name:this.state.attr[index]
    })
  }

  render(){
    return(
      <div>
        <h2>测试React使用本地数据</h2>
        <p>Store:{Store}</p>
        <p>我是谁？{this.state.name}</p>
        <button onClick={::this.handleClickStore}>点我加Store</button>
        <button onClick={::this.handleClickName}>点我加改变我是谁</button>
      </div>
    )
  }
}