import { observable } from 'mobx'

class Store {
  @observable handleRender = true

  @observable data ={
    timerData:{
      name:'tang',
      age:12
    },
    timeArr:[1,2,3]
  }
  constructor() {
    /*this.queryAge();
    this.queryName();
    this.setAge();
    this.setName();
    this.queryArr();
    this.setArr();*/
  }
  queryAge = ()=> {
    return this.data.timerData.age;
  }

  queryName = (name) => {
    return this.data.timerData.name;
  }

  setAge = (age) => {
    this.data.timerData.age = age;
  }

  setName = (name) => {
    this.data.timerData.name = name;
  }

  queryArr = () => {
    return this.data.timeArr.toString();
  }

  setArr = (arr) => {
    this.data.timeArr=arr
  }
}

export default new Store()