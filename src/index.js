import React,{Component} from 'react';
import {render} from 'react-dom';
import {Provider } from 'react-redux';
import { createStore } from 'redux'
import Redux from './components/Redux/Redux';
import Demo from './components/Echarts/Demo';
import Reducer from './components/Redux/reducer/Reducer';
import MainMobX from './components/Mobx/MainMobX';
//import ReactFlexRouter from './components/ReactFlexRouter/ReactFlexRouter';
import './style.less';



/**
*Redux数据渲染
let store = createStore(Reducer);

class Main extends Component{

  render(){
    return (
      <Provider store={store}>
        <Redux/>
      </Provider>
    )
  }
}
*/
class Main extends Component{

  render(){
    return (
      <div>
        <Demo/>
        <MainMobX/>
      </div>
    )
  }
}



render(<Main/>,document.getElementById('app'))






