import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react'; 
import 'whatwg-fetch';
import NProgress from 'nprogress';

export default class Demo extends Component{
  constructor(props){
    super(props);
    this.state={
      option:false,
      optionData:null,
      dataSource:4545454,
    }
  }

  componentWillMount(){
    this.handleFetch();
  }

  handleFetch(){
    NProgress.start();
    var me = this;
    fetch('/nodeServer/data.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(json){
      me.setState({
        option:true,
        optionData:json
      })
    })
  }

  componentDidMount(){
    setTimeout(()=>{NProgress.done()},1000)
    //console.log('componentDidMount')
    //console.log(document.getElementsByClassName("haha").length)
  }

  componentWillUpdate(){
    //this.handleFetch();
    //console.log(23123)
  }

  componentDidUpdate(){
    //NProgress.done();
  }

  handleTrigger(){
    this.setState({
      dataSource:Math.random()*100
    })
  }

  getOption(){
    return {
      title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data:(()=>{
            var res=[];
            Object.keys(this.state.optionData).forEach(item=>{
              res.push(item)
            });
            return res;
          })(),
      },
      series : [
        {
          name: '蜡笔小新',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:(()=>{
            var res=[];
            Object.keys(this.state.optionData).forEach(item=>{
              res.push({value:this.state.optionData[item],name:item})
            });
            return res;
          })(),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
  render(){
    return(
      this.state.option?
      <div>
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
      :
      <div></div>
    )
  }
}
