import {observer} from "mobx-react";
import React,{Component} from 'react';
import Store from './Store';

@observer export default class Test extends Component{
  render(){
    return (
      <div>
        <hr/>
        <h2>引入独立的JS文件----数据同步更新</h2>
        <div>我是来自火星的JS：{Store.queryAge()}</div>
        <div>我是来自火星的JS：{Store.queryName()}</div>
        <div>我是来自火星的JS：{Store.queryArr()}</div>
      </div>
    )
  }
}