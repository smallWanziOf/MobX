import {observer} from "mobx-react";
import {observable,action} from "mobx";
import React,{Component} from 'react';
import {render} from 'react-dom';
import OriginalReact from './OriginalReact';
/**
 * 引入独立的JS文件测试Store数据是否可同步更新
 * import Store from './Store';
 * import Test from './Test';
 */

//本地Store使用方法
var Store = observable({
  handleRender:true,
  data:{
    timerData:{
      name:'tang',
      age:12
    },
    timeArr:[1,2,3]
  },

  get queryAge(){//查询data.timerData的age属性
    return this.data.timerData.age;
  },

  get queryName(){//查询data.timerData的name属性
    return this.data.timerData.name;
  },

  setAge: action(function(age) {//设置data.timerData的age属性
    this.data.timerData.age = age;
  }),

  setName: action(function(name){//设置data.timerData的name属性
    this.data.timerData.name = name;
  }),

  get queryArr(){//设置data.timeArr属性
    return this.data.timeArr.toString();
  },

  setArr: action(function(arr){//设置data.timeArr属性
    this.data.timeArr=arr
  })
});

// 用于测试本地Store的组件
@observer class TestLocalStore extends React.Component {

  handleClick(){
    Store.setAge(parseInt(Math.random()*100))
  }

  render() {
    return (
      <div>
        <span>Seconds passed: { Store.queryAge } </span> 
        <button onClick={this.handleClick}>不要点我</button>
      </div>
    )
  }
};

/*
// 用于测试外部引入的Strore
@observer class OutStore1 extends React.Component{

  handleClick(e){
    Store.setName(e.target.value);
  }

  render(){
    return (
      <div>
        你是谁: <input onChange={e=>this.handleClick(e)} /> 
      </div>
    )
  }
}

@observer class OutStore2 extends React.Component{

  handleClick(){
    var a = parseInt(Math.random()*10);
    var b = parseInt(Math.random()*10);
    var c = parseInt(Math.random()*10);
    Store.setArr([a,b,c])
  }

  render(){
    return (
      <div>
      改变数组成员: { Store.queryArr() } 
      <button onClick={this.handleClick}>可以点我了</button>
      </div>
    )
  }
}


@observer class ShowResult extends React.Component{

  render(){
    return (
      <div>
        <hr/>
        <h2>COPY @ShowData</h2>
        <div>年龄：{Store.queryAge()}</div>
        <div>我的名字：{Store.queryName()}</div>
        <div>显示数组成员：{Store.queryArr()}</div>
      </div>
    )
  }
}
*/

export default class MainMobx extends Component{
  render(){
    console.log(Store)
    return (
      <div>
        <OriginalReact/>
        <TestLocalStore/>
        {
        /**
         * 测试本地文件使用本地的Store是否可以更新
         * <TestLocalStore/>
         */
        /**
         * 测试本地文件引入外部Store是否可以同步更新
         * <OutStore1/>
         * <OutStore2/>
         * <ShowResult/>
         * <hr/>
         */
        /**
         * 测试其他文件同时引用外部Store是否同意可以及时更新
         *  <Test/>
         */
        }
      </div>
    )
  }
}

