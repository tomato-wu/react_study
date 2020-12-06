import React from 'react';

//App.js就是定义了一个react组件
class App extends React.Component {

constructor(props){   //组件构造函数，就是App组件被创建的一瞬间就会执行
  super(props);  //初始化不用管
  this.state = {
    list:[],
    inputValue:''   //输入的值
  }
}
  handleClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''   //inputValue输入框在点击add之后清空
    })
  }
  render() {
    return (
      // jsx语法
      <div>
        <div>
          <div>
            <input/>
            <button onClick={this.handleClick.bind(this)}>add</button>
          </div>
          <ul>
            {
              this.state.list.map((item,index)=>{
              return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;   //导出app组件