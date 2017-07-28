import React,{Component} from 'react';
export default class Redux extends Component{
  constructor(props){
    super(props);
    this.state = {
      showNum:[],
      handleFilter:false,
    }
  }
  componentWillMount(){
    this.setState({
      showNum:this.props.Store
    })
  }
  componentWillReceiveProps(props){
    this.setState({
      showNum:props.Store
    })
  }
  showFilter(){
    this.setState({
      handleFilter:!this.state.handleFilter
    },()=>{
      this.props.handleFilter(this.props.Store.ChangeNum)
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.showFilter.bind(this)}>{this.state.handleFilter?'继续添加':'显示大于0的值'}</button>
        <button disabled={this.state.handleFilter} onClick={()=>{this.props.handleAdd()}}>随机增加一个-50至50的值</button>
        <button disabled={this.state.handleFilter} onClick={()=>{this.props.handleClear()}}>清空所有值</button>
        <ul>
          {
            this.state.handleFilter?
            this.state.showNum.MoreThanZero.map((item,i)=>{
              return <li key={i}>{item}</li>  
            })
            :
            this.state.showNum.ChangeNum.map((item,i)=>{
              return <li key={i}>{item}</li>  
            })
          }
        </ul>
      </div>
    )
  }
} 